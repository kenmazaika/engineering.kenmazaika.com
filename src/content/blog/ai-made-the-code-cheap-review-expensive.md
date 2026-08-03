---
title: "AI Made the Code Cheap. It Made the Review Expensive."
description: "When AI-generated artifacts look senior but the engineer doesn't, the bottleneck moves from writing code to proving it works."
ogCategory: 'Industry Pulse · Engineering Leadership'
pubDate: 'Aug 03, 2026'
---

A team lead on r/ExperiencedDevs said the quiet part out loud this week: junior developers are producing clean PRs with passing tests, then failing basic questions about why the code works.

["I feel like I'm evaluating theater now,"](https://www.reddit.com/r/ExperiencedDevs/comments/1pn39gb/how_do_you_evaluate_engineers_when_everyones/) he wrote. "The artifacts look senior but the understanding is still junior."

The thread got 660 upvotes. One top comment argued that merging code you do not understand is unacceptable whether a person or model wrote it. Another put the new problem more precisely: junior mistakes used to look like junior mistakes. Now they arrive dressed up as senior-looking artifacts, which makes the real gaps harder to diagnose.

The pro-AI version is fair. If the code compiles and tests pass, a manager should not romanticize the old apprenticeship model. But the question is no longer "Did the ticket close?" It is "Can this person defend, debug, and extend what they submitted?"

One commenter framed the junior-to-mid jump as trust: it is the developer being reviewed, not ChatGPT. If a manager rewards output without checking understanding, they may promote the appearance of independence while increasing the team's hidden support load. The team got more code, but not necessarily more judgment.

## The same pattern at the other end of the stack

Anthropic [reported](https://www.anthropic.com/research/discovering-cryptographic-weaknesses) that Claude helped find improved attacks on HAWK, a post-quantum signature candidate, and on seven-round AES. The HAWK work took about 60 hours and around $100,000 in API cost. The AES work ran for about a week and produced a 200x to 800x speedup over prior attacks on that reduced-round target.

Then two researchers spent nearly a month validating the AES result.

Discovery got faster. Verification did not disappear. A model can produce a surprising cryptanalytic lead, but humans still have to decide whether it is valid, whether it matters, and how much confidence the world should place in it.

The artifact got better. The burden moved to the reviewer.

## The uncomfortable pattern

The more capable the agent, the more expensive bad verification becomes. This is not "AI is overhyped" and it is not "AI can do everything now." It is narrower and more annoying: cheap generation creates more things that look complete enough to demand review.

The teams that handle this well will not be the ones with the loudest AI adoption story. They will be the ones that know which work is safe to delegate, which work needs human ownership, and which outputs are too plausible to trust casually.

When the machine can produce the work, who in the org is still trained, staffed, and empowered to prove it should ship?
