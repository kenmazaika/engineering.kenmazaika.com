---
title: "Agent Hooks: Named Triggers for Durable Agent Work"
description: "Agent hooks are named triggers that route agent behavior into durable state, so work can be inspected, directed, and resumed without reconstructing an old chat."
seoTitle: "AI Agent Workflows Need a Durable Work Log"
socialTitle: "Agent Hooks: Named Triggers for Durable Agent Work"
pubDate: 'Oct 30, 2026'
ogCategory: 'Field Note · Agent Architecture'
layoutVariant: harness
heroImage: ../../assets/headers/agent-hooks-masthead.png
related:
  - title: 'Route the File Before You Write It.'
    url: '/blog/route-the-file-before-you-write-it/'
  - title: 'I Gave OpenClaw Less Memory. It Got More Reliable.'
    url: '/blog/i-gave-openclaw-less-memory/'
  - title: 'More Context Makes Your Agent Dumber. The Fix Is a File Handoff.'
    url: '/blog/more-context-makes-your-agent-dumber/'
  - title: 'Set Up an Inbox System in Your Obsidian Vault'
    url: '/blog/obsidian-inbox-system/'
---

Agent hooks let ordinary requests turn into durable work. When I tell my agent, in normal language, to take a ticket live, research something, or park work, the request fires a defined workflow. It can create or update the right files, write the work back to my Obsidian vault, keep track of status and artifacts, and leave the project organized for the next turn.

That is not magic, and it is not automatic in the vague sense. It depends on a few explicit abstractions: named triggers, maintained procedures, predictable homes for the work, and a record the agent keeps current. An **agent hook** is the named trigger that connects agent behavior to that durable state. This post explains the pieces that make the system work.

I use an Obsidian vault as the visible operating surface for those hooks. The clearest example is a live ticket: I say **take ticket [name] live**, then work with the agent in chat while the ticket records the work as it happens.

When that hook fires, the agent updates the ticket’s state, saves drafts and intermediate artifacts, and records the next action before it replies. When I come back, I can say **let’s keep working on this ticket**. The ticket carries the context needed to recover the work.

Before this, a draft could be somewhere inside an agent session or project directory. I had to remember that it existed, hunt for it, and figure out why it mattered. I have lost work that way. The live ticket removes that cleanup job because the conversation begins with a durable home.

A live ticket is only one kind of agent hook. It works because it sits inside a larger set of hooks that tell the agent where to look, where to write, how to collaborate with me, and how to keep useful work from decaying.

## The four kinds of hook

I group the hooks in my setup into four categories:

| Hook | Question | Example in my setup |
| --- | --- | --- |
| **Direction** | Where should the agent look for the right procedure? | `TOOLS.md` points to the credentials kit. |
| **Routing** | Where should this artifact, decision, or receipt live? | A project write routes into its QBall. |
| **Collaboration** | How does ordinary work become shared, resumable state? | A live ticket records the conversation and artifacts. |
| **Compounding** | How does useful state stay maintained or grow over time? | Cleanup, research, and feedback loops write visible results back to the vault. |

This is a design test for any automation. Can the agent find the right instructions? Does its output have a predictable home? Can I see and direct the work? Does the result remain useful after the immediate task ends?

## A live-ticket hook has three durable pieces

The first piece is the **kit**: the full procedure the agent follows when the hook fires. My live-session kit says how to open a ticket, what to write on every turn, and what to record when I close or park the work. Every message becomes the ticket’s next instruction while it is live; an ambiguous instruction gets one question instead of a guess.

The second piece is the **pointer**. The full procedure lives in the kit; a short always-loaded instruction carries the trigger and path. It can say that “take ticket [name] live” routes to the live-session kit. That is the same pattern I use in `TOOLS.md` for credentials: the small file carries the trigger and path; the maintained kit carries the detail.

The third piece is the **record**: the ticket file. When live mode opens, the ticket says what the work is, who has the next turn, and where the related artifacts are. Each reply updates the record. When I say close or park it, the agent writes a recap with the work completed, the decisions made, the artifacts created, what did not happen, and the next action on pickup.

The kit supplies Direction. The ticket and project folder supply Routing. The running log supplies Collaboration. The recap and durable artifacts make later work build on a real record, which is the useful form of Compounding.

## A project bundle makes agent work resumable

The live ticket is a running work log. Behind it is a project bundle—in my case, a QBall—that holds longer-lived state, decisions, receipts, lineage, and the artifacts themselves. The ticket points into that bundle while the conversation is active. That keeps chat fast without making it disposable.

It also explains why I can resume a ticket without asking the agent to remember the prior thread. The agent reads the project state and ticket record in a defined order. Those durable files carry the context that a chat window usually drops.

The transferable pattern is a named trigger, one maintained procedure, a durable record for active work, and a project home for the material that outlives the chat. Missing pieces turn the hook into another prompt to remember or another file to hunt down.

## Automatic write-back needs a boundary

I keep consequential decisions explicit while the agent saves the work it produces. The live-ticket hook separates those cases.

Writing a snapshot, linking an artifact, and updating the next action are reversible recordkeeping actions. The agent can do them as part of the hook. A meaningful change can wait for an approval in the inbox or for an explicit instruction in chat.

That boundary keeps the vault understandable: a trigger, a durable home, and a clear line between automatic recordkeeping and decisions that remain mine.

## Start with the piece your setup is missing

Start with the condition you can already see:

| If this is happening | Start here |
| --- | --- |
| Chat work gets lost or requires re-reading an old thread. | Create one durable ticket for a piece of work and have each turn update its state, artifacts, and next action. |
| The ticket exists, but drafts and decisions still scatter. | Give the ticket one project home and make it point there. |
| The agent follows the procedure only when you remember to paste it. | Put the full procedure in one maintained kit and give the agent a short trigger-and-path pointer. |
| The agent can write state, but you are unsure what it may decide alone. | Separate recordkeeping from consequential changes; reserve the latter for an explicit instruction or approval. |

The table maps conditions to starting actions. My ticket, QBall, and `TOOLS.md` are one implementation of the same shape.

## How to set up a durable AI agent work log

If you already have an agent and a Markdown or Obsidian vault, give it this prompt before you add anything:

> I want a live-ticket hook for my existing agent and vault. A **ticket is a durable Markdown file in my vault for one piece of work**: it holds the work’s current status, decisions, links to drafts and other artifacts, enough context to resume without chat history, and the exact next action. **Going live means the ticket becomes the active work log for the chat:** each message I send is treated as the ticket’s next instruction; before the agent replies, it records what happened in that turn, the decisions made, files written or changed with their links, the current state, and what should happen next. First inspect my current instructions, ticket location, and project folders, then propose: (1) a full live-session kit covering open, each-turn write-back, close/park, and later pickup; (2) one short always-loaded pointer in `TOOLS.md` or the equivalent that routes “take ticket [name] live” to that kit; and (3) the ticket record and close recap. Do not change my schema or write files until I approve the plan; keep automatic actions to durable recordkeeping and make consequential changes require an explicit instruction or approval.

The prompt asks for a proposal that fits the environment you already have. Your folders and ticket names can differ from mine. The pattern stays the same: the full procedure lives in one maintained place, the agent carries a small pointer to it, and active work writes itself into a record you can resume.

Before you approve that proposal, check four things: the trigger is unmistakable, the record has one predictable home, consequential changes still wait for you, and a new session can find the resume path without the old chat.

Once that exists, “take this ticket live” becomes more than a convenience command. It starts a conversation that leaves durable work behind.
