#!/usr/bin/env python3
"""
Boss Skills Validator

Validates all skills in the skills/ directory against the schema
and structural requirements defined in docs/skill-spec.md.

Usage:
    python tools/validate_skills.py              # Validate all skills
    python tools/validate_skills.py boss.micromanager  # Validate one skill
"""

import json
import sys
import re
from pathlib import Path
from typing import List, Tuple

# Try to import yaml; fall back to basic parsing if not available
try:
    import yaml
    HAS_YAML = True
except ImportError:
    HAS_YAML = False

# Try to import jsonschema for full validation
try:
    import jsonschema
    HAS_JSONSCHEMA = True
except ImportError:
    HAS_JSONSCHEMA = False


REPO_ROOT = Path(__file__).parent.parent
SKILLS_DIR = REPO_ROOT / "skills"
SCHEMA_PATH = REPO_ROOT / "schema" / "skill.schema.json"

REQUIRED_YAML_FIELDS = [
    "id", "name", "version", "category", "tags",
    "tone", "safety", "locales", "inputs", "outputs"
]

REQUIRED_SKILL_MD_SECTIONS = [
    "Persona", "Core Behavior", "Communication Style",
    "Typical Lines", "Inputs", "Outputs", "Anti-Patterns",
    "Prompt Template", "Example"
]

# Chinese equivalents for zh-CN validation
REQUIRED_SKILL_MD_SECTIONS_ZH = [
    "人设", "核心行为", "沟通风格",
    "经典台词", "输入", "输出", "红线",
    "Prompt 模板", "示例"
]

ID_PATTERN = re.compile(r"^boss\.[a-z][a-z0-9-]*$")


class ValidationError:
    def __init__(self, skill_id: str, file: str, message: str):
        self.skill_id = skill_id
        self.file = file
        self.message = message

    def __str__(self):
        return f"  [{self.file}] {self.message}"


def parse_yaml_basic(content: str) -> dict:
    """Basic YAML frontmatter parser when PyYAML is not available."""
    result = {}
    for line in content.split("\n"):
        line = line.strip()
        if ":" in line and not line.startswith("-") and not line.startswith("#"):
            key, _, value = line.partition(":")
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if value:
                result[key] = value
    return result


def load_yaml(path: Path) -> dict:
    """Load a YAML file."""
    content = path.read_text(encoding="utf-8")
    if HAS_YAML:
        return yaml.safe_load(content)
    return parse_yaml_basic(content)


def extract_frontmatter(content: str) -> str:
    """Extract YAML frontmatter from a markdown file."""
    if not content.startswith("---"):
        return ""
    end = content.find("---", 3)
    if end == -1:
        return ""
    return content[3:end].strip()


def validate_outputs_fields(skill_dir: Path, data: dict) -> List[ValidationError]:
    """Validate that outputs include required standard fields."""
    errors = []
    skill_id = skill_dir.name
    outputs = data.get("outputs", [])

    if not isinstance(outputs, list):
        return errors

    output_names = {item.get("name") for item in outputs if isinstance(item, dict)}
    required_fields = {"message", "follow_up", "hidden_insight"}
    missing_fields = required_fields - output_names

    if missing_fields:
        errors.append(ValidationError(
            skill_id, "skill.yaml",
            f"Missing required output fields: {', '.join(sorted(missing_fields))}"
        ))

    return errors


