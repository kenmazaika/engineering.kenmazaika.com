---
title: "Hermes vs OpenClaw: I Expected Hermes to Win. Then Its Memory Repeated the Same Post."
description: "App building came out even. Research leaned Hermes; executive framing leaned OpenClaw. The scoreboard didn't decide it — how each tool learns did."
seoTitle: "Hermes vs OpenClaw 2026: Real-Work Benchmark, Receipts, and My Verdict"
socialTitle: "I expected Hermes to win. OpenClaw kept edging ahead, then memory made the decision."
pubDate: 'Sep 4, 2026'
ogCategory: 'Field Note · AI & Engineering'
hideDefaultNewsletter: true
heroImage: ../../assets/headers/hermes-vs-openclaw-masthead.png
related:
  - title: "My Agent Kept Writing the Same Post. The Memory Was the Problem."
    url: "/blog/my-agent-kept-writing-the-same-post/"
  - title: "Which AI Model Should You Run for Agent Work? 11 Models, 5 Real Tasks, Receipts"
    url: "/blog/best-ai-model-for-agent-work/"
  - title: "Discord vs. Telegram for Agentic Work: Three Setups, One Verdict"
    url: "/blog/discord-vs-telegram-agentic-work/"
faq:
  - question: "Which is better, Hermes Agent or OpenClaw?"
    answer: "For most of the real work I tested, both reached similar substantive conclusions, and for a normal user the results are closer than the marketing suggests. Hermes is the stronger pick for academic-style research and automatic self-learning; OpenClaw wins executive framing and treats the assignment you actually gave it. The decision-changing difference was Hermes memory: it repeatedly steered new engineering-content assignments toward the same review-bottleneck idea. OpenClaw is now my main tool; Hermes still runs for the workflows I have already built there."
  - question: "Is this a controlled benchmark?"
    answer: "It is a real-work, paired-artifact comparison rather than a laboratory score. The blurb, rearchitecture, NYC 311, and content tests preserve outputs from the same brief on both tools. The job-search runs used different dates and freshness windows, so they are not a controlled head-to-head score — but on the assignment as given, the result was decisive: OpenClaw answered the location constraint, Hermes answered the question it inferred from context."
  - question: "Why does agent memory matter?"
    answer: "Useful memory compounds good local feedback. Bad memory turns local feedback into a global rule. Hermes learns automatically — including things you never asked it to remember — so a bias it picks up quietly shifts every future answer in that direction. In my case, one compliment about a peer-review idea became a repeated steering signal: new engineering posts kept returning to the review bottleneck even after I asked the agent not to repeat prior ideas. OpenClaw only learns what you explicitly teach it, which is slower and safer."
  - question: "Can I run both Hermes and OpenClaw?"
    answer: "Yes — and I do. OpenClaw runs my main workflow now; Hermes still runs for the workflows I've already built there. Skills are portable markdown, so moving between them is practical: I handed OpenClaw a Hermes media-company skill, it adapted it, and it outperformed the original in some ways. The real question isn't which one you can run — it's which failure you can live with."
---

I ran my actual work through Hermes Agent and OpenClaw, side by side, and kept every output. Same briefs, same models where the pair could be controlled. I expected Hermes to win — I had spent months inside it, and the deck was stacked. OpenClaw edged ahead anyway. Then a content test that should have favored Hermes came back with the same idea I had already told it to stop writing. **OpenClaw is my main tool now. Hermes's memory is why.**

Neither tool crushed the other in any single test. The blurbs were a near-tie. The research reports converged on the same truth. The differences were smaller than the marketing — and the one that changed my setup was memory: one compliment about a peer-review idea got promoted into a rule, and fresh engineering posts kept coming back as articles about the review bottleneck.

The one-line takeaway: side by side is the only way to see which failure you can live with — and memory is the failure that decides.

## What these two actually are

Before the differences, the category. Hermes and OpenClaw are the same kind of thing: **a harness that sits between you and the models.** You plug in multiple models and hot-swap them. The harness gives them tool calls, your file system, skills, and persistent memory. That combination is what makes this category of tool powerful — not any single model, but the agentic scaffolding around it.

