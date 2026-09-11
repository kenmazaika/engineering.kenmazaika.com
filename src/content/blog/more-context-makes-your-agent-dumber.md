---
title: "More Context Makes Your Agent Dumber. The Fix Is a File Handoff."
description: "Chroma ran 18 models and found performance drops as the input grows — even on trivial tasks. The fix isn't a bigger window; it's one file per stage and a fresh agent per stage — and, for a critic, deliberately no context at all. Hermes does it with a Kanban board; OpenClaw does it with files. Anthropic's numbers show the bill: about 15× a chat's tokens."
seoTitle: "More Context Makes Your Agent Dumber: Context Rot and the File-Handoff Fix (Hermes & OpenClaw)"
socialTitle: "More Context Makes Your Agent Dumber. The Fix Is a File Handoff."
pubDate: 'Sep 10, 2026'
ogCategory: 'Field Note · Agent Architecture'
heroImage: ../../assets/headers/more-context-makes-your-agent-dumber-masthead.png
related:
  - title: 'Hermes vs OpenClaw: Why I Moved My Main Workflow (Test Data Included)'
    url: '/blog/hermes-vs-openclaw/'
  - title: 'Hermes Workflow: I thought Kanban was for me to manage'
    url: '/blog/hermes-workflow-i-thought-kanban-was-for-me-to-manage/'
---

Bigger context windows don't make an agent smarter. They dilute it — and the fix is a file handoff between fresh contexts. I've run my writing pipeline that way for a month, and I only just found the number that explains why the upgrade everyone reaches for is backwards.

The pipeline that writes this post is a folder of numbered files: signal, evidence, angle, flagship, distribution, review. Each stage gets a fresh agent that never sees the previous stage's conversation. It reads one file, writes the next, and hands off. I built it that way because a Kanban board works that way — one card, one owner, a clean handoff — and because a clean context simply felt better than a long one. No measurement behind the guess.

Then the guess showed its edge. When a stage fired image generation from a subagent, the subagent's turn ended before the images landed, and the stage closed with nothing to hand off. The separation was doing real work, and it had a failure mode. So I went looking for what the models actually do as the window fills.

## What the measurements show

