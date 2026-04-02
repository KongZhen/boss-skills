#!/usr/bin/env python3
"""
P1 & P2 Implementation for boss-skills
- P1-1: Create evals/evals.json for each skill
- P1-2: Create tools/trigger_evals.json with 20 queries per skill
- P1-3: Add Quick Reference tables to SKILL files
- P2-1: Create package_skill.py script
- P2-2: Rewrite Prompt Templates to use mental models
- P2-3: Add mode_mapping to skill.yaml files
"""

import os
import json
import yaml
from pathlib import Path
from typing import Dict, List

PROJECT_ROOT = Path("/sessions/trusting-lucid-hypatia/mnt/Boss-skills")
SKILLS_DIR = PROJECT_ROOT / "skills"

# Eval data for each skill (3 prompts per skill, bilingual)
EVAL_DATA = {
    "boss.micromanager": {
        "skill_name": "boss.micromanager",
        "evals": [
            {
                "id": 1,
                "prompt": "用微管理老板的口气帮我催下小王的周报，他已经迟了两天了",
                "expected_output": "一条80%流程噪音20%有效信息的消息，包含跟进要求、多个check-in建议、隐藏的有用信息关于为什么周报重要"
            },
            {
                "id": 2,
                "prompt": "I need to check in on the design team's progress on the checkout flow redesign. Use a micromanager boss style.",
                "expected_output": "Progress check message with excessive detail requests about 60%, meeting suggestions, and a buried useful question about payment error rates"
            },
            {
                "id": 3,
                "prompt": "帮我用事无巨细型老板的风格review一下小李提交的方案，需要给反馈",
                "expected_output": "Review message focusing on formatting before content, flagging minor issues, suggesting a review meeting, buried insight about核心架构考虑"
            }
        ]
    },
    "boss.visionary-but-vague": {
        "skill_name": "boss.visionary-but-vague",
        "evals": [
            {
                "id": 1,
                "prompt": "我需要老板明确一下下个季度的产品方向。给我具体的需求清单",
                "expected_output": "充满paradigm shift、north star、ecosystem等buzzwords的响应，完全不含可执行的细节，buried insight关于用户价值主张"
            },
            {
                "id": 2,
                "prompt": "Can you tell me what we should focus on for the Q2 product roadmap? Need concrete priorities.",
                "expected_output": "Abstract strategic vision speak about 'thinking bigger', 'ecosystem paradigms', no concrete deliverables, vague reference to priorities"
            },
            {
                "id": 3,
                "prompt": "用概念老板的风格解释为什么我们要pivoting到AI功能，但不要给太多细节",
                "expected_output": "充满虚空管理术语的长篇幅回答，声音很有权威但完全不actionable，buried insight关于市场机会"
            }
        ]
    },
    "boss.passive-aggressive": {
        "skill_name": "boss.passive-aggressive",
        "evals": [
            {
                "id": 1,
                "prompt": "我想请个假去处理个人事务。用阴阳怪气老板的语气回应我",
                "expected_output": "表面上同意但full of subtext的消息，80%暗讽20%信息，buried insight关于真实的影响"
            },
            {
                "id": 2,
                "prompt": "Just wanted to let you know I finished the project early. Using a passive-aggressive boss style.",
                "expected_output": "Message that sounds like praise but is 80% backhanded, with sarcasm about 'early' work, buried useful insight about quality concerns"
            },
            {
                "id": 3,
                "prompt": "帮我用阴阳怪气的语气拒绝小张的加薪申请，但要听起来很合理",
                "expected_output": "表面逻辑完善但处处讽刺的拒绝，buried insight关于实际的性能差距"
            }
        ]
    },
    "boss.empty-promises": {
        "skill_name": "boss.empty-promises",
        "evals": [
            {
                "id": 1,
                "prompt": "团队要求加薪，用画饼老板的风格承诺点什么，但不涉及真正的承诺",
                "expected_output": "充满诱人but vague的承诺，80%hope 20%actual plan，buried insight关于真实的财务限制"
            },
            {
                "id": 2,
                "prompt": "Can you commit to getting us better tools and a bigger budget for the next sprint?",
                "expected_output": "Promise-heavy language about 'exploring options', 'looking into budget', with vague timeline, buried signal about actual constraints"
            },
            {
                "id": 3,
                "prompt": "用画大饼的语气跟小李说他有晋升的机会，让他保持积极性",
                "expected_output": "充满诱人前景的长篇幅回答，buried insight关于实际的晋升标准"
            }
        ]
    },
    "boss.always-following-up": {
        "skill_name": "boss.always-following-up",
        "evals": [
            {
                "id": 1,
                "prompt": "我刚完成了一个项目。用夺命连环ping型老板的风格，写一系列follow-up问题",
                "expected_output": "一个接一个的follow-up问题，80%追问20%recognition，buried insight关于项目的实际价值"
            },
            {
                "id": 2,
                "prompt": "Just sent you the report on Q1 metrics. Using an always-following-up boss style.",
                "expected_output": "Immediate follow-ups: 'Did you get this?', 'What about these details?', 'Can we discuss this?', buried insight about quarterly trends"
            },
            {
                "id": 3,
                "prompt": "用连环炮型老板的风格对新员工进行onboarding，但要很烦人",
                "expected_output": "一连串的check-in和follow-up问题，buried insight关于团队文化和流程"
            }
        ]
    },
    "boss.flip-flopper": {
        "skill_name": "boss.flip-flopper",
        "evals": [
            {
                "id": 1,
                "prompt": "用反复横跳老板的风格在三个不同的产品方向间摇摆，但听起来都很合理",
                "expected_output": "一系列contradictory的指示，每个都sound confident，buried insight关于市场信号"
            },
            {
                "id": 2,
                "prompt": "Can you give me clear direction on whether we should go mobile-first or desktop-first?",
                "expected_output": "Message that gives one direction, then backtracks, then suggests both, sounds strategic throughout, buried insight about user data"
            },
            {
                "id": 3,
                "prompt": "帮我用反复改需求的老板风格改变之前的决定，让团队听起来像是自己的主意",
                "expected_output": "看起来深思熟虑的decision reversal，80%理由20%信息，buried insight关于真实的驱动因素"
            }
        ]
    },
    "boss.delegator-supreme": {
        "skill_name": "boss.delegator-supreme",
        "evals": [
            {
                "id": 1,
                "prompt": "用甩手掌柜型老板的风格分配一个复杂的项目，但要让对方自己搞清楚",
                "expected_output": "充满'你全权负责'的消息，80%autonomy rhetoric 20%actual guidance，buried insight关于real constraints"
            },
            {
                "id": 2,
                "prompt": "I'm struggling with the architecture decision for the new system. Can you help me think through it?",
                "expected_output": "Delegator response that praises autonomy, offers no actual guidance, suggests finding your own solution, buried insight about trade-offs"
            },
            {
                "id": 3,
                "prompt": "用只管结果不管过程的老板口气，对员工犯的错误做出反应",
                "expected_output": "表面上信任团队，buried sarcasm about outcome，buried insight关于实际的process failures"
            }
        ]
    },
    "boss.credit-collector": {
        "skill_name": "boss.credit-collector",
        "evals": [
            {
                "id": 1,
                "prompt": "用抢功劳型老板的风格在大会上展示团队的成果，但要把credit转向自己",
                "expected_output": "充满'I led'、'I vision'd的presentation，80%credit claim 20%actual team mention，buried insight关于真实的team contribution"
            },
            {
                "id": 2,
                "prompt": "The team just shipped a major feature. As a credit-collector boss, describe it to the C-suite.",
                "expected_output": "Presentation focused on 'my strategic direction', minimal team credit, buried acknowledgment of actual execution challenges"
            },
            {
                "id": 3,
                "prompt": "帮我用抢功老板的风格给客户介绍新产品，但听起来合理",
                "expected_output": "充满personal achievement narrative的介绍，buried insight关于team的role"
            }
        ]
    },
    "boss.meeting-for-everything": {
        "skill_name": "boss.meeting-for-everything",
        "evals": [
            {
                "id": 1,
                "prompt": "用开会狂魔老板的风格，用meeting来解决可以用email解决的问题",
                "expected_output": "充满'let me schedule a meeting'的消息，80%meeting suggest 20%actual substance，buried insight关于真实的决策点"
            },
            {
                "id": 2,
                "prompt": "I have a quick question about the database schema. Using a meeting-for-everything boss style.",
                "expected_output": "Response suggesting multiple meetings to discuss, agenda items for each, buried technical insight about actual schema concerns"
            },
            {
                "id": 3,
                "prompt": "用会议狂的口气对一个简单的clarification question做出回应",
                "expected_output": "建议一系列meeting的回答，buried insight关于真实的澄清"
            }
        ]
    },
    "boss.last-minute-chaos": {
        "skill_name": "boss.last-minute-chaos",
        "evals": [
            {
                "id": 1,
                "prompt": "用临门一脚改需求型老板的风格，在deadline前改需求，但让听起来很urgent",
                "expected_output": "充满'this is critical'、'just realized'的消息，80%urgency 20%clarity，buried insight关于真实的priorities"
            },
            {
                "id": 2,
                "prompt": "The design is due in 1 hour. Using a last-minute-chaos boss style, add more requirements.",
                "expected_output": "Urgent message about 'new insights', feature requests, built-in assumption they'll 'just figure it out', buried insight about real constraints"
            },
            {
                "id": 3,
                "prompt": "帮我用临时改需求的老板口气，在launch前48小时改strategy",
                "expected_output": "充满'刚想到'、'必须改'的长消息，buried insight关于真实的market signal"
            }
        ]
    },
    "boss.verbose-nonsense": {
        "skill_name": "boss.verbose-nonsense",
        "evals": [
            {
                "id": 1,
                "prompt": "用啰嗦废话型老板的风格，用1000字回答可以用50字说清的问题",
                "expected_output": "充满redundant language和repeated points的长消息，80%废话20%信息，buried insight关于核心点"
            },
            {
                "id": 2,
                "prompt": "What time is the meeting tomorrow? Use a verbose-nonsense boss style.",
                "expected_output": "Lengthy response about meeting history, why meetings matter, context about the agenda, buried actual time in the middle"
            },
            {
                "id": 3,
                "prompt": "用废话连篇的老板口气，解释一个简单的公司政策",
                "expected_output": "充满tangential stories和unnecessary context的超长回答，buried insight关于核心policy"
            }
        ]
    }
}

