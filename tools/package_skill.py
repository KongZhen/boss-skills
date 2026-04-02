#!/usr/bin/env python3
"""
P2-1: Package skill as .skill (zip archive)

Usage:
    python package_skill.py boss.micromanager          # Package single skill
    python package_skill.py --all                      # Package all skills
"""

import os
import sys
import zipfile
import shutil
import argparse
from pathlib import Path

PROJECT_ROOT = Path("/sessions/trusting-lucid-hypatia/mnt/Boss-skills")
SKILLS_DIR = PROJECT_ROOT / "skills"
DIST_DIR = PROJECT_ROOT / "dist"

def package_skill(skill_id):
    """Package a single skill as .skill file"""
    skill_dir = SKILLS_DIR / skill_id

    if not skill_dir.exists():
        print(f"Error: Skill {skill_id} not found")
        return False

    # Ensure dist directory exists
    DIST_DIR.mkdir(parents=True, exist_ok=True)

    output_file = DIST_DIR / f"{skill_id}.skill"

    # Create zip archive
    with zipfile.ZipFile(output_file, 'w', zipfile.ZIP_DEFLATED) as zf:
        # Add SKILL.en.md (default)
        skill_en = skill_dir / "SKILL.en.md"
        if skill_en.exists():
            zf.write(skill_en, arcname="SKILL.md")

        # Add all files from examples/
        examples_dir = skill_dir / "examples"
        if examples_dir.exists():
            for file in examples_dir.glob("*"):
                if file.is_file():
                    zf.write(file, arcname=f"examples/{file.name}")

        # Add all files from assets/ if it exists
        assets_dir = skill_dir / "assets"
        if assets_dir.exists():
            for file in assets_dir.glob("**/*"):
                if file.is_file():
                    relative_path = file.relative_to(skill_dir)
                    zf.write(file, arcname=str(relative_path))

    print(f"Packaged {skill_id} -> {output_file}")
    return True

def main():
    parser = argparse.ArgumentParser(description="Package boss-skills as .skill files")
    parser.add_argument(
        "skill",
        nargs="?",
        default=None,
        help="Skill ID (e.g., boss.micromanager) or --all for all skills"
    )
    parser.add_argument(
        "--all",
        action="store_true",
        help="Package all skills"
    )

    args = parser.parse_args()

    if args.all or args.skill == "--all":
        # Package all skills
        skill_dirs = sorted(SKILLS_DIR.glob("boss.*"))
        success_count = 0
        for skill_dir in skill_dirs:
            if skill_dir.is_dir() and (skill_dir / "SKILL.en.md").exists():
                if package_skill(skill_dir.name):
                    success_count += 1
        print(f"\nPackaged {success_count} skills to {DIST_DIR}")
    elif args.skill:
        if package_skill(args.skill):
            sys.exit(0)
        else:
            sys.exit(1)
    else:
        parser.print_help()
        sys.exit(1)

if __name__ == "__main__":
    main()
