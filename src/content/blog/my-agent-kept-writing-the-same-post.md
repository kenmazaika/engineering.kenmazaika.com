---
title: "My Agent Kept Writing the Same Post. The Memory Was the Problem."
description: "One liked idea became a global rule, and my agent auto-built it into every memory layer it has. When an agent starts looping, check the memories it built for itself."
seoTitle: "My Agent Kept Writing the Same Post. The Memory Was the Problem. (Hermes & OpenClaw)"
socialTitle: "My Agent Wrote the Same Post for a Month. The Memory Was the Problem."
pubDate: 'Sep 1, 2026'
ogCategory: 'Field Note · Agent Memory'
hideDefaultNewsletter: true
heroImage: ../../assets/headers/my-agent-kept-writing-the-same-post-masthead.png
related:
  - title: "Hermes vs OpenClaw: Why I Moved My Main Workflow (Test Data Included)."
    url: "/blog/hermes-vs-openclaw/"
---

Every engineering brief my agent wrote came back with the same story: the review is the bottleneck. Different title, same thesis, week after week. I kept telling it to stop — "don't repeat the same ideas as the other posts" — and it kept re-converging. The problem wasn't the model or the prompts. It was memory: one liked idea, generalized into a global rule and written into every layer the writing pipeline reads. Bad memory is worse than no memory at all.

## The symptom

A month of engineering output on one theme: "the review is the bottleneck." Blog briefs, the weekly Industry Pulse, content strategy — same story, different title. Feedback went in; the same story came back out.

## The detection

I was experimenting with OpenClaw at the time, running the same research task one-shot on both harnesses. The Hermes output got pulled into the same well-worn track — the review bottleneck again. The OpenClaw output didn't. One run isn't a controlled experiment, and I'm not claiming it is. But it made the question concrete: what in my setup was doing the steering? (The full side-by-side field test is [Hermes vs OpenClaw](/blog/hermes-vs-openclaw/).)

## The root cause

One piece of feedback, given in the context of one specific post: "I really liked this idea of the peer review thing." Memory stripped the context and generalized it into a global steering signal. Consolidation drops the applicability conditions — the when and where of the feedback — and keeps only the rule.

## Where it lived

The idea wasn't stored in one place. It was in every layer the pipeline reads:

- **Wiki voice guides** — the belief sections in both the engineering and content guides ("the fix isn't more review — it's less review").
- **Hologram store** — facts 4 and 5, marked helpful and reinforced ("automate the 97%, keep human in the judgment loop").
- **Persistent memory** — `MEMORY.md` held the same philosophy line, plus the pointer that routed every writing task to the biased guide.
- **Auto-generated skills** — `ken-writing-feedback` and `industry-pulse` carried review-themed rules, examples, and hooks, and downstream skills re-propagated them.

Underneath it all: a 76KB curated concept library and two strategy concepts tagging code review as the #1 content topic.

Here's the part that matters: Hermes auto-generated all of it. The voice guides were mined from my own feedback. The hologram facts were reinforced as I approved outputs. The skills were built from my corrections over time. The system learned the groove into every layer by itself — and I should've had a better view on those layers. Same belief in every layer means every retrieval pulls the same thread. The theme wins not because it's right, but because it's everywhere.

## The lesson

Auto-learning is powerful — it's the whole reason the agent compounds instead of starting over. But when the agent starts looping and not listening, the fix might be with the memories that got auto-built. Bad memory is worse than no memory at all.
