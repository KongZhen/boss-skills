# boss.empty-promises — Examples

## Example 1: The Perpetual Promotion Promise

**Input:**
```yaml
promise_type: "promotion"
current_status: "been in role 2 years, performs at senior level, no promotion yet"
timeline_given: "end of last year"
recipient: "Alex"
mode: "promotion_promise"
```

**message:**
> Alex, I want to circle back on your situation because I think about this a lot. You absolutely deserve to move up — your work has been fantastic. **I'm confident we're getting you promoted next quarter. We just need board approval in the comp cycle, which I think is locked in for Q1.** I'm 100% committed to making this happen. You're a high performer, and we need to keep you growing. I'm fighting for you on this.

**buried_condition:**
> Board approval in Q1 is not guaranteed. Comp cycles can shift. If board priorities change, or if company performance dips, the promotion gets deferred.

**hidden_insight:**
> Alex was promised promotion at end of last year. Now being promised "next quarter" pending board approval. Pattern suggests this will repeat indefinitely.

**follow_up:**
> When next quarter comes and board approval doesn't materialize, frame the delay as external (board/comp cycle) rather than acknowledging the original broken promise.

---

## Example 2: The Raise That's Always "Coming"

**Input:**
```yaml
promise_type: "raise"
current_status: "2-year employee, last raise was 18 months ago, well below market"
timeline_given: "next quarterly cycle"
recipient: "Sam"
mode: "raise_deflection"
```

**message:**
> Sam, I know you're thinking about compensation, and you should be. You've been a star, and frankly, I'm frustrated that we haven't moved faster on getting you market rate. **Your raise is definitely happening in the next comp cycle — I've got you on my list, and I'm fighting with finance to make sure the numbers work.** Once the budget cycle closes, it's a done deal. I know it's taken longer than it should have, and I appreciate your patience. This is coming.

**buried_condition:**
> The raise depends on the budget cycle closing favorably. Finance has to approve it. "Fighting with finance" suggests there's resistance or insufficient budget.

**hidden_insight:**
> Sam's raise keeps getting deferred. Budget cycles are ongoing/never-ending. Sam probably won't get the raise, or it will be significantly smaller than expected.

**follow_up:**
> When finance denies it again next cycle, frame it as "we're doing everything we can" to signal continued effort without accountability for actual delivery.

---

## Example 3: The Headcount That's Always "On The Roadmap"

**Input:**
```yaml
promise_type: "headcount"
current_status: "team stretched thin, been promised 2 new engineers for 6 months"
timeline_given: "by end of Q3"
recipient: "Jordan"
mode: "headcount_promise"
```

**message:**
> Jordan, I hear you on the team capacity. We're definitely adding people — I've got two engineering spots on the roadmap for Q2. **The timing is just a bit tight right now because we're waiting on some funding approvals, but once those clear, hiring moves fast.** I know this affects morale and velocity, and I'm genuinely frustrated we can't move faster. But this is coming. You'll have the team you need by mid-year at the latest.

**buried_condition:**
> Headcount depends on funding approvals, which are not certain. "Funding approvals" suggests external dependencies outside the boss's control. Even if approved, hiring takes time.

**hidden_insight:**
> Jordan was promised 2 engineers 6 months ago. Now being told they're "on the roadmap" pending funding approval. May not happen or will be delayed further.

**follow_up:**
> When Q2 comes, repeat that they're still "on the roadmap" but now pending "strategic planning" or "next funding round."

---

## Example 4: Vague IPO Promise

**Input:**
```yaml
promise_type: "equity/ipo"
current_status: "been promised IPO and equity upside for 3 years, no progress"
timeline_given: "big things coming"
recipient: "Casey"
mode: "opportunity_painting"
```

**message:**
> Casey, I know equity is important to you, and it should be. We're genuinely in a position where something big could happen in the next 18 months or so. The company is scaling, revenue is strong, and **we're having conversations with potential investors about rounds that could significantly change the valuation trajectory.** If things move the way I think they will, you're going to be in a really good position. I can't give you specifics yet, but big things are definitely coming for folks who've been here as long as you have.

**buried_condition:**
> Everything depends on "potential investor conversations" and things moving "the way I think they will." These are highly speculative. IPO could be years away or never happen.

**hidden_insight:**
> Casey has heard variations of this promise for 3 years. Company may never IPO. Equity may never materialize. Boss is painting a hopeful vision with no concrete timelines or guarantees.

**follow_up:**
> In 6 months, reference "exciting investor conversations" again to maintain the illusion of progress while avoiding any specific commitments.

---

## Example 5: The Eternal "Next Quarter" Promise

**Input:**
```yaml
promise_type: "budget increase"
current_status: "requested budget increase 6 months ago, denied twice, no progress"
timeline_given: "next quarter"
recipient: "Team lead"
mode: "budget_promise"
```

**message:**
> So I know the budget request got pushed back in the last cycle, and I'm genuinely frustrated about that. But I want you to know that **I'm committed to this for next quarter. We have a clearer picture now, and I think we can make a strong case to finance that this investment drives ROI.** Once we get through Q1 planning, we'll resubmit for Q2, and I'm optimistic we'll get approval. I'm going to personally advocate for this. You'll have the resources you need.

**buried_condition:**
> Approval is not certain. It depends on Q1 planning, making a "strong case," and finance approval. If finance denies it again, the pattern repeats.

**hidden_insight:**
> Team has been denied budget twice. Being promised "next quarter" again. High likelihood this will get denied again in the next cycle, and the promise will be deferred yet again.

**follow_up:**
> If denied in Q2, blame finance/board and propose escalating the "business case" effort, which will require more work from the team without delivering actual budget.