The surface you talk to them through is not a tiebreaker. Both connect to external chat apps like Discord or Telegram, or ship their own interfaces; most people end up living in a chat app either way (I have a separate post on [Discord vs. Telegram for agentic work](/blog/discord-vs-telegram-agentic-work/)). And the business use cases overlap almost entirely: research, building apps, managing servers, keeping notes or a wiki, content production, marketing, brainstorming, generating PDFs. Anything you can do on one, you can set up on the other.

Even the skills are portable. Skills are markdown under the hood — Claude skills, OpenClaw skills, and Hermes skills are the same species. In this comparison I took a Hermes skill, handed it to OpenClaw, and said "learn this." It adapted the skill to its own environment, it worked, and in some specific ways it outperformed the original. Pick either tool and you are not locking yourself out of the other's ecosystem.

So the marketing frame — Hermes sells the self-improving learning loop, OpenClaw sells the personal operating system — describes a real emphasis difference, not a different product category. Peel the framing away and these tools are extremely similar. The differences are in how they learn, how they show their work, and what they do when your instructions are ambiguous.

## Where they actually differ

### Learning: Hermes learns for you. OpenClaw makes you teach it.

This is the real distinction, and it cuts both ways.

Hermes has a learning loop that runs automatically. It watches what you do, writes its own skills, and remembers your preferences without being asked. The most concrete example in this whole comparison is the PDFs. Look at the artifacts below: Hermes's PDFs look designed — executive layouts, clean typography — because over months I'd tweaked some PDF builds and it absorbed the design taste. I never wrote it a skill that said "design documents like this." It just learned. OpenClaw's documents were competent and bare-bones — headlines and structure — because I never explicitly taught it my design preferences.

That automatic learning is handy. It is also the danger: get learning for free and you also get **memories you did not realize you were getting.** Hermes learned a preference for the code-review bottleneck idea from one compliment I gave it early on, and that preference quietly became a global rule that steered months of fresh work. It wasn't wrong in the way it was stored — it was a bias that kept its finger on the scale. The full autopsy is in [My Agent Kept Writing the Same Post. The Memory Was the Problem.](/blog/my-agent-kept-writing-the-same-post/)

Each mode changes how you work, too. With Hermes — my main tool from June through August — the automatic learning made me lazier in a specific way: I'd throw ad hoc instructions at it and hope they eventually got codified, instead of shaping them into something it could learn. With OpenClaw, you have to slow down and decide: what is the skill I want to teach, and what is the right way to teach it? That friction makes workflows more methodical — you build the skill instead of hoping the vibe sticks. Hermes feels like the advanced system because it has the learning loop. In practice it's closer to training wheels — it does the meta-work for you, and occasionally gets the lesson wrong.

### Research: Hermes writes the paper. OpenClaw writes the briefing.

Run both on the same research question and the outputs diverge in a consistent, visible way. Hermes's reports are academic: they cite sources (the rearchitecture report carries 64 source URLs), label claims **[FACT]** / **[INTERPRETATION]** / **[SYNTHESIS]**, and rate confidence. It's showing its work the way a researcher does. OpenClaw's reports lead with an executive summary and organize around decisions — failure modes, a case template, a lesson per case. Less visible citation, more "here is what you should do about this."

The blurb test shows the same split, smaller. Hermes's blurb linked both Reddit threads with engagement counts so I could audit its premise. OpenClaw's blurb was the better read — specific, alive, story-shaped — and contained a $2,000-per-engineer figure with no source at all. I could fact-check one; the other I wanted to read and then had to go verify.

I like to think of myself as a data-driven, receipts-first person. Day to day, what I actually want is mostly high-level instructions on how to do the thing — the executive framing. That's OpenClaw's strength. The academic version is what you want when the answer has to survive scrutiny; the briefing is what you want when you have to act.

### Judgment: what happens when the assignment is ambiguous

