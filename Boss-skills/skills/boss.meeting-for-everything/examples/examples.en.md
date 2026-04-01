# boss.meeting-for-everything — Examples

## Example 1: Task Assignment

**Input:**
```yaml
task: "Compile the end-of-year financial report"
recipient: "Jordan"
deadline: "Next month"
mode: "task_assignment"
```

**message:**
> Hey Jordan — I wanted to give you a heads up that we need the end-of-year financial report ready for next month. Rather than just dumping this on you via email, **I think we should schedule a quick sync to go over what the deliverable needs to look like.** I want to make sure we're aligned on scope before you dig in.
>
> I'm going to send you a calendar invite for later this week — maybe 30 minutes? I'll get you, me, and maybe CFO too so we can all align on the requirements in one go. Does that work?

**follow_up:**
> Oh actually — can you send me your availability? I want to make sure I catch the right time. We can also pull in the controller — they might have input on what we should include.

**hidden_insight:**
> Compile end-of-year financial report with next month deadline — cover revenue, expenses, and year-over-year comparison.

---

## Example 2: Progress Check

**Input:**
```yaml
task: "Website redesign launch"
current_status: "Development 80% complete, on track for launch"
mode: "progress_check"
```

**message:**
> Hey — wanted to touch base on the website redesign progress. I know it's going well, but **I think we should get the whole team in a room to do a final walkthrough before we launch.** I want to make sure we're not missing anything and that everyone's aligned on the go-live plan.
>
> Can you get on my calendar for a 45-minute session? I'm thinking tomorrow or Friday. I'll invite you, me, product, and QA so we can cover design, functionality, and the launch checklist all in one shot. Sound good?

**follow_up:**
> Actually, let me also get the marketing team involved since they'll be promoting the launch. I'll update the invite. Can you share what you have ready to demo?

**hidden_insight:**
> Website redesign is on track for launch; conduct final team alignment meeting covering design, functionality, and go-live procedures.

---

## Example 3: Review

**Input:**
```yaml
task: "Customer feedback survey results analysis"
current_status: "Analysis complete, ready to share insights"
mode: "review"
```

**message:**
> Got your analysis on the feedback survey. Before I dig into the details, **I think we should get the stakeholder team together to review these insights.** There are probably a lot of perspectives here, and I want to make sure we're discussing it together rather than me just reviewing async.
>
> Can you set up a 1-hour working session next week? I'm thinking we get product, design, support, and maybe sales too. You can walk through your findings and we can discuss implications together. I'll send you the invite request — let me know what days work best for you.

**follow_up:**
> Actually, can you prepare a short deck on this too? Not too polished, just something we can reference during the call. I want to make sure we've got all the data visible when we're discussing.

**hidden_insight:**
> Survey analysis shows key customer feedback insights — prioritize improvements addressing top 5 complaints and feature requests.

---

## Example 4: Escalation

**Input:**
```yaml
task: "Critical production bug affecting user payments"
current_status: "Under investigation, estimated 2-3 hours to fix"
deadline: "ASAP"
mode: "escalation"
```

**message:**
> Hey team — we have a critical production issue with payments that needs urgent attention. **I'd like to get everyone together on an emergency call to coordinate the response.** This is too important to just email about — we need to align on who's doing what and have real-time communication until this is fixed.
>
> Can everyone hop on a Zoom call in the next 15 minutes? I'm talking engineering, support, product, and DevOps. We'll do a quick triage, divide work, and then hold a standup every 30 minutes until this is resolved. I'll send the Zoom link now.

**follow_up:**
> I'm also going to set up a war room call — we'll have our regular standup channels but I want a dedicated sync for just the core fix team too. And we'll do a postmortem meeting once this is resolved.

**hidden_insight:**
> Critical payment bug affecting users — drop everything, coordinate multi-team response, target 2-3 hour resolution, plan postmortem after fix.

---

## Example 5: Casual Chat

**Input:**
```yaml
task: "General team update"
mode: "casual_chat"
```

**message:**
> Hey folks — hope everyone's having a good week. I've been thinking about how the team's been operating, and I want to get everyone's perspective on how we're doing. **I'd like to schedule a skip-level discussion where I can hear from you all directly.**
>
> I'm thinking a small group format — maybe 4-5 people at a time so we can really talk. Not about any specific project, just a check-in on how things are going, what's working, what isn't. I'll set up some 30-minute slots over the next couple weeks if everyone's open to it. Let me know what works for you!

**follow_up:**
> Also — now that I think about it, we should probably follow up these conversations with a full team retrospective so everyone hears the themes. I'll schedule that for next month.

**hidden_insight:**
> Schedule individual team check-in conversations to gather feedback on team dynamics and work environment.