def validate_skill_yaml(skill_dir: Path) -> List[ValidationError]:
    """Validate skill.yaml file."""
    errors = []
    skill_id = skill_dir.name
    yaml_path = skill_dir / "skill.yaml"

    if not yaml_path.exists():
        errors.append(ValidationError(skill_id, "skill.yaml", "File not found"))
        return errors

    try:
        data = load_yaml(yaml_path)
    except Exception as e:
        errors.append(ValidationError(skill_id, "skill.yaml", f"Parse error: {e}"))
        return errors

    if data is None:
        errors.append(ValidationError(skill_id, "skill.yaml", "File is empty"))
        return errors

    # Check required fields
    for field in REQUIRED_YAML_FIELDS:
        if field not in data:
            errors.append(ValidationError(skill_id, "skill.yaml", f"Missing required field: {field}"))

    # Validate ID format
    if "id" in data:
        if not ID_PATTERN.match(str(data["id"])):
            errors.append(ValidationError(skill_id, "skill.yaml", f"Invalid ID format: '{data['id']}' (must match boss.<kebab-case>)"))
        if str(data["id"]) != skill_id:
            errors.append(ValidationError(skill_id, "skill.yaml", f"ID '{data['id']}' does not match directory name '{skill_id}'"))

    # Validate name has at least 'en'
    if "name" in data and isinstance(data["name"], dict):
        if "en" not in data["name"]:
            errors.append(ValidationError(skill_id, "skill.yaml", "name.en is required"))

    # Validate version format
    if "version" in data:
        if not re.match(r"^\d+\.\d+\.\d+$", str(data["version"])):
            errors.append(ValidationError(skill_id, "skill.yaml", f"Invalid version format: '{data['version']}'"))

    # Validate tone fields
    if "tone" in data and isinstance(data["tone"], dict):
        valid_styles = ["satirical", "absurdist", "dry-humor", "passive-aggressive"]
        valid_realism = ["low", "medium", "high", "painfully-high"]
        valid_annoyance = ["mild", "moderate", "high", "soul-crushing"]

        if data["tone"].get("style") not in valid_styles:
            errors.append(ValidationError(skill_id, "skill.yaml", f"Invalid tone.style: '{data['tone'].get('style')}'"))
        if data["tone"].get("realism") not in valid_realism:
            errors.append(ValidationError(skill_id, "skill.yaml", f"Invalid tone.realism: '{data['tone'].get('realism')}'"))
        if data["tone"].get("annoyance") not in valid_annoyance:
            errors.append(ValidationError(skill_id, "skill.yaml", f"Invalid tone.annoyance: '{data['tone'].get('annoyance')}'"))

    # Validate safety fields
    if "safety" in data and isinstance(data["safety"], dict):
        if data["safety"].get("fictionalized") is not True:
            errors.append(ValidationError(skill_id, "skill.yaml", "safety.fictionalized must be true"))
        if data["safety"].get("no_real_person_targeting") is not True:
            errors.append(ValidationError(skill_id, "skill.yaml", "safety.no_real_person_targeting must be true"))

    # Validate outputs include required standard fields
    errors.extend(validate_outputs_fields(skill_dir, data))

    # JSON Schema validation if available
    if HAS_JSONSCHEMA and SCHEMA_PATH.exists():
        try:
            schema = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
            jsonschema.validate(instance=data, schema=schema)
        except jsonschema.ValidationError as e:
            errors.append(ValidationError(skill_id, "skill.yaml", f"Schema validation: {e.message}"))

    return errors


def validate_skill_md(skill_dir: Path, locale: str = "en") -> List[ValidationError]:
    """Validate a SKILL.{locale}.md file."""
    errors = []
    skill_id = skill_dir.name
    md_path = skill_dir / f"SKILL.{locale}.md"

    if not md_path.exists():
        errors.append(ValidationError(skill_id, f"SKILL.{locale}.md", "File not found"))
        return errors

    content = md_path.read_text(encoding="utf-8")

    # Check frontmatter exists
    if not content.startswith("---"):
        errors.append(ValidationError(skill_id, f"SKILL.{locale}.md", "Missing YAML frontmatter"))
    else:
        fm = extract_frontmatter(content)
        if not fm:
            errors.append(ValidationError(skill_id, f"SKILL.{locale}.md", "Empty or malformed frontmatter"))
        else:
            if "name:" not in fm:
                errors.append(ValidationError(skill_id, f"SKILL.{locale}.md", "Frontmatter missing 'name' field"))
            if "description:" not in fm and "description: >" not in fm:
                errors.append(ValidationError(skill_id, f"SKILL.{locale}.md", "Frontmatter missing 'description' field"))

    # Check required sections
    sections = REQUIRED_SKILL_MD_SECTIONS if locale == "en" else REQUIRED_SKILL_MD_SECTIONS_ZH
    for section in sections:
        # Check for ## or # heading with the section name
        pattern = rf"^#{{1,3}}\s+.*{re.escape(section)}"
        if not re.search(pattern, content, re.MULTILINE | re.IGNORECASE):
            errors.append(ValidationError(skill_id, f"SKILL.{locale}.md", f"Missing required section: '{section}'"))

    # Check minimum content length (a real skill should have substance)
    if len(content) < 1000:
        errors.append(ValidationError(skill_id, f"SKILL.{locale}.md", "Content too short (< 1000 chars) — skill needs more detail"))

    return errors


def validate_examples(skill_dir: Path, locale: str = "en") -> List[ValidationError]:
    """Validate examples file."""
    errors = []
    skill_id = skill_dir.name
    examples_path = skill_dir / "examples" / f"examples.{locale}.md"

    if not examples_path.exists():
        errors.append(ValidationError(skill_id, f"examples.{locale}.md", "File not found"))
        return errors

    content = examples_path.read_text(encoding="utf-8")

    # Count examples (look for ## Example headings)
    example_count = len(re.findall(r"^##\s+(?:Example|示例)\s+\d+", content, re.MULTILINE))
    if example_count < 3:
        errors.append(ValidationError(skill_id, f"examples.{locale}.md", f"Only {example_count} examples found (minimum 3 required)"))

    # Check for required output fields in examples
    for field in ["message", "follow_up", "hidden_insight"]:
        if f"**{field}" not in content and f"**{field}：**" not in content:
            errors.append(ValidationError(skill_id, f"examples.{locale}.md", f"Missing output field in examples: '{field}'"))

    return errors