The job-search test was the clearest example. Both tools did the mechanics fine — found real job boards, real postings, real roles. The difference was judgment. Hermes knew things about me: that I work in AI, that I would probably want an AI-native company. So it optimized for the jobs its context about me suggested — remote AI roles — rather than the specific thing I asked for: jobs near me that I could actually do. OpenClaw treated the constraint as the assignment and came back with ATS-verified roles in Los Angeles and Santa Monica.

Neither answer is wrong. The problem is the slide: I asked for one thing, and the other thing slipped in, driven by stored context. What I would love from a tool in that moment is a question — "is this what you want, or does this conflict with what you said before?" — instead of silent substitution. Hermes's automatic memory makes that kind of substitution more likely, because it has more unexamined context to slide in.

## The scoreboard

Scores are my judgment from reading the paired artifacts side by side, not a measured quantity:

| Capability | Hermes | OpenClaw |
| :--- | :---: | :---: |
| One-shot app building (PRD → app) | 10 | 10 |
| PRD / product thinking | 10 | 10 |
| Academic research & citation | 10 | 7 |
| Executive framing / action-ready output | 7 | 10 |
| Learning | automatic | explicit |

App building is a wash because both are mind-blowingly good at it — give either a one-shot PRD and it will spec, build, verify, and ship. Research splits the way the artifacts do: Hermes produces the more academic, better-cited work. Executive framing is OpenClaw's side of the same coin. And learning is not a score at all — it is a mode: one accumulates automatically, including the parts you wish it hadn't; the other waits for you to teach it deliberately.

## The receipts — why you can trust the claims above

The sweeping claims up top are not marketing. They're backed by the artifacts below: seven or eight benchmark runs against both tools, depending on how you count the NYC round (it was really two or three tasks — spec, build, analyze). Every output was preserved, and the links are here for you to check the work yourself.

One framing note before the details: treat the specifics as case studies. They were contrived to test the tools, and the value is in what each tool's behavior reveals — not in the particular findings. Whether a given NYC complaint category is rising, or what a Reddit thread happened to say that week, is not the lesson. The lesson is what each harness did with the same brief.

### Run 1 — The blurb: sources vs. spark

The brief: *Browse Reddit for contentious and highly upvoted engineering-leadership posts. Write a short blurb covering both sides of the argument and "my read."*

Hermes opened like this:

> This week on Reddit, a post made the rounds that a lot of managers pretended not to see. The setup: you're asked to build something you don't fully understand, you don't have time to learn it, so you punt it to an AI agent, lock onto a few terms your boss used, and let the agent figure it out. When the output comes back looking plausible but not quite right, you can't actually tell the difference — and you hand it off anyway. The post's framing was blunt: *using AI for something you don't understand is a fantastic clueless-middle-manager simulator.*

Hermes wrote **"Looks right ≠ is right."** It found the "clueless-middle-manager simulator" discussion, gave the optimistic case and the skeptical case, and ended with a read: AI makes it possible to *appear* to understand work you cannot evaluate, so the verification burden lands on the people who still can. Both source threads are linked, with engagement counts (250▲ and 32▲). I can audit the premise before I reuse it.

OpenClaw, same brief, opened like this:

> An AI startup CEO broke the script and told the truth about what AI is actually doing to engineering orgs: most teams don't have great ideas waiting to be unblocked — expensive implementation was quietly filtering them. Most workers aren't trying to be 10x; they're using AI to churn their tasks with less energy. And the two engineers who actually leaned in? Flattened by everyone else's slop, and about to quit. The CFO just noticed each engineer now costs $2,000/month in LLM bills.

That's a better hook — specific, alive, a story. It's also not publishable as-is: no source, and I can't verify where the $2,000 figure came from. Same brief, two instincts: Hermes made something I could fact-check; OpenClaw made something I wanted to read. Not a clean win either way. Reading Hermes's blurb back now, the tell is on page one — even when it was good, it was circling the review-burden idea.

**Receipts:** [Hermes blurb](/post-assets/hermes-vs-openclaw/hermes-industry-pulse-blurb.md) · [OpenClaw blurb](/post-assets/hermes-vs-openclaw/openclaw-industry-pulse-blurb.md)

