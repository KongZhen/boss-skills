<div align="center">

# MY BOSS SKILLS

**A serious open-source framework for unserious bosses.**

Turn any AI into your worst boss nightmare. Open-source satirical AI skills that expose workplace absurdity through humor.

[Live Site](https://www.boss-skills.com) | [简体中文](Boss-skills/README.zh-CN.md)

</div>

---

## What is this?

Boss Skills is an open-source skill library that packages annoying workplace management styles into reusable AI persona skills. Install one on your agent, and it starts communicating like *that* boss — the one who asks for a status update 10 minutes after assigning the task, or the one who says "let's zoom out" when you ask a concrete question.

Every skill produces output that is roughly **80% process noise and 20% buried signal**. There's genuine value in there — you just have to wade through the corporate theater to find it.

## Choose Your Boss

| Skill | Type | Annoyance Level |
|-------|------|-----------------|
| Micromanager | Checks in every 7 minutes | 💀 Soul-crushing |
| Passive-Aggressive | "Per my last email..." | 💀 Soul-crushing |
| Empty Promises | "Next quarter, for sure" | 😤 Moderate |
| Flip-Flopper | Plan A today, Plan B tomorrow, Plan A again Friday | 🤬 High |
| Always Following Up | 5 messages before you finish reading the first | 🤬 High |
| Credit Collector | Your work, their name on it | 🤬 High |
| Delegator Supreme | "You figure it out" (but wrong) | 🤬 High |
| Meeting for Everything | Could've been a Slack message | 🤬 High |
| Last-Minute Chaos | Changes requirements at the finish line | 💀 Soul-crushing |
| Need Translation | Requires a translator for every sentence | 😤 Moderate |
| Verbose Nonsense | Says a lot, means nothing | 😤 Moderate |
| Visionary but Vague | "We need to 10x our paradigm shift" | 🤬 High |

## Quick Start

### Claude Code

Copy the skill directory into your project's skills folder:

```bash
cp -r Boss-skills/skills/boss.micromanager /path/to/your/project/.claude/skills/
```

The agent will automatically pick up the persona from the `SKILL.en.md` frontmatter.

### OpenAI Assistants

Use the `assistant.json` configuration:

```bash
cat Boss-skills/skills/boss.micromanager/assistant.json
```

Import the `instructions` field into your Assistant configuration via the API or dashboard.

### Generic / Custom Integration

Read the `skill.yaml` for structured metadata and `SKILL.{locale}.md` for the full persona definition. The `Prompt Template` section in each SKILL.md contains a ready-to-use prompt with `{variable}` placeholders.

## How It Works

Each boss skill defines:

1. **A persona** — who this boss is and why they're like this
2. **Communication modes** — how they assign tasks, check progress, give reviews, run meetings, and escalate
3. **A prompt template** — ready to plug into any LLM, with variable slots
4. **Examples** — complete input/output demonstrations
5. **Safety boundaries** — what the persona never does (no real people, no harassment, no discrimination)

## Project Structure

```
boss-skills/
├── Boss-skills/
│   ├── skills/                   # All boss persona skills
│   │   └── boss.<name>/
│   │       ├── skill.yaml        # Machine-readable metadata
│   │       ├── SKILL.en.md       # Persona definition (English)
│   │       ├── SKILL.zh-CN.md    # Persona definition (Chinese)
│   │       └── assistant.json    # OpenAI Assistants config
│   ├── website/                  # Next.js website (boss-skills.com)
│   ├── schema/                   # Validation schema
│   ├── templates/                # Templates for new skills
│   ├── tools/                    # Skill validator
│   └── docs/                     # Philosophy, spec, tone guide
├── README.md                     # You are here
└── LICENSE
```

## Contributing

We welcome new boss archetypes from every industry, culture, and language. See [CONTRIBUTING.md](Boss-skills/CONTRIBUTING.md) for the full guide.

The short version:

1. Read [`docs/tone-guide.md`](Boss-skills/docs/tone-guide.md)
2. Copy the templates from `Boss-skills/templates/`
3. Fill in your boss
4. Run `python Boss-skills/tools/validate_skills.py`
5. Open a PR

**Rule of thumb**: if your contribution makes people laugh and nod, it's in. If it makes someone feel targeted, it needs revision.

## Localization

Boss Skills supports multiple languages from day one. Each skill can have locale-specific versions:

- `SKILL.en.md` — English
- `SKILL.zh-CN.md` — Simplified Chinese
- More locales welcome via contribution

Localized versions are **not translations** — they're culturally authentic reimaginings. A Chinese micromanager says "这个先拉个会对齐一下," not "let's circle back on this."

## License

[MIT](Boss-skills/LICENSE) — use it, fork it, give it to your boss.

---

*Boss Skills is a satirical project. All personas are fictional archetypes. No real bosses were harmed in the making of this repository — though several were accurately described.*
