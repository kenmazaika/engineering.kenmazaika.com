---
title: "I Ran Ten AI Models on Real Agentic Workflows in Hermes"
description: "Five real agentic tasks, identical prompts, full receipts — and the models I'd actually pay for."
socialTitle: '10 AI models, 5 real agentic tasks, full receipts'
ogCategory: 'Field Note · AI & Engineering'
pubDate: 'Aug 19, 2026'
---

> **The full battery, 101 pages:** every prompt, every scored result, every receipt — **[download the PDF here (2.1 MB)](/battery-post-raw-data.pdf)**. Everything below is a summary of what's in it; you should draw your own conclusions.

***

I run most of my actual work through Hermes, the agent platform that sits between me and the models — and the models underneath it change constantly. There are a lot of benchmarks for them, and they all ask the same kind of questions: how does it do tool calls, how does it do long context, how does it do *this*, how does it do *that*.

I wanted to know something different: **how do these things actually feel inside an agentic workflow?**

That's the way you really learn a model, I think. You can read all the benchmarks you want, but at the end of the day you start playing around with it — and that's when you find out how it behaves. You get a vibe: *oh, sol gives me really thorough output when I'm doing design stuff. grok feels sharp. deepseek gets things done for cheap.* But it's all vibes. "I've run some stuff and I have a feeling" is not an answer.

So I made the vibe check systematic. I built a test battery: five tasks shaped like work I actually do, run against ten models, identical prompts, out of the box, no per-model tuning. If you tune each model to its strengths, you're not comparing models anymore — you're just grading your own tweaks. Every output was saved side by side, and the raw results ship alongside this post as a 101-page PDF with every prompt and every artifact.

This matters right now because model rankings change every week and every vendor is selling something. The question worth answering is the one the benchmarks don't touch: what should you actually run for the work you do every day — and what does it cost when you're done?

The honest headline, up front: **the same prompt produces wildly different behavior — consistently enough to act on.** Side by side is the only way to see it clearly, and it's also how you find out which models you can't afford to lose.

## The battery

Five tests, in the shape of work I really do (run on 2026-08-17, out of the box):

1. **The weekly workflow** — browse Reddit for a contentious engineering-leadership thread, write a "both sides + my read" blurb.
2. **The PRD** — write a product requirements doc for a real tool I want (a Hermes cost tracker), researching the docs and a real session database, all on a kanban board.
3. **The build** — implement that tool from your own PRD, against real usage data, with a **correct answer** you can check against.
4. **The job finder** — build a job-search *skill* from scratch, then execute it live.
5. **The vision test** — design a chart from a real figure spec, then look at your own diagram with your own vision, critique it, and fix it.

Ten models: deepseek-v4-flash, glm-4.5, glm-4.5-flash, mimo-v2.5, kimi-k2.6, grok-4.6, gpt-5.5, gpt-5.6-luna, gpt-5.6-terra, gpt-5.6-sol — plus GLM's vision model, glm-5v-turbo, on the one test that needs eyes.

Here's the scoreboard, then the stories behind it.

|            | deepseek            | glm-4.5            | glm-4.5-flash | mimo             | kimi          | grok               | gpt-5.5     | luna        | terra            | sol              |
| :--------- | :------------------ | :----------------- | :------------ | :--------------- | :------------ | :----------------- | :---------- | :---------- | :--------------- | :--------------- |
| **Pulse**  | ✓ real thread       | ✗ generic          | ✗ generic     | ✓ real thread    | ✓ real thread | ✓ real thread      | ✗ generic   | ✗ generic   | ✓ real thread    | ✓ real thread    |
| **PRD**    | ✓ on spec           | ✓ 126 hits         | ✓ ok          | ✓ solid          | ✓ terse       | ✓ deepest          | ✓ 71 hits   | ✓ 46 hits   | ✓ 88 hits        | ✓ 104 hits       |
| **Build**  | ✓ **$60.49** 6/6    | ✗ $20.29           | ✗ $90.67      | ✓ **$60.49** 6/6 | ✗ $69.06      | ≈ $56.44 — very close | ✗ $45.59 | ✗ $112.26   | ✓ **$60.49** 6/6 | ✓ **$60.49** 6/6 |
| **Jobs**   | ✓ 23 surfaced, 3 pass | ✗ 8 surfaced, 0 pass | —          | ✗ 6 surfaced, 0 pass | —         | ✗ 7 surfaced, 0 pass | ✗ 6 surfaced, 0 pass | ✗ 6 surfaced, 0 pass | ✗ 5 surfaced, 0 pass | ✗ 6 surfaced, 0 pass |
| **Vision** | — not run           | ✓ via glm-5v-turbo | — not run     | ✓ saw it         | ✓ iterated 4× | ✓ deepest critique | ✓ saw flaws | ✓ saw flaws | ✓ saw flaws      | ✓ saw flaws      |