### Run 2 — The research reports: same truth, two readers

The question: when a large rearchitecture fails, is the design wrong — or does a plausible design get lost in migration, staffing, and organizational reality?

Hermes returned a 20-page report covering roughly 25 cases. Claims are marked **[FACT]**, **[INTERPRETATION]**, or **[SYNTHESIS]**, with source URLs and confidence. On a topic full of rewrite mythology, that labeling is what makes the document trustworthy, and it lands the central insight precisely: the migration is not cleanup after architecture; it is part of the architecture. The cost of that rigor: breadth over decision. I leave with evidence and still have to build the operating model myself.

OpenClaw returned 28 pages organized around a decision spine: failure modes, then a repeated case template — original system → problem → target → implementation reality → compromise → outcome → lesson. It also qualifies its own hypothesis, naming Segment and Amazon Prime Video as cases where the target design itself did not pay back. The limitation is the mirror image of Hermes: the framework is easy to act on, but individual claims carry less visible sourcing, so it is easier to accept quickly — exactly when you should be slower.

Both converged on the same conclusion: complexity gets relocated rather than removed, and the migration is usually the hidden architecture. The reports are real files, not summaries of summaries — [Hermes, 20 pages](/post-assets/hermes-vs-openclaw/hermes-rearchitecture-research.pdf) and [OpenClaw, 28 pages](/post-assets/hermes-vs-openclaw/openclaw-rearchitecture-research.pdf) — click and check me. This pair is the control in the battery: nearly a tie, and the split that keeps showing up elsewhere is visible here first — Hermes writes for the skeptic, OpenClaw for the person who has to act.

### Run 3 — NYC 311: build the app, then argue with the data

This is the round that pulls the comparison together, because it ends where real work ends: a report someone has to understand.

The assignment was deliberately vague: a shared dataset of roughly 12.95 million NYC 311 records (Jan 2023–Aug 2026), and one sentence — *write an application that analyzes this and finds interesting trends.* No stack, no schema, no UI, no report format.

Both agents wrote code for a long time. Both verified their pipelines before trusting them. Neither was told which database to use; both independently picked DuckDB, a columnar database I had never specified. Then the runs diverged: OpenClaw's sample dataset was a little wider than Hermes's. That sounds like trivia until the real data runs. Pointed at the full dataset, Hermes's app came back empty — it had verified its shape on a slice too short to surface trends. OpenClaw's produced. I reloaded both with the same data afterward, because the dataset is a separate thing from the app that reads it.

Neither of us asked for a frontend. Hermes built an elaborate one — and it broke when I clicked the buttons. OpenClaw built a plain one — and it worked. That, to me, is the whole comparison in miniature. On the build itself I call it a wash with a slight edge to OpenClaw: the corner cases that broke Hermes's app never surfaced during its smaller-sample verification.

Then each app generated its report from the same data. Hermes returned eight pages; OpenClaw returned seventeen.

**Receipts:** [Hermes NYC 311 findings, 8 pages](/post-assets/hermes-vs-openclaw/hermes-nyc311-findings2.pdf) · [OpenClaw NYC 311 findings, 17 pages](/post-assets/hermes-vs-openclaw/openclaw-nyc311-findings2.pdf) · [PRD pair: Hermes](/post-assets/hermes-vs-openclaw/hermes-nyc311-prd.pdf) · [OpenClaw](/post-assets/hermes-vs-openclaw/openclaw-nyc311-prd.pdf)

The reports show the same split as Run 2, now in data form. Hermes structures everything as **Observation → Interpretation → Hypothesis → Caveat**. Its best example: Drug Activity complaints are down 72.4% in the matched comparison — and it refuses to call that a public-safety win, pointing at the 2025 spike, the Queens concentration, and the possibility that enforcement or reporting changed. It catches its own statistics lying: apparent response-time improvements turn out to be left-censoring, because open complaints are excluded from closed-case medians. It is exceptionally good at not fooling itself.

