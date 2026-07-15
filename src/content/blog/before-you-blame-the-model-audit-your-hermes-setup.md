---
title: 'Before You Blame the Model, Audit Your Hermes Setup'
description: 'A copyable prompt for finding missing tools, silent fallbacks, and configuration problems before you spend hours comparing AI models.'
pubDate: 'Jul 14, 2026'
---

I spent a few hours testing different models in Hermes because I was not happy with the quality of the research results.

The model was not the problem.

My `web_extract` setup was not configured properly, so every model I tried was working with the same underlying limitation. Switching models changed the style of the output, but it did not fix the bottleneck.

That exposed a useful rule for working with AI agents:

> Before blaming the model, audit the plumbing.

An agent's results depend on more than the model. They also depend on its search and extraction providers, browser access, credentials, permissions, dependencies, and tool configuration. If one of those is missing or silently falling back, model comparisons can be misleading.

## The Hermes setup audit prompt

Here is the prompt I now use to audit a Hermes setup:

```text
Audit my Hermes setup for anything that is missing, misconfigured, or unnecessarily limiting the quality and reliability of your work.

Inspect the current configuration, enabled tools, credentials, integrations, environment variables, scheduled tasks, and recent logs or recurring errors.

Look especially for:

- Important capabilities that are unavailable or silently falling back because they are not configured
- Tools that technically work but are using a weaker default when a better option is available
- Missing API keys, dependencies, permissions, browser settings, or search/extraction providers
- Repeated errors, failed tool calls, timeouts, or unnecessary friction in recent runs
- Basic configuration changes that would materially improve research, browser use, coding, file handling, memory, or automation

Give me a prioritized list divided into:

1. Fix now — meaningful impact or broken capability
2. Worth improving — likely to produce better results
3. Optional — useful, but probably not worth the complexity yet
4. Already configured well — important things I do not need to worry about

For every recommendation, explain the practical benefit, show the evidence that led you to it, and give me the exact steps or commands needed to fix it.

Do not change anything automatically. Audit first and let me review the recommendations.
```

The final line matters. It keeps the first pass diagnostic: Hermes identifies the problems and proposes exact fixes, but you decide what it should change.

Run this before spending an afternoon comparing models. Sometimes the biggest improvement is not a smarter model. It is giving the model a properly configured system to work with.
