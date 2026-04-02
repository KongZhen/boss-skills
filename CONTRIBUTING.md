# Contributing to Boss Skills

First off — thanks for wanting to contribute your boss to the world. We're sorry you've experienced them.

## Ways to Contribute

### 1. Add a New Boss Skill

Have a boss archetype that's painfully universal? Great.

1. Fork the repo
2. Copy `templates/skill-template.yaml` to `skills/boss.<your-name>/skill.yaml`
3. Copy `templates/skill-template.md` to `skills/boss.<your-name>/SKILL.en.md`
4. Fill in both files following the spec in `docs/skill-spec.md`
5. Add at least 3 examples in `skills/boss.<your-name>/examples/examples.en.md`
6. Run `python tools/validate_skills.py` to check your work
7. Open a PR using the "New Skill" template

### 2. Improve an Existing Skill

- Add more typical lines
- Improve examples
- Add a new locale (e.g., `SKILL.ja.md`)
- Refine the prompt template
- Fix tone issues

### 3. Add a Locale

Each skill supports multiple languages. To add a locale:

1. Create `SKILL.<locale>.md` (e.g., `SKILL.ja.md`)
2. Create `examples/examples.<locale>.md`
3. Update `skill.yaml` — add the locale to `locales` array and `files` object
4. **Do not machine-translate.** Localization means culturally authentic rewrites, not word-for-word translation

### 4. Report Issues

- Found a skill that crosses a line? Open an issue
- Broken validation? Open an issue
- Have a boss type suggestion? Open a "New Skill Request" issue

## Content Guidelines

**Read `docs/tone-guide.md` before writing anything.** The short version:

### Do

- Satirize management *patterns*
- Write things that make people laugh and nod
- Keep the 80/20 noise-to-signal ratio
- Make the persona self-unaware (they think they're helping)

### Don't

- Name real people or companies
- Write discriminatory content
- Cross from satire into harassment
- Make the persona genuinely cruel
- Skip the safety fields in `skill.yaml`

## Technical Requirements

- All skills must pass `python tools/validate_skills.py`
- `skill.yaml` must validate against `schema/skill.schema.json`
- SKILL.md must include all required sections (see `docs/skill-spec.md`)
- At least 3 examples per locale, covering 3+ communication modes
- `safety.fictionalized` and `safety.no_real_person_targeting` must both be `true`

## PR Process

1. Fork → Branch → Commit → PR
2. Fill out the PR template completely
3. CI will auto-validate your skill
4. A maintainer will review for:
   - Technical correctness (schema, structure)
   - Tone compliance (see `docs/tone-guide.md`)
   - Quality (is it funny? is it recognizable? does it work?)
5. Iterate if needed, merge when ready

## Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). Be excellent to each other, even while writing about terrible bosses.

## Questions?

Open a Discussion or an Issue. We don't bite — unlike some of the bosses in this repo.
