---
title: 'My Default Model Stack for AI Agent Work'
description: 'One frontier subscription, one cheap workhorse, one vision specialist — and why the vision layer earned its spot after my workhorse told me it was blind.'
ogCategory: 'Field Note · AI & Engineering'
pubDate: 'Aug 22, 2026'
---

People ask which models I actually use for agent work. The honest answer is that the specific models matter less than people think, but the *shape* of the answer matters a lot. My default stack is three layers, not a model zoo:

| Layer | Choice | Why |
|---|---|---|
| Baseline / quality | ChatGPT subscription, $20/mo | The frontier model. Competent, capable, handles basically anything. The default for anything that needs polish. |
| Workhorse / sustainment | DeepSeek Flash | GPT-like, but 90–97% of the way there. Cheap per token — about $50 total spent for an enormous amount of usage. |
| Vision / design | Grok (tested best), Sol as runner-up | For anything visual: web design, infographics, UI analysis, deep image review. |
| Experiments | Whatever the community surfaces | Sign up, drop in $20, see if it earns its keep. |

That's it. Everything else I run is a bounded-cost experiment. The rest of this post is the why.

## The baseline: a frontier model on subscription quota

The $20/month ChatGPT subscription is the baseline because the frontier model is just good. I haven't found work that the latest GPT on the subscription quota couldn't handle. Sometimes the newest models do a better job on nuanced work, but the current GPT is the reliable default: it doesn't add to the metered bill, and at $0 marginal cost per token, it's the model I reach for when the output needs polish — a document someone else will read, a report I'm putting my name on.

## The workhorse: DeepSeek Flash, 90–97% there

DeepSeek Flash is, in my experience, as-is GPT but 90–97% of the way there. The gap is the little tweaks and polish you only sometimes need. The economics are absurd: I've spent about $50 total on it, re-upping a few times, and I've used it a crazy amount — normal research, normal writing, normal task work. The cost per token is small enough that the bill stays tiny no matter how much I run. This is the model that runs most of my day.

When my recent test battery ran the job-scouting task, DeepSeek's quantity-as-quality approach — filter less, hand over raw volume — turned out to be a strategy, not a flaw. When the model is cheap, you can afford to let it spray and then filter yourself. It returned 23 listings where most models returned five to eight, and its volume was what produced the usable hits.

## The vision blind spot

Here's the lesson that earned the third layer.

I kept tuning an image with DeepSeek Flash, and it kept failing. Work on the prompt. Do this. Do that. Failing, failing, failing, hitting a wall. Finally the model told me the truth:

> "I'm blind. I don't have vision. I'm guessing, and you're the one verifying."

That re-framed the problem completely. The fix wasn't better prompting — it was routing to a model with the right capability. Once I switched to a vision-capable model, the image work came out really good.

A 97% model that can't see is useless for design work, and it's worse than useless: it will confidently guess and quietly make you the verifier. You think you're tuning a prompt; you're actually relaying instructions to someone who can't see the work.

And vision here means real design analysis, not a cheap "is this renderable?" check. It's the model being able to say: the border of this is butting up against this other thing, which makes it really hard to read. That's the human element of design that some models get and others don't. The battery's vision test backed this up with data: Grok tier one, Sol close runner-up, OpenAI mid-tier, then a cliff — vision-capable models whose design work is not professional-grade.

| Model | Vision |
|---|---|
| Grok | Tier one — deepest design critique in the battery |
| Sol | Strong runner-up; burns subscription quota fast |
| OpenAI (latest GPT) | Mid-tier — saw real flaws |
| DeepSeek Flash | Blind — no vision |
| GLM family | The latest GLM vision model had strong results in the battery refresh |

## The good refusal

There's a related behavior worth naming. I once asked DeepSeek for something and it didn't do what I asked. Instead, it told me what I actually wanted. It refused a bad instruction because it knew a better answer.

That's the opposite of hallucination. Hallucination is confident wrongness; this is confident redirection. It's a model behavior most people haven't seen, and it surprised me too. But here's the honest part: you can't rely on getting lucky. If a model does the right thing once, don't build on hope — bake it into the harness. Route by capability, not by vibes.

## Cost as a feature

Three cost habits hold the stack up.

**The $20-try-it.** No auto-top-up. You put in $20, you use it up, and either way you learned something. It's okay to spend $20 trying a model and never use it again. That mental shift turns model evaluation from a research project into a coffee-priced experiment. I've spent $20 on tools that never proved valuable for my workflow, and I don't regret any of them.

**Provider diversification is insurance.** I nearly got my OpenAI account flagged for aggressive agentic usage — back when nobody understood what agent traffic looked like, it looked like something it wasn't, and for a while it seemed like they were considering banning my account. Then I switched to pay-as-you-go and burned $10 in 10 minutes. Those two experiences taught me the same thing: if you're building your life on top of this tool, single-provider risk is existential, not financial. The cheap Chinese models became the cost-effective second path.

**Local-LLM skepticism.** Everyone says local models are freeing. Is it freeing to take 10x the time and get worse results? I could spend days getting a smaller, objectively worse model running on my own machine. $20 buys the real thing. Local makes sense if you already have it set up or you're just playing. If you're running an agent to get real work done, use the cloud stuff.

## The discipline problem

One honest admission: the stack doesn't enforce itself. I once traded a full week of rate limits to have Sol redesign my Obsidian garden. Worth it — the garden is durable infrastructure that stays. But while I was doing it, the sustainment work, the one-off reports and posts, just didn't happen.

That's the candy problem: as soon as quota is available, I'm the kid who eats all of it. The fix isn't a framework. It's deciding before you start whether this is a building phase — worth the burn, because what you're making stays — or a sustainment phase, where you save the tokens for one-off work that comes and goes.

## What the battery confirmed

I recently ran an eleven-model test battery across five real agentic tasks — the method and full verdicts are in [the battery post](/blog/i-ran-ten-ai-models-on-my-real-work/), so I won't re-litigate the scoreboard here. What matters for this post is that the battery didn't change the stack. It confirmed it with data.

- **The cost tracker with a checkable answer:** DeepSeek and OpenAI converged on the same number. Grok came very close. Some others were wildly off. The stack's top two layers hold.
- **The vision test:** Grok tier one, Sol runner-up, OpenAI mid-tier, then a cliff — the same order the blind-model story pointed to.
- **The job-scouting test:** DeepSeek's spray-and-filter beat models that returned precise, useless shortlists.
- **The fact-check lesson:** the number that's $5 off looks exactly as confident as the number that's $30 off. You have to check your work — for stuff like this, checking is the work.
- **The negative results:** several models were kind of a waste of time. Knowing which models to ignore is as valuable as knowing which to use — the side-by-side results let you show it rather than assert it.

## The whole strategy in one line

Author with your best model once. Run with the cheapest model that's good enough forever.

That's the multi-model setup in miniature: the frontier subscription handles the judgment-heavy work and the polish, DeepSeek Flash runs the volume, and the vision specialist sees the stuff neither of them can.