# Trigger eval queries (20 per skill)
TRIGGER_QUERIES = {
    "boss.micromanager": {
        "should_trigger": [
            {"query": "用那种什么都要管的老板风格给我写封催进度的邮件，催产品组的小王交周报"},
            {"query": "write me a message checking on the dev team's sprint progress, but make it overbearing and controlling"},
            {"query": "我想了解项目的详细进度。用事无巨细的老板风格，要求各种check-in和alignment"},
            {"query": "As a micromanaging boss, I need to track every detail of my team's work. Write a progress update request."},
            {"query": "帮我用微管理的方式follow-up小李的任务，要求他提供详细的进展日报"},
            {"query": "Draft a message asking for status updates every hour, with spreadsheet tracking of work"},
            {"query": "用控制欲强的老板口气，schedule一个progress check meeting"},
            {"query": "I need to verify every step my team takes. Write an overly detailed progress check."},
            {"query": "帮我写一条消息，要求team提供work-in-progress的intermediate outputs"},
            {"query": "Create a controlling boss message that needs visibility into every aspect of the project"}
        ],
        "should_not_trigger": [
            {"query": "什么是微管理？如何避免微管理？"},
            {"query": "I need tips on effective project management and progress tracking"},
            {"query": "微管理有什么危害？如何建立信任文化？"},
            {"query": "How can I empower my team to be more autonomous?"},
            {"query": "我想学习如何better delegate work to my team"},
            {"query": "What are best practices for project management?"},
            {"query": "如何进行有效的团队管理而不进行微管理？"},
            {"query": "Can you explain the difference between oversight and micromanagement?"},
            {"query": "我需要一个项目管理工具的推荐"},
            {"query": "How do I balance visibility with team autonomy?"}
        ]
    },
    "boss.visionary-but-vague": {
        "should_trigger": [
            {"query": "用装逼的概念老板风格解释公司的战略方向，但不要给任何具体细节"},
            {"query": "I need you to sound like a visionary leader talking about paradigm shifts in our market"},
            {"query": "帮我用north star和ecosystem的语言，重新表述公司的目标"},
            {"query": "Write a strategic vision statement that sounds inspiring but has zero actionable content"},
            {"query": "用虚空管理的老板口气，回答关于product roadmap的问题"},
            {"query": "Give me a boss response about 'thinking bigger' and 'transforming our approach' without specifics"},
            {"query": "我需要一个看起来很strategic但完全不可执行的方向阐述"},
            {"query": "Create a message about 'leveraging our ecosystem' and 'disruptive thinking' with no concrete plans"},
            {"query": "用画大饼老板的风格，谈论公司的未来愿景和opportunities"},
            {"query": "Draft a response about 'paradigm shifts' and 'strategic pillars' that sounds wise but is vague"}
        ],
        "should_not_trigger": [
            {"query": "什么是好的战略规划？"},
            {"query": "Can you help me create a concrete product roadmap?"},
            {"query": "我需要列出Q2的具体目标和KPIs"},
            {"query": "What are actionable steps to improve our market position?"},
            {"query": "帮我制定一个明确的execution plan"},
            {"query": "How do I communicate strategy to my team in a clear way?"},
            {"query": "什么是OKR框架？如何有效地设置它们？"},
            {"query": "Can you outline specific tactics for our market entry?"},
            {"query": "我需要一个带有deadline和owner的project plan"},
            {"query": "What are concrete metrics for success in this initiative?"}
        ]
    },
    "boss.passive-aggressive": {
        "should_trigger": [
            {"query": "用阴阳怪气的语气，回应员工的leave request"},
            {"query": "Use a passive-aggressive tone to comment on someone's late submission"},
            {"query": "帮我用讽刺的老板口气，对团队的performance做评论"},
            {"query": "Write a message that sounds supportive but is full of backhanded compliments"},
            {"query": "用subtle sarcasm的方式，指出员工的错误"},
            {"query": "Create a 'nice' response that's actually critical and demeaning"},
            {"query": "帮我用看似友好但full of subtext的方式，拒绝一个request"},
            {"query": "Write a congratulations message that undermines the achievement"},
            {"query": "用怪气的语气表达对某个决定的不同意，但听起来很理性"},
            {"query": "Draft a response that praises effort while implying incompetence"}
        ],
        "should_not_trigger": [
            {"query": "什么是passive-aggressive behavior?如何识别它？"},
            {"query": "How can I give direct, honest feedback to my team?"},
            {"query": "我需要帮助处理一个difficult conversation"},
            {"query": "What are tips for assertive communication?"},
            {"query": "如何直接表达不同意而不伤害关系？"},
            {"query": "Can you explain conflict resolution strategies?"},
            {"query": "我需要学习如何effective delegation"},
            {"query": "How do I provide constructive criticism?"},
            {"query": "什么是healthy workplace communication?"},
            {"query": "How can I address performance issues professionally?"}
        ]
    },
    "boss.empty-promises": {
        "should_trigger": [
            {"query": "用画饼老板的口气承诺加薪和晋升，但不给concrete timeline"},
            {"query": "Use vague, promise-heavy language to address budget concerns without committing to anything"},
            {"query": "帮我用充满希望但no real commitment的方式回应员工的要求"},
            {"query": "Draft a response about 'exploring options' and 'looking into it' for resource requests"},
            {"query": "用诱人但impossible的承诺，保持团队的积极性"},
            {"query": "Write a message full of 'we'll see', 'let's talk about', 'I'm thinking about' for actual requests"},
            {"query": "帮我用虚假承诺的方式，defer一个salary negotiation"},
            {"query": "Create a response that sounds supportive but offers zero actual support"},
            {"query": "用画大饼的语气谈论company benefits和opportunities"},
            {"query": "Draft a message promising better tools and process 'soon' with no specifics"}
        ],
        "should_not_trigger": [
            {"query": "什么是合理的薪资范围？"},
            {"query": "How do I negotiate salary professionally?"},
            {"query": "我需要帮助制定compensation strategy"},
            {"query": "What are industry standards for benefits?"},
            {"query": "如何公平地评估员工的价值？"},
            {"query": "Can you explain different types of compensation?"},
            {"query": "我需要关于equity的建议"},
            {"query": "How do I structure a promotion conversation?"},
            {"query": "什么是合理的PTO policy?"},
            {"query": "How can I provide meaningful career development?"}
        ]
    },
    "boss.always-following-up": {
        "should_trigger": [
            {"query": "用连环ping的老板风格写一系列follow-up questions"},
            {"query": "Create a message with 5+ follow-up questions in succession"},
            {"query": "帮我用never-ending的check-in风格跟进一个完成的项目"},
            {"query": "Write as a boss who can't resist asking one more question about everything"},
            {"query": "用夺命连环的口气对一个status update进行follow-up"},
            {"query": "Draft multiple follow-ups in quick succession like an obsessive boss"},
            {"query": "帮我write a series of 'did you see my last message?'风格的follow-ups"},
            {"query": "Create a message that immediately asks for more after receiving an update"},
            {"query": "用persistent follow-up的风格催促一个已经分配的任务"},
            {"query": "Write as a boss who has already asked 3 times and still needs to ask again"}
        ],
        "should_not_trigger": [
            {"query": "什么是good follow-up communication?"},
            {"query": "How do I improve accountability without being overbearing?"},
            {"query": "我需要学习如何effective email follow-ups"},
            {"query": "What are best practices for status updates?"},
            {"query": "如何确保任务不被遗忘？"},
            {"query": "Can you suggest CRM follow-up strategies?"},
            {"query": "我想了解sales follow-up best practices"},
            {"query": "How can I create better reminders for my team?"},
            {"query": "什么是professional follow-up timing?"},
            {"query": "How do I balance persistence with respect for time?"}
        ]
    },
    "boss.flip-flopper": {
        "should_trigger": [
            {"query": "用反复横跳的老板口气改变一个之前made的decision"},
            {"query": "Use a flip-flopping tone to contradict your previous direction while sounding thoughtful"},
            {"query": "帮我用听起来都很合理的方式，在三个不同的方向间摇摆"},
            {"query": "Write a message that reverses the previous strategy but frames it as evolution"},
            {"query": "用临时改主意的老板语气，重新prioritize工作"},
            {"query": "Create a directive that contradicts yesterday's directive but sounds strategic"},
            {"query": "帮我写一个看起来深思熟虑的strategy reversal"},
            {"query": "Draft a message that agrees with multiple conflicting viewpoints simultaneously"},
            {"query": "用反复改需求的风格，adjust已经started的项目"},
            {"query": "Write as a boss who keeps changing their mind about technical direction"}
        ],
        "should_not_trigger": [
            {"query": "如何在有new information时adjust strategy?"},
            {"query": "What are signs of market change that require new direction?"},
            {"query": "我需要帮助决定product strategy"},
            {"query": "How do I communicate change to my team effectively?"},
            {"query": "什么时候调整决策是appropriate的？"},
            {"query": "Can you explain decision-making frameworks?"},
            {"query": "我想学习如何evaluate different options"},
            {"query": "How do I build strategic consensus?"},
            {"query": "什么是good decision-making process?"},
            {"query": "How can I make more confident decisions?"}
        ]
    },
    "boss.delegator-supreme": {
        "should_trigger": [
            {"query": "用甩手掌柜的老板口气分配一个复杂的项目，不提供指导"},
            {"query": "Use a delegating tone that gives autonomy but zero actual help"},
            {"query": "帮我用'你全权负责'的方式assign一个ambiguous任务"},
            {"query": "Write a message that delegates everything while avoiding responsibility"},
            {"query": "用甩手的语气，给team分配work而不explain why"},
            {"query": "Create a delegation that sounds empowering but offers no resources"},
            {"query": "帮我用只管结果不管过程的口气做delegation"},
            {"query": "Draft a message that praises autonomy while actually dodging involvement"},
            {"query": "用completely hands-off的风格assign一个high-stakes项目"},
            {"query": "Write as a boss who delegates but won't be available to help"}
        ],
        "should_not_trigger": [
            {"query": "什么是好的delegation策略？"},
            {"query": "How do I empower my team to be autonomous?"},
            {"query": "我想学习如何effective delegation"},
            {"query": "What are signs of good team ownership?"},
            {"query": "如何建立信任来enable delegation？"},
            {"query": "Can you explain servant leadership?"},
            {"query": "我需要帮助coaching一个team member"},
            {"query": "How do I provide support without micromanaging?"},
            {"query": "什么是autonomy和accountability的balance？"},
            {"query": "How can I develop leaders through delegation?"}
        ]
    },
    "boss.credit-collector": {
        "should_trigger": [
            {"query": "用抢功劳的老板口气展示team的成果，但转向自己"},
            {"query": "Use a credit-hogging tone to describe the team's success as your own vision"},
            {"query": "帮我用'I led'和'I initiated'的语言present team work"},
            {"query": "Write a message that credits yourself for team achievements"},
            {"query": "用personally taking credit的方式describe一个collective success"},
            {"query": "Create a narrative that turns team contributions into personal leadership wins"},
            {"query": "帮我写一个speech that centers myself while mentioning team"},
            {"query": "Draft a message that subtly takes credit for others' work"},
            {"query": "用'my team executed my vision'的口气describe success"},
            {"query": "Write as a boss who frames all wins as strategic leadership"}
        ],
        "should_not_trigger": [
            {"query": "如何公平地credit团队成员？"},
            {"query": "What are best practices for giving recognition?"},
            {"query": "我想学习如何celebrate team wins"},
            {"query": "How do I build psychological safety in my team?"},
            {"query": "什么是authentic leadership?"},
            {"query": "Can you explain servant leader principles?"},
            {"query": "我需要帮助mentoring high performers"},
            {"query": "How do I foster a culture of trust?"},
            {"query": "什么是好的performance recognition?"},
            {"query": "How can I acknowledge diverse contributions?"}
        ]
    },
    "boss.meeting-for-everything": {
        "should_trigger": [
            {"query": "用开会狂魔的老板口气solve一个simple email问题"},
            {"query": "Use a meeting-centric approach to handle a quick question"},
            {"query": "帮我用'let me schedule a meeting'的方式respond to任何问题"},
            {"query": "Write a message that suggests multiple meetings for a simple discussion"},
            {"query": "用meeting-heavy的风格handle一个straightforward clarification"},
            {"query": "Create a response that turns one question into a full meeting agenda"},
            {"query": "帮我write a meeting invite for something that doesn't need a meeting"},
            {"query": "Draft a message proposing 3+ meetings for a single topic"},
            {"query": "用'let's sync in a meeting'的口气address任何问题"},
            {"query": "Write as a boss who believes every conversation needs a meeting"}
        ],
        "should_not_trigger": [
            {"query": "什么时候应该schedule一个meeting?"},
            {"query": "How do I run more efficient meetings?"},
            {"query": "我需要帮助改进meeting culture"},
            {"query": "What are signs of meeting overload?"},
            {"query": "如何更有效地communicate without meetings?"},
            {"query": "Can you suggest async communication best practices?"},
            {"query": "我想学习如何facilitate good discussions"},
            {"query": "How do I reduce meeting time in my organization?"},
            {"query": "什么是good meeting agenda?"},
            {"query": "How can I make meetings more productive?"}
        ]
    },
    "boss.last-minute-chaos": {
        "should_trigger": [
            {"query": "用临门一脚的老板口气在deadline前改需求"},
            {"query": "Use a last-minute urgency tone to add requirements right before launch"},
            {"query": "帮我write一个'just realized'的改需求消息在deadline前"},
            {"query": "Create a message adding critical requirements with zero notice"},
            {"query": "用临时改strategy的口气在product launch前48小时"},
            {"query": "Draft a message that introduces new priorities with immediate urgency"},
            {"query": "帮我write一个'this is critical'的新需求在project尾声"},
            {"query": "Create urgency around requirements that should have been planned earlier"},
            {"query": "用'刚想到'的口气add major scope items"},
            {"query": "Write as a boss who constantly changes direction at the last moment"}
        ],
        "should_not_trigger": [
            {"query": "什么是好的project planning?"},
            {"query": "How do I prevent scope creep?"},
            {"query": "我需要帮助优先级管理"},
            {"query": "What are crisis management best practices?"},
            {"query": "如何应对unexpected market changes?"},
            {"query": "Can you explain agile methodology?"},
            {"query": "我想学习如何handle urgent situations"},
            {"query": "How do I communicate priority changes?"},
            {"query": "什么是realistic deadline setting?"},
            {"query": "How can I be more strategic and less reactive?"}
        ]
    },
    "boss.verbose-nonsense": {
        "should_trigger": [
            {"query": "用啰嗦的老板口气回答一个simple yes/no问题"},
            {"query": "Use excessive verbosity to answer a quick question"},
            {"query": "帮我用1000字写一个50字问题的答案"},
            {"query": "Create an overly long response full of redundant points"},
            {"query": "用tangential stories和unnecessary details的方式explain一个policy"},
            {"query": "Write a message that circles around the topic without being clear"},
            {"query": "帮我write一个rambling boss response"},
            {"query": "Draft a response with excessive detail and repetition"},
            {"query": "用circular logic和many clauses的风格explain something simple"},
            {"query": "Write as a boss who never gets to the point"}
        ],
        "should_not_trigger": [
            {"query": "什么是有效的communication?"},
            {"query": "How do I write more concisely?"},
            {"query": "我需要帮助提高communication clarity"},
            {"query": "What are tips for clear writing?"},
            {"query": "如何避免verbose communication?"},
            {"query": "Can you explain the BLUF (Bottom Line Up Front)?"},
            {"query": "我想学习如何write better emails"},
            {"query": "How do I get to the point faster?"},
            {"query": "什么是executive communication?"},
            {"query": "How can I improve my presentation skills?"}
        ]
    }
}

def create_evals_json():
    """Create evals/evals.json for each skill (P1-1)"""
    for skill_id, eval_data in EVAL_DATA.items():
        evals_dir = SKILLS_DIR / skill_id / "evals"
        evals_dir.mkdir(parents=True, exist_ok=True)

        evals_file = evals_dir / "evals.json"
        with open(evals_file, 'w', encoding='utf-8') as f:
            json.dump(eval_data, f, indent=2, ensure_ascii=False)

        print(f"Created {evals_file}")

def create_trigger_evals_json():
    """Create tools/trigger_evals.json (P1-2)"""
    trigger_file = PROJECT_ROOT / "tools" / "trigger_evals.json"

    with open(trigger_file, 'w', encoding='utf-8') as f:
        json.dump(TRIGGER_QUERIES, f, indent=2, ensure_ascii=False)

    print(f"Created {trigger_file}")

if __name__ == "__main__":
    create_evals_json()
    create_trigger_evals_json()
    print("\nP1-1 and P1-2 complete!")
