#!/usr/bin/env node

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Available boss skills
const AVAILABLE_BOSSES = [
  'micromanager',
  'passive-aggressive',
  'empty-promises',
  'flip-flopper',
  'always-following-up',
  'credit-collector',
  'delegator-supreme',
  'meeting-for-everything',
  'last-minute-chaos',
  'need-translation',
  'verbose-nonsense',
  'visionary-but-vague',
];

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
  console.error(`${colors.red}✗ Error: ${message}${colors.reset}`);
}

function success(message) {
  console.log(`${colors.green}✓ ${message}${colors.reset}`);
}

function info(message) {
  console.log(`${colors.cyan}ℹ ${message}${colors.reset}`);
}

// Detect AI tool installation paths
function detectAITools() {
  const homeDir = process.env.HOME || process.env.USERPROFILE;
  if (!homeDir) return { found: [], path: null };

  const toolPaths = [
    { name: 'claude', dir: '.claude', skillDir: 'skills', check: '.claude' },
    { name: 'openclaw', dir: '.openclaw', skillDir: 'skills', check: '.openclaw' },
    { name: 'cursor', dir: '.cursor', skillDir: 'rules', check: '.cursor/rules' },
    { name: 'gemini', dir: '.gemini', skillDir: 'skills', check: '.gemini' },
    { name: 'codex', dir: '.codex', skillDir: 'skills', check: '.codex' },
    { name: 'copilot', dir: '.agents', skillDir: 'skills', check: '.agents' },
  ];

  const found = [];
  let defaultPath = null;

  for (const tool of toolPaths) {
    const checkPath = path.join(homeDir, tool.check);
    if (fs.existsSync(checkPath)) {
      found.push({
        name: tool.name,
        baseDir: path.join(homeDir, tool.dir),
        skillDir: tool.skillDir,
      });
      if (!defaultPath) {
        defaultPath = { name: tool.name, baseDir: path.join(homeDir, tool.dir), skillDir: tool.skillDir };
      }
    }
  }

  // If nothing found, default to Claude Code
  if (!defaultPath) {
    defaultPath = {
      name: 'claude',
      baseDir: path.join(homeDir, '.claude'),
      skillDir: 'skills',
    };
  }

  return { found, defaultPath };
}