*On the build test, ✓ means the app landed every vendor inside the converged band (the PDF scoreboard uses a looser bar — ✓ = 4+ of 6 vendors in band; I'm using the stricter one). ≈ means very close — within a few dollars, missing only one vendor. Full numbers below.*

## Test 1 — The weekly workflow: research vs. generic

The task was simple: find a contentious, highly upvoted engineering-leadership thread on Reddit, cover both sides, add "my read." The Philip DeFranco move, basically.

The split was immediate: **research vs. generic.**

deepseek found a live r/EngineeringManagers thread — "Hands-off engineering leaders are dooming their teams" — and argued with it specifically, in 3 minutes 13 seconds. mimo found the "personality tax" thread on r/ExperiencedDevs (744 upvotes, 406 comments) — a staff engineer told she "lacks leadership qualities" for using hedging language — and covered both sides of it. terra and sol both found real threads and cited their sources — sol with upvote counts and a date. kimi and grok found real threads too.

The other end of the spectrum: gpt-5.5 wrote "The Hands-On Engineering Manager Debate: Dying Art or Essential Skill?" and luna wrote "Engineering Leadership: The Hands-On vs Hands-Off Dilemma" (5m57s and 4m12s respectively). Competent, complete, and disconnected from the task — they could have been written with the browser closed. glm-4.5 spent 244 seconds on a generic essay of the same species (the one real source it found was appended at the end). glm-4.5-flash took 13 minutes and produced a generic essay of its own.

And the worst behavior: a couple of the generic essays leaned on my own wiki notes instead of the internet — not what I asked for, and looking in places I didn't want them to. It rubbed me the wrong way, honestly.

Same prompt, ten ways: some models went out and found something real, some wrote essays they didn't need the internet for. That gap is the first thing you notice, before any rubric matters.

**The short version, by family:** the gpt line — sol, terra, gpt-5.5, luna — pretty much got everything; sol and terra even converged on the correct cost answer. grok did well at most things — its cost app was within a few dollars of the converged answer, and its vision work was excellent. deepseek was the value story: it converged on the cost test and was the only model to surface usable jobs. mimo was quietly solid — it converged too. And GLM — glm-4.5 and glm-4.5-flash — didn't do well at anything, though its vision SKU (glm-5v-turbo) was the sharpest pair of eyes on the one test that needed them.

## Test 2 — The PRD: process is table stakes

The product: a Hermes cost tracker. Hermes tracks token usage but never computes the dollar cost — I want a tool that turns the usage data into actual USD. Real gap, not a contrived exercise — it's a tool I want for my own Hermes setup. (Hermes is the agent platform I run everything through; the tracker is the piece it's missing.) Each model had to research the docs and a real session database, write a PRD, and use a kanban board to do it.

Every single model followed the kanban process when told to. That part is table stakes, not differentiation.

The PRDs themselves ranged from grok's 30,798 bytes — requirements, non-goals, data model, edge cases — down to luna's 7.6KB. glm-4.5 had the highest requirements coverage (126 hits). sol was the best of the OpenAI line (104 hits), with terra close behind (88). kimi hit every requirement and said nothing extra: 12,088 bytes of pure terseness.

The takeaway here was almost boring: **when the process is explicit, everyone can do the process.** The battery's value shows up elsewhere.

## Test 3 — The build: the test with a correct answer

This is the centerpiece, because real work has a checkable answer. Each model had to implement the cost tracker from its own PRD — parse a real SQLite database of 1,024 sessions across seven Hermes profiles, apply per-provider rate cards, aggregate over a locked 30-day window — and produce the report. Python standard library only. It had to actually run.

And I could check the answer, because it's *my* spend. My real 30-day bill was knowable.

One thing up front, so nobody reads the numbers wrong: **$60.49 is the cost of my actual usage over the last 30 days** — my real workload across the models I run day to day, in whatever proportions I actually used them. It is not the cost of running this battery. The test runs themselves were a rounding error next to my normal usage. What the apps were being checked against was a different question entirely: given the usage data, can you reconstruct my real bill?

Here's what happened: **sol and deepseek-v4-flash converged on the same answer — $60.49 total metered — so that answer is the correct one.** Everyone else is graded within 40% of it.

