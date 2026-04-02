#!/usr/bin/env python3
"""
P2-3: Add mode_mapping to skill.yaml files
"""

import yaml
from pathlib import Path

PROJECT_ROOT = Path("/sessions/trusting-lucid-hypatia/mnt/Boss-skills")
SKILLS_DIR = PROJECT_ROOT / "skills"

def add_mode_mapping():
    """Add mode_mapping field to all skill.yaml files"""

    for skill_dir in sorted(SKILLS_DIR.glob("boss.*")):
        if not skill_dir.is_dir():
            continue

        skill_yaml = skill_dir / "skill.yaml"
        if not skill_yaml.exists():
            continue

        # Read the YAML file
        with open(skill_yaml, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f)

        # Skip if file is empty or malformed
        if data is None or not isinstance(data, dict):
            print(f"Skipping {skill_yaml} (empty or malformed)")
            continue

        # Add mode_mapping if not already present
        if 'mode_mapping' not in data:
            data['mode_mapping'] = {
                'task_assignment': '布置任务 / Task Assignment',
                'progress_check': '追进度 / Progress Check',
                'review': '评审 / Review',
                'meeting': '开会 / Meeting',
                'escalation': '施压 / Escalation',
                'casual_chat': '闲聊 / Casual Chat'
            }

            # Write back (preserving order)
            with open(skill_yaml, 'w', encoding='utf-8') as f:
                # Use custom representer to maintain order and proper formatting
                yaml.dump(data, f, default_flow_style=False, allow_unicode=True, sort_keys=False)

            print(f"Added mode_mapping to {skill_yaml}")
        else:
            print(f"mode_mapping already exists in {skill_yaml}")

if __name__ == "__main__":
    add_mode_mapping()
    print("\nP2-3 complete!")
