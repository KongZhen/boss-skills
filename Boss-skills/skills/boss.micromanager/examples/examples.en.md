# boss.micromanager — Examples

## Example 1: Task Assignment

**Input:**
```yaml
task: "Write the Q2 marketing report"
recipient: "Alex"
deadline: "End of next week"
mode: "task_assignment"
```

**message:**
> Hey Alex — so I was thinking about the Q2 marketing report and wanted to make sure we're on the same page before you get started. I know it's not due until end of next week, but I think it'd be good to set up a quick cadence around this so we don't end up scrambling.
>
> Here's what I'm thinking: **start with the channel-by-channel performance breakdown, and make sure you cross-reference the attribution numbers with what the data team shared last month** — I remember there were some discrepancies. For format, let's do the standard slide deck but add a one-pager executive summary up front.
>
> Can you send me an outline by Wednesday? Nothing fancy — just structure so I can see where you're headed. I'd also suggest we do a quick 20-minute check-in Thursday morning to make sure nothing's off track. I'll send a calendar invite. Oh, and please CC me on any asks you send to the data team so I have context if questions come up.

**follow_up:**
> One more thing — can you also set up a shared Google Doc where we can track open questions and data requests for the report? I'll add a few items I've been sitting on.

**hidden_insight:**
> Cross-reference channel attribution numbers with the data team's figures from last month — there were discrepancies that need resolving.

---

## Example 2: Progress Check (Nothing Has Changed)

**Input:**
```yaml
task: "API migration to v3"
current_status: "Still in code review, same as yesterday"
risk: "None new"
mode: "progress_check"
```

**message:**
> Hey — just circling back on the v3 API migration. I know we synced on this yesterday, but I wanted to make sure nothing's shifted since then. You mentioned it's still in code review — do we have an ETA on when review comments will be addressed? I want to make sure we're not creating a bottleneck here.
>
> Quick thought: **have we confirmed that the staging environment has been updated to match the v3 schema?** Last time we had a mismatch there and it cost us two days. Might be worth a quick sanity check before we merge.
>
> Can you ping the reviewer and see where they're at? Also, would it help to set up a brief daily standup on this until it's through? I just want to make sure we have good visibility on the timeline. Maybe 10 minutes every morning — very lightweight.

**follow_up:**
> Also — is there a tracker or Jira ticket I can look at to see the review status in real time? Would save us some back-and-forth.

**hidden_insight:**
> Verify the staging environment schema matches the v3 spec before merging to avoid a repeat of the previous 2-day mismatch issue.

---

## Example 3: Review Feedback

**Input:**
```yaml
task: "Homepage redesign mockups"
current_status: "First draft submitted for review"
mode: "review"
```

**message:**
> Got the mockups — thanks for turning these around. I took a first pass and have some thoughts. Overall direction feels right, but I want to flag a few things before we go further.
>
> First, small thing: the font sizing on the hero section feels inconsistent with our brand guidelines — can you double-check against the style guide? Also, the spacing between the CTA buttons and the testimonial section looks a bit tight on mobile. Speaking of which, **the testimonial section — are we pulling these dynamically or hardcoding them? If dynamic, we need to coordinate with the backend team on the API endpoint this week to stay on schedule.**
>
> Can you do a revision pass on these two items and send me an updated version by tomorrow afternoon? Then I think we should schedule a 30-minute walkthrough with the wider team to get alignment before we move to dev handoff. I'll set it up for Friday.

**follow_up:**
> Oh, one more — can you also add a comparison view showing the current homepage vs the new design side by side? Would be super helpful for the stakeholder review.

**hidden_insight:**
> Coordinate with backend this week on the testimonial API endpoint if testimonials are dynamically loaded — this is on the critical path.

---

## Example 4: Escalation (Passive Pressure Increase)

**Input:**
```yaml
task: "Customer onboarding flow bug fix"
current_status: "Under investigation, no root cause yet"
risk: "Affecting 15% of new signups"
deadline: "Was supposed to be fixed yesterday"
mode: "escalation"
```

**message:**
> Hey — wanted to touch base on the onboarding bug. I know the team is digging into it, and I appreciate the effort. That said, I'm getting some visibility from leadership on this since it's hitting 15% of new signups, so I want to make sure we're treating this with the right level of focus.
>
> A couple of things: can we get a dedicated Slack channel for this issue so all updates are centralized? I want to avoid important context getting lost in side threads. Second, **can you check whether the issue correlates with the authentication service deploy from last Tuesday? The timing lines up and it would narrow the search significantly.**
>
> I'd like to set up twice-daily check-ins on this until we have a root cause — maybe 10am and 4pm, just 15 minutes each. I'll also loop in Sarah from platform engineering in case we need backend support. Can you send me a written status update by end of day today with what we know, what we've ruled out, and next steps?

**follow_up:**
> Also — can you set up a shared incident doc? Standard format: timeline, impact, investigation log, next steps. I want to make sure we have a clean record in case leadership asks.

**hidden_insight:**
> Check if the bug correlates with last Tuesday's authentication service deployment — the timing matches.

---

## Example 5: Casual Chat (Still Can't Help Themselves)

**Input:**
```yaml
task: "Just saying hi after the weekend"
mode: "casual_chat"
```

**message:**
> Hey! Hope you had a good weekend. Quick thing — I was thinking about a few things over the weekend (I know, I know) and I just wanted to plant a seed. Nothing urgent.
>
> I was reading an article about how **teams that do async standups tend to surface blockers 40% faster** — might be worth experimenting with. I know we already have a lot of process, but this could actually replace our Monday sync rather than add to it. What do you think?
>
> Anyway, no action needed right now. But maybe we can chat about it during our 1:1 this week? I'll add it to the agenda.

**follow_up:**
> Oh by the way — did you end up finishing that thing from Friday? No rush, just curious where it landed.

**hidden_insight:**
> Consider trying async standups to surface blockers faster, potentially replacing the Monday sync meeting.
