---
title: 'Designing Blind: What a Vision Model Actually Buys You'
description: 'DeepSeek finally shipped vision for its flash workhorse, so I built the same infographic twice — text-only vs vision. Same strategy, different finish.'
seoTitle: 'Vision Model vs Text-Only: What a Vision Encoder Actually Buys You'
socialTitle: 'Same Chart, Built Twice. One Model Could See What It Made.'
pubDate: 'Aug 22, 2026'
related:
  - title: 'My Default Model Stack for AI Agent Work'
    url: '/blog/my-default-model-stack-for-ai-agent-work/'
  - title: 'I Ran Eleven AI Models on Real Agentic Workflows in Hermes'
    url: '/blog/best-ai-model-for-agent-work/'
  - title: 'My $175 AI Agent Rig: What It Actually Costs to Run'
    url: '/blog/my-175-ai-agent-rig/'
ogCategory: 'Field Note · AI & Engineering'
showPopup: true
---

DeepSeek shipped a vision-capable model, and for deepseek-v4-flash — my daily-driver workhorse — vision was the only real drawback. So I ran the experiment the launch invites: what does a vision model actually get you that a non-vision model doesn't?

I built the same infographic twice with two models from the same family and provider: deepseek-v4-flash, text-only, and deepseek-v4-flash-vision-exp, native vision. Same spec, same data, same prompt family. One variable: the vision encoder.

![The same infographic, built twice. No-vision final on the left, vision final on the right.](/designing-blind/side-by-side-final.png)

The result surprised me twice.

First, the two charts look almost the same. Vision didn't change the strategy — palette, composition, the architecture of the graphic. If you assumed a vision model means dramatically better-looking output, that assumption can die here.

What vision changed was the finish: a legend that makes clear what's being measured, transitions a reader can locate on the axis, corrections that let the message land without the viewer working for it. The blind chart was usable. The sighted chart communicates.

The second surprise took longer to see: the blind model played it safe because it knew it was blind.

## The example: DeepSeek's new surge pricing

The asset both models built is a chart of DeepSeek's new surge pricing. DeepSeek killed its flat rate on August 16, 2026 at 16:00 UTC. Per 1M tokens, USD:

| | Old (flat) | New off-peak | New peak |
|---|---|---|---|
| Output | $0.28 | $0.66 | $1.32 |
| Input (cache miss) | $0.14 | $0.22 | $0.44 |
| Cache hit | $0.0028 | $0.007 | $0.014 |

Peak hours are 01:00–04:00 and 06:00–10:00 UTC — 9am to noon and 2 to 6pm in Beijing, seven hours out of every twenty-four. Peak is exactly double off-peak: output runs 2.4× the old price off-peak and 4.7× at peak. Ten million output tokens cost $2.80 under the old rate, $6.60 off-peak, $13.20 at peak.

If you run agents, the questions are concrete: how big is the hike, and when should work be scheduled to dodge the peak? A rate table doesn't answer that at a glance. A 24-hour chart does — flat dashed line for the old price, sawtooth for the new one, spikes on Beijing business hours. Your agent doesn't care what time it is. Your bill does.

## Getting to a fair fight

My first attempts weren't apples-to-apples — both models had freedom in both directions, and the gap looked much bigger than it was. I couldn't tell how much was vision and how much was two models choosing differently.

So I clamped everything down: one spec, one data table, one prompt family, same provider. Each model built the chart, critiqued its own work, and revised. The only difference left standing was whether the model could look at what it had built.

## What vision doesn't change (and what it does)

Zoom out on the hero image. Same layout skeleton, same sawtooth, same story. The vision model didn't invent a better chart — it drew the chart the spec asked for. What vision moves is the last mile, and the last mile is where charts succeed or fail: which label explains what's being measured, whether a reader can find the hour the price changes, whether anything collides. Strategy was never the bottleneck. Finish is.

## The blind panel: usable, honest, safe

![The no-vision panel, final. Usable and doable. It worked.](/designing-blind/diagram-v2.png)

The text-only model shipped a working chart and was bluntly honest about its ceiling: every claim in its self-critique tagged as either reasoned from code or not verifiable without vision. And when it came time to fix the things that needed eyes, the refusal, verbatim:

> I cannot verify without vision. That would be guessing, not fixing.

It fixed what arithmetic could prove — an integrated audit of 67 text elements with zero overlaps — and declined everything else. A weaker discipline would have faked the perceptual layer.

## The vision panel: same chart, better finish

![The vision panel, final, after its own fixes. Clear legend, locatable transitions, nothing colliding.](/designing-blind/diagram-v3.png)

The vision model ran the same loop with eyes open, after proving them real with a fidelity probe: exact transcription of a unique token before any critique. It found six real defects and fixed all of them — a legend colliding with the band labels, a label clipped at the image edge, step transitions a reader couldn't locate, guide lines burying the step line, a rate-card header overlapping the x-axis ticks, a source line running under the table. Each fix was pixel-verified before it counted.

![The six verified fixes on the right; on the left, what the no-vision model could not see, in its own words.](/designing-blind/asset-comparison.png)

Every fix is small, and every one removes work the viewer was doing to decode the chart. Vision didn't buy a better chart. It bought a chart that stops leaking attention. One caveat from the panel's own log: its eyes are coarse — small text gets confabulated — so it rejects its own false sightings with pixel checks. Vision raises the hypothesis; pixels confirm it.

And the data? A deterministic verifier scored both panels 11 out of 11. Data was never the differentiator. Finish was.

## Designing blind

A text-only model designing a visual asset is designing blind. It can get the data perfect and audit geometry from first principles — in this test it did both. What it can't do is close the loop between what it meant and what actually rendered, so it won't take the risks that need the loop, and the last mile stays unfixed.

Practically:

- Generating visual assets with a text-only model? Expect correct data and a safe layout; budget a human or vision pass for the finish.
- Have a vision model in the loop? Make it look at its own render, probe its fidelity first, and cross-check its claims.
- Comparing models? Hold everything equal except the variable you're testing.

![Fogged on the left, crisp on the right. Which half of your pipeline is which?](/designing-blind/reddit-thumb.png)

Vision doesn't make the chart prettier. It makes the model able to check its own work. Without it, you're not just designing blind — you're shipping blind, and your model knows it.