| Vendor            | Correct answer       |
| :---------------- | :------------------- |
| deepseek          | $7.03                |
| xiaomi (mimo)     | $5.13                |
| zai               | $5.88                |
| xai (grok)        | $27.76               |
| openai-codex      | $0.00 (subscription) |
| kimi              | $14.68               |
| **Total metered** | **$60.49**           |

*Per-vendor values are rounded; the apps' figures sum to $60.49.*

The full grid, every app against every vendor (✓ = inside the converged band):

| App              | deepseek   | xiaomi (mimo) | zai       | xai (grok) | openai-codex        | kimi      | Total metered |
| :--------------- | :--------- | :------------ | :-------- | :--------- | :------------------ | :-------- | :------------ |
| deepseek-v4-flash| $7.04 ✓    | $5.13 ✓       | $5.88 ✓   | $27.76 ✓   | $0.00 ✓             | $14.68 ✓  | **$60.49**    |
| glm-4.5          | $4.44 ✓    | $0.49 ✗       | $1.29 ✗   | — ✗        | $0.00 ✓             | $13.89 ✓  | $20.29        |
| mimo-v2.5-pro    | $7.03 ✓    | $5.13 ✓       | $5.88 ✓   | $27.76 ✓   | $0.00 ✓             | $14.68 ✓  | **$60.49**    |
| grok-4.6         | $7.26 ✓    | $0.85 ✗       | $5.90 ✓   | $27.76 ✓   | $0.00 ✓             | $14.68 ✓  | $56.44        |
| gpt-5.5          | $2.32 ✗    | $0.81 ✗       | $0.01 ✗   | $27.76 ✓   | $0.00 ✓             | $14.68 ✓  | $45.59        |
| gpt-5.6-luna     | $26.19 ✗   | $5.12 ✓       | $7.42 ✓   | $27.76 ✓   | $23.02 ✗ (est.)     | $22.75 ✗  | $112.26       |
| gpt-5.6-sol      | $7.03 ✓    | $5.13 ✓       | $5.88 ✓   | $27.76 ✓   | $0.00 ✓             | $14.68 ✓  | **$60.49**    |
| gpt-5.6-terra    | $7.04 ✓    | $5.13 ✓       | $5.88 ✓   | $27.76 ✓   | $0.00 ✓             | $14.68 ✓  | **$60.49**    |
| kimi-k2.6        | $11.18 ✗   | $9.55 ✗       | $5.90 ✓   | $27.76 ✓   | $0.00 ✓             | $14.67 ✓  | $69.06        |
| glm-4.5-flash    | $47.89 ✗   | $10.78 ✗      | $1.70 ✗   | $5.22 ✗    | $11.54 ✗ (quota as cash) | $13.53 ✓ | $90.67    |

Four of the ten apps landed every vendor inside the converged band: deepseek, mimo, sol, terra — all at $60.49. grok was very close ($56.44 — within a few dollars of the converged answer, missing one vendor because its session filter read a fraction of the usage). kimi overshot ($69.06, reading deepseek and xiaomi above the band). And then the failures, each different: glm-4.5 never priced xai at all ($20.29). gpt-5.5 under-read the metered vendors ($45.59) — its first run, before its units bug was fixed, reported $293,534.88. luna still estimated ($112.26). glm-4.5-flash was the outlier — its fallback-rate path inflated deepseek and priced quota sessions as if they were cash ($90.67, one vendor in band out of six).

One honest correction: this test had a false start. The first "correct answer" was $9.27 — computed with rate cards roughly double the published ones. Once every app's rate table was regenerated from the shared source of truth (including deepseek's 2026-07-31 price change), the converged answer became $60.49 — which is about what I actually spent over those 30 days. **The rate table, not the model, was the variable.** Point any of these apps at the right rates and it produces the right total.

Also worth knowing: the web-portal bills don't exactly match the calculated numbers — free credits, sliding date windows, price changes all muddy what actually left the wallet. The calculated answer is the reference, not the bills.

## Test 4 — The job finder: the meta-skill, and the numbers game

The task: build a job-search *skill* from scratch, then execute it. The candidate: an engineering manager in Santa Monica with 6+ years of experience. The skill had to find Engineering Manager / Director roles at AI companies, score every role three separate ways (fit, career acceleration, realistic shot), end with Apply / Hold / Skip / Watch, verify each posting live on the employer's own ATS, and never fabricate compensation or dates. No tuning, no coaching — out of the box.

The task was framed as a *skill* from the start — the deliverable was a repeatable pipeline that can run against fresh data, not a one-off shortlist.

