---
title: 'Hermes Workflow: Memory Remembers, Skills Repeat, and a Wiki Learns'
description: 'How I separate persistent memory, executable skills, a research wiki, and Obsidian so Hermes can recall facts, repeat workflows, and build new understanding.'
socialTitle: 'How Hermes Remembers, Repeats, and Learns'
ogCategory: 'Field Note · Hermes Workflows'
pubDate: 'Jul 18, 2026'
---

I have used Obsidian for years. I have persistent memory turned on in Hermes. I have a growing collection of skills. And now I have a Markdown wiki that Hermes researches and maintains.

For a while, I treated these as slightly different versions of the same thing: places where my AI could store information.

They are not.

The cleanest distinction I have found is this:

> **Memory retrieves what I already know. A skill repeats what I already learned how to do. A wiki creates the conditions for learning something new.**

Obsidian can display the Markdown layers beautifully. But Obsidian is not the learning loop.

## The four layers in my actual setup

Here is how I think about the system now:

| Layer | What it is for | Best unit of knowledge |
|---|---|---|
| **Persistent memory** | Bringing relevant details about me into a future conversation | A fact or relationship |
| **Skills** | Preserving a repeatable method, including checks and failure modes | A procedure |
| **LLM wiki** | Turning raw material and research into an evolving model of a subject | A body of evidence and synthesis |
| **Obsidian** | Letting me read, edit, and navigate the Markdown | A human interface |

These layers overlap, but they should not collapse into one giant folder of notes.

My Hermes profile actually has two forms of persistent memory running together. The built-in `MEMORY.md` and `USER.md` files provide a small amount of always-on context. Alongside them, I use Hermes's **Holographic** memory provider—the thing I kept casually calling “Hologram.” It is a local SQLite fact store with full-text search, trust scoring, and compositional retrieval. I also have automatic fact extraction enabled.

That does not mean every conversation gets dumped into every future prompt. The compact built-in memory is always available. The deeper Holographic store can be searched when a question calls for it.

Skills solve a different problem. A skill is not supposed to remember that I once hunted for an apartment. It is supposed to remember **how to run a good apartment-scouting workflow next time**: which sources to trust, what to verify, how to score listings, how to separate fit from confidence, and what the final report should contain.

The wiki sits above both of those. It is where the unfinished thinking can live.

## The wiki starts with direction, not documents

The most important file in my wiki may be the one with the least research in it: my goals.

It tells Hermes what I am actually trying to do:

- Grow an engineering-management mailing list
- Build a YouTube channel and blog
- Keep growing as an engineering leader
- Build a lifestyle business
- Get genuinely good at human-agent workflows and write about what works

Without those goals, “research something useful” is a terrible instruction. The agent could spend all day producing polished answers that do not change a single decision I make.

The goals give the research loop a direction. The schema gives it somewhere to put the work:

```text
goals/       Human-owned direction
raw/         Immutable source material
questions/   Questions worth investigating
working/     Research plans and intermediate findings
concepts/    Durable synthesis
entities/    People, products, and organizations
meta/        Process lessons and capture state
```

The workflow is not “save a note.” It is:

> **Capture → Question → Research → Synthesize → Connect → Revisit**

That distinction matters because most useful thinking does not arrive fully formed. It needs intermediate artifacts.

## I ask it for questions, not summaries

Every morning, one scheduled Hermes job reads the goals, the index, the existing concepts, the open questions, and the working documents. Its instruction is to identify one gap that could change how I spend my limited time.

The key line in the prompt is essentially:

> Come up with one research question that could change Ken's approach to his goals in a non-trivial way. Not a 1–2% improvement—a question where the answer could shift his strategy.

The question must be answerable through web research, absent from the wiki, and connected to one of my goals. The job writes the question and a research plan, but it deliberately does not answer it.

Eleven minutes later, a second job picks up that plan. It researches the different avenues in parallel, preserves the intermediate findings, writes a synthesized concept page, and records what worked or failed in a process log.

The separation is useful. The first job decides **what is worth knowing**. The second job does the work of learning it.

## One question found three completely different paths

