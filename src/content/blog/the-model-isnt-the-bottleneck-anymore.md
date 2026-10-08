---
title: "The Model Isn't the Bottleneck Anymore"
description: "The price fell, the top models clustered, and a cheap fallback absorbed the rate limits. The constraint moved from the model to the design around it — here is the rotation I actually run."
seoTitle: "Do You Need the Newest AI Model? The Rotation to Run Instead"
socialTitle: "The model isn't the bottleneck anymore"
pubDate: 'Oct 6, 2026'
updatedDate: 'Oct 6, 2026'
ogCategory: 'Field Note · AI & Engineering'
related:
  - title: 'Which AI Model Should You Run for Agent Work? 11 Models, 5 Real Tasks, Receipts'
    url: '/blog/best-ai-model-for-agent-work/'
  - title: 'My Default Model Stack for AI Agent Work'
    url: '/blog/my-default-model-stack-for-ai-agent-work/'
  - title: 'How Much Does It Cost to Run a Capable AI Agent Each Month? About $50'
    url: '/blog/cost-to-run-an-agent/'
  - title: 'Before You Blame the Model, Audit Your Hermes Setup'
    url: '/blog/before-you-blame-the-model-audit-your-hermes-setup/'
  - title: 'What is an AI Work Harness'
    url: '/blog/what-is-an-ai-harness/'
faq:
  - question: "Do I need to upgrade to the newest AI model?"
    answer: "No — for most work a good-enough model clears the bar, and good-enough gets cheaper every year. I run a rotation: one premium plan until it rate-limits, one cheap metered fallback for everything else, and premium experiments on their own budget."
  - question: "What do you give up by running a cheaper model?"
    answer: "On the hardest work — long agentic runs, research-grade math — a cheaper model gives up more than it does on the public benchmarks. For the bulk of the work it costs nothing noticeable."
  - question: "What if a new model is genuinely better?"
    answer: "I re-check on a calendar, not on release day: is a new model better enough to switch? The check watches long-horizon agentic work, where small gains still compound."
showPopup: true
---

A new frontier model dropped this week and I didn't feel the pull. Three months ago that would have eaten my weekend: new release, new benchmarks, rebuild the workflows. This time I read the numbers, thought "nice," and went back to work.

That isn't burnout. The pull stopped because the math changed.

You don't need the newest model. Here is the math that made me stop chasing — and the rotation I actually run.

## The scare is smaller than it looks

DeepSeek raised prices. Off-peak it had been nearly free; at peak the same usage costs about four times as much. Run it at the wrong hour and $4 of usage becomes $16.

Then do the arithmetic. At my usage, $16 a month is **$0.50 a day** — the entire magnitude of the scare. I don't want it to double, but I can survive it doubling.

And that's the worse case. The price of a *fixed* level of capability keeps falling; it's the price of "newest" that stays sticky. What I need is a good-enough model, and good-enough gets cheaper every year.

## The models clustered

The top of the market bunched up. The leaders sit within about a point of each other on the composite indices, and they trade places on the preference leaderboards. The benchmark everyone used to quote is saturated.

The gap that's left is on the hard things — long agentic runs, research-grade math. There, open-weight models are months behind at a fraction of the price, and they give up more on the hardest tasks than on the public benchmarks. So the model that's best this week is barely better than the model that will be best next week.

## Rate limits stopped mattering

I get rate-limited on my premium plan constantly. It stopped being a problem the moment falling back to a cheap model cost me nothing.

That is a config choice, not a skill. Point the harness at a premium model, point the fallback at a cheap one, and let it route: the premium plan handles what needs it, the fallback eats the rest. What used to be a hard stop is now a shrug.

## What actually changed

Not a spec. The design.

I spent about **$100** trying models — Mimo, GLM, Grok. Grok went from a curiosity to part of the rotation, and then I settled into two or three and stopped chasing. Wide on the bench, narrow on the field — that's my setup, and I stopped treating it as a compromise.

The reason: the model is good enough now, and the harness is good enough that it isn't in my way. Once both are true, what decides whether the work comes out well isn't the model — it's how I break the task down, what I hand the model, and when I check it.

That is why a new release doesn't rearrange my week. I will still try the hyped one. I just won't rebuild my work for it.

## The rotation I actually run

1. **One premium plan** until it rate-limits.
2. **One cheap metered fallback** for everything else.
3. **Premium experimentation on its own budget** — off the main route.
4. **Re-check on a calendar, not on release day:** is a new model better *enough* to switch?

The honest risk is that I stopped looking one release before the one that matters. My defense: the check is on the calendar, and I watch the long-horizon agentic work, where small gains still compound. But I would rather run a setup I understand than chase a benchmark.

The model stopped being the bottleneck. The process is the work now.