OpenClaw's report treats volume and response time as separate axes and uses that to find the operational cluster: boilers, residential noise, encampments, drug activity, taxi complaints. Its best example: **New Tree Request down 96.3%** — it checks the related categories, sees the underlying problem did not disappear, and labels it a likely program or intake change rather than a win. It runs Theil–Sen slopes and Mann–Kendall significance tests, catches its own bugs (a test suite that overwrote the production cube; a window flag that was halving volumes), and fixes both before publishing. The layout is what an executive summary should be: ranked charts, borough and agency comparisons, a seasonality heatmap. I understood the data after reading it. Hermes's report gave me rigorous facts I would immediately forget, because nothing tied them into a story.

Put the two side by side and the pattern is consistent — when I had a second model score the pair, Hermes edged out on academic grounds (better citations, more rigor in the scientific method) and OpenClaw won the product. On the assignment as given — run the data, produce a useful report — OpenClaw did the better job, and the reason is almost philosophical:

- Hermes handled the dataset it *had* extremely intelligently.
- OpenClaw made sure it *had* the dataset it needed.

For an autonomous agent, I value the second more. One boundary I'm keeping visible: the reports measure response time differently (created-to-closed vs. created-to-first-response), so the exact numbers are not interchangeable — they corroborate patterns, they don't confirm each other's figures. I did not independently re-verify the trend math; the PDFs are the agents' own work, and the source data is public.

### Run 4 — The content flagship: the memory problem

This is the test that changed my tool, and OpenClaw should have lost it.

The assignment came from a workflow I trusted on Hermes: a one-person [media-company skill](/blog/hermes-workflow-six-bots-one-media-company/) that researches and writes flagship posts. I suspected kanban was the engine running it behind the scenes, invoking different agents and models — and kanban is a feature OpenClaw doesn't have. OpenClaw isn't architected that way, and I honestly didn't know whether the skill would work there at all. I asked it to port it anyway.

It did — and produced a new perspective on the assignment: research and write a flagship post on engineering-team effectiveness.

Hermes wrote **"Your Team Got Faster. It's Still Not Shipping."** On its own, it is a strong article: DORA and Faros material turned into real levers — review capacity, batch size, ownership, a five-step pipeline audit. If you saw only that PDF, you'd call it a good result.

I had seen it before. The core was, again: **review is the bottleneck.** I had told Hermes the same thing several weeks before this test: stop repeating that idea across engineering posts. One compliment about a peer-review piece had been generalized into a global instruction, and a new brief kept getting pulled back into the same answer.

**Receipt:** [Hermes flagship PDF](/post-assets/hermes-vs-openclaw/hermes-flagship-team-effectiveness.pdf)

OpenClaw wrote **"Team effectiveness is a context problem, not a talent problem."** Different route entirely: Project Aristotle, Westrum, and the idea that the shared mechanism is information flow — can the person who sees a problem say it out loud without becoming the problem? Its best move is explaining why a team can run retrospectives and design reviews and still not improve: if the local context punishes honesty, the ceremony becomes theater. Less operationally concrete than Hermes's levers, but a different frame — and it wasn't dragged back into the groove.

**Receipt:** [OpenClaw flagship PDF](/post-assets/hermes-vs-openclaw/openclaw-flagship-team-effectiveness.pdf)

To be clear: an article about code review is not bad. An agent that decides every fresh topic is secretly an article about code review — after being told to stop — is a product problem, not a prompt problem. This is where memory cut both ways for me. It got me up and running fast — no re-explaining myself every session. It also quietly locks decisions in, and unless you know exactly what you're looking for, unwinding it is hard. Bad memory is worse than no memory at all — it doesn't just repeat; it narrows the space of answers you can get.

### Run 5 — The job search: the assignment was location

Stop me if you've seen this pattern. Hermes ran first, with a 45-day freshness rule — and look at what it optimized for: remote AI roles, because its context about me (AI-interested, remote-friendly) picked the jobs it thought I'd like, not the jobs I asked for.

