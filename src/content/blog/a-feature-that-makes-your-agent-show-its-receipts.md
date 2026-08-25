---
title: "Does AI Citation Grounding Actually Catch Errors? I Tested It On vs Off"
description: "I asked my agent the same cost question twice — once with a citation ledger on, once off. Both said stay on DeepSeek, but the grounded run caught pricing errors the ungrounded run flattened. Here's the test and the receipts."
seoTitle: "Does AI Citation Grounding Catch Errors? An On/Off Test With Real Receipts"
socialTitle: 'Same Question, Twice. Only One Answer Could Show Its Receipts.'
pubDate: 'Aug 23, 2026'
updatedDate: 'Aug 24, 2026'
related:
  - title: 'My Default Model Stack for AI Agent Work'
    url: '/blog/my-default-model-stack-for-ai-agent-work/'
  - title: 'I Ran Eleven AI Models on Real Agentic Workflows in Hermes'
    url: '/blog/best-ai-model-for-agent-work/'
  - title: 'Before You Blame the Model, Audit Your Hermes Setup'
    url: '/blog/before-you-blame-the-model-audit-your-hermes-setup/'
ogCategory: 'Field Note · Hermes Workflows'
showPopup: true
faq:
  - question: "What is grounded citations / AI citation grounding?"
    answer: "A feature that logs every source the agent reads at retrieval time, demands a verbatim quote for every load-bearing claim, and marks anything it can't source as [unverified] instead of quietly folding it into the answer."
  - question: "Does showing citations stop AI hallucinations?"
    answer: "No — citation presence isn't the same as citation grounding. What matters is whether the citations are structurally guaranteed real and every claim traces to a quoted source. The on/off test below demonstrates the difference: the grounded run caught pricing errors the ungrounded run flattened."
  - question: "Why did the grounded run catch the pricing error and the ungrounded one not?"
    answer: "Because in the grounded run every number had to trace to a quoted source or get flagged [unverified]. The ungrounded run flattened the nuance and quietly got a few of the prices slightly wrong — on exactly the numbers that would change a decision."
  - question: "What's the cache-blend insight?"
    answer: "Cheaper-on-paper output price isn't the same as cheaper in practice. DeepSeek direct's cache-hit input is $0.007/M while aggregators charge roughly two and a half times that for a cached read — so for long, cache-heavy sessions the route that looked cheaper on output price wasn't. Only traceable numbers surface this."
  - question: "Where are the raw receipts?"
    answer: "The grounded and ungrounded findings files are linked in the post — the grounded run ships with a full citation ledger, the ungrounded run ships without one. You can check both."
---

I asked my agent the same cost question twice — once with a citation ledger on, once off. Both runs said stay on DeepSeek. But the grounded run caught pricing errors the ungrounded run flattened, on exactly the numbers that would change a decision. Here's the test and the receipts.

Hermes, the agent I run daily, has a feature built in called Grounded Citations. When it's on, every source the agent reads gets logged to a ledger at retrieval time, every load-bearing claim has to carry a verbatim quote from the actual page, and anything it can't source gets marked `[unverified]` instead of quietly folded into the answer.

That sounds nice in the abstract, so I ran it against a real question instead of taking it on faith.

## The test

I put most of my agent work through DeepSeek, so the question I cared about was: find me a model alternative that's just as good quality and roughly the same cost-effectiveness. I asked it twice — once with Grounded Citations on, once without. Same question, same agent.

The headline recommendations came back broadly similar. Both runs said stay on DeepSeek, and both flagged the MiMo family as the challenger worth watching.

The difference was in the fine print, and the fine print is where the money is.

## What the grounded run caught

You can run DeepSeek several ways, and the most cost-effective route isn't necessarily the DeepSeek service directly. DeepSeek's official API recently moved to peak/off-peak pricing — $0.66/M output off-peak, $1.32/M at peak. But OpenRouter serves the same model at $0.168/M output. Same model, about a quarter of the off-peak rate, no migration.

