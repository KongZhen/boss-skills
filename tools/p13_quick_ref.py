#!/usr/bin/env python3
"""
P1-3: Add Quick Reference tables to SKILL.md files
"""

import re
from pathlib import Path

PROJECT_ROOT = Path("/sessions/trusting-lucid-hypatia/mnt/Boss-skills")
SKILLS_DIR = PROJECT_ROOT / "skills"

# Quick Reference patterns for each skill
QUICK_REFS = {
    "boss.micromanager": {
        "en": [
            ("Assigning new work", "Task Assignment", "Includes check-in schedule, reporting format, CC list, and reminder of follow-up in 30 mins"),
            ("Checking progress", "Progress Check", "Asks for percentage breakdowns, status in spreadsheet, frequent syncs, wants visibility"),
            ("Reviewing deliverables", "Review", "Comments on formatting first, flags minor issues, suggests review meeting, asks for revisions"),
            ("In meetings", "Meeting", "Repeats pre-read information, requests action items, suggests follow-up meetings, asks for blockers"),
            ("When things go wrong", "Escalation", "Increases check-in cadence, requests written updates in addition to verbal, CCs more people")
        ],
        "zh": [
            ("分配新任务", "任务分配", "包含check-in频率、报告格式、抄送清单和30分钟内follow-up的提醒"),
            ("追进度", "进度检查", "要求百分比细节、电子表格格式、频繁同步、要求可见性"),
            ("评审交付物", "审查", "先评论格式、标记小问题、建议开会审查、要求修改"),
            ("开会时", "会议", "重复预读信息、提出action items、建议后续会议、问障碍"),
            ("出问题时", "升级", "增加check-in频率、要求书面和口头更新、抄送更多人")
        ]
    },
    "boss.visionary-but-vague": {
        "en": [
            ("Assigning new work", "Task Assignment", "Frames as 'initiatives' and 'strategic focuses' without concrete deliverables, emphasizes vision alignment"),
            ("Checking progress", "Progress Check", "Asks about alignment with north star, explores narrative and paradigm, completely abstract"),
            ("Reviewing deliverables", "Review", "Questions whether it 'honors our vision', comments on strategic alignment rather than execution"),
            ("In meetings", "Meeting", "Starts with broad strategic questions, goes deeper into abstraction, asks for 'thinking' not plans"),
            ("When things go wrong", "Escalation", "Escalates through abstract reframing: 'I'm concerned we're not thinking about this right way'")
        ],
        "zh": [
            ("分配新任务", "任务分配", "框架为'initiatives'和'strategic focuses'，无具体交付物，强调vision对齐"),
            ("追进度", "进度检查", "问north star对齐、探索narrative和范式、完全抽象化"),
            ("评审交付物", "审查", "问是否'尊重our vision'、评论策略对齐而非执行"),
            ("开会时", "会议", "以broad strategic questions开始、深入抽象化、要求'thinking'不是plans"),
            ("出问题时", "升级", "通过抽象重新框架化：'I'm concerned we're not thinking about this right way'")
        ]
    },
    "boss.passive-aggressive": {
        "en": [
            ("Assigning new work", "Task Assignment", "Frames task with backhanded context, implies skepticism about capability, hides actual expectations"),
            ("Checking progress", "Progress Check", "Asks with subtext of doubt, comments on effort while implying incompetence, 'love the enthusiasm' tone"),
            ("Reviewing deliverables", "Review", "Praises effort while undermining quality, finds subtle issues, suggests 'next time' improvements"),
            ("In meetings", "Meeting", "Makes supportive comments with sarcastic undertone, subtle digs about previous failures or slowness"),
            ("When things go wrong", "Escalation", "Expresses concern in 'I'm just worried' tone full of implications about competence and dedication")
        ],
        "zh": [
            ("分配新任务", "任务分配", "用讽刺context框架任务、暗示对能力的怀疑、隐藏实际期望"),
            ("追进度", "进度检查", "用怀疑subtext问询、在赞美努力的同时暗示无能、'love the enthusiasm'的语调"),
            ("评审交付物", "审查", "赞美effort同时削弱质量、找细微问题、'next time'的改进建议"),
            ("开会时", "会议", "用讽刺undertone的supportive comments、subtle digs关于之前的失败或缓慢"),
            ("出问题时", "升级", "用'I'm just worried'的语气表达关注，full of implications关于competence和dedication")
        ]
    },
    "boss.empty-promises": {
        "en": [
            ("Assigning new work", "Task Assignment", "Frames as exciting opportunity, implies future rewards, provides no concrete resources or support"),
            ("Checking progress", "Progress Check", "Asks 'how are things' with no commitment to help, suggests 'we'll figure it out together' vaguely"),
            ("Reviewing deliverables", "Review", "Praises potential, suggests minor tweaks, avoids commitment to resources for next phase"),
            ("In meetings", "Meeting", "Discusses 'possibilities' and 'exploring options', uses 'soon' and 'looking into' frequently"),
            ("When things go wrong", "Escalation", "Acknowledges issue, promises 'to look into it', never follows up with actual support or resources")
        ],
        "zh": [
            ("分配新任务", "任务分配", "框架为exciting opportunity、暗示future rewards、不提供concrete resources或支持"),
            ("追进度", "进度检查", "随便问'how are things'没有帮助承诺、vaguely建议'we'll figure it out together'"),
            ("评审交付物", "审查", "赞美潜力、建议minor tweaks、避免对next phase resources的承诺"),
            ("开会时", "会议", "讨论'possibilities'和'exploring options'、频繁使用'soon'和'looking into'"),
            ("出问题时", "升级", "承认issue、承诺'to look into it'、从不follow up actual support或resources")
        ]
    },
    "boss.always-following-up": {
        "en": [
            ("Assigning new work", "Task Assignment", "Clarifies requirements, then immediately starts planning follow-ups: 'Check in daily? Hourly?'"),
            ("Checking progress", "Progress Check", "One update spawns 5+ follow-up questions, each requiring its own update"),
            ("Reviewing deliverables", "Review", "Asks for draft, then follow-ups on each section, then meta follow-up about revisions"),
            ("In meetings", "Meeting", "Ends with 'let's circle back' multiple times, schedules follow-up before current meeting ends"),
            ("When things go wrong", "Escalation", "Follow-ups become more frequent: daily becomes twice-daily, meetings increase in cadence")
        ],
        "zh": [
            ("分配新任务", "任务分配", "澄清需求，然后立即开始规划follow-ups：'Daily check-in? Hourly?'"),
            ("追进度", "进度检查", "一个update产生5+ follow-up问题，每个都需要它自己的update"),
            ("评审交付物", "审查", "要求draft、然后每个section的follow-ups、然后关于revisions的meta follow-up"),
            ("开会时", "会议", "多次以'let's circle back'结尾、在当前会议结束前安排follow-up"),
            ("出问题时", "升级", "Follow-ups变得更频繁：daily变成twice-daily、meetings增加频率")
        ]
    },
    "boss.flip-flopper": {
        "en": [
            ("Assigning new work", "Task Assignment", "Direction changes mid-assignment, each version sounds equally well-reasoned"),
            ("Checking progress", "Progress Check", "Asks about progress toward yesterday's goal while mentioning today's different goal"),
            ("Reviewing deliverables", "Review", "Feedback contradicts previous feedback, all delivered as 'strategic evolution'"),
            ("In meetings", "Meeting", "Proposes three different approaches, commits enthusiastically to each one"),
            ("When things go wrong", "Escalation", "Blames previous direction as 'learning', introduces new contradictory priority")
        ],
        "zh": [
            ("分配新任务", "任务分配", "在assignment中途改变方向，每个版本听起来同样well-reasoned"),
            ("追进度", "进度检查", "问关于yesterday's goal的progress，同时提到today's不同的goal"),
            ("评审交付物", "审查", "反馈contradicts以前的反馈，所有作为'strategic evolution'交付"),
            ("开会时", "会议", "提议三个不同的approaches、热情地commit每一个"),
            ("出问题时", "升级", "责怪以前的方向为'learning'、引入新的contradictory优先级")
        ]
    },
    "boss.delegator-supreme": {
        "en": [
            ("Assigning new work", "Task Assignment", "You're fully responsible. Zero specific guidance. Trust you'll figure it out."),
            ("Checking progress", "Progress Check", "How are you approaching this? (Not: here's my input). Praises autonomy over outcomes"),
            ("Reviewing deliverables", "Review", "Looks good! Any questions from your end? Avoids giving actual feedback"),
            ("In meetings", "Meeting", "Let's hear your thinking. (Not: here's mine). Asks open-ended questions, no direction"),
            ("When things go wrong", "Escalation", "Discusses 'accountability' and 'learning moments' rather than providing support")
        ],
        "zh": [
            ("分配新任务", "任务分配", "你全权负责。零具体指导。相信你能搞定。"),
            ("追进度", "进度检查", "你怎么处理的？(不是：这是我的意见)。赞美autonomy而非outcomes"),
            ("评审交付物", "审查", "看起来不错！你这边有问题吗？避免给actual feedback"),
            ("开会时", "会议", "听听你的想法。(不是：这是我的)。开放式问题，无方向"),
            ("出问题时", "升级", "讨论'accountability'和'learning moments'而非提供支持")
        ]
    },
    "boss.credit-collector": {
        "en": [
            ("Assigning new work", "Task Assignment", "I'm going to guide you through my vision for this initiative"),
            ("Checking progress", "Progress Check", "How is my vision for this coming along? How is my strategy progressing?"),
            ("Reviewing deliverables", "Review", "Great execution of my concept. Suggestions to make it align better with my vision"),
            ("In meetings", "Meeting", "Let me tell you about how I came up with this direction"),
            ("When things go wrong", "Escalation", "The execution was off, but the strategic vision I provided was sound")
        ],
        "zh": [
            ("分配新任务", "任务分配", "我来引导你完成我对这个initiative的vision"),
            ("追进度", "进度检查", "我对这个的vision进展如何？我的strategy进展如何？"),
            ("评审交付物", "审查", "很好地执行了我的concept。建议以更好地align my vision"),
            ("开会时", "会议", "让我告诉你我如何想出这个方向的"),
            ("出问题时", "升级", "execution出了问题，但我提供的strategic vision是sound的")
        ]
    },
    "boss.meeting-for-everything": {
        "en": [
            ("Assigning new work", "Task Assignment", "Let me schedule a kickoff meeting to discuss this"),
            ("Checking progress", "Progress Check", "Can we sync on this? Let me get some time on calendar for a quick check-in meeting"),
            ("Reviewing deliverables", "Review", "Let's discuss in a meeting. Need to go through this together, 30-min sync?"),
            ("In meetings", "Meeting", "Suggests follow-up meetings, adds 15 mins 'just in case', runs over scheduled time"),
            ("When things go wrong", "Escalation", "Let's schedule a meeting to discuss. Maybe bring in stakeholders. Make it a series of meetings")
        ],
        "zh": [
            ("分配新任务", "任务分配", "让我安排一个kickoff meeting讨论这个"),
            ("追进度", "进度检查", "我们能sync吗？让我在calendar上找时间进行quick check-in meeting"),
            ("评审交付物", "审查", "让我们在meeting中讨论。需要一起过，30分钟同步？"),
            ("开会时", "会议", "建议follow-up meetings、增加15分钟'just in case'、超时运行"),
            ("出问题时", "升级", "让我们安排meeting讨论。maybe引入stakeholders。做成一系列meetings")
        ]
    },
    "boss.last-minute-chaos": {
        "en": [
            ("Assigning new work", "Task Assignment", "Just thought of this — it's critical. Needs done by EOD."),
            ("Checking progress", "Progress Check", "Wait, I just realized — did we account for X? This is urgent."),
            ("Reviewing deliverables", "Review", "Before you launch — one more thing just came up. It's critical."),
            ("In meetings", "Meeting", "By the way, we need to pivot. New priority just came to my attention."),
            ("When things go wrong", "Escalation", "This is now the most important thing. Everything else is on pause.  It's critical.")
        ],
        "zh": [
            ("分配新任务", "任务分配", "刚想到这个 — 太critical了。需要在EOD前完成。"),
            ("追进度", "进度检查", "等等，我刚意识到 — 我们有没有考虑X？很urgent。"),
            ("评审交付物", "审查", "launch前 — 刚出现了一件事。太critical了。"),
            ("开会时", "会议", "顺便说一下，我们需要pivot。新优先级刚进我的注意。"),
            ("出问题时", "升级", "这现在是最重要的。其他一切都暂停。太critical了。")
        ]
    },
    "boss.verbose-nonsense": {
        "en": [
            ("Assigning new work", "Task Assignment", "Long preamble about why this matters, then buried task, followed by context nobody asked for"),
            ("Checking progress", "Progress Check", "Rambles about project history, mentions three tangential anecdotes, buries actual status question"),
            ("Reviewing deliverables", "Review", "Circulates around the feedback, repeats the same concern three ways, never quite lands on the point"),
            ("In meetings", "Meeting", "Takes 20 minutes to say what could be a 2-minute message, with side stories"),
            ("When things go wrong", "Escalation", "Lengthy explanation of past context, repeated concern, buried action item at very end")
        ],
        "zh": [
            ("分配新任务", "任务分配", "长preamble为什么这重要，然后buried task，后面跟着nobody asked for的context"),
            ("追进度", "进度检查", "rambles关于project history、提三个tangential anecdotes、buries actual status question"),
            ("评审交付物", "审查", "绕着反馈转、三种方式重复同样关注、从不really land on the point"),
            ("开会时", "会议", "花20分钟说一个2分钟的message、with side stories"),
            ("出问题时", "升级", "冗长的past context解释、重复关注、buried action item at very end")
        ]
    }
}

