export type CommunicationMode =
  | 'task_assignment'
  | 'progress_check'
  | 'review'
  | 'meeting'
  | 'escalation'
  | 'casual_chat';

export type Locale = 'en' | 'zh-CN';

export interface PlaygroundInput {
  bossType: string;
  task: string;
  progress?: string;
  deadline?: string;
  mode: CommunicationMode;
  locale: Locale;
}

export interface PlaygroundOutput {
  message: string;
  follow_up: string;
  hidden_insight: string;
}

type BossTemplates = {
  [mode in CommunicationMode]: string[];
};

const templates: Record<string, Record<Locale, BossTemplates>> = {
  micromanager: {
    en: {
      task_assignment: [
        `So I'm assigning you {{task}}. I need you to send me a status update every 30 minutes — not because I don't trust you, but because transparency is key to alignment. Also, can you walk me through your approach before you start? I'm free for a sync in 5 minutes. CC me on all related emails, and please use the status format we discussed (which I'll send you in a follow-up). Just to confirm — you understand the deadline is {{deadline}}, right? Let's circle back on this in an hour.`,

        `Quick thing — I'm giving you {{task}} to handle. I know you're busy, but I'll need visibility into your progress starting immediately. Can you give me percentage updates? Like, where are we at? Also, I'd like to schedule a 15-minute sync to go over the approach. The deadline is {{deadline}}, and I'll follow up with a Slack message in 30 minutes just to check in. Sound good?`,

        `Alright, so {{task}} is now yours. Here's what I need: daily standups, a shared spreadsheet tracking progress, and an email update every evening. The deadline is {{deadline}}, and I'm assuming you'll reach out if anything shifts. Also, I'll probably pop into your calendar for a few check-ins along the way. Not invasive, just... comprehensive oversight. Let's talk in 45 minutes?`,
      ],
      progress_check: [
        `Hey, just checking in — where are we on {{task}}? No rush, but can you send me a quick status? And when you do, can you break it down by subtask? Also, {{progress}} sounds good, but can you give me percentages? Like, is it 50% or 65%? Need to know. Let me know within 15 minutes?`,

        `Quick question — any movement on {{task}} since we last talked? I know it's only been a few hours, but I just want to make sure we're on track for {{deadline}}. {{progress}} is helpful, but I'd love to see it in a spreadsheet. Also, any blockers I should know about? Let's sync in 20 minutes.`,

        `Status update time. {{task}} — where are we? I saw some activity, but I need the details. {{progress}} is great context, but can you give me the micro-level breakdown? Also, have you considered doing a dry-run first? Might be worth syncing on. Can you call me in 15?`,
      ],
      review: [
        `Okay, I reviewed {{task}}. Overall solid, but I have notes. First, the formatting doesn't match our standards — can you adjust the headers? Second, {{progress}} is great, but the structure feels off. Third, I want to schedule a review meeting to go over this properly. Can you revise and resubmit by tomorrow? Then we'll do a 30-minute sync to align.`,

        `Got it. {{task}} looks good — mostly. A few things: the approach is sound, but the documentation could be tighter. Also, I'd love to see the intermediate steps outlined before the final delivery. {{progress}} helps, but I want a visual breakdown too. Let's chat about this before you move forward?`,

        `Just reviewed {{task}}. The work is there, but I have some feedback. Minor style tweaks needed, and I want to understand the {{progress}} better. Can you send me a revised version with annotations explaining your decisions? Also, let's do a quick call to discuss. Probably just 20 minutes.`,
      ],
      meeting: [
        `So in this meeting, let's cover {{task}}. I know we discussed it in the pre-read, but let's go through it again just to be sure everyone's aligned. {{progress}}, {{deadline}} — these are critical. Also, before we wrap, can we identify action items? And maybe we should schedule a follow-up sync? Just to make sure nothing falls through the cracks. Sound good?`,

        `Alright, meeting agenda: {{task}}, {{progress}}, and whether we need any adjustments before {{deadline}}. Quick round of updates, then we'll dive deep. I'll be asking a lot of clarifying questions because I want to make sure there's no ambiguity. Also, I might want to loop in a couple more people to get their input. Cool?`,

        `Let's sync on {{task}}. I want to revisit the {{progress}} and make sure we're all aligned on the path to {{deadline}}. This will probably take about 45 minutes — I want to cover the status, any risks, and next steps. Can everyone commit to that? Also, I'll send a follow-up email with action items and a calendar invite for our next check-in.`,
      ],
      escalation: [
        `So, about {{task}} — I'm concerned. {{progress}} isn't where I'd expect it to be at this point, and we're still aiming for {{deadline}}. I need you to start sending me daily written updates in addition to our syncs. Also, I'm going to loop in {{progress}} stakeholder just to make sure we have all hands on deck. Can we schedule a meeting tomorrow morning? This is now priority zero.`,

        `I'm escalating my oversight on {{task}}. {{progress}} isn't moving fast enough, and {{deadline}} is coming up. I need: daily status emails, twice-daily Slack updates, and a meeting every morning at 9 AM. I'm also CCing the leadership team. This doesn't mean I don't trust you — it means this is now critical. Let's talk right now about what's blocking things.`,

        `Okay, {{task}} needs immediate attention. {{progress}} suggests we're slipping, and that can't happen with {{deadline}} approaching. Here's what's changing: I need hourly check-ins for the next 48 hours, a detailed mitigation plan, and I'm bringing in additional resources. I'm also scheduling daily standup with the whole team. We need to move fast. When can you start?`,
      ],
      casual_chat: [
        `Hey, how's it going with {{task}}? {{progress}} sounds manageable. Just thinking about {{deadline}} — do you feel like that's still realistic? Let me know. Also, if you need anything, just ping me. I'm pretty hands-on with this one, but only because I want to see you succeed.`,

        `So how's {{task}} treating you? {{progress}} is good progress — keep it up. {{deadline}} coming up, but I think you've got this. Just keep me in the loop, yeah? We can chat more next week. Lmk if there's anything you need from me.`,

        `How's life? How's the {{task}} going? {{progress}} — nice. {{deadline}} still feels doable? Good. Anyway, just wanted to check in. Let's grab coffee sometime and talk through this more casually. I know I come across as intense, but I do care about how you're doing, not just the metrics.`,
      ],
    },
    'zh-CN': {
      task_assignment: [
        `所以我给你分配{{task}}。我需要你每30分钟发送一个状态更新——不是因为我不信任你，而是因为透明度对对齐很关键。另外，在你开始之前能否走我讲一下你的方法？我5分钟后有空同步一下。所有相关邮件都抄送给我，请使用我们讨论过的状态格式（我会在后续消息中发送给你）。只是确认一下——你理解截止日期是{{deadline}}，对吧？我们一小时后再对齐一下。`,

        `快事——我给你{{task}}处理。我知道你很忙，但我需要从现在开始实时掌握你的进展。你能给我百分比更新吗？比如说，我们现在在哪里？另外，我想安排一个15分钟的同步来讨论方法。截止日期是{{deadline}}，我会在30分钟后用Slack消息跟进一下。没问题吧？`,

        `好的，所以{{task}}现在是你的了。我需要的是：每日站会、一个共享电子表格来追踪进展，以及每晚的电子邮件更新。截止日期是{{deadline}}，我假设如果有任何变化你会主动联系我。另外，我可能会在你的日历中添加几个检查点。不是侵入性的，只是...全面的监督。我们45分钟后聊？`,
      ],
      progress_check: [
        `嘿，我来查一下进度——{{task}}怎么样了？没关系，但你能给我发个快速状态更新吗？而且，你能按子任务分解吗？另外，{{progress}}听起来不错，但你能给我百分比吗？比如说，是50%还是65%？需要知道。15分钟内能回复吗？`,

        `快问一下——{{task}}自从上次谈话以来有进展吗？我知道只过了几个小时，但我只是想确保我们在按{{deadline}}的计划进行。{{progress}}很有帮助，但我希望看到一个电子表格。另外，有什么阻碍我应该知道吗？我们20分钟后同步一下。`,

        `状态更新时间。{{task}}——我们在哪里？我看到了一些活动，但我需要细节。{{progress}}提供了很好的背景，但你能给我微观层面的细节吗？另外，你考虑过先做一个试运行吗？可能值得同步一下。你能在15分钟内给我打电话吗？`,
      ],
      review: [
        `好的，我审查了{{task}}。总体来说不错，但我有意见。首先，格式不符合我们的标准——你能调整一下标题吗？其次，{{progress}}很好，但结构感觉不对。第三，我想安排一个审查会来正确讨论这个问题。你能在明天之前修改并重新提交吗？然后我们会做一个30分钟的同步来对齐。`,

        `收到了。{{task}}看起来不错——大部分是这样。几件事：方法是合理的，但文档可以更紧凑。另外，我很想在最终交付之前看到中间步骤的概述。{{progress}}有帮助，但我也想看看可视化的细节。在你继续之前我们能聊聊吗？`,

        `刚审查了{{task}}。工作完成了，但我有一些反馈。需要进行一些小的风格调整，我想更好地理解{{progress}}。你能发给我一个修改后的版本，并注释解释你的决定吗？另外，我们能打个电话讨论吗？可能只需要20分钟。`,
      ],
      meeting: [
        `好的，在这个会议中，让我们讨论{{task}}。我知道我们在预读中讨论过，但让我们再过一遍，以确保每个人都对齐。{{progress}}、{{deadline}}——这些都很关键。另外，在我们结束之前，我们能识别出行动项目吗？也许我们应该安排一个后续同步？只是为了确保没有任何东西被遗漏。好吗？`,

        `好的，会议议程：{{task}}、{{progress}}和我们是否需要在{{deadline}}之前进行任何调整。快速更新一轮，然后我们深入讨论。我会问很多澄清问题，因为我想确保没有歧义。另外，我可能想让一些人加入以获得他们的意见。可以吗？`,

        `让我们同步{{task}}。我想重新审视{{progress}}，确保我们都在实现{{deadline}}的路径上保持对齐。这可能需要大约45分钟——我想覆盖状态、任何风险和下一步。每个人都能承诺吗？另外，我会发送一个后续电子邮件，其中包含行动项目和我们下一次检查的日历邀请。`,
      ],
      escalation: [
        `所以，关于{{task}}——我很担心。{{progress}}不如我在这个阶段预期的那样，我们仍在瞄准{{deadline}}。我需要你除了同步外还要开始向我发送每日书面更新。另外，我将加入{{progress}}利益相关者，以确保我们有所有人手上。我们能在明天上午安排一个会议吗？这现在是优先级零。`,

        `我正在提升对{{task}}的监督。{{progress}}进展不够快，{{deadline}}即将到来。我需要：每日状态电子邮件、每日两次Slack更新和每天早上9点的会议。我也抄送了领导层。这并不意味着我不信任你——这意味着这现在是关键的。让我们现在谈谈什么在阻碍你。`,

        `好的，{{task}}需要立即关注。{{progress}}表明我们在下滑，这在{{deadline}}接近时不能发生。以下是正在改变的内容：我在接下来的48小时内需要每小时检查一次，一个详细的缓解计划，我正在引入额外资源。我也正在安排与整个团队的每日站会。我们需要迅速行动。你什么时候能开始？`,
      ],
      casual_chat: [
        `嘿，{{task}}怎么样？{{progress}}听起来还可以管理。只是在想{{deadline}}——你觉得这仍然是现实的吗？让我知道。另外，如果你需要什么，只需ping我。我对这个相当动手，但那是因为我想看到你成功。`,

        `那么{{task}}怎么样？{{progress}}是很好的进展——继续保持。{{deadline}}即将到来，但我认为你能做到。只要让我保持在循环中，好吗？我们下周可以更多地讨论。如果你需要我的任何东西，请告诉我。`,

        `生活怎么样？{{task}}进展如何？{{progress}}——不错。{{deadline}}仍然感觉可行？很好。不管怎样，我只是想检查一下。我们什么时候一起喝杯咖啡，更随意地讨论一下这个吧。我知道我显得很紧张，但我确实关心你的情况，不仅仅是指标。`,
      ],
    },
  },

  'passive-aggressive': {
    en: {
      task_assignment: [
        `So, I'm giving you {{task}}. I'm sure you'll handle it... differently than I would, but that's fine. That's totally fine. Just wanted to point out that {{deadline}} is coming up, and I've noticed that timelines can sometimes be... challenging for certain people. Not you specifically, of course. Just a general observation. Anyway, good luck with {{task}}. You've got this. Probably.`,

        `Interesting timing, but {{task}} needs to happen by {{deadline}}. Now, I know you mentioned being busy, and I totally respect that. I'm busy too, but I guess some of us just manage time differently. No judgment! I'm just saying, if you need help, you should have said something earlier. But sure, take your time. It's only a deadline. Let me know how it goes!`,

        `Oh, {{task}}! Yes, I was wondering when we'd get to that. So here's the thing — I need this done by {{deadline}}, and I'm going to assume you understand what that means. I remember last time we had a deadline, there were some... creative interpretations of the due date. But I'm sure this time will be different. Really, I'm confident. You'll surprise me.`,
      ],
      progress_check: [
        `Hey! Just following up on {{task}}. {{progress}}... is that good? I can't tell if that's as far as you wanted to be or if... well, you know. Not trying to imply anything, just checking. Some people interpret "progress" differently than others. I'm sure your interpretation is totally valid! Anyway, {{deadline}} is still the deadline, right? Just want to make sure we're on the same page.`,

        `So, {{task}}. {{progress}}. Interesting choice. Look, I'm not saying you're behind — I'm just saying that if I were doing it, I'd probably be at 80% by now. But everyone works at their own pace, and I respect that. You do you! Just remember {{deadline}} waits for no one. Mostly.`,

        `{{task}} update? {{progress}}. Cool, cool. You know, some people might have expected more by now, but I'm not some people. I'm your boss, which is even worse. Kidding! ...Sort of. Anyway, just making sure we're still on track for {{deadline}}. We are on track, right? Please say yes.`,
      ],
      review: [
        `Okay, so I looked at {{task}}. And I have to say... it's very... thorough. That's a word for it. I mean, it's not what I would have done, but then again, I'm not you. I suppose everyone has their own style. That's... great. Just wondering if you could maybe add {{progress}} of detail where I clearly indicated it was needed? Not a big deal. Just a thought!`,

        `So {{task}} — first of all, thanks for sending it! Always nice when people actually follow through. Now, the work itself is... something. I have notes, but I'm sure you'll be defensive about them anyway, so maybe I'll just keep them to myself. I'm kidding. Kind of. Could you maybe look at the {{progress}} section again? I think there's room for improvement.`,

        `I reviewed {{task}}. It's very... you. I mean that in the best way possible! It's just that I expected {{progress}} standard, and this is... different. Not bad, just different. I'm sure you had your reasons. Good reasons, probably. Want to grab a call and walk through my feedback? Nothing aggressive, just constructive.`,
      ],
      meeting: [
        `So we're meeting about {{task}}. I read the pre-read you sent — nice try, by the way, very creative. I'm just going to ask you to walk us through {{progress}} again, because I'm sure I misunderstood. And {{deadline}}, let's talk about that. I'm assuming it's still a hard deadline? Just checking. Because sometimes deadlines are more like... suggestions?`,

        `Alright, {{task}} meeting time. We're going to discuss {{progress}} and {{deadline}}. I'm bringing up some concerns — nothing personal, just professional observations. Like, I've been doing this for a while, and I've never seen {{progress}} quite like this. But I'm sure there's a reasonable explanation! Can't wait to hear it.`,

        `Let's sync on {{task}}. {{progress}} is... interesting. And {{deadline}} — wow, that's coming up. I have questions. So many questions. About your approach, your timeline, your assumptions about {{progress}}. But let's keep it light! I'm just curious. And slightly concerned. But mostly curious.`,
      ],
      escalation: [
        `So, {{task}}. I've been very patient — probably too patient, if I'm being honest. {{progress}} is not where it needs to be, and {{deadline}} is looming. Now, I'm not upset. I'm never upset. I'm just... disappointed. And by disappointed, I mean I'm going to have to get other people involved. Not because you can't do this, but because apparently you're choosing not to. So here we are.`,

        `{{task}} is now elevated. {{progress}} wasn't acceptable, and {{deadline}} is non-negotiable. I'm looping in more stakeholders because I guess I've been too trusting of you to manage this yourself. I know, my bad for believing in you. So starting now, we're doing daily check-ins, and I'm copying in management. Not because I want to, but because I have to. You understand.`,

        `Yeah, about {{task}} — we need to talk about accountability. {{progress}} is behind, {{deadline}} is at risk, and I'm frankly shocked we're here. I've tried being supportive. I've tried being hands-off. Clearly, that wasn't the right approach. So now we're going to be very hands-on. Daily updates, direct oversight, the whole thing. I hope you understand this is necessary.`,
      ],
      casual_chat: [
        `Hey, how's {{task}} treating you? {{progress}}, I assume? It's just that you seem stressed, and I want you to know I'm here for you. Even though I'm also your boss who's evaluating your performance on this. But mostly I'm here for you! {{deadline}} is still cool, right? You've got this.`,

        `So {{task}}... coming along? {{progress}}? Just asking because I care about your well-being, not because I'm secretly tracking whether you're going to meet {{deadline}}. I mean, I am, but that's separate from caring about you as a person. Those are two different things! Right?`,

        `Just wanted to check in about {{task}}. No pressure! {{progress}} seems... manageable? I know deadlines can be stressful, especially for people who struggle with time management. Not that you struggle! I'm just saying, in general. {{deadline}} is definitely doable though. Probably.`,
      ],
    },
    'zh-CN': {
      task_assignment: [
        `所以，我给你分配{{task}}。我确信你会以...不同的方式处理它，但那很好。那完全没问题。只想指出{{deadline}}即将到来，我注意到时间表对某些人来说有时可能是...具有挑战性的。不是你特别，当然不是。只是一般性的观察。无论如何，祝你{{task}}好运。你能做到。可能。`,

        `有趣的时机，但{{task}}需要在{{deadline}}之前完成。现在，我知道你提到很忙，我完全尊重。我也很忙，但我想有些人就是这样管理时间不同。没有评判！我只是说，如果你需要帮助，你应该更早说。但当然，随便。这只是一个截止日期。让我知道进展如何！`,

        `哦，{{task}}！是的，我一直在想什么时候我们会处理这个。所以这里是情况——我需要在{{deadline}}之前完成，我会假设你理解这意味着什么。我记得上次我们有截止日期时，有一些...创意性的解释。但我相信这次会不同。真的，我很有信心。你会让我惊喜。`,
      ],
      progress_check: [
        `嘿！只是跟进一下{{task}}。{{progress}}...那很好吗？我搞不清那是不是你想要达到的，或者如果...好吧，你知道。我没有想暗示什么，只是检查一下。有些人对"进展"的解释不同。我相信你的解释完全有效！无论如何，{{deadline}}仍然是截止日期，对吧？只是想确保我们在同一页上。`,

        `所以，{{task}}。{{progress}}。有趣的选择。看，我不是说你落后了——我只是说如果我在做的话，我现在可能已经在80%了。但每个人都以自己的速度工作，我尊重这一点。你继续！只是记住{{deadline}}对任何人都不会等待。大多是。`,

        `{{task}}更新？{{progress}}。很酷，很酷。你知道，有些人现在可能期望更多，但我不是有些人。我是你的老板，这更糟。开玩笑！...有点。无论如何，只是确保我们仍在为{{deadline}}做准备。我们在正轨上，对吧？请说是。`,
      ],
      review: [
        `好的，所以我看了{{task}}。我必须说...它非常...彻底。这对它来说是个词。我是说，这不是我会做的，但那是因为我不是你。我想每个人都有自己的风格。那是...很好。只是想知道你是否可以在我明确指出需要的地方添加{{progress}}的细节？不是什么大事。只是一个想法！`,

        `所以{{task}}——首先，谢谢你发送它！当人们真的完成时总是很好。现在，工作本身是...某种东西。我有笔记，但我相信你无论如何都会为它们辩护，所以也许我会把它们保留给自己。我开玩笑。有点。你能再看一遍{{progress}}部分吗？我认为有改进的空间。`,

        `我审查了{{task}}。它很...你。我是说最好的方式！只是我期望{{progress}}标准，这是...不同。不坏，只是不同。我相信你有你的原因。很好的原因，可能。想要抓一个电话来讨论我的反馈吗？没有什么激进的，只是建设性的。`,
      ],
      meeting: [
        `所以我们正在开会讨论{{task}}。我读了你发送的预读——顺便说一下，不错的尝试，非常有创意。我只是让你再次为我们讲解{{progress}}，因为我相信我误解了。以及{{deadline}}，让我们谈谈。我假设它仍然是硬截止日期？只是检查。因为有时截止日期更像是...建议？`,

        `好的，{{task}}会议时间。我们将讨论{{progress}}和{{deadline}}。我提出一些关切——没有个人的，只是专业的观察。比如，我已经在做这个有一段时间了，我从未见过{{progress}}完全像这样。但我相信有一个合理的解释！迫不及待地想听听。`,

        `让我们同步{{task}}。{{progress}}是...有趣。而{{deadline}}——哇，那即将到来。我有问题。太多问题。关于你的方法、你的时间表、你对{{progress}}的假设。但让我们保持轻松！我只是好奇。还有点担心。但主要是好奇。`,
      ],
      escalation: [
        `所以，{{task}}。我一直很有耐心——可能太有耐心了，如果我是诚实的话。{{progress}}不在它需要的地方，{{deadline}}迫在眉睫。现在，我不生气。我从不生气。我只是...失望。而当我说失望时，我是说我将不得不让其他人参与。不是因为你不能做到这一点，而是因为显然你选择不这样做。所以我们到了这里。`,

        `{{task}}现在已升级。{{progress}}不是可以接受的，{{deadline}}是不可协商的。我正在加入更多利益相关者，因为我想我对你管理这个本身的信任太多了。我知道，我坏了，因为我相信了你。所以从现在开始，我们正在进行每日检查，我正在复制管理部门。不是因为我想要，而是因为我必须。你明白了。`,

        `是的，关于{{task}}——我们需要谈论责任。{{progress}}落后，{{deadline}}处于危险中，我坦率地说对我们在这里感到震惊。我一直试图支持。我试过不干涉。显然，那不是正确的方法。所以现在我们将非常动手。每日更新、直接监督、整个事情。我希望你理解这是必要的。`,
      ],
      casual_chat: [
        `嘿，{{task}}怎么对待你？{{progress}}，我假设？只是你看起来很紧张，我想让你知道我在这里为你。即使我也是评估你在这方面的表现的老板。但主要是我在这里为你！{{deadline}}仍然很酷，对吧？你能做到。`,

        `所以{{task}}...进展？{{progress}}？只是在问因为我关心你的福利，而不是因为我在秘密追踪你是否会满足{{deadline}}。我是说，我是，但那与关心你作为一个人是分开的。这是两个不同的东西！对吧？`,

        `只是想检查一下{{task}}。没有压力！{{progress}}似乎...可以管理？我知道截止日期可能很有压力，尤其是对于在时间管理中挣扎的人。不是说你挣扎！我只是说，一般来说。{{deadline}}绝对是可行的。可能。`,
      ],
    },
  },

  'empty-promises': {
    en: {
      task_assignment: [
        `{{task}} is going to be amazing. I'm thinking big here. Like, really big. Here's what I'm envisioning: you'll handle this by {{deadline}}, and honestly, I think this could be the thing that changes everything. I'm going to get you support — lots of support. We just need to figure out what that looks like. But seriously, this is going to be your breakout moment. I can feel it. You've got this. Probably. We'll check in.`,

        `Alright, {{task}}. This is important. Critical, even. And I want you to know that you're not going to be alone on this. I'm going to help. Well, I'm going to try to help. My calendar is insane, but I'll find time. Probably. The deadline is {{deadline}}, and I'm telling you right now, if you need anything — and I mean anything — you let me know and we'll make it happen. We will. Definitely. Maybe.`,

        `So {{task}} — this is your moment. I believe in you. {{deadline}} is the target, but I have a good feeling about this. You know what? I'm going to personally make sure you have everything you need. I'm going to talk to finance about the budget, I'm going to get you a second pair of hands, and I'm going to check in... let's say weekly? Or biweekly? We'll figure out the cadence. You're going to crush this.`,
      ],
      progress_check: [
        `How's {{task}} coming? {{progress}}? That's... that's great. Look, I told you you'd be great at this. I had this feeling about you. Anyway, I was thinking — maybe we should escalate this a bit. Get you more resources, you know? I've been meaning to talk to the team about supporting you more. I'll send an email about it. Tomorrow. Or next week. The important thing is you're doing great. Keep it up!`,

        `{{task}} — {{progress}}. Excellent! I mean, I knew you could do this. I called it. I literally told someone the other day that you were going to crush {{task}}. So this is all going according to plan. {{deadline}} is still on track? Cool. Cool. I've got some ideas for making this even better, but we can talk about that later. You're doing amazing.`,

        `Status check on {{task}}: {{progress}}. Beautiful. Absolutely beautiful. You know, I was just thinking — when this is done, you deserve a raise. A big one. I'm going to bring it up with HR. They might say it's not the right time, but I'm going to push for it. You're crushing this. Just keep doing what you're doing. {{deadline}} is going to fly by.`,
      ],
      review: [
        `I finally looked at {{task}}. {{progress}} — this is fantastic. Seriously, I'm impressed. You know, I'm thinking about this for promotion visibility. Like, when the execs see this, they're going to wonder how we got such talent. Not you specifically, just... someone like you. Anyway, minor tweaks and it's gold. I'll send detailed feedback tomorrow. Or soon. You did great though, really.`,

        `{{task}} review: phenomenal work. {{progress}} is everything I hoped for and more. I'm actually showing this to some people upstairs. Going to be great for your profile. Just a few tiny notes, which I'll compile and send you... eventually. But honestly, you nailed this. I have big plans for you after this. Really big plans.`,

        `So {{task}}. This is the kind of work that gets noticed. {{progress}} is exactly what we needed. I'm going to feature this in the all-hands meeting next month. People need to see what good work looks like. Anyway, I have some suggestions for next steps, but really, you should be proud of this. This is the kind of thing that could lead to bigger things.`,
      ],
      meeting: [
        `Let's sync on {{task}}. I've been meaning to schedule this. {{progress}} — looks great, by the way. And {{deadline}}, we're good there? I think we are. Anyway, I have some really exciting ideas for where this goes next. But before we dive into that, tell me where your head is at. And also, I'm thinking about bringing in an outside expert to help. Or maybe I'll just do it myself. We'll see. But this is going somewhere big.`,

        `Okay, {{task}} meeting. {{progress}} is solid. {{deadline}} — we're tracking well. What I want to talk about is the potential here. Like, have you thought about what happens after this? Because I see real opportunity. I'm thinking bigger-picture stuff. I have some connections I could leverage, I just need to find time to make those calls. But the point is, this is just the beginning for you. Trust me.`,

        `So {{task}} — {{progress}} is excellent. Absolutely excellent. And {{deadline}} is totally achievable. But here's what's in my head: what if we use this as a foundation for something bigger? I'm going to spend some time thinking about this, and I'll circle back with you. Maybe next week? I have a lot going on, but this is important. You're important. To the company, I mean.`,
      ],
      escalation: [
        `Okay, so {{task}} is at risk. {{progress}} isn't where we need it to be for {{deadline}}. But don't worry — I'm going to fix this. I'm going to talk to the executive team, get you whatever resources you need, bump this up the priority list. I'm very influential in this company. You're going to be fine. I'll send you a detailed plan of action tomorrow. Or Friday. Definitely by next week.`,

        `{{task}} needs attention. {{progress}} is slipping toward {{deadline}}. I'm not worried though. Not about you, anyway. I'm going to personally take this on. I'm going to clear my calendar — well, I'm going to try. And I'm going to work with you to get this across the finish line. I have a lot of pull in this organization. We'll be fine. We always are.`,

        `So {{task}} is in trouble. {{progress}} vs. {{deadline}} — the math isn't great. But here's the thing: I've been in worse situations, and I've always found a way. I'm going to connect you with some people I know, we're going to reallocate some resources, and this is all going to work out. Trust me. I've got this. We've got this.`,
      ],
      casual_chat: [
        `How's everything going? {{task}} treating you well? {{progress}} is good, I imagine. You know, {{deadline}} isn't scaring me. I think you're going to surprise everyone with this. I've got a really good feeling about it. I told my boss the other day that you were going to nail this. So no pressure. You've got this. I believe in you.`,

        `Hey, just wanted to check in. {{task}}? {{progress}}? You seem like you've got it under control. I really do think this is going to be big for you. Like, career-defining big. After this, I'm going to make sure opportunities come your way. I know a lot of people. Doors are going to open. {{deadline}} is going to be fine.`,

        `So {{task}} — how are you feeling? {{progress}}? Great. Really, I can see this going places. {{deadline}} is just a milestone, you know? What matters is the trajectory. And your trajectory is up. I'm excited about your future here. Seriously. I'm going to do everything I can to support that.`,
      ],
    },
    'zh-CN': {
      task_assignment: [
        `{{task}}将会很棒。我在想大事情。像，真的很大。这是我的设想：你将在{{deadline}}之前处理这个，坦率地说，我认为这可能是改变一切的东西。我将为你提供支持——大量的支持。我们只需要弄清楚这看起来像什么。但认真地说，这将是你的突破时刻。我能感受到。你能做到。可能。我们会检查。`,

        `好的，{{task}}。这很重要。甚至关键。我想让你知道你不会独自做这个。我会帮助。好吧，我会试图帮助。我的日历很疯狂，但我会找到时间。可能。截止日期是{{deadline}}，我现在告诉你，如果你需要什么——我是说任何东西——你就让我知道，我们会让它发生。我们会的。绝对。也许。`,

        `所以{{task}}——这是你的时刻。我相信你。{{deadline}}是目标，但我对此有很好的感觉。你知道吗？我要亲自确保你拥有所需的一切。我会和财务部谈论预算，我会给你第二对手，我会检查...比如说每周？或者每两周一次？我们会弄清楚节奏。你会摧毁这个。`,
      ],
      progress_check: [
        `{{task}}怎么样？{{progress}}？那是...那很好。听着，我告诉过你你会很擅长这个。我对你有这种感觉。无论如何，我在想——也许我们应该提升这个。为你提供更多资源，你知道吗？我一直想和团队谈论更多支持你。我会发一封关于这件事的电子邮件。明天。或者下周。重要的是你正在做得很好。坚持！`,

        `{{task}}——{{progress}}。优秀！我是说，我知道你会在这方面很棒。我是这样称呼的。我几天前真的告诉某人你会粉碎{{task}}。所以这一切都按计划进行。{{deadline}}仍在按计划进行？很好。很好。我有一些想法可以使这个变得更好，但我们稍后可以讨论。你做得很好。`,

        `{{task}}上的状态检查：{{progress}}。美丽。绝对美丽。你知道，我刚刚在想——当这完成时，你应得到加薪。一个大的。我会和人力资源部谈论。他们可能会说现在不是时候，但我会为此推动。你正在摧毁这个。只要继续做你正在做的。{{deadline}}会飞速过去。`,
      ],
      review: [
        `我终于看了{{task}}。{{progress}}——这很棒。认真地说，我印象深刻。你知道，我在想这对晋升可见性。比如，当执行官看到这个时，他们会想知道我们是如何得到这样的天才的。不是你特别，只是...某人像你这样的。无论如何，微小的调整，它就是黄金。我会在明天或很快发送详细反馈。不过你做得很好，真的。`,

        `{{task}}评论：非凡的工作。{{progress}}是我所希望的一切等等。我实际上在向一些上面的人展示这个。对你的个资很好。只是几个小笔记，我会编译并发送给你...最终。但坦率地说，你钉住了这个。在这之后我对你有大计划。真的很大的计划。`,

        `所以{{task}}。这是受到关注的工作类型。{{progress}}正是我们需要的。我会在下个月的全手会议中展示这个。人们需要看到好工作是什么样子。无论如何，我有一些下一步的建议，但真的，你应该以此为荣。这是可能导致更大事物的那种事物。`,
      ],
      meeting: [
        `让我们同步{{task}}。我一直想安排这个。{{progress}}——顺便说一下，看起来很好。而{{deadline}}，我们在那里很好吗？我认为我们是。无论如何，我对这接下来的方向有一些真正令人兴奋的想法。但在我们深入之前，告诉我你的想法是什么。我也在考虑引入一个外部专家来帮助。或者也许我会自己做。我们会看。但这是往某个大的地方去。`,

        `好的，{{task}}会议。{{progress}}是稳实的。{{deadline}}——我们正在良好地追踪。我想谈论的是这里的潜力。比如，你是否想过这之后会发生什么？因为我看到真正的机会。我在想更大的图景东西。我有一些我可以利用的联系，我只需要找到时间来进行这些电话。但要点是，这对你来说只是开始。相信我。`,

        `所以{{task}}——{{progress}}很好。绝对很好。而{{deadline}}是完全可以实现的。但这是我头脑中的内容：如果我们使用它作为更大事物的基础怎么办？我会花些时间思考这个，我会再回到你身边。也许下周？我有很多事在进行，但这很重要。你很重要。对公司，我是说。`,
      ],
      escalation: [
        `好的，所以{{task}}处于危险中。{{progress}}不在我们为{{deadline}}需要的地方。但别担心——我会解决这个。我会和执行团队谈话，为你提供你需要的任何资源，提升这个的优先级列表。我在这个公司非常有影响力。你会没事的。我会在明天或星期五给你一个详细的行动计划。绝对下周之前。`,

        `{{task}}需要关注。{{progress}}向{{deadline}}下滑。但我不担心。不是关于你，无论如何。我要个人接手这个。我会清理我的日历——好吧，我会试着。我会和你一起工作，让这个通过终点线。我在这个组织中有很多影响力。我们会很好。我们总是。`,

        `所以{{task}}陷入困境。{{progress}}对{{deadline}}——数学不太好。但事情是这样的：我一直处于更糟糕的情况，我总是找到了一个方法。我会把你和一些我认识的人联系起来，我们会重新分配一些资源，这一切都会成功。相信我。我能处理。我们有这个。`,
      ],
      casual_chat: [
        `一切进展如何？{{task}}对你好吗？{{progress}}应该很好。你知道，{{deadline}}没有吓到我。我认为你会以这个让每个人惊讶。我对此有非常好的感觉。我几天前告诉我的老板你会钉住这个。所以没有压力。你能做到。我相信你。`,

        `嘿，只是想检查一下。{{task}}？{{progress}}？你似乎可以控制。我真的认为这对你来说会很大。像，职业定义的大。在这之后，我会确保机会朝你的方向来。我认识很多人。门将打开。{{deadline}}会很好。`,

        `所以{{task}}——你感觉如何？{{progress}}？很好。真的，我可以看到这往某个地方去。{{deadline}}只是一个里程碑，你知道吗？重要的是轨迹。而你的轨迹是向上的。我对你在这里的未来感到兴奋。认真地说。我会尽一切所能来支持。`,
      ],
    },
  },

  'flip-flopper': {
    en: {
      task_assignment: [
        `Okay, so {{task}} — I want you to do it this way. Actually, wait. Maybe the other way is better. You know what, let me think about this and get back to you. But start on {{task}} anyway, because {{deadline}} is coming and we don't have time to wait. Or do we? Hmm. Anyway, here's the approach: [approach]. Actually, no, that's wrong. Scratch that. Let me send you a revised approach in 20 minutes. Just start, and we'll adjust as we go.`,

        `Alright, {{task}} — this is what I want: [detailed plan]. Actually, that's too detailed. Simplify it. Make it simpler. {{deadline}} is {{deadline}}, so we need to move fast. Or maybe we need to be more careful? I don't know. Look, just start with the first part, and I'll clarify the rest as we go. Or maybe start with the second part. Whichever makes more sense to you. Let me know what you decide.`,

        `So {{task}} needs to happen by {{deadline}}. Here's my vision: [vision]. Wait, no, that vision is outdated. Forget that. What if we did [completely different approach] instead? That's better. Definitely better. OK wait, but the original approach also had merit. You know what, why don't you start with whichever one feels right, and we'll pivot if needed. We'll definitely pivot. Maybe multiple times.`,
      ],
      progress_check: [
        `How's {{task}} going? {{progress}}? Okay, good. Actually, wait — is that the direction you're going? Because I'm second-guessing that now. It might be better to pivot toward [different direction]. Or maybe keep going the way you were? I don't know. {{progress}} looks good, but also kind of concerning. Let's discuss. Unless you're too busy. Are you busy? Anyway, what do you think?`,

        `Status on {{task}}? {{progress}}. That's... that's good, right? It's good. Wait, no, I think we should actually go in a different direction. Not drastically different, just... different. Or maybe not. Keep going with {{progress}} for now. Definitely keep going. But be ready to change course. I'll let you know when. Or maybe you can tell me when. Whenever you think it makes sense.`,

        `Update on {{task}}: {{progress}}. You know, I'm looking at this and thinking maybe we should have done it differently from the start. But we can't change the past. We can only change the future. So starting now, what if we [new approach]? Actually, the old approach might still work. Let's give it 24 more hours and see. Or let's pivot immediately. Your call.`,
      ],
      review: [
        `I looked at {{task}}. {{progress}} is solid, but I'm wondering if we should adjust. The direction feels... off? Or maybe it's right. Let me think about this. Actually, I think [change]  is needed. Or we could keep it as is. {{progress}} is actually pretty good when I look at it again. You know what, minor tweaks and this is great. Or maybe major tweaks. What do you think? Which feels right to you?`,

        `{{task}} review: the {{progress}} section is great, but should we reframe the whole thing? Or is the framing fine? I keep going back and forth. The work itself is good — definitely good — but the presentation could be tighter. Or looser. Depends on the audience. Who's the audience again? Anyway, it's good. Or good with adjustments. I'll send you notes... eventually.`,

        `So {{task}} — {{progress}} is there, but I'm flip-flopping on whether this is the final direction. It could go this way [option A], or it could go that way [option B]. Both seem equally valid. Which one resonates with you? I'm genuinely unsure. But we need to commit soon because {{deadline}} isn't that far away. Or is it? When is the deadline again?`,
      ],
      meeting: [
        `Alright, let's talk {{task}}. {{progress}} is where we are. Now, here's what I'm thinking: [direction A]. Actually, I've changed my mind — [direction B] might be better. Or actually, [direction A] was right the first time. Anyway, {{deadline}} is approaching, so we need to make a decision. What's your gut telling you? No wait, I just had another thought...`,

        `Meeting time for {{task}}. {{progress}} — we're here. I have some feedback. The approach is good, but also maybe not. I'm actually torn. Your execution is solid, but should we change the strategy? I keep flip-flopping on this. Let me ask you: if you had to bet your career on the current direction, would you? Because I would. Or I wouldn't. It depends on how I'm feeling.`,

        `Let's sync on {{task}}. {{progress}} is the status. Now, I want to talk about next steps. {{deadline}} is coming. I'm thinking we should either accelerate, decelerate, or stay the course. All three options seem valid. What would you recommend? Actually, what I recommend is [option A]. Or [option B]. I'll send you a decision by tomorrow. Or the day after.`,
      ],
      escalation: [
        `Okay, so {{task}} — {{progress}} isn't great, but it's not terrible either. I'm torn on whether this is a crisis or manageable. {{deadline}} is at risk, or maybe it's fine. I'm going to escalate this... or maybe not. Let me think. Actually, yes, we need to escalate. Or do we? I'll loop in my boss. Or I might not. Let me see how I feel about this tomorrow.`,

        `{{task}} situation: {{progress}} is behind where I wanted, but also maybe on par with expectations. {{deadline}} is tight. I'm freaking out, or I'm calm about it. Hard to tell. I'm definitely going to increase check-ins. Or maybe I shouldn't be helicopter-parenting this. But the stakes feel high. Or do they? I'm going to have a serious conversation with you. Or maybe a casual one. We'll see.`,

        `So {{task}} — {{progress}} vs. {{deadline}}. This is concerning. Or it's fine. {{progress}} has me worried. Or does it? You're capable, so maybe this will work out. Or maybe we need more aggressive intervention. I'm going to get more people involved. Or maybe that will just slow things down. I genuinely don't know. But let's definitely talk. Maybe today. Or tomorrow. Whenever you're free.`,
      ],
      casual_chat: [
        `Hey, how's {{task}} treating you? {{progress}}? That's great! Or is it? I keep second-guessing things. You know what, you're doing amazing. Don't listen to my doubt. Actually, do listen to it a little. {{deadline}} is coming, but you've got this. Or we both need to hustle. Or everything is fine and I'm just a worrier. Yeah, that's probably it.`,

        `{{task}} update? {{progress}}. Nice. Or should we revisit the approach? I think you're doing great, but I also have doubts. Ignore the doubts. Actually, consider them. You know what, you're crushing it. I have faith. {{deadline}}-wise, we're good, right? Yeah, we're good. Maybe. I believe in you!`,

        `So {{task}}. {{progress}}. You're doing well. Or could do better. Actually, you're doing well. Seriously, I'm impressed. But also wondering if we should pivot. Don't pivot. Or do. You know your work best. {{deadline}} will be fine. Probably. You've got this. I think. I mean, yes. Definitely yes.`,
      ],
    },
    'zh-CN': {
      task_assignment: [
        `好的，所以{{task}}——我想让你这样做。实际上，等等。也许另一种方式更好。你知道吗，让我想想，然后回到你身边。但无论如何开始{{task}}，因为{{deadline}}即将到来，我们没有时间等待。或者我们有吗？嗯。无论如何，这是方法：[方法]。实际上，不，那是错的。忽略那个。让我在20分钟内给你发送修改后的方法。只需开始，我们会随着进展进行调整。`,

        `好的，{{task}}——这是我想要的：[详细的计划]。实际上，那太详细了。简化它。使其更简单。{{deadline}}是{{deadline}}，所以我们需要快速移动。或者我们需要更谨慎？我不知道。听着，只需从第一部分开始，我会澄清其余部分。或者也许从第二部分开始。无论对你来说更有意义。告诉我你决定什么。`,

        `所以{{task}}需要在{{deadline}}之前发生。这是我的愿景：[愿景]。等等，不，那个愿景已经过时。忘记那个。如果我们做[完全不同的方法]呢？那更好。绝对更好。好的，等等，但原来的方法也有优点。你知道吗，为什么你不开始用感觉正确的那个，如果需要我们会转向？我们肯定会转向。也许多次。`,
      ],
      progress_check: [
        `{{task}}怎么样？{{progress}}？好的，很好。实际上，等等——那是你的方向吗？因为我现在在重新审视这个。可能更好地向[不同方向]转向。或者也许继续你的方式？我不知道。{{progress}}看起来很好，但也有点令人担忧。让我们讨论。除非你太忙了。你忙吗？无论如何，你怎么认为？`,

        `{{task}}的状态？{{progress}}。那是...那很好，对吧？很好。等等，不，我认为我们实际上应该向不同的方向转向。不是非常不同，只是...不同。或者也许不。继续{{progress}}。绝对继续。但准备改变方向。我会让你知道什么时候。或者也许你可以告诉我什么时候。无论你何时认为这有意义。`,

        `{{task}}更新：{{progress}}。你知道，我看着这个并想也许我们从一开始就应该以不同的方式做。但我们不能改变过去。我们只能改变未来。所以从现在开始，如果我们[新方法]呢？实际上，旧方法可能仍然有效。再给它24小时看。或者立即转向。你的电话。`,
      ],
      review: [
        `我看了{{task}}。{{progress}}是稳实的，但我在想我们是否应该调整。方向感觉...关闭？或者也许这是对的。让我想想。实际上，我认为[变更]是需要的。或者我们可以保持原状。{{progress}}实际上当我再看一遍时相当不错。你知道吗，小的调整，这很好。或者也许大的调整。你怎么认为？哪一个对你来说感觉正确？`,

        `{{task}}评论：{{progress}}部分很好，但我们应该重新框架整个事情吗？或者框架很好吗？我不断地来回。工作本身很好——绝对很好——但演示可以更紧。或者更松散。取决于观众。谁是观众，再一次？无论如何，很好。或者很好，有调整。我会给你送笔记...最终。`,

        `所以{{task}}——{{progress}}在那里，但我正在翻转是否这是最终方向。它可以这样[选项A]，或者它可以那样[选项B]。两者似乎同样有效。哪一个与你共鸣？我真的不确定。但我们需要很快承诺，因为{{deadline}}不是那么遥远。或者是？截止日期再次是什么时候？`,
      ],
      meeting: [
        `好的，让我们谈{{task}}。{{progress}}是我们的位置。现在，这是我的想法：[方向A]。实际上，我改变了主意——[方向B]可能更好。或者实际上，[方向A]第一次是对的。无论如何，{{deadline}}即将到来，所以我们需要做个决定。你的直觉告诉你什么？没有等等，我刚刚有另一个想法...`,

        `{{task}}会议时间。{{progress}}——我们在这里。我有一些反馈。方法很好，但也许不是。我实际上被撕裂了。你的执行很稳实，但我们应该改变策略吗？我一直在翻转。让我问你：如果你必须把你的职业打赌在当前方向上，你会吗？因为我会。或者我不会。这取决于我的感受。`,

        `让我们同步{{task}}。{{progress}}是状态。现在，我想谈论下一步。{{deadline}}来了。我在想我们应该加速、减速或保持航向。所有三个选项似乎都是有效的。你会推荐什么？实际上，我的建议是[选项A]。或[选项B]。我会在明天给你发送决定。或者后天。`,
      ],
      escalation: [
        `好的，所以{{task}}——{{progress}}不是很好，但也不是很糟糕。我被撕裂了，这是危机还是可以管理。{{deadline}}处于危险中，或者也许很好。我会升级这个...或者也许不会。让我想想。实际上，是的，我们需要升级。或者我们做吗？我会让我的老板参与。或者我可能不会。让我看看我明天对此的感受。`,

        `{{task}}情况：{{progress}}落后于我想要的，但也许也符合期望。{{deadline}}很紧。我在发疯，或者我对此很平静。很难说。我肯定会增加检查。或者也许我不应该直升机养育这个。但赌注似乎很高。或者他们是吗？我要和你进行一次严肃的谈话。或者也许一个随意的。我们会看。`,

        `所以{{task}}——{{progress}}对{{deadline}}。这令人担忧。或者它很好。{{progress}}让我担忧。或者它是吗？你很有能力，所以也许这会成功。或者也许我们需要更积极的干预。我会让更多的人参与。或者也许那只会减速。我真的不知道。但让我们绝对谈话。也许今天。或明天。无论你何时有空。`,
      ],
      casual_chat: [
        `嘿，{{task}}对你怎么样？{{progress}}？那太好了！或者是？我一直在重新思考事物。你知道吗，你做得很棒。不要听我的疑虑。实际上，听一点。{{deadline}}来了，但你能做到。或者我们两个都需要忙碌。或者一切都很好，我只是一个担心者。是的，那可能是。`,

        `{{task}}更新？{{progress}}。很好。或者我们应该重新审视方法？我认为你做得很好，但我也有疑虑。忽略疑虑。实际上，考虑他们。你知道吗，你正在摧毁它。我有信心。{{deadline}}-明智，我们很好，对吧？是的，我们很好。也许。我相信你！`,

        `所以{{task}}。{{progress}}。你做得很好。或者可以做得更好。实际上，你做得很好。认真地说，我印象深刻。但也想知道我们是否应该转向。不要转向。或者做。你最了解你的工作。{{deadline}}会很好。可能。你能做到。我认为。我是说，是的。绝对是的。`,
      ],
    },
  },
};

