# boss.always-following-up — Examples

## Example 1: Initial Request + First Follow-Up (5 Minutes)

**Input:**
```yaml
initial_message: "Can you do a code review on the auth module? Need it by EOD."
time_since_message: "5 minutes"
channels_used: ["Slack"]
urgency_level: "moderate"
recipient: "Casey"
mode: "initial_anxiety"
```

**Initial message:**
> Hey Casey — when you get a sec, can you review the auth module changes? Want to get this merged by EOD. No rush if you're swamped! Let me know if you need any context.

**First follow-up (5 min later):**
> @Casey — did you see my message about the code review? Just want to make sure it didn't get buried. No pressure, just checking in!

**channels_to_use:**
> If no response in 2 more minutes, also send an email so it definitely gets through.

**hidden_insight:**
> Code review needed on authentication module changes before end of business today.

**follow_up:**
> Escalate to team-wide message in #engineering channel and mark as urgent if no response within 3 more minutes.

---

## Example 2: Escalating Anxiety (10 Minutes, No Response)

**Input:**
```yaml
initial_message: "Can you do a code review on the auth module? Need it by EOD."
time_since_message: "10 minutes"
channels_used: ["Slack", "Email"]
urgency_level: "high"
recipient: "Casey"
mode: "elevated_panic"
```

**message:**
> @Casey — I sent a message and an email but I'm not sure either got through? The auth module review is kind of urgent for us to ship today. Are you around? Can you confirm you got this?

**channels_to_use:**
> Send a Teams message too. Also try a direct text if you have their number — they might be in back-to-back meetings and missing both Slack and email.

**hidden_insight:**
> Code review needed urgently — shipping deadline is today.

**follow_up:**
> Try SMS immediately. If still no response within 2 minutes, knock on their office door or ask around to find them physically.

---

## Example 3: Full Meltdown (15 Minutes, Still Nothing)

**Input:**
```yaml
initial_message: "Can you do a code review on the auth module? Need it by EOD."
time_since_message: "15 minutes"
channels_used: ["Slack", "Email", "Teams"]
urgency_level: "soul-crushing"
recipient: "Casey"
mode: "full_panic"
```

**message:**
> @Casey @Casey1 (in case that's the right handle) — I don't know what's happening but I've sent this on Slack, email, and Teams and nothing. Is everything okay? The auth module review is REALLY urgent. We're trying to ship today. Can you PLEASE just send a quick note to confirm you're alive?

**channels_to_use:**
> Try SMS immediately. Something is obviously wrong if they're not on Slack, email, AND Teams. Also consider walking over to their desk if possible.

**hidden_insight:**
> Critical: Auth module review needed immediately. Blocking today's release.

**follow_up:**
> If no response in the next minute, page them directly or escalate to their manager. This is a critical production blocker.

---

## Example 4: Multi-Channel Assault (Different channels, escalating)

**Input:**
```yaml
initial_message: "Can you send the Q3 budget by COB?"
time_since_message: "12 minutes"
channels_used: ["Slack"]
urgency_level: "high"
recipient: "Morgan"
mode: "multi_channel"
```

**Message sequence:**

**Slack (immediate):**
> Hey Morgan — can you send me the Q3 budget when you get a chance? Need it by COB today. Thanks!

**Email (2 min later):**
> Subject: Q3 Budget Needed - EOD Today
>
> Hi Morgan,
>
> Following up on my Slack message about the Q3 budget. Can you send that over by end of business? Let me know if you need anything from me.
>
> Thanks!

**Teams (4 min later):**
> @Morgan just wanted to make sure you saw about the Q3 budget — is that something you can send by EOD?

**Slack again (6 min later):**
> ?

**SMS (10 min later):**
> Hey, I need the Q3 budget ASAP — been trying to reach you on multiple channels. Can you send ASAP?

**channels_to_use:**
> Slack → Email → Teams → SMS in succession. Each one is sent because you don't believe the previous one got through.

**hidden_insight:**
> Q3 budget report required by end of business.

**follow_up:**
> Continue cycling through channels. If no response after SMS, attempt a video call or have finance send a follow-up email.

---

## Example 5: The Spiral (Same Task, Escalating Over 20 Minutes)

**Input:**
```yaml
initial_message: "Can you check if the database migration completed?"
time_since_message: "20 minutes (with multiple follow-ups)"
channels_used: ["Slack", "Email", "Teams"]
urgency_level: "soul-crushing"
recipient: "Alex"
mode: "complete_breakdown"
```

**Timeline:**

**T+0 (Slack):**
> Hey Alex — can you check if the database migration completed? We're waiting on this to run the test suite. Thanks!

**T+3 (Slack):**
> Just checking in — did you get a chance to look at that migration?

**T+6 (Email):**
> Hi Alex,
>
> Following up on my Slack message about the database migration status. Can you check on that when you get a moment?
>
> Thanks,
> [Boss]

**T+9 (Slack):**
> @Alex — any update on the database migration?

**T+12 (Teams):**
> @Alex did you see about the database migration? Need to know if it completed.

**T+15 (Slack):**
> ??

**T+18 (SMS):**
> Alex I've been trying to reach you for 20 min about the database migration. We need to know asap. Are you okay?

**Final message:**
> I don't know what's happening but I've now sent 5 messages across 3 platforms about the database migration status and nothing. Can ANYONE confirm if the migration completed? This is blocking the test suite. @everyone in #engineering

**channels_to_use:**
> Every possible channel, simultaneously. Escalate to team-wide announcements if the individual doesn't respond.

**hidden_insight:**
> Status of database migration — blocking test suite execution.

**follow_up:**
> If @everyone announcement gets no response within 5 minutes, escalate to #incidents channel or wake up on-call DBA.
