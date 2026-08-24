---
title: 'A Feature That Makes Your Agent Show Its Receipts'
description: 'Grounded Citations logs every source, demands a verbatim quote for every load-bearing claim, and marks what it cannot source. So I ran the same question twice — with it on, and with it off.'
seoTitle: 'Grounded Citations: Make Your AI Agent Prove Its Numbers'
socialTitle: 'Same Question, Twice. Only One Answer Could Show Its Receipts.'
pubDate: 'Aug 23, 2026'
related:
  - title: 'My Default Model Stack for AI Agent Work'
    url: '/blog/my-default-model-stack-for-ai-agent-work/'
  - title: 'I Ran Eleven AI Models on Real Agentic Workflows in Hermes'
    url: '/blog/i-ran-ten-ai-models-on-my-real-work/'
  - title: 'Before You Blame the Model, Audit Your Hermes Setup'
    url: '/blog/before-you-blame-the-model-audit-your-hermes-setup/'
ogCategory: 'Field Note · Hermes Workflows'
showPopup: true
---

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

## The receipts

The raw research files from both runs are here if you want to check my work:

- [Grounded findings](/grounded-citations/grounded-findings.md) — full recommendation with the citation ledger
- [Ungrounded findings](/grounded-citations/ungrounded-findings.md) — same question, no ledger

Most people won't read them, and that's fine. That's kind of the point — one of these answers doesn't need you to.