function selectRandomTemplate(templateList: string[]): string {
  return templateList[Math.floor(Math.random() * templateList.length)];
}

function fillTemplate(
  template: string,
  inputs: PlaygroundInput
): string {
  let result = template;
  result = result.replace(/{{task}}/g, inputs.task || '[task]');
  result = result.replace(/{{progress}}/g, inputs.progress || '[progress]');
  result = result.replace(/{{deadline}}/g, inputs.deadline || '[deadline]');
  return result;
}

export function generateResponse(input: PlaygroundInput): PlaygroundOutput {
  const bossTemplates = templates[input.bossType];
  if (!bossTemplates) {
    return {
      message: `No templates found for boss type: ${input.bossType}`,
      follow_up: 'Please select a valid boss type',
      hidden_insight: 'Adjust boss type and try again',
    };
  }

  const localeTemplates = bossTemplates[input.locale];
  if (!localeTemplates) {
    return {
      message: `No templates found for locale: ${input.locale}`,
      follow_up: 'Please select a valid locale',
      hidden_insight: 'Adjust locale and try again',
    };
  }

  const modeTemplates = localeTemplates[input.mode];
  if (!modeTemplates || modeTemplates.length === 0) {
    return {
      message: `No templates found for mode: ${input.mode}`,
      follow_up: 'Please select a valid communication mode',
      hidden_insight: 'Adjust mode and try again',
    };
  }

  const selectedTemplate = selectRandomTemplate(modeTemplates);
  const message = fillTemplate(selectedTemplate, input);

  // For now, follow_up and hidden_insight are simplified
  // In a real system, these could be generated from the template or have their own templates
  const followUpTemplates = [
    'Have you thought about the implications of {{task}}?',
    'What is your timeline looking like for {{task}}?',
    'Can we sync up about {{task}} soon?',
    'How are you feeling about {{deadline}}?',
  ];

  const insightTemplates = [
    'Boss is actually concerned about risk, but expressing it poorly',
    'Boss wants to be involved but does not know how to ask',
    'The real issue is {{deadline}} pressure, not the quality of {{task}}',
    'Boss is uncertain about the direction and wants reassurance',
  ];

  const followUpTemplate = selectRandomTemplate(followUpTemplates);
  const insightTemplate = selectRandomTemplate(insightTemplates);

  const followUp = fillTemplate(followUpTemplate, input);
  const hiddenInsight = fillTemplate(insightTemplate, input);

  return {
    message,
    follow_up: followUp,
    hidden_insight: hiddenInsight,
  };
}