One gap-analysis run noticed that the wiki had plenty of ideas for producing engineering-leadership content but no model for what that content could eventually become. So it asked:

> What content formats, distribution strategies, and audience milestones have actually led engineering-management writers to meaningful professional or business outcomes?

The research found three creators who had built similar audiences but converted them in very different ways.

- [Anton Zaides](https://zaidesanton.substack.com/about) built Manager.dev to more than 23,000 subscribers while moving from developer to Engineering Manager to Director of Engineering in three years. His writing and his operating career grew alongside each other.
- [Gregor Ojstersek](https://newsletter.eng-leadership.com/about) grew Engineering Leadership to more than 177,000 subscribers while progressing from engineer to CTO. The audience became both a credibility engine and distribution for paid subscriptions, courses, guides, and templates.
- [Gergely Orosz](https://newsletter.pragmaticengineer.com/) took The Pragmatic Engineer in a third direction. He left his EM role at Uber and turned the publication itself into the career, supported by paid subscriptions, books, consulting, and speaking.

At the time of the research, those examples suggested three distinct models: **climb while writing, build credibility alongside the work, or make the publication the business.**

That was more useful than a generic answer like “grow an audience.” It gave the wiki a map of genuinely different outcomes, the audience scale associated with each one, and the tradeoffs among them. It also created a sharper follow-up question: which business models work before an audience reaches massive scale?

The next research cycle could start from that model instead of starting over. That is what compounding looks like. One answer becomes better context for the next question.

## The scouting loop exists in three different forms

The apartment-scouting workflow is an even cleaner example of why these layers should stay separate.

A dictation about the workflow was captured by the Holographic fact store. When I started drafting this article, Hermes queried that store and retrieved the earlier idea: let the agent scout messy sources, apply a rubric, and send a small review set while the human makes the decision.

That retrieval was useful context. But the fact alone was not enough to run the workflow.

The **skill** contains the procedure: inspect listing status across sources, analyze photos, calculate commute, apply the weighted rubric, separate fit from confidence, summarize rejected listings, and format the report. When the method improves, the skill improves.

The **wiki** preserves the conceptual lesson: scraping the rental sites failed, saved-search email alerts were a more stable ingestion boundary, and the broader pattern is reusable:

> **Messy source → rubric → scheduled scout → curated review → human action**

The same idea appears in three places without being redundant:

- Memory recalls the idea when it becomes relevant.
- The skill executes the method reliably.
- The wiki explains why the pattern works and connects it to other uses.

That durable concept is now available when I think about audience research, apartment hunting, vendor evaluation, or any other workflow where the agent should narrow a noisy field rather than make the final decision.

## Obsidian is the window, not the machine

I do not mean this as an argument against Obsidian. Obsidian is an excellent way to navigate Markdown, add links, and inspect the graph as a human.

But a linked vault does not automatically become a learning system.

The learning loop comes from somewhere else:

- Human-owned goals that define what matters
- Lossless capture before curation
- A schema that allows unfinished work to exist
- Recurring gap detection
- Research plans and intermediate evidence
- Durable synthesis with provenance
- New questions generated from prior answers
- Skills that preserve procedural improvements
- Memory that retrieves relevant personal context

Obsidian can show me the files. Hermes maintains and extends the knowledge environment under my direction.

## Not every kind of work needs this

This system is most useful for discovery-heavy personal projects: learning a field, building a body of case studies, finding patterns, and deciding what to investigate next.

At work, my problem is often different. I may already know what I think the organization should do. The hard part is framing the decision, building alignment, and persuading people whose incentives do not perfectly match mine. In that environment, ordinary notes and decision documents can be more valuable than autonomous web research.

The architecture should match the type of thinking I am trying to amplify.

## The real self-learning loop

People talk about self-learning agents as if the model quietly becomes smarter after every conversation. That is not how I experience it.

The compounding happens because each kind of knowledge has a place to go:

- Facts become available for future recall.
- Better methods become skills.
- Sources and half-finished ideas become working material.
- Research becomes durable concepts.
- Durable concepts expose better questions.

The model is not magically retraining itself on my life. The environment around it is getting better organized, better connected, and more useful every day.

That is enough to feel like a much more capable system.