Chroma held the task fixed and grew only the input, across 18 models — GPT-4.1, Claude 4, Gemini 2.5, Qwen3 among them ([Context Rot, July 14, 2025](https://research.trychroma.com/context-rot)). On the standard Needle-in-a-Haystack test, every model looks flat, because that test is just lexical retrieval: hide one known sentence in a long document and ask for it back. Chroma made the task trivial but varied the input — semantic matches instead of exact ones, distractors, shuffled structure, repeated words. The finding: "model performance varies significantly as input length changes, even on simple tasks."

A bigger window doesn't hold more at the same quality. It dilutes. Most of what we call giving the agent more context is paying to make it worse — paste the whole transcript, the whole repo, the whole notes folder, and you've handed the model a messier room to think in.

## The fix has a bill

Anthropic built their Research feature as an orchestrator with parallel subagents and published the numbers ([June 13, 2025](https://www.anthropic.com/engineering/multi-agent-research-system)): Claude Opus 4 leading Sonnet 4 subagents beat single-agent Opus 4 by 90.2% on their internal research eval. The mechanism is the part worth stealing. Each subagent runs in its own context window, compressing one slice down to a few tokens before anything reaches the lead agent. The lead writes its plan to memory, because past 200,000 tokens the context gets truncated. Subagent output lands in a filesystem instead of passing through the coordinator, to avoid what they call a "game of telephone."

Then the invoice. Agents use about 4× the tokens of a chat; multi-agent systems about 15×. Token usage alone explains 80% of the performance variance in their analysis — so a lot of "multi-agent is smarter" is really "multi-agent spends more." Worth it when the task is high-value and parallel. Not as a default.

Cognition looked at the same architecture and said don't ([Don't Build Multi-Agents](https://cognition.ai/blog/dont-build-multi-agents), June 12, 2025). Their two principles: share context, and treat actions as carrying implicit decisions. Two subagents given the same task each make private choices the other can't see, and the pieces don't fit together. Their default is one continuous thread; for tasks long enough to overflow it, add a model whose whole job is compressing history — not more agents.

Both are right, and the gap between them is the lesson: isolation buys independent breadth and charges for it in tokens and shared reasoning. Spend it where the work is parallel. Refuse it where the steps depend on each other.

## The fork: keep it, hand it off, or withhold it

"More context is bad" is too flat to actually use, so here's the plain version. Three questions decide it.

**Is everything in the window still relevant to this step?** A long context is fine — better, even — when all of it is load-bearing. It turns bad when it becomes a junk drawer: the whole transcript, the whole repo, five documents where one matters. Chroma's finding isn't that length alone ruins a model; it's that piling in more *distracting* material — semantic near-misses, shuffled structure, repeated words — pulls quality down, even on easy tasks. Length is not the poison. Dilution is. So if everything in the window is on-topic and needed, don't shrink it just to be safe.

**Does the next step need the reasoning, or just the result?** When the steps are chained — step two depends on the decisions step one made — keep them in one thread. Split them and, as Cognition argues, two agents each make private choices the other can't see, and the pieces don't fit. When the steps are independent — five unrelated sources, five draft variants — hand off a file and start each in a fresh context. That's the Anthropic win, and it costs about 15× the tokens, so spend it only where the work truly fans out.

**Is the point for the next step to *not* know what you were thinking?** This is the one people miss, and it's why "more context" isn't just diluted here — it's contamination. When the job is to critique, review, or revise, the context actively hurts. A critic who inherits the maker's running narrative inherits the maker's blind spots: they read the artifact the way it was meant, not the way it actually lands. So you withhold the context on purpose. The critic gets the artifact and the goal, and nothing else — no transcript, no defense, no "here's why I did it this way." My own review stage runs on exactly that rule, and so do the maker/critic/verifier splits in the Kanban workflows I run. If the artifact needs its transcript to make sense, that's a bug in the artifact — not a reason to hand the context over.

So the rule of thumb is three ways, not two. **Keep** one big context when the work is sequential and everything in it is still relevant. **Hand off a file** when the next step needs only the result, when the window has filled with material this step no longer touches, or when you're splitting off parallel work. **Withhold** the context when the next step is a critique, a verification, or a revision — where fresh eyes are the whole mechanism and the maker's reasoning is the contamination. And "hand off" never means delete: you externalize it, keep the pointer, and reload only what the next step needs.

## Same move, two tools: files (OpenClaw) and cards (Hermes)

The design decision isn't big window or small window. It's where the handoff boundary sits — and the two agent systems I run land on the same answer with different furniture.

OpenClaw does it with files. The workspace is the memory: `MEMORY.md`, the `memory/` notes, the skill files, and one file per stage. A fresh session reads the files it needs and nothing else; the transcript never crosses the boundary. My own workspace rules put it plainly — "Mental notes don't survive session restarts; files do." So the handoff is a path, not a paragraph of pasted context.

Hermes does the same thing with a Kanban board. One card per stage, one fresh agent per card. The board is durable state; the card is the handoff. Hermes's `waffle-it` skill compiles a request into exactly that: a maker creates, a critic reviews without the maker's running context, a verifier runs the objective checks, and the orchestrator owns the outcome. Different mechanism, same contract — the unit of handoff is a file on disk the next agent can reload without the previous agent's conversation.

Here's the actual stage contract from my `masthead-studio` skill, trimmed to the part that matters:

```markdown
### Workflow — kanban stage discipline (one card per stage, one fresh agent per card)

Working directory: `<workdir>/masthead-<slug>/` — this directory IS the board.
Each stage writes exactly ONE card file. The next stage reads only the card(s)
named in its brief — no context bleed, resume-safe.

masthead-<slug>/
  00-goal.md            # CARD 0 — goal, verbatim + locked constraints
  01-brief.md           # CARD 1 — research + design brief
  02-art-direction.md   # CARD 2 — composition spec + generation prompt
  03-generation.md      # CARD 3 — generation log + raw-image QA verdict
  04-composite.md       # CARD 4 — deterministic logo composite + QA
  05-render.md          # CARD 5 — staged render at breakpoints
  06-critique.md        # CARD 6 — vision critique of the RENDERED page
  07-revision.md        # CARD 7 — what changed, why, before/after
  08-verification.md    # CARD 8 — final verdicts + deploy proof

Every card starts with a handoff header:

# <NN>-<stage>.md
Handoff from: <stage> (<process id>, <date>)
Read by: <next stage>
Status: <in-progress | ready | fix-needed | approved>
Inputs: <paths this card read>
Outputs: <artifacts this card produced (paths)>
```

And the kickoff each fresh agent gets — this is the entirety of the context it's allowed:

```markdown
CARD <NN> — <stage name>
- Read the machinery: masthead-studio SKILL.md (your stage's section)
- Read ONLY these inputs: <paths>
- Execute ONLY stage <NN>: <one-line job>
- Constraints: infer nothing beyond the inputs — mark UNKNOWN rather than guessing
- Verification: card exists with a correct handoff header and Status
```

That's the whole rule, in four lines:

- One file per stage — the output is a file on disk, not a message in a thread. Durable, inspectable, reloadable.
- A fresh context per stage — the next agent reads the file it needs, not the transcript that produced it.
- Restorable compression — when something leaves the context, its pointer stays. Manus's rule: a page can be dropped if the URL remains, a document if its path remains.
- Fan out only for breadth — if the subtasks don't depend on each other, separate contexts help; if they do, one thread plus compaction beats three agents guessing.
- Withhold for review — a critic or verifier gets the artifact and the goal, never the maker's transcript. Fresh eyes are the whole mechanism.

## The 10× you don't see

Manus calls the KV-cache "the single most important metric" for a production agent, and the arithmetic is stark ([July 18, 2025](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)): on Claude Sonnet, cached input tokens cost $0.30 per million against $3 uncached — a 10× gap. A timestamp precise to the second at the top of the system prompt changes the prefix on every call and throws the cache away. So "write it down" has a corollary: write it down, and keep the front of the prompt frozen. The saving isn't in the model you pick. It's in not changing the thing you already sent.

So before the next upgrade — a bigger window, a second agent — take whatever your agent is holding in its head right now, write it to a file, and have the next step read that instead. The window was never the memory. It was the desk.
