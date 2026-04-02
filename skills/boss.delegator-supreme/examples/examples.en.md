# boss.delegator-supreme — Examples

## Example 1: Task Assignment

**Input:**
```yaml
task: "Redesign the pricing page"
recipient: "Jamie"
deadline: "Two weeks"
mode: "task_assignment"
```

**message:**
> Hey Jamie — so I've been thinking about the pricing page, and I think it's a good time to take another pass at it. You've got a great eye for design, so I'm confident you'll come up with something solid. I'm pretty heads-down on other stuff, so I'm going to trust your judgment on the direction here.
>
> I'm not going to prescribe exactly how you should approach it, but I think something that **emphasizes the value prop more than we're doing now** would be good. Maybe something that really lets customers understand what they're getting for their money. You know, the usual design thinking stuff.
>
> Can you send over what you come up with in the next couple weeks? Nothing crazy polished — just something I can look at. Then we can schedule a time to align on it. Sound good?

**follow_up:**
> Oh, one more thing — I'm realizing I should probably mention that we're either going annual or monthly billing focus, but I'm curious which direction you'd lean on given your design perspective? What feels right to you?

**hidden_insight:**
> Redesign the pricing page to emphasize the value proposition more clearly, prioritizing either annual or monthly billing based on current company positioning.

---

## Example 2: Progress Check

**Input:**
```yaml
task: "Backend migration to new infrastructure"
current_status: "Halfway through Phase 1, some blockers encountered"
mode: "progress_check"
```

**message:**
> Hey — just checking in on the infrastructure migration. I haven't been super close to this, so I'm curious how you're thinking about it at this point? I know you mentioned blockers, and I want to understand your take on how to move through them.
>
> One thing I'm wondering about: **have you considered the rollback plan if we hit a major issue mid-migration?** Seems like that would be important to think through, but obviously you've got the technical expertise here. Just wanted to plant that seed.
>
> How are you feeling about where things are? What's your instinct on the timeline?

**follow_up:**
> Also — are we tracking this in a way that the rest of the team can see the status, or is it mostly just in your head right now? Might be good to have visibility somewhere.

**hidden_insight:**
> Develop a documented rollback plan for the infrastructure migration and create team visibility on phase progress and blockers.

---

## Example 3: Review

**Input:**
```yaml
task: "Marketing campaign proposal"
current_status: "First draft completed"
mode: "review"
```

**message:**
> Got the campaign proposal — thanks for putting that together. I took a look and overall the structure feels right. I haven't had time to dig into all the details, but I have some questions that might be worth thinking through.
>
> First — I'm curious about the channel mix. **Are we confident these channels are the right ones for this audience, or were there other options you considered and ruled out?** I'm asking because I'd love to understand the thinking there. Also, the budget breakdown — is that negotiable with our partners or is that locked in?
>
> Can you send me a brief summary of the key assumptions you made? Just so I understand how you arrived at these choices. Then maybe we should do a quick huddle with the team to make sure everyone's on the same page.

**follow_up:**
> Oh, and one more thing — what happens if response rates come in lower than projected? Do we have a pivot plan, or is this our best shot at this?

**hidden_insight:**
> Document the channel selection rationale and key budget assumptions; prepare contingency plans for lower-than-expected response rates.

---

## Example 4: Escalation

**Input:**
```yaml
task: "Customer success metrics dashboard"
current_status: "Stalled for three weeks, no clear reason"
deadline: "Was supposed to launch two weeks ago"
mode: "escalation"
```

**message:**
> Hey — wanted to touch base on the CS dashboard. I know things got busy, but I'm realizing I haven't heard much movement on this lately. I'm sure you've got good reasons, I just want to understand where things are at.
>
> Can we set up a quick sync to talk through what's blocking this? **I want to make sure there's nothing I should know about or any way the org can help unblock you.** No pressure from me, I just want to get this moving again. Maybe we can also chat about what a realistic timeline looks like from your perspective.
>
> In the meantime, can you send me a quick status note on what's been done, what's pending, and what the bottleneck is? Just so I have context.

**follow_up:**
> Also — would it help if I looped in [another team]? I'm just thinking aloud about whether there are dependencies I'm missing.

**hidden_insight:**
> Identify specific blockers preventing dashboard completion and coordinate cross-team dependencies to unblock progress by end of week.

---

## Example 5: Casual Chat

**Input:**
```yaml
task: "Just a general check-in"
mode: "casual_chat"
```

**message:**
> Hey — how's it all going? I feel like I've been MIA, so just wanted to circle back and see how things are on your end. Everything moving smoothly, or are there things I should know about?
>
> I was actually thinking about something the other day — **I wonder if we should rethink how we approach roadmap prioritization.** Nothing urgent, just something I've been mulling over. I know you've got your process, and I trust it, but I'm curious if there are things we could do differently?
>
> Anyway, no action needed right now. Just planting a thought. Let's sync up soon and I can throw out some ideas.

**follow_up:**
> Oh, by the way — did that thing from last month ever get resolved? I can't remember if we landed on a decision or if it's still pending.

**hidden_insight:**
> Consider exploring alternative roadmap prioritization approaches based on recent learnings or feedback.
