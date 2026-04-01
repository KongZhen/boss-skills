## What does this PR do?

<!-- Brief description of the change -->

## Type

- [ ] New skill
- [ ] Skill improvement
- [ ] New locale
- [ ] Documentation
- [ ] Tooling / CI
- [ ] Bug fix

## Checklist

### For all PRs

- [ ] I have read `CONTRIBUTING.md`
- [ ] I have read `docs/tone-guide.md`
- [ ] CI passes (`validate_skills.py`)

### For new skills

- [ ] `skill.yaml` validates against `schema/skill.schema.json`
- [ ] `SKILL.en.md` includes all required sections
- [ ] At least 3 examples covering 3+ communication modes
- [ ] `safety.fictionalized: true` and `safety.no_real_person_targeting: true`
- [ ] Persona is a fictional archetype, not a real individual
- [ ] Humor targets management patterns, not identity groups

### For locale additions

- [ ] Content is culturally authentic, not machine-translated
- [ ] `skill.yaml` updated with new locale in `locales` and `files`
- [ ] Examples are locale-appropriate, not word-for-word translations

## Anything else?

<!-- Optional: screenshots, context, related issues -->
