#!/usr/bin/env python3
"""
Build assistant.json from SKILL.md + skill.yaml

Eliminates manual sync between SKILL.md and assistant.json by
auto-generating OpenAI Assistants config from the source of truth.

Usage:
    python tools/build_assistant_json.py                     # Build all
    python tools/build_assistant_json.py boss.micromanager   # Build one
"""

import json
import re
import sys
from pathlib import Path

try:
    import yaml
    HAS_YAML = True
except ImportError:
    HAS_YAML = False
    print("⚠ PyYAML required. Install: pip install pyyaml")
    sys.exit(1)


REPO_ROOT = Path(__file__).parent.parent
SKILLS_DIR = REPO_ROOT / "skills"


def extract_section(content: str, heading: str) -> str:
    """Extract content under a specific ## heading."""
    pattern = rf"^##\s+{re.escape(heading)}\s*\n(.*?)(?=\n##\s|\Z)"
    match = re.search(pattern, content, re.MULTILINE | re.DOTALL)
    return match.group(1).strip() if match else ""


def extract_prompt_template(content: str) -> str:
    """Extract the prompt template code block from SKILL.md."""
    # Look for code block under Prompt Template section
    section = extract_section(content, "Prompt Template")
    if not section:
        return ""
    # Extract from code fence
    match = re.search(r"```\n?(.*?)```", section, re.DOTALL)
    return match.group(1).strip() if match else section


def extract_anti_patterns(content: str) -> str:
    """Extract anti-patterns as safety instructions."""
    section = extract_section(content, "Anti-Patterns")
    if not section:
        # Try alternate heading
        for alt in ["Anti-Patterns (What This Persona Does NOT Do)", "Red Lines"]:
            section = extract_section(content, alt)
            if section:
                break
    return section


def build_instructions(skill_md_content: str, persona_section: str, prompt_template: str, anti_patterns: str) -> str:
    """Compose the full instructions field for OpenAI Assistants."""
    parts = []

    if prompt_template:
        parts.append(prompt_template)
    elif persona_section:
        parts.append(persona_section)

    if anti_patterns:
        parts.append(f"\nSAFETY BOUNDARIES:\n{anti_patterns}")

    return "\n\n".join(parts)


def build_assistant_config(skill_dir: Path) -> dict:
    """Build assistant.json from skill.yaml + SKILL.en.md."""
    yaml_path = skill_dir / "skill.yaml"
    skill_md_path = skill_dir / "SKILL.en.md"

    if not yaml_path.exists() or not skill_md_path.exists():
        return None

    # Load metadata
    with open(yaml_path, encoding="utf-8") as f:
        meta = yaml.safe_load(f)

    # Load SKILL.md
    content = skill_md_path.read_text(encoding="utf-8")

    # Extract sections
    persona = extract_section(content, "Persona")
    prompt_template = extract_prompt_template(content)
    anti_patterns = extract_anti_patterns(content)

    # Build instructions
    instructions = build_instructions(content, persona, prompt_template, anti_patterns)

    config = {
        "$schema": "https://github.com/user/boss-skills/blob/main/schema/assistant.schema.json",
        "_comment": f"Auto-generated from SKILL.en.md — do not edit manually. Run: python tools/build_assistant_json.py {meta['id']}",
        "name": meta["name"]["en"],
        "model": "gpt-4o",
        "instructions": instructions,
        "tools": [],
        "metadata": {
            "boss_skill_id": meta["id"],
            "boss_skill_version": meta["version"],
            "tone_style": meta["tone"]["style"],
            "annoyance_level": meta["tone"]["annoyance"]
        }
    }

    return config


def main():
    if len(sys.argv) > 1:
        skill_names = sys.argv[1:]
        skill_dirs = [SKILLS_DIR / name for name in skill_names]
    else:
        skill_dirs = sorted([d for d in SKILLS_DIR.iterdir() if d.is_dir() and d.name.startswith("boss.")])

    if not skill_dirs:
        print("⚠ No skills found")
        sys.exit(1)

    for skill_dir in skill_dirs:
        if not skill_dir.exists():
            print(f"⚠ Skill not found: {skill_dir.name}")
            continue

        config = build_assistant_config(skill_dir)
        if config is None:
            print(f"⚠ Skipping {skill_dir.name}: missing skill.yaml or SKILL.en.md")
            continue

        out_path = skill_dir / "assistant.json"
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(config, f, indent=2, ensure_ascii=False)

        print(f"✅ {skill_dir.name} → assistant.json")

    print("\n🎉 Done!")


if __name__ == "__main__":
    main()
