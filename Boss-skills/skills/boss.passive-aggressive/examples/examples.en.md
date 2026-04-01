# boss.passive-aggressive — Examples

## Example 1: Task Assignment

**Input:**
```yaml
task: "Finalize the Q3 budget proposal"
recipient: "Morgan"
deadline: "End of day Friday"
mode: "task_assignment"
```

**message:**
> Hey Morgan — I hope you're having a good week. Just wanted to touch base on the Q3 budget proposal. I'm sure you know how important this is, and I trust you have everything under control. Just to be helpful, when you finalize it, we'll probably want to make sure all the line items align with the strategic priorities we discussed in the executive meeting last month. I mentioned those priorities in an email — you probably saw that, right?
>
> Anyway, no pressure at all. I just need it by end of day Friday. I'm sure that's plenty of time given that the structure is already there. Let me know if you hit any snags!

**follow_up:**
> You didn't follow the strategic priorities I outlined last month. Do that. And you should have already known this. The fact that I have to mention it again is frustrating.

**hidden_insight:**
> moderate

---

## Example 2: Progress Check

**Input:**
```yaml
task: "Implement customer feedback feature"
current_status: "Still in design phase, 40% complete"
expectation: "Should be in development by now"
mode: "progress_check"
```

**message:**
> Hey — just checking in on the customer feedback feature. I'm sure you've been swamped with other stuff, so no judgment here. I'm just wondering if everything's going okay? Haven't heard much since we last talked about it three weeks ago.
>
> I don't want to micromanage or anything, but I'm mildly curious — when you say it's still in the design phase, is there something blocking the transition to dev? I only ask because I remember us talking about getting into development by now, but like I said, I'm sure you have your reasons. Not trying to rush you or anything. Just want to make sure we're still on track for the launch timeline.
>
> Let me know what you need from me to help move things along!

**follow_up:**
> You're two weeks behind schedule. You should have moved to development already. I'm disappointed that you're dragging on this, and I'm starting to question whether you're the right person for this project.

**hidden_insight:**
> high

---

## Example 3: Review/Feedback

**Input:**
```yaml
task: "Quarterly performance review"
current_status: "Employee submitted self-review; boss found it inadequate"
mode: "review"
```

**message:**
> Thanks so much for putting together your self-review — I can tell you put real thought into it. I've read through it a few times, and I think you've got a pretty good sense of your own work. I just want to gently raise a few things, not because there's anything *wrong* per se, it's just... hmm. Okay, so one thing that stands out to me is that you mentioned being a "strong collaborator," but I'm not sure that totally aligns with what I've been hearing? I could be misunderstanding, but I remember a few instances where feedback from the team suggested collaboration might be an area to develop more. No worries though — I'm sure you're aware of that.
>
> Also, on the impact side of things — you measured success pretty narrowly, and I'm wondering if you gave enough weight to the bigger picture contributions. I'm not saying they weren't there, I'm just saying the review didn't really capture them. Maybe more context in the next one?
>
> Anyway, good effort overall. Let's schedule our 1:1 to discuss this more fully.

**follow_up:**
> Your self-assessment is inaccurate and shows a lack of self-awareness. You're not as collaborative as you think you are, and you're underestimating how much this is a problem. Your impact assessment is also too narrow and self-serving.

**hidden_insight:**
> soul-crushing

---

## Example 4: Just Checking In

**Input:**
```yaml
task: "Late submission of project deliverables"
current_status: "Submitted 2 days after deadline"
mode: "casual_concern"
```

**message:**
> Hey! Just wanted to touch base. I got your deliverables — thank you for sending those over. I took a quick look and they look... well, they're complete, at least. I'm not saying anything's wrong, I just noticed they came in a couple days after the deadline. Probably just got slammed with other stuff, right?
>
> I'm sure you had good reasons. I'm not upset or anything. It's just, you know how these timelines work — when one thing is delayed, it kind of creates a ripple effect for everyone else. Not blaming you, I promise. I just want to make sure we're all on the same page about expectations moving forward. I'd hate for this to become a pattern.
>
> Anyway, we can talk about it in our next check-in. No big deal!

**follow_up:**
> You missed the deadline. This is unprofessional. You're creating problems for the rest of the team, and I'm questioning whether I can rely on you.

**hidden_insight:**
> moderate

---

## Example 5: Veiled Threat

**Input:**
```yaml
task: "Handling a controversial client request"
current_status: "Employee granted the request without escalating first"
mode: "escalation"
```

**message:**
> So I wanted to chat about the client request you just approved. I'm not upset — I just think it's important that we talk through how we're handling things going forward. This particular request was in a gray area, and I'm sure you thought it was fine, but I'm wondering if it might have been worth looping me in first? Again, not criticizing, I just want to make sure we have alignment on what kinds of requests are within the normal bounds of what you can approve independently.
>
> I'm mentioning this to you first before I mention it to anyone else, because I genuinely think you're capable of learning from this. I just... I'd hate for something like this to happen again and then I'd have to involve other people in the conversation, you know? I really do value you on the team, and I think this is a great opportunity to calibrate our expectations.
>
> Let's maybe set up a time to talk about decision-making frameworks. I think that would be really helpful.

**follow_up:**
> You overstepped your authority and made a decision that wasn't yours to make. If this happens again, I will escalate it and it will be documented. You're on thin ice.

**hidden_insight:**
> soul-crushing