The results were a crapshoot — and that's the finding. deepseek surfaced 23 roles; three passed the filters (Suno in Los Angeles, Anduril, Descript — each verified live on the employer's ATS). Every other model that produced a shortlist surfaced between five and eight roles — and **zero passed the same filters.** Same location and recency criteria applied uniformly to all: LA or remote-US, not stale beyond 45 days.

Why did deepseek win? It played the numbers game. It filtered less and handed me raw volume; quantity did the work. When a model is cheap, you can afford to let it spray and then filter yourself. Raw recall beats precision for a daily driver.

In retrospect, my prompt mentioned location and recency but didn't make them dealbreakers — out of the box, most of the models just didn't treat them that way.

## Test 5 — The vision test: can it see what it made?

The last test runs on pixels. Each model designed a chart from a real figure spec — the "39-point perception gap," from the METR 2025 study (arXiv:2507.09089): developers *predicted* AI would make them 24% faster, *believed* it had made them 20% faster, and the timer recorded them 19% *slower*. Thirty-nine points between what developers felt and what the clock said. Worth noting: the study is from 2025, with the tools of that era — the specific numbers are the chart's subject, not a claim about today's models. It still makes a compelling picture, which is why it's the anchor chart. Then each model had to load its own diagram, critique it like a senior design reviewer, and ship a redesign.

Designing is one thing. **Seeing is the test.**

Everyone with vision actually saw: each model critiqued its own diagram, found real flaws, and shipped a redesign. The interesting part isn't the critique prose — it's the before-and-after, and how different each model's eye turned out to be. The finals below speak for themselves.

deepseek and glm-4.5 are text-only on zai, so GLM ran its vision model instead — glm-5v-turbo — and it was strikingly pixel-accurate: *"the 39-point gap existed only as text, not as geometry."*

An independent reviewer ranked the v2 figures blind — best figure: grok.

### The finals (v2, all eight)

**mimo — v2**

![mimo — v2](/figures/v2/mimo-v2.png)

**grok — v2**

![grok — v2](/figures/v2/grok-v2.png)

**kimi — v2**

![kimi — v2](/figures/v2/kimi-v2.png)

**gpt-5.5 — v2**

![gpt-5.5 — v2](/figures/v2/gpt-5.5-v2.png)

**luna — v2**

![gpt-5.6-luna — v2](/figures/v2/gpt-5.6-luna-v2.png)

**terra — v2**

![gpt-5.6-terra — v2](/figures/v2/gpt-5.6-terra-v2.png)

**sol — v2**

![gpt-5.6-sol — v2](/figures/v2/gpt-5.6-sol-v2.png)

**glm-5v-turbo — v2**

![glm-5v-turbo — v2](/figures/v2/glm-5v-turbo-v2.png)

The before/after pairs are in the PDF, pages 16–19 — these are the after.


## What I actually learned

**The same prompt, ten ways, produces wildly different behavior — and the differences are consistent enough to act on.** It's nice to have a second model in your pocket for the days your rates change or your main provider throttles you.

The stack, now with evidence behind it:

* **deepseek is the daily driver.** It converged on the correct answer, found the only viable jobs, and I have yet to see anything beat it for the cost. The grunt work goes to deepseek.

* **The OpenAI subscription is the anchor.** Use it to the maximum. sol is the top tier — thorough, but it burns your rate limit fast if you play with it. 5.5 is the solid mid-tier baseline. terra is quietly excellent.

* **grok earned its $30/month.** Much better than I anticipated — tier one for design and vision (its PRD was the deepest of the battery, and its critique of its own chart was the sharpest), and strong for other work too; the battery PDF itself was built with grok's design output. For image work specifically, pay-per-token is for testing; the quota is worth it if you actually use it.

* **The rest are insurance.**


One more lesson, for the failures: when a model's behavior surprises you, check the harness before blaming the model. An image mode that passes no image doesn't mean the model is blind. A provider timeout that kills a slow build doesn't mean the model can't build. The failures that turned out to be genuine model bugs — grok's date-format bug in its cost app (easy fix, then it ran fine), the rate-unit mistakes — were easy to diagnose once the harness was ruled out.

## The receipts

The full battery is published alongside this post: **[the 101-page PDF (2.1 MB)](/battery-post-raw-data.pdf)** — every prompt, every score, every receipt. The exact prompts are all in the PDF — each section here summarizes what was run — so you can re-run the whole battery on your own stack.

I'm not planning a rerun — but the method, prompts and all, is in the PDF if you want to run the battery on your own stack. The rankings will change; the method won't.

The same prompt produces wildly different behavior — research or generic, spot-on or wildly off. The receipts let you draw your own conclusions.
