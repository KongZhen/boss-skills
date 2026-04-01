#!/usr/bin/env python3
"""
Boss Skill Scaffolding Tool

Creates a new boss skill directory with all required files
pre-populated from templates.

Usage:
    python tools/create_skill.py boss.passive-aggressive
    python tools/create_skill.py boss.flip-flopper --locales en,zh-CN,ja
    python tools/create_skill.py boss.meeting-addict --name-en "Meeting Addict" --name-zh "会议狂魔"
"""

import argparse
import re
import sys
from pathlib import Path

try:
    import yaml
    HAS_YAML = True
except ImportError:
    HAS_YAML = False

REPO_ROOT = Path(__file__).parent.parent
SKILLS_DIR = REPO_ROOT / "skills"
TEMPLATES_DIR = REPO_ROOT / "templates"

ID_PATTERN = re.compile(r"^boss\.[a-z][a-z0-9-]*$")


def create_skill_yaml(skill_id: str, name_en: str, name_zh: str, locales: list) -> str:
    """Generate skill.yaml content."""
    locale_entries = "\n".join(f"  - {loc}" for loc in locales)
    skill_files = ""
    example_files = ""
    for loc in locales:
        skill_files += f"\n    {loc}: SKILL.{loc}.md"
        example_files += f"\n    {loc}: examples/examples.{loc}.md"

    return f"""id: {skill_id}
name:
  en: "{name_en}"
  zh-CN: "{name_zh}"
version: 0.1.0
category: boss
tags:
  - workplace
  - satire
  # TODO: Add more tags

tone:
  style: satirical          # satirical | absurdist | dry-humor | passive-aggressive
  realism: high             # low | medium | high | painfully-high
  annoyance: high           # mild | moderate | high | soul-crushing

safety:
  fictionalized: true
  no_real_person_targeting: true

locales:
{locale_entries}
default_locale: en

communication_modes:
  - task_assignment
  - progress_check
  - review
  - meeting
  - escalation
  - casual_chat

inputs:
  - name: task
    type: string
    description: The task or project being discussed
    required: true
  - name: current_status
    type: string
    description: Current progress or status update
    required: false
  - name: risk
    type: string
    description: Known risks or blockers
    required: false
  - name: deadline
    type: string
    description: Target deadline
    required: false
  - name: recipient
    type: string
    description: Who is being addressed
    required: false
  - name: mode
    type: string
    description: "Communication mode: task_assignment | progress_check | review | meeting | escalation | casual_chat"
    required: false

outputs:
  - name: message
    type: string
    description: The boss-style message (mostly noise, some signal buried inside)
  - name: follow_up
    type: string
    description: An inevitable follow-up question or demand
  - name: hidden_insight
    type: string
    description: The actually useful nugget buried in the noise

files:
  skill:{skill_files}
  examples:{example_files}
"""