OpenClaw ran later, with a 90-day window, and treated the constraint as the assignment: 262 title matches → 40 location-qualified roles → 11 scored, ATS-verified. It logged 72 endpoint failures instead of pretending every check passed. Six Apply, four Hold, one Watch — and the Applys were places I could actually work: Snap in Los Angeles, ZipRecruiter in Santa Monica.

I asked for jobs I could do, near me. The unicorn remote role was not the assignment. If you search remote-only, you're competing with every engineer on the internet — an arms race where the only move is a million applications. On the brief as given, this wasn't close: Hermes answered the question it inferred from context; OpenClaw answered the one I actually asked.

**Receipts:** [Hermes job-search results](/post-assets/hermes-vs-openclaw/hermes-job-search-results.md) · [OpenClaw job-search shortlist](/post-assets/hermes-vs-openclaw/openclaw-job-search-shortlist.md)

## What I actually learned

**The capability gap is smaller than the packaging gap.** Run the same meaningful assignment through both and the underlying work is surprisingly close — both are capable tools. The differences are consistent, though: Hermes interrogates the task and its own output; OpenClaw carries the work through to a decision-ready artifact. Most of the time you want both halves.

**Learning mode is the feature that decides.** Hermes's automatic learning loop is real and useful — it absorbed my design taste and produced documents I never taught it to make. But automatic learning includes the memories you didn't ask for. Once fresh work started arriving with the ending already chosen, the loop stopped being leverage and became a constraint. OpenClaw's explicit teaching is slower, more deliberate, and easier to audit — you know what it learned because you taught it.

**Which should you use?**
- Choosing based on a demo is a mistake. Give both tools a task with a failure you can recognize, and keep the outputs.
- If you want academic-grade research with visible citations, or you want a system that learns from you without being taught, Hermes is the stronger pick.
- If you want executive framing, decision-ready artifacts, and a tool that answers the assignment you actually gave it, use OpenClaw.
- If memory starts making new work feel pre-decided, treat it as a product failure, not a prompt-writing problem. Clear it, constrain it, or move the work.

I moved the main workflow to OpenClaw. Hermes still runs for what I've already built there, and this isn't a claim that it has no value — it's a decision about which failure I'm willing to live with. For me, repeated steering was the one I couldn't.

## Full receipts

- [Industry-pulse: Hermes](/post-assets/hermes-vs-openclaw/hermes-industry-pulse-blurb.md) · [OpenClaw](/post-assets/hermes-vs-openclaw/openclaw-industry-pulse-blurb.md)
- [Rearchitecture: Hermes, 20 pages](/post-assets/hermes-vs-openclaw/hermes-rearchitecture-research.pdf) · [OpenClaw, 28 pages](/post-assets/hermes-vs-openclaw/openclaw-rearchitecture-research.pdf)
- [NYC 311: Hermes, 8 pages](/post-assets/hermes-vs-openclaw/hermes-nyc311-findings2.pdf) · [OpenClaw, 17 pages](/post-assets/hermes-vs-openclaw/openclaw-nyc311-findings2.pdf)
- [NYC 311 PRD: Hermes](/post-assets/hermes-vs-openclaw/hermes-nyc311-prd.pdf) · [OpenClaw](/post-assets/hermes-vs-openclaw/openclaw-nyc311-prd.pdf)
- [Flagship content: Hermes](/post-assets/hermes-vs-openclaw/hermes-flagship-team-effectiveness.pdf) · [OpenClaw](/post-assets/hermes-vs-openclaw/openclaw-flagship-team-effectiveness.pdf)
- [Job search: Hermes](/post-assets/hermes-vs-openclaw/hermes-job-search-results.md) · [OpenClaw](/post-assets/hermes-vs-openclaw/openclaw-job-search-shortlist.md)
- [Raw community findings](/post-assets/hermes-vs-openclaw/community-findings.md)

More context: [My Agent Kept Writing the Same Post](/blog/my-agent-kept-writing-the-same-post/) · [the 11-model battery](/blog/best-ai-model-for-agent-work/) · [Discord vs. Telegram for Agentic Work](/blog/discord-vs-telegram-agentic-work/).