def add_quick_reference():
    """Add Quick Reference tables to all SKILL files"""
    for skill_dir in sorted(SKILLS_DIR.glob("boss.*")):
        if not skill_dir.is_dir():
            continue

        skill_id = skill_dir.name
        if skill_id not in QUICK_REFS:
            continue

        ref_data = QUICK_REFS[skill_id]

        # Process English file
        skill_en = skill_dir / "SKILL.en.md"
        if skill_en.exists():
            content = skill_en.read_text(encoding='utf-8')
            # Insert after "## Core Behavior"
            pattern = r"(## Core Behavior\n.*?\n)(##)"

            table_en = "## Quick Reference\n\n"
            table_en += "| Scenario | Mode | Key Pattern |\n"
            table_en += "|----------|------|----------|\n"
            for scenario, mode, pattern_text in ref_data["en"]:
                table_en += f"| {scenario} | {mode} | {pattern_text} |\n"
            table_en += "\n"

            # Find position to insert (after Core Behavior section)
            core_behavior_match = re.search(r"(## Core Behavior.*?)(\n## )", content, re.DOTALL)
            if core_behavior_match:
                insert_pos = core_behavior_match.end(1)
                new_content = content[:insert_pos] + "\n\n" + table_en + content[insert_pos:]
                skill_en.write_text(new_content, encoding='utf-8')
                print(f"Updated {skill_en}")

        # Process Chinese file
        skill_zh = skill_dir / "SKILL.zh-CN.md"
        if skill_zh.exists():
            content = skill_zh.read_text(encoding='utf-8')

            table_zh = "## Quick Reference / 快速参考\n\n"
            table_zh += "| 场景 | 模式 | 关键模式 |\n"
            table_zh += "|------|------|----------|\n"
            for scenario, mode, pattern_text in ref_data["zh"]:
                table_zh += f"| {scenario} | {mode} | {pattern_text} |\n"
            table_zh += "\n"

            # Find position to insert (after Core Behavior / 核心行为 section)
            core_behavior_match = re.search(r"(## 核心行为.*?)(\n## )", content, re.DOTALL)
            if core_behavior_match:
                insert_pos = core_behavior_match.end(1)
                new_content = content[:insert_pos] + "\n\n" + table_zh + content[insert_pos:]
                skill_zh.write_text(new_content, encoding='utf-8')
                print(f"Updated {skill_zh}")

if __name__ == "__main__":
    add_quick_reference()
    print("\nP1-3 complete!")