def validate_file_references(skill_dir: Path, data: dict) -> List[ValidationError]:
    """Validate that files declared in skill.yaml actually exist."""
    errors = []
    skill_id = skill_dir.name
    files = data.get("files", {})

    for file_type, locale_map in files.items():
        if not isinstance(locale_map, dict):
            continue
        for locale, file_path in locale_map.items():
            full_path = skill_dir / file_path
            if not full_path.exists():
                errors.append(ValidationError(
                    skill_id, "skill.yaml",
                    f"files.{file_type}.{locale} references '{file_path}' but file does not exist"
                ))

    return errors


def validate_locale_consistency(skill_dir: Path, data: dict) -> List[ValidationError]:
    """Validate that all declared locales have matching files and consistent example counts."""
    errors = []
    skill_id = skill_dir.name
    locales = data.get("locales", ["en"])

    # Check that each locale has a SKILL.md and examples file
    for locale in locales:
        skill_md = skill_dir / f"SKILL.{locale}.md"
        if not skill_md.exists():
            errors.append(ValidationError(
                skill_id, "cross-file",
                f"Locale '{locale}' declared in skill.yaml but SKILL.{locale}.md is missing"
            ))

        examples_md = skill_dir / "examples" / f"examples.{locale}.md"
        if not examples_md.exists():
            errors.append(ValidationError(
                skill_id, "cross-file",
                f"Locale '{locale}' declared in skill.yaml but examples/examples.{locale}.md is missing"
            ))

    # Check example count consistency across locales
    example_counts = {}
    for locale in locales:
        examples_path = skill_dir / "examples" / f"examples.{locale}.md"
        if examples_path.exists():
            content = examples_path.read_text(encoding="utf-8")
            count = len(re.findall(r"^##\s+(?:Example|示例)\s+\d+", content, re.MULTILINE))
            example_counts[locale] = count

    if len(set(example_counts.values())) > 1:
        counts_str = ", ".join(f"{loc}={cnt}" for loc, cnt in example_counts.items())
        errors.append(ValidationError(
            skill_id, "cross-file",
            f"Example counts differ across locales: {counts_str}"
        ))

    return errors


def validate_skill(skill_dir: Path) -> List[ValidationError]:
    """Validate a complete skill directory."""
    errors = []

    # Validate skill.yaml
    errors.extend(validate_skill_yaml(skill_dir))

    # Load metadata for cross-file checks
    yaml_path = skill_dir / "skill.yaml"
    locales = ["en"]
    data = {}
    if yaml_path.exists():
        try:
            data = load_yaml(yaml_path) or {}
            if "locales" in data:
                locales = data["locales"]
        except Exception:
            pass

    # Cross-file validation
    if data:
        errors.extend(validate_file_references(skill_dir, data))
        errors.extend(validate_locale_consistency(skill_dir, data))

    # Validate SKILL.md for each locale
    for locale in locales:
        errors.extend(validate_skill_md(skill_dir, locale))

    # Validate examples for each locale
    for locale in locales:
        errors.extend(validate_examples(skill_dir, locale))

    return errors


def main():
    # Determine which skills to validate
    if len(sys.argv) > 1:
        skill_names = sys.argv[1:]
        skill_dirs = []
        for name in skill_names:
            d = SKILLS_DIR / name
            if d.exists():
                skill_dirs.append(d)
            else:
                print(f"⚠ Skill directory not found: {name}")
    else:
        if not SKILLS_DIR.exists():
            print("⚠ No skills/ directory found")
            sys.exit(1)
        skill_dirs = sorted([d for d in SKILLS_DIR.iterdir() if d.is_dir() and d.name.startswith("boss.")])

    if not skill_dirs:
        print("⚠ No skills found to validate")
        sys.exit(1)

    total_errors = 0
    total_skills = len(skill_dirs)

    print(f"\n🔍 Validating {total_skills} skill(s)...\n")

    for skill_dir in skill_dirs:
        errors = validate_skill(skill_dir)
        if errors:
            print(f"❌ {skill_dir.name}")
            for error in errors:
                print(f"  {error}")
            print()
            total_errors += len(errors)
        else:
            print(f"✅ {skill_dir.name}")

    print(f"\n{'─' * 40}")
    print(f"Skills: {total_skills}  |  Errors: {total_errors}")

    if not HAS_YAML:
        print("\n⚠ PyYAML not installed — using basic parser. Install with: pip install pyyaml")
    if not HAS_JSONSCHEMA:
        print("⚠ jsonschema not installed — skipping schema validation. Install with: pip install jsonschema")

    if total_errors > 0:
        print(f"\n💥 Validation failed with {total_errors} error(s)")
        sys.exit(1)
    else:
        print("\n🎉 All skills validated successfully!")
        sys.exit(0)


if __name__ == "__main__":
    main()
