---
title: "Route the File Before You Write It."
description: "A bigger memory can help an agent find old work. It still cannot decide where today's artifact belongs. Put a routing rule in front of the first file write."
seoTitle: "How to Route AI Agent Work Across Projects and Sessions"
socialTitle: "Your Agent Doesn't Need a Bigger Memory. It Needs a Filing Rule."
ogCategory: 'Field Note · Agent Architecture'
pubDate: 'Sep 15, 2026'
layoutVariant: harness
showPopup: true
related:
  - title: 'More Context Makes Your Agent Dumber. The Fix Is a File Handoff.'
    url: '/blog/more-context-makes-your-agent-dumber/'
  - title: 'My Agent Kept Writing the Same Post. The Memory Was the Problem.'
    url: '/blog/my-agent-kept-writing-the-same-post/'
  - title: 'What Is an AI Work Harness?'
    url: '/blog/what-is-an-ai-harness/'
---

Before my agent writes a work-product file, it has to decide which project owns it. It searches a one-line registry, attaches to the matching project folder, and writes there. If two projects match, it asks me. If none match, it creates one.

That rule matters more than giving the agent a bigger memory. Memory can help it find old work. It cannot decide where today's artifact belongs.

I installed this convention in OpenClaw on September 14, 2026. At the time, my registry held 12 projects. Each row had four useful fields: path, status, last touched, and next action. The point was not to build a perfect knowledge system. It was to stop a long-lived agent working across several projects and Discord threads from putting durable work wherever the current conversation happened to be.

## Route at the moment of commitment

Routing at the start of a session is too early. The agent may not know whether a conversation is casual exploration, a continuation of an existing project, or the beginning of a new one.

The first file write is different. The agent is about to turn a conversation into durable state. It knows what the artifact is, and choosing the wrong home now creates the exact mess that future memory has to untangle: sibling drafts, stale project folders, and receipts separated from the decisions they support.

So I made the write itself the trigger. This is the routing card I use:

```text
Before writing a work-product file:

1. Search the project registry.
2. One strong match: attach to it and write inside that project folder.
3. No match: create a project folder from the standard template.
4. Two plausible matches: ask. Do not guess.
5. Update the project's next action and the registry row.
6. Log the change.

Before every later write, confirm the project still matches.
A new thread is a fresh routing decision.
```

That last pair of rules carries most of the safety. A project can drift halfway through a conversation. A new thread may look like a continuation while actually becoming a separate piece of work. The agent does not inherit the old destination merely because it was correct five messages ago.

## Give the next session a deterministic starting point

My registry is `BALLS.md`. A project folder — I call it a QBall — contains a small set of plain files:

```text
BALL.md       current state and next action
decisions.md  why the project took this shape
LINEAGE.md    prompts, models, and commands by version
receipts/     proof of what actually ran
prompts/      original briefs and inputs
commands.log  append-only execution trail
```

The next session reads `decisions.md` first, then `BALL.md`, then `LINEAGE.md`. That order is deliberate. State without rationale tells an agent what happened but not which constraints it must preserve. The trail comes third because it matters when something needs to be reproduced, not before the project can be understood.

One canonical folder owns each project. Other convenient paths are symlinks, never copies. Copying an asset creates two plausible sources of truth, which turns retrieval into guesswork again.

The registry has a maintenance cost. A stale `next action` sends the next session confidently in the wrong direction. I added a weekly vault-maintenance skill to refresh the rows, but the portable rule is simpler: if the registry is part of the resume path, updating it is part of finishing the work.

## Placement and recall are different jobs

The same day I installed this rule, I temporarily switched off my memory-search tool. Project state was still available in `BALL.md` and `LINEAGE.md`. That was one same-day observation, not a controlled test, and it does not prove this convention reduces lost work or makes agents resume faster.

It did make the boundary obvious. Search is a way to discover information. A project folder is where the current state lives. If continuity depends on semantic recall finding the right fragment of an old conversation, the system has no authoritative answer — only a good guess.

This is separate from context-window management. A file handoff keeps one stage from inheriting irrelevant conversation. A routing rule decides which durable project owns the file in the first place. You need both once one agent works across enough jobs.

OpenClaw enforces my version through an always-loaded `AGENTS.md` rule and four skills: `qball-router`, `project-boot`, `project-status`, and `vault-keeper`. Those names are implementation details. The useful mechanism fits in any agent setup that can read and write files:

- route at the first durable write;
- keep one registry row per project;
- preserve state, rationale, and lineage separately;
- re-check the destination when the work drifts;
- ask when ownership is ambiguous.

Do not start by building an elaborate memory architecture. Create one registry file and one project template. Then put a routing rule in front of the next artifact your agent tries to save.

The next session should not have to remember the project. It should have somewhere authoritative to resume it.
