# boss-skills CLI

A command-line tool to install boss skill personas into your AI tools. A serious framework for unserious bosses.

## Installation

```bash
npm install -g boss-skills
```

Or use directly with npx:

```bash
npx boss-skills
```

## Usage

### List Available Bosses

```bash
boss-skills list
```

Shows all 12 available boss personas.

### Install a Specific Boss

```bash
boss-skills install boss.micromanager
boss-skills install boss.passive-aggressive
```

Automatically detects your AI tool and installs the skill:
- **Claude Code** → `~/.claude/skills/`
- **Cursor** → `~/.cursor/rules/`
- **Gemini CLI** → `~/.gemini/skills/`
- **Codex CLI** → `~/.codex/skills/`
- **VS Code Copilot** → `~/.agents/skills/`

If multiple tools are found, the first detected one is used.

### Install All Bosses

```bash
boss-skills install --all
```

Installs all 12 boss personas at once.

### Update Installed Bosses

```bash
boss-skills update
```

Updates all currently installed boss skills to the latest version.

## Available Bosses

- boss.micromanager
- boss.passive-aggressive
- boss.empty-promises
- boss.flip-flopper
- boss.always-following-up
- boss.credit-collector
- boss.delegator-supreme
- boss.meeting-for-everything
- boss.last-minute-chaos
- boss.need-translation
- boss.verbose-nonsense
- boss.visionary-but-vague

## How It Works

The CLI:
1. Detects which AI tools you have installed
2. Fetches boss skill files from the GitHub repository
3. Installs them to the correct location for your tool
4. Provides fun boss-themed feedback

## License

MIT

## More Info

Visit [boss-skills.com](https://boss-skills.com) for the full experience and to try the boss simulator.
