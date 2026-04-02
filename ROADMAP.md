# Roadmap

## v0.1 — Foundation + Full Roster (Current)

- [x] Skill schema (`skill.schema.json`)
- [x] Validation tooling (`validate_skills.py`) + cross-file checks
- [x] Automation: `build_assistant_json.py`, `create_skill.py`
- [x] GitHub Actions CI (version-locked deps)
- [x] Skill template (YAML + Markdown)
- [x] README (EN + ZH-CN)
- [x] Contributing guide + tone guide + code of conduct
- [x] Issue / PR templates
- [x] All 12 boss skills (EN + ZH-CN):
  - `boss.micromanager` · `boss.verbose-nonsense` · `boss.visionary-but-vague`
  - `boss.need-translation` · `boss.passive-aggressive` · `boss.last-minute-chaos`
  - `boss.always-following-up` · `boss.credit-collector` · `boss.empty-promises`
  - `boss.delegator-supreme` · `boss.flip-flopper` · `boss.meeting-for-everything`

## v0.2 — Custom Boss + Launch

- [ ] Landing page
- [ ] "Create Your Boss" — lightweight web form (3-5 questions → persona card + downloadable skill pack)
- [ ] Social preview image + logo
- [ ] Skill catalog auto-generator (`build_catalog.py`)
- [ ] ProductHunt + GitHub launch
- [ ] "Show Your Boss" community campaign

## v0.3 — Ecosystem

- [ ] Japanese locale (ja)
- [ ] Spanish locale (es)
- [ ] Agent wrapper demo CLI (`boss-agent --persona boss.micromanager`)
- [ ] Community voting on new archetypes
- [ ] "Boss of the Month" showcase
- [ ] UGC pipeline: community-submitted skills → review → official library

## v1.0 — Maturity

- [ ] 20+ boss skills (including community-contributed)
- [ ] 5+ locales
- [ ] Stable skill spec (no breaking changes)
- [ ] Integration guides for major agent frameworks
- [ ] Published npm / pip package for easy installation
- [ ] Full custom boss builder with advanced dimensions

## Ideas (Unscheduled)

- Boss compatibility quiz ("Which boss are you?")
- Boss-to-boss conversation simulator
- Slack bot that randomly adopts a boss persona
- "Translate my boss" tool (decode what they actually mean)
- Boss skill mashup (combine two boss styles)
- Boss leaderboard (most starred community skills)
