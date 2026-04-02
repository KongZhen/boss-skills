# Boss Skills

**A serious open-source framework for unserious workplace personas.**

Turn your AI agent into a micromanager, a buzzword machine, a meeting addict, or that one boss who always says "let's circle back" — with real engineering discipline behind the satire.

Useful? Slightly. Accurate? Uncomfortably. Engineered seriously? Absolutely.

English | [简体中文](./README.zh-CN.md)

---

## What is this?

Boss Skills is an open-source skill library that packages annoying workplace management styles into reusable AI persona skills. Install one on your agent, and it starts communicating like *that* boss — the one who asks for a status update 10 minutes after assigning the task, or the one who says "let's zoom out" when you ask a concrete question.

Every skill produces output that is roughly **80% process noise and 20% buried signal**. There's genuine value in there — you just have to wade through the corporate theater to find it.

## Why?

Because every team already has:

- One boss who says "let's align on this" instead of answering the question
- One boss who puts 30 minutes on your calendar "just to sync"
- One boss who gives feedback on your font choice before reading the content
- One boss who says "no rush" and means "I needed it yesterday"

So we decided to package them.

## Choose Your Boss

| Skill | Type | Annoyance Level |
|-------|------|-----------------|
| [`boss.micromanager`](skills/boss.micromanager/) | Checks in every 7 minutes | Soul-crushing |
| `boss.verbose-nonsense` | Says a lot, means nothing | High |
| `boss.visionary-but-vague` | "We need to 10x our paradigm shift" | High |
| `boss.need-translation` | Requires a translator for every sentence | Moderate |
| `boss.passive-aggressive` | "Per my last email..." | Soul-crushing |
| `boss.last-minute-chaos` | Changes requirements at the finish line | High |
| `boss.always-following-up` | 5 messages before you finish reading the first | Soul-crushing |
| `boss.credit-collector` | Your work, their name on it | High |
| `boss.empty-promises` | "Next quarter, for sure" | Moderate |
| `boss.delegator-supreme` | "You figure it out" (but wrong) | High |
| `boss.flip-flopper` | Plan A today, Plan B tomorrow, Plan A again Friday | High |
| `boss.meeting-for-everything` | Could've been a Slack message | Soul-crushing |

> Skills marked without links are coming in v0.2.

## Quick Start

### Claude Code / OpenClaw

Copy the skill directory into your project's skills folder:

```bash
cp -r skills/boss.micromanager /path/to/your/project/.claude/skills/
```

The agent will automatically pick up the persona from the `SKILL.en.md` frontmatter.

### OpenAI Assistants

Use the `assistant.json` configuration:

```bash
cat skills/boss.micromanager/assistant.json
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

The output always follows the **80/20 rule**: 80% noise (alignment-speak, meeting requests, unnecessary process) and 20% signal (one genuinely useful insight, buried in the middle).

## Project Structure

```
boss-skills/
├── README.md / README.zh-CN.md     # You are here
├── skills/
│   └── boss.<name>/
│       ├── skill.yaml               # Machine-readable metadata
│       ├── SKILL.en.md              # Persona definition (English)
│       ├── SKILL.zh-CN.md           # Persona definition (Chinese)
│       ├── assistant.json           # OpenAI Assistants config
│       └── examples/
├── schema/
│   └── skill.schema.json            # Validation schema
├── templates/                        # Templates for new skills
├── tools/
│   └── validate_skills.py           # Skill validator
├── docs/
│   ├── philosophy.md                 # Why this exists
│   ├── skill-spec.md                 # Technical specification
│   └── tone-guide.md                 # Content guidelines
└── .github/                          # CI + issue/PR templates
```

## Contributing

We welcome new boss archetypes from every industry, culture, and language. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

The short version:

1. Read [`docs/tone-guide.md`](docs/tone-guide.md)
2. Copy the templates from `templates/`
3. Fill in your boss
4. Run `python tools/validate_skills.py`
5. Open a PR

**Rule of thumb**: if your contribution makes people laugh and nod, it's in. If it makes someone feel targeted, it needs revision.

## Localization

Boss Skills supports multiple languages from day one. Each skill can have locale-specific versions:

- `SKILL.en.md` — English
- `SKILL.zh-CN.md` — Simplified Chinese
- More locales welcome via contribution

Localized versions are **not translations** — they're culturally authentic reimaginings. A Chinese micromanager says "这个先拉个会对齐一下," not "let's circle back on this."

## Design Philosophy

> Boss Skills takes workplace satire seriously. We joke about bosses, not about engineering quality.

Read more in [`docs/philosophy.md`](docs/philosophy.md).

## Roadmap

- [x] Skill schema + validation
- [x] `boss.micromanager` (benchmark skill)
- [ ] Remaining 11 boss skills
- [ ] Landing page
- [ ] Skill catalog generator
- [ ] Additional locales (ja, es, de, fr)
- [ ] Agent wrapper demo (`boss-agent --persona boss.micromanager`)

## License

[MIT](LICENSE) — use it, fork it, give it to your boss.

---

*Boss Skills is a satirical project. All personas are fictional archetypes. No real bosses were harmed in the making of this repository — though several were accurately described.*
