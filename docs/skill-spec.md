# Skill Specification v0.1

This document defines the technical specification for boss-skills persona definitions.

## Overview

Each boss skill is a self-contained directory under `skills/` that defines a workplace persona capable of being loaded into any compatible AI agent framework. A skill consists of structured metadata, human-readable persona documentation, and optional framework-specific configuration files.

## Directory Structure

```
skills/boss.<name>/
├── skill.yaml              # Machine-readable metadata (required)
├── SKILL.en.md             # Persona definition — English (required)
├── SKILL.zh-CN.md          # Persona definition — Chinese (required for v0.1)
├── assistant.json          # OpenAI Assistants config (optional)
├── examples/
│   ├── examples.en.md      # Example inputs/outputs — English
│   └── examples.zh-CN.md   # Example inputs/outputs — Chinese
└── assets/                 # Optional static assets
```

## Naming Convention

- Skill IDs use the format `boss.<kebab-case-name>`
- Directory names match the skill ID exactly
- Examples: `boss.micromanager`, `boss.passive-aggressive`, `boss.flip-flopper`

## skill.yaml

The machine-readable metadata file. Must validate against `schema/skill.schema.json`.

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique ID in `boss.<name>` format |
| `name` | object | Display names by locale (`en`, `zh-CN`, ...) |
| `version` | string | Semantic version (e.g., `0.1.0`) |
| `category` | string | Always `"boss"` for now |
| `tags` | array | Searchable tags |
| `tone` | object | `style`, `realism`, `annoyance` ratings |
| `safety` | object | `fictionalized: true`, `no_real_person_targeting: true` |
| `locales` | array | Supported locale codes |
| `inputs` | array | Input parameter definitions |
| `outputs` | array | Output definitions |

### Tone Object

```yaml
tone:
  style: satirical          # satirical | absurdist | dry-humor | passive-aggressive
  realism: high             # low | medium | high | painfully-high
  annoyance: high           # mild | moderate | high | soul-crushing
```

## SKILL.{locale}.md

The human-readable persona definition. This file serves dual purposes:

1. **For Claude Code / OpenClaw**: Used directly as the skill file (the frontmatter provides trigger metadata)
2. **For humans**: Documents the persona for contributors and reviewers

### Frontmatter

```yaml
---
name: boss-<skill-name>
description: >
  A satirical boss persona skill that...
  Triggers: <trigger words>
---
```

### Required Sections

1. **Persona** — Who is this boss? What drives them?
2. **Core Behavior** — 5+ distinctive behavior patterns
3. **Communication Style** — Overall message patterns and noise-to-signal ratio
4. **Communication Modes** — At least 3 of: Task Assignment, Progress Check, Review, Meeting, Escalation, Casual Chat
5. **Typical Lines** — 8+ signature phrases
6. **Inputs** — Input parameter table
7. **Outputs** — What the skill produces
8. **Anti-Patterns** — What the persona does NOT do (safety)
9. **Prompt Template** — The actual prompt template with `{variable}` placeholders
10. **Example** — At least 1 complete input/output example

## assistant.json

Optional OpenAI Assistants API configuration. Structure:

```json
{
  "name": "Display Name",
  "model": "gpt-4o",
  "instructions": "The full persona prompt...",
  "tools": [],
  "metadata": {
    "boss_skill_id": "boss.<name>",
    "boss_skill_version": "0.1.0"
  }
}
```

## Examples

Each skill must provide at least 3 examples per supported locale, covering at least 3 different communication modes. Each example must include:

- Input (task, status, mode, etc.)
- message (the boss-style output)
- follow_up (the inevitable follow-up)
- hidden_insight (the actually useful point)

## Versioning

Skills follow semantic versioning:

- **PATCH** (0.1.x): Typo fixes, wording tweaks, minor tone adjustments
- **MINOR** (0.x.0): New communication modes, new typical lines, locale additions
- **MAJOR** (x.0.0): Fundamental persona changes, breaking prompt template changes

## Compatibility Matrix

| Framework | File Used | Auto-Compatible |
|-----------|-----------|-----------------|
| Claude Code | `SKILL.en.md` (frontmatter + body) | Yes |
| OpenClaw | `SKILL.en.md` (frontmatter + body) | Yes |
| OpenAI Assistants | `assistant.json` | Yes |
| Generic / Custom | `skill.yaml` + `SKILL.{locale}.md` | Manual integration |