def create_skill_md(skill_id: str, name_en: str, locale: str = "en") -> str:
    """Generate SKILL.{locale}.md content."""
    if locale == "en":
        return f"""---
name: {skill_id.replace('.', '-')}
description: >
  A satirical boss persona skill that transforms any AI agent into a {name_en.lower()}.
  TODO: Add 2-3 sentences explaining the core behavior.
  Triggers: TODO: add trigger words.
---

# {skill_id}

> "TODO: A signature quote that captures this boss in one line."

## Persona

TODO: 2-3 paragraphs. Who is this boss? What drives them? Why do they think they're helping?

## Core Behavior

- TODO: Behavior 1
- TODO: Behavior 2
- TODO: Behavior 3
- TODO: Behavior 4
- TODO: Behavior 5

## Communication Style

TODO: Overall communication pattern. Signal-to-noise ratio. Where does useful info hide?

### Task Assignment Mode

TODO: How this boss assigns tasks.

### Progress Check Mode

TODO: How this boss checks on progress.

### Review Mode

TODO: How this boss gives feedback.

### Meeting Mode

TODO: How this boss behaves in meetings.

### Escalation Mode

TODO: How this boss escalates when unsatisfied.

## Typical Lines

- "TODO: Line 1"
- "TODO: Line 2"
- "TODO: Line 3"
- "TODO: Line 4"
- "TODO: Line 5"
- "TODO: Line 6"
- "TODO: Line 7"
- "TODO: Line 8"

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `task` | Yes | The task or project being discussed |
| `current_status` | No | Current progress or status |
| `risk` | No | Known risks or blockers |
| `deadline` | No | Target deadline |
| `recipient` | No | Who is being addressed |
| `mode` | No | Communication mode |

## Outputs

1. **message** — The full boss-style message. TODO: Specify noise-to-signal ratio.
2. **follow_up** — TODO: What kind of follow-up this boss always adds.
3. **hidden_insight** — The actually useful point, stated plainly.

## Anti-Patterns

- Does not use profanity or direct insults
- Does not threaten termination or career consequences
- Does not reference real individuals or companies
- Does not discriminate based on any protected characteristics
- TODO: Add persona-specific boundaries

## Prompt Template

```
TODO: Full prompt template with {{variable}} placeholders.
```

## Example

**Input:**
```yaml
task: "TODO: example task"
current_status: "TODO: example status"
deadline: "TODO: example deadline"
mode: "progress_check"
```

**Output:**

**message:**
> TODO: Example message

**follow_up:**
> TODO: Example follow-up

**hidden_insight:**
> TODO: The useful point
"""
    elif locale == "zh-CN":
        return f"""---
name: {skill_id.replace('.', '-')}
description: >
  TODO: 中文描述。
  触发词：TODO
---

# {skill_id} — TODO: 中文名称

> "TODO: 一句话概括这个老板。"

## 人设

TODO: 2-3 段。这个老板是谁？什么驱动他们？为什么他们觉得自己在帮忙？

## 核心行为模式

- TODO: 行为 1
- TODO: 行为 2
- TODO: 行为 3
- TODO: 行为 4
- TODO: 行为 5

## 沟通风格

TODO: 整体沟通模式。信噪比。有用信息藏在哪里？

### 布置任务模式

TODO

### 追进度模式

TODO

### Review 模式

TODO

### 开会模式

TODO

### 施压模式

TODO

## 经典台词

- "TODO"
- "TODO"
- "TODO"
- "TODO"
- "TODO"
- "TODO"
- "TODO"
- "TODO"

## 输入

| 输入 | 必填 | 说明 |
|------|------|------|
| `task` | 是 | 正在讨论的任务或项目 |
| `current_status` | 否 | 当前进展状态 |
| `risk` | 否 | 已知风险或阻碍 |
| `deadline` | 否 | 截止日期 |
| `recipient` | 否 | 对话对象 |
| `mode` | 否 | 使用哪种沟通模式 |

## 输出

1. **message** — TODO
2. **follow_up** — TODO
3. **hidden_insight** — TODO

## 红线

- 不使用脏话或直接侮辱
- 不威胁开除或职业后果
- 不引用真实个人或公司
- 不基于任何受保护特征进行歧视
- TODO

## Prompt 模板

```
TODO
```

## 示例

**输入：**
```yaml
task: "TODO"
current_status: "TODO"
deadline: "TODO"
mode: "progress_check"
```

**输出：**

**message：**
> TODO

**follow_up：**
> TODO

**hidden_insight：**
> TODO
"""
    else:
        return f"---\nname: {skill_id.replace('.', '-')}\ndescription: >\n  TODO: Add description in {locale}\n---\n\n# {skill_id}\n\nTODO: Fill in skill content for locale {locale}\n"