But cheaper on paper isn't the same as cheaper in practice, and this is where the ledger earned its keep. My agent runs are long sessions with heavy prompt caching — most of every run is a cached prefix, not fresh input. On that blend the arithmetic flips: DeepSeek direct's cache-hit input is $0.007/M, while the aggregators charge roughly two and a half times that for a cached read. The route that looked cheaper on output price wasn't cheaper for the work I actually do. I only caught that because the grounded run's numbers were traceable enough to interrogate.

The ungrounded run flattened all of this into "use DeepSeek." It also got a few of the prices slightly wrong, on exactly the numbers that would change a decision. The grounded run didn't miss any of them — every number had to trace to a quoted source or get marked `[unverified]`.

That's the difference. Grounded Citations converts a plausible answer into one you can act on.

## The cache-blend twist

The most counterintuitive part is worth calling out on its own. If you compare output prices in isolation, OpenRouter at $0.168/M looks like the clear win over DeepSeek direct at $0.66/M off-peak. That's the "obvious" move — and it's wrong for how agents actually run.

Real agent work is a long session with heavy prompt caching. Most of every run is a cached prefix — the instructions, the context, the conversation — not fresh input. On that blend the comparison flips completely: DeepSeek direct charges $0.007/M for a cached read, while the aggregators charge roughly two and a half times that. The route that looks cheaper on paper isn't cheaper in practice. Cheaper-on-paper output is a mirage when the cached input is where your real cost lives.

That's the kind of error that changes a decision — and the only reason I caught it is that the grounded run's numbers were traceable enough to push back on.

## What the citations actually look like

A couple of real items from the ledger, so you can see the shape of it:

**Claim:** DeepSeek V4 Flash official pricing moved to peak/off-peak on August 16, 2026.
> "DeepSeek now uses off-peak and peak API rates: Flash is $0.007 / $0.22 / $0.66 off-peak and $0.014 / $0.44 / $1.32 at peak."
>
> — [chat-deep.ai/pricing](https://chat-deep.ai/pricing)

**Claim:** OpenRouter serves the same model far below the official rate.
> "On OpenRouter, DeepSeek: DeepSeek V4 Flash 0423 costs $0.0679/M input tokens and $0.168/M output tokens."
>
> — [openrouter.ai/deepseek/deepseek-v4-flash](https://openrouter.ai/deepseek/deepseek-v4-flash)

Every load-bearing claim in the grounded run looks like that. If you want to argue with a number, you're arguing with the source, not the agent's memory.

## FAQ

**What is grounded citations / AI citation grounding?** A feature that logs every source the agent reads at retrieval time, demands a verbatim quote for every load-bearing claim, and marks anything it can't source as `[unverified]` instead of quietly folding it into the answer.

**Does showing citations stop AI hallucinations?** No — citation presence isn't the same as citation grounding. What matters is whether the citations are structurally guaranteed real and every claim traces to a quoted source. The on/off test in this post demonstrates the difference: the grounded run caught pricing errors the ungrounded run flattened.

**Why did the grounded run catch the pricing error and the ungrounded one not?** Because in the grounded run every number had to trace to a quoted source or get flagged `[unverified]`. The ungrounded run flattened the nuance and quietly got a few of the prices slightly wrong — on exactly the numbers that would change a decision.

**What's the cache-blend insight?** Cheaper-on-paper output price isn't the same as cheaper in practice. DeepSeek direct's cache-hit input is $0.007/M while aggregators charge roughly two and a half times that for a cached read — so for long, cache-heavy sessions the route that looked cheaper on output price wasn't. Only traceable numbers surface this.

**Where are the raw receipts?** The grounded and ungrounded findings files are linked below — the grounded run ships with a full citation ledger, the ungrounded run ships without one. You can check both.

## The receipts

The raw research files from both runs are here if you want to check my work:

- [Grounded findings](/grounded-citations/grounded-findings.md) — full recommendation with the citation ledger
- [Ungrounded findings](/grounded-citations/ungrounded-findings.md) — same question, no ledger

Most people won't read them, and that's fine. That's kind of the point — one of these answers doesn't need you to.
