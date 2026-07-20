---
title: 'AI Coding Is Entering Its Boring, Useful Phase'
description: 'AI coding is moving past hype and slop toward clearer evidence, ownership, and practical engineering norms.'
pubDate: 'Jul 20, 2026'
---

*The interesting shift this week wasn’t a dramatic new capability. It was teams getting more specific about what acceptable AI-assisted work looks like.*

For a while, almost every AI coding argument collapsed into one of two positions: this changes everything, or this is all slop.

This week felt different. Linux contributors argued about responsibility. Bun showed agents contributing to and reviewing the same pull request. Microsoft published evidence that coding-agent users produced more. Experienced developers debated which parts of implementation still matter when typing gets cheap.

That sounds like the industry is finally moving past the referendum on AI and into the less glamorous work of building norms around it.

## Linus Torvalds offered a better rule than “yes” or “no”

The clearest example came from Linux.

In a [July 14 mailing-list response](https://lore.kernel.org/linux-media/CAHk-=wi4zC+Ze8e+p3tMv8TtG_80KzsZ1syL9anBtmEh5Z40vg@mail.gmail.com/), Linus Torvalds rejected the idea that Linux should become an anti-AI project. His position was basically: use the tools if you want, but the patch still has to be good, and a human still has to stand behind it.

I like that framing because it avoids turning tool choice into identity. It does not treat AI use as evidence that someone is innovative. It also does not treat AI use as evidence that the work is bad.

The contribution is the thing being judged.

A useful policy might be much simpler: bring whatever tools you want, but bring enough evidence with the work.

## The bots reviewed the bots

A [Bun pull request](https://github.com/oven-sh/bun/pull/34144) this week had an AI contributor, two AI reviewers, and almost no visible human involvement. The bots fixed each other’s mistakes, declared the work ready, and waited for a human to click merge.

The author was Robobun, an AI coding agent. A GitHub bot first suggested that its change might be a duplicate. Robobun explained why it wasn’t. Then CodeRabbit found a possible null-handle bug in the test. Robobun fixed it. A Claude review bot noticed that the test would fail on Windows because of line endings. Robobun fixed that too. Claude checked the revision and replied: “LGTM.”

Then Bun’s human maintainer merged it without adding a word to the conversation.

As [Gergely Orosz pointed out](https://x.com/GergelyOrosz/status/2077479764604883339), this was not a staged demo. It was an ordinary compatibility fix moving through a real repository. The bots handled the back-and-forth we normally think of as code review: identify a problem, defend the approach, request changes, fix them, and check the fix.

The odd part is that the bots produced both the code and most of the evidence that the code was safe. That may be perfectly reasonable for a small, mechanical change. It also means the human role can shrink from “review the code” to “decide whether to trust the review that already happened.”

That is the interesting part of the story. The future may not look like one agent replacing one developer. It may look like a small cast of agents doing the work, challenging one another, and handing a human a nearly finished decision. The human is still accountable, but increasingly absent from the visible process.

## The productivity numbers are becoming inputs, not verdicts

Microsoft researchers looked at what happened when tens of thousands of engineers started using Claude Code and GitHub Copilot CLI. Their [study](https://arxiv.org/abs/2607.01418) found that the engineers using those tools merged about 24% more pull requests than the researchers estimated they would have without them.

That last part is what researchers call the “counterfactual.” In normal-person language: they could not send the same engineer down two timelines, so they built the best comparison they could for what probably would have happened without the tool.

It is a pretty solid result. This was real work inside a real engineering organization, not a demo or a survey asking people whether they felt faster.

It still does not mean Microsoft shipped 24% more useful software. A merged pull request can tell you that more code moved through the system. It cannot tell you whether customers got something better, whether maintenance became easier, or whether the team simply split the work into more pieces.

That does not make the metric fake. It makes it one instrument on the panel.

The mature response is neither “AI made engineers 24% more productive” nor “PRs are meaningless.” It is to take the increase seriously, then look at what happened around it: which work moved sooner, what review required, what reached customers, and whether engineers could still own the systems they changed.

That is a much more normal engineering conversation. We rarely trust one metric to describe a distributed system. We should probably stop expecting one metric to describe an engineering organization.

## Even the “code was never the hard part” fight is getting sharper

An [r/ExperiencedDevs discussion](https://www.reddit.com/r/ExperiencedDevs/comments/1ux2x21/code_was_never_the_hard_part/) pushed back on the phrase “code was never the hard part.” The strongest point was not that every line needs to be typed by hand. It was that implementation is often where vague ideas become concrete.

You discover ownership boundaries while writing the function. You notice the awkward failure case while connecting the pieces. You learn the codebase while wandering through the part you did not understand yet.

AI can remove pointless wandering. It can also remove productive wandering. The hard part is that those look identical from the outside.

This is where blanket rules fail. “Never let the agent implement” wastes a useful tool. “Implementation is just transcription” ignores how engineers actually build judgment. The practical middle is to decide where speed is the goal and where the work itself is part of learning the system.

That choice may differ for a staff engineer doing a familiar migration and a new engineer encountering the architecture for the first time. That is not inconsistency. It is management.

## The new question is better than the old one

The week did not convince me that AI coding is wonderful or disastrous. It convinced me that “Are you pro-AI?” is becoming a stale question.

The more useful questions are concrete:

What evidence should accompany an AI-assisted change? Which checks can be automated? Where does a human decision still matter? What does the contributor need to understand after the code is merged? And who owns the result when something goes wrong?

Those are not exciting questions. That may be the best sign yet. A technology starts becoming real when people stop arguing about what it represents and start deciding what good work with it actually looks like.