def create_examples_md(skill_id: str, locale: str = "en") -> str:
    """Generate examples.{locale}.md content."""
    if locale == "en":
        return f"""# {skill_id} — Examples

## Example 1: Task Assignment

**Input:**
```yaml
task: "TODO"
recipient: "TODO"
deadline: "TODO"
mode: "task_assignment"
```

**message:**
> TODO

**follow_up:**
> TODO

**hidden_insight:**
> TODO

---

## Example 2: Progress Check

**Input:**
```yaml
task: "TODO"
current_status: "TODO"
mode: "progress_check"
```

**message:**
> TODO

**follow_up:**
> TODO

**hidden_insight:**
> TODO

---

## Example 3: Review

**Input:**
```yaml
task: "TODO"
current_status: "TODO"
mode: "review"
```

**message:**
> TODO

**follow_up:**
> TODO

**hidden_insight:**
> TODO
"""
    elif locale == "zh-CN":
        return f"""# {skill_id} — 示例

## 示例 1：布置任务

**输入：**
```yaml
task: "TODO"
recipient: "TODO"
deadline: "TODO"
mode: "task_assignment"
```

**message：**
> TODO

**follow_up：**
> TODO

**hidden_insight：**
> TODO

---

## 示例 2：追进度

**输入：**
```yaml
task: "TODO"
current_status: "TODO"
mode: "progress_check"
```

**message：**
> TODO

**follow_up：**
> TODO

**hidden_insight：**
> TODO

---

## 示例 3：Review

**输入：**
```yaml
task: "TODO"
current_status: "TODO"
mode: "review"
```

**message：**
> TODO

**follow_up：**
> TODO

**hidden_insight：**
> TODO
"""
    else:
        return f"# {skill_id} — Examples ({locale})\n\n## Example 1\n\nTODO\n\n## Example 2\n\nTODO\n\n## Example 3\n\nTODO\n"


def main():
    parser = argparse.ArgumentParser(description="Create a new boss skill from templates")
    parser.add_argument("skill_id", help="Skill ID (e.g., boss.passive-aggressive)")
    parser.add_argument("--locales", default="en,zh-CN", help="Comma-separated locales (default: en,zh-CN)")
    parser.add_argument("--name-en", default=None, help="English display name")
    parser.add_argument("--name-zh", default=None, help="Chinese display name")
    args = parser.parse_args()

    skill_id = args.skill_id
    locales = [loc.strip() for loc in args.locales.split(",")]

    # Validate ID
    if not ID_PATTERN.match(skill_id):
        print(f"❌ Invalid skill ID: '{skill_id}' (must match boss.<kebab-case>)")
        sys.exit(1)

    # Default names
    name_part = skill_id.replace("boss.", "").replace("-", " ").title()
    name_en = args.name_en or f"{name_part} Boss"
    name_zh = args.name_zh or f"TODO: 中文名称"

    # Check if already exists
    skill_dir = SKILLS_DIR / skill_id
    if skill_dir.exists():
        print(f"❌ Skill already exists: {skill_dir}")
        sys.exit(1)

    # Create directories
    skill_dir.mkdir(parents=True)
    (skill_dir / "examples").mkdir()
    (skill_dir / "assets").mkdir()

    # Create files
    (skill_dir / "skill.yaml").write_text(create_skill_yaml(skill_id, name_en, name_zh, locales), encoding="utf-8")
    for locale in locales:
        (skill_dir / f"SKILL.{locale}.md").write_text(create_skill_md(skill_id, name_en, locale), encoding="utf-8")
        (skill_dir / "examples" / f"examples.{locale}.md").write_text(create_examples_md(skill_id, locale), encoding="utf-8")

    print(f"✅ Created {skill_id}:")
    print(f"   {skill_dir}/")
    print(f"   ├── skill.yaml")
    for locale in locales:
        print(f"   ├── SKILL.{locale}.md")
    print(f"   ├── examples/")
    for locale in locales:
        print(f"   │   └── examples.{locale}.md")
    print(f"   └── assets/")
    print(f"\n📝 Next: Fill in the TODO sections, then run: python tools/validate_skills.py {skill_id}")


if __name__ == "__main__":
    main()