// Fetch a file from GitHub
function fetchFromGitHub(filename, skillName) {
  return new Promise((resolve, reject) => {
    const url = `https://raw.githubusercontent.com/KongZhen/boss-skills/main/skills/boss.${skillName}/${filename}`;
    https.get(url, (res) => {
      if (res.statusCode === 404) {
        resolve(null);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} fetching ${filename}`));
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Install a single boss skill
async function installBoss(skillName, targetPath) {
  if (!AVAILABLE_BOSSES.includes(skillName)) {
    error(`Unknown boss: ${skillName}`);
    return false;
  }

  const skillDir = path.join(targetPath.baseDir, targetPath.skillDir, `boss.${skillName}`);

  // Create directory
  try {
    fs.mkdirSync(skillDir, { recursive: true });
  } catch (e) {
    error(`Failed to create directory: ${skillDir}`);
    return false;
  }

  // Files to download (SKILL.md = OpenClaw-compatible entry point)
  const files = ['SKILL.md', 'SKILL.en.md', 'SKILL.zh-CN.md', 'skill.yaml', 'assistant.json'];
  let successCount = 0;

  process.stdout.write(`  Downloading ${skillName}... `);

  for (const filename of files) {
    try {
      const content = await fetchFromGitHub(filename, skillName);
      if (content === null) {
        // File doesn't exist, skip silently
        continue;
      }
      const filepath = path.join(skillDir, filename);
      fs.writeFileSync(filepath, content, 'utf-8');
      successCount++;
    } catch (e) {
      console.error(`\n  Failed to download ${filename}: ${e.message}`);
      return false;
    }
  }

  if (successCount === 0) {
    console.error('failed (no files found)');
    return false;
  }

  console.log('done');
  return true;
}

// List command
function listBosses() {
  log('\n' + colors.bright + '╔════════════════════════════════════╗', 'cyan');
  log('║      Available Boss Personas        ║', 'cyan');
  log('╚════════════════════════════════════╝' + colors.reset, 'cyan');

  AVAILABLE_BOSSES.forEach((boss, idx) => {
    const number = `${idx + 1}`.padStart(2, ' ');
    log(`  ${number}. ${boss}`);
  });

  log('\n' + 'Install any boss with:', 'yellow');
  log('  $ npx boss-skills install boss.micromanager\n');
}

// Install command
async function installCommand(args) {
  const { found, defaultPath } = detectAITools();

  if (args.includes('--all')) {
    // Install all bosses
    const targetPath = found.length > 0 ? found[0] : defaultPath;
    log(`\n${colors.bright}Installing all bosses...${colors.reset}`);
    info(`Installing to: ${targetPath.name} (${targetPath.baseDir})`);
    if (found.length > 1) {
      info(`Also detected: ${found.slice(1).map(f => f.name).join(', ')} (use --target=<tool> to change)`);
    }

    let successCount = 0;
    for (const boss of AVAILABLE_BOSSES) {
      const success = await installBoss(boss, targetPath);
      if (success) successCount++;
    }

    log(`\n${colors.green}${colors.bright}✓ All set!${colors.reset} Installed ${successCount}/${AVAILABLE_BOSSES.length} bosses.`);
    log('\nYour new bosses have been installed. Good luck.\n', 'magenta');
    return;
  }

  // Install specific bosses
  const bosses = args.filter(arg => arg.startsWith('boss.'));
  if (bosses.length === 0) {
    error('Please specify a boss: npx boss-skills install boss.micromanager');
    process.exit(1);
  }

  const targetPath = found.length > 0 ? found[0] : defaultPath;
  log(`\n${colors.bright}Installing boss skill...${colors.reset}`);
  info(`Installing to: ${targetPath.name} (${targetPath.baseDir})`);

  let successCount = 0;
  for (const fullName of bosses) {
    const skillName = fullName.replace('boss.', '');
    const success = await installBoss(skillName, targetPath);
    if (success) successCount++;
  }

  if (successCount > 0) {
    log(`\n${colors.green}${colors.bright}✓ Your new boss has been installed. Good luck.${colors.reset}\n`, 'magenta');
  } else {
    error('Installation failed');
    process.exit(1);
  }
}

// Update command
async function updateCommand() {
  const { found, defaultPath } = detectAITools();
  const targetPath = found.length > 0 ? found[0] : defaultPath;

  log(`\n${colors.bright}Updating installed bosses...${colors.reset}`);
  info(`Checking: ${targetPath.name} (${targetPath.baseDir})`);

  const skillDir = path.join(targetPath.baseDir, targetPath.skillDir);
  if (!fs.existsSync(skillDir)) {
    error(`No skills directory found at ${skillDir}`);
    return;
  }

  const bossDirs = fs.readdirSync(skillDir)
    .filter(d => d.startsWith('boss.'))
    .map(d => d.replace('boss.', ''));

  if (bossDirs.length === 0) {
    info('No installed boss skills found');
    return;
  }

  let updateCount = 0;
  for (const boss of bossDirs) {
    const success = await installBoss(boss, targetPath);
    if (success) updateCount++;
  }

  if (updateCount > 0) {
    success(`Updated ${updateCount} boss skill(s)`);
  } else {
    error('Update failed');
  }

  log('');
}

// Main CLI handler
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    log('\n' + colors.bright + '╔════════════════════════════════════╗', 'magenta');
    log('║        Boss Skills CLI v0.2.0       ║', 'magenta');
    log('╚════════════════════════════════════╝' + colors.reset, 'magenta');
    log('\nUsage:', 'yellow');
    log('  boss-skills install <boss-name>  Install a boss skill');
    log('  boss-skills install --all         Install all bosses');
    log('  boss-skills list                  List available bosses');
    log('  boss-skills update                Update installed bosses\n');
    return;
  }

  const command = args[0];

  switch (command) {
    case 'list':
      listBosses();
      break;
    case 'install':
      await installCommand(args.slice(1));
      break;
    case 'update':
      await updateCommand();
      break;
    default:
      error(`Unknown command: ${command}`);
      log('\nRun "boss-skills" without arguments to see help.\n');
      process.exit(1);
  }
}

main().catch(err => {
  error(err.message);
  process.exit(1);
});
