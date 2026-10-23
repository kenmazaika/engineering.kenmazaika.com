---
title: "Set Up an Inbox System in Your Obsidian Vault"
description: "The Obsidian inbox pattern, why it gets better when an agent can read it, and how to build it: four folders, one schema, one script, three rules."
seoTitle: "How to Set Up an Inbox System in Obsidian (With Your Agent)"
socialTitle: "The inbox pattern, and why it changes when an agent can read it"
ogCategory: 'Field Note · Agent Workflow'
pubDate: 'Oct 23, 2026'
updatedDate: 'Oct 23, 2026'
layoutVariant: harness
heroImage: ../../assets/headers/obsidian-inbox-masthead.jpg
related:
  - title: 'Route the File Before You Write It.'
    url: '/blog/route-the-file-before-you-write-it/'
  - title: 'Connect Obsidian on Your Phone to Your OpenClaw or Hermes Agent'
    url: '/blog/obsidian-vault-on-your-phone/'
  - title: "Support Isn't Tickets. It's Loops."
    url: '/blog/support-isnt-tickets-its-loops/'
faq:
  - question: "What is an inbox folder in Obsidian?"
    answer: "A folder for notes that are not finished yet: a link you have not read, an idea you have not shaped, a task you have not started. Capture is deliberately cheap — one small note, no schema to satisfy — and you process it later or delete it. It is the GTD inbox kept inside the vault, next to the notes it will become."
  - question: "Why not send everything through a chat window?"
    answer: "Chat has no state. A message is unread or buried, there is no checkbox that means seen and handled, no queue depth to inspect, and no record after you answer. A folder gives each item an address, a status, and a history that outlives the session."
  - question: "How does the agent know I approved something?"
    answer: "A markdown checkbox. A small script watches the inbox for state that needs attention — a pending handoff with a checked box, a new intake note with a checked box, a ticket with Execute ticked — and emits those items. The agent reads the checked box, performs that action, and writes the result back into the same note."
  - question: "How is this different from a GTD inbox?"
    answer: "The mechanics are the same — capture cheap, process later — but the reader is different. A GTD inbox is processed by you; this one is read by an agent that can act on a checked box, inspect how deep the queue is, and keep a ticket's state across sessions."
  - question: "Do I need Johnny Decimal for this?"
    answer: "No. The numbers in the folder names below are just addresses; four folders with clear names work the same."
---

People who live inside Obsidian end up with an inbox: one folder for notes that are not finished yet. Capture cheaply, process later.

That pattern is older than agents. What is new is what happens when the thing reading the folder is not only you. Once an agent can read and write the vault, the inbox becomes where the two of you exchange work — it asks, you answer; you capture, it processes. The folder does not change. The protocol does, and so do the documents inside it, because now two kinds of reader read them.

> **You can skip the typing.** Point your agent at this post and ask it to apply the pattern to your vault. It will create the four folders, write the schema and the READMEs, add the templates, wire up the detector, and open the first ticket — then the two of you work from there.

What follows is why the pattern works, why it matters more with an agent, and how to build it: four folders, one schema, one script, three rules — and a destination for everything else your agent runs.

## The pattern: one folder for halfway work

Most of what you produce is not finished. A link you have not read, an idea with no shape, a project at version two. None of it deserves a full note; all of it is expensive to lose.

Three properties make the inbox the cheapest answer:

- **Capture is cheaper than remembering.** Ten seconds and you do it. A six-field form and the idea is gone.
- **It lives beside the notes.** Moving something out is a rename, not a migration.
- **It is not a to-do list.** Most items are fragments waiting for context, not tasks. A to-do list makes you feel behind; an inbox just holds them.

What it buys you is permission to put something down. You can stop mid-thought because you know where it is.

## Why it is better with an agent

An agent needs four things a note folder already has: **an address** to write to, **a state** that means *waiting on a human*, **a queue** it can inspect, and **continuity** across sessions.

Chat has none of these — no checkbox that means seen and handled, no queue depth, no record once the conversation scrolls. Email is worse: I once had a scouting loop email me daily, and within a week my personal inbox was full of mail from my own agent. The failure was not the loop; it was using a human inbox as the agent's outbox. Task tools fail differently: if capture costs a form, capture does not happen.

A folder in the vault avoids all three, and adds something none of them can do — both sides read the same files, so the inbox becomes a protocol:

- **A handoff** is a message with state: a summary, a link to the artifact, checkboxes. Ticking one is the approval.
- **Queue depth** is a throttle. Six unread handoffs means stop generating, not work harder.
- **A ticket** carries a long job across sessions: what was done, whose turn it is, what is next.
- **A decision card** is the same idea for one choice, with the options pre-written.

## The docs are the agent's instructions

Every folder has a `README.md`, and the vault root has a `SCHEMA.md`. That looks like documentation for you. It is also the agent's rulebook, and that is the more load-bearing job. The schema opens with:

> **Humans:** read `README.md` first, then this.
>
> **Agents:** read this before writing *anything* into the vault.

That is the design in one line. Frontmatter is the mechanical half — `action: pending` is what the detector greps, `turn: you` is whose move it is, `status: working` is a claim with an expiry. The README prose is the judgment half: one item per note, links not paths, **the checked box is the approval — no second ask**.

The consequence: write the rule where the work happens. A README in the folder the agent opens before writing is a rule; an instruction on a wiki page a thousand files away is a suggestion. Setting up the vault and configuring the agent are the same job — and the agent will drift exactly where you left a rule unwritten.

## How to build it

You can build the whole thing in an afternoon. Seven moves, in the order I would do them — and each one does something useful before the next one exists.

### 1. Four folders, each with one job

```
00 - INBOX/
  00.01 - handoffs/
  00.02 - intake/
  00.03 - tickets/
  00.04 - outbox/
```

The names matter less than the directions. Handoffs travel from the agent to you. Intake travels from you to the agent. Tickets go both ways. The outbox only goes out.

| Folder | Direction | Holds | Ends when |
|---|---|---|---|
| `00.01 - handoffs` | agent → you | one message + checkbox block (and decision cards) | ruled on |
| `00.02 - intake` | you → agent | one capture, routed by one box | routed |
| `00.03 - tickets` | you ↔ agent | one job, shaped as a conversation | closed |
| `00.04 - outbox` | done → record | processed notes | terminal |

Inside each folder, a `README.md` says what belongs there and what happens to it. You will reread it in three months when you have forgotten. The agent reads it every time it writes.

### 2. The handoff note

Start with the handoff, because every other note type is a variation on it. It is the agent's message to you, and it has one job: let you act without opening anything else.

```yaml
---
title: "Handoff — <topic>"
created: 2026-10-21          # base set: every note carries title/created/updated/
updated: 2026-10-21          # type/kind/status/authority/tags
type: capture
kind: fact                   # fact kept · opinion decays (~6mo) · idea expires (30d)
status: active               # seed | active | complete | archived
authority: authoritative     # guidance = never auto-injected
tags: [handoff]
loop: "<06.NN - loop-name | —>"   # the recurring job that owns this item, or —
item: "<slug>"
action: pending              # pending → done: the "this is live" switch
obsidian: "[[path/to/the/artifact|short label]]"
---
```

The first eight keys are the vault's base set, and three of them are doing real work. `kind` decides how long the note lives: a fact is kept, an opinion decays in about six months, an idea expires in thirty days unless it attaches to something live. `status` is four values only, so "is this still alive?" is a grep. `authority` decides whether the agent may retrieve it automatically — `guidance` sits out of the index entirely.

The four keys below those belong to the handoff. `loop` names the recurring job that owns the note, or `—` for a one-off. `item` is the slug a run keys on. `action: pending` is the switch that makes the note exist for the agent. `obsidian` repeats the artifact link in the frontmatter, so a search can find work you never opened.

```markdown
# Handoff — <topic> (2026-10-21)

**Summary:** one line, so the note is useful without opening anything else.
**Source:** [[path/to/the/artifact|short label]]

## Detail
- what this is, why it is here

## Your action
_Check **one** box. Then let the vault sync — the next sweep reads it and acts._

- [ ] Apply the fix
- [ ] Skip this run
- [ ] Stop the loop

## Comments
<!-- your reason / notes -->

## Suggested actions (best takeaways)
- the best next move for this item
```

Six parts, in that order, and the italic line is doing double duty: it tells you to tick one box, and it sits in a file the agent reads, so it is also part of the protocol.

The boxes are the part people get wrong. Do not write *Approve / Reject* — the useful choice is almost always narrower. The daily blog-idea handoff offers *mark as read* most days and *open a draft* on the good ones. The failed-cron handoff arrives with the patch already written, so its boxes are *apply* / *skip* / *stop the loop*. The test is simple: you should be able to answer without working out what the options mean.

The first real test is a broken cron at 6am. The handoff is already in the inbox with the patch attached, you tick apply, and go back to your coffee.

### 3. Decision cards, for a choice

A decision card is a handoff that asks a question with a fixed set of answers. Same folder, same sweep, same lifecycle — only the body changes:

```markdown
## ✅ Options
- [ ] **A. <label>** — <what it does, where it lands>
      Target: [[file]] · `<exact payload>`
- [ ] **B. <label>** — <what it does, where it lands>
      Target: [[file]] · `<exact payload>`
- [ ] **Do none of these** — leave as-is; the card closes with no change.

## ▶ Control
- [ ] **Execute** — apply the ticked options, log it, file this card.
```

Its frontmatter is handoff-compatible on purpose — `type: decision-card`, `options_key`, `action: pending`, `status: active`, `turn: you` — so the same detector finds it.

The mechanics are worth getting right. Ticking an option records the choice; only **Execute** applies it, so a stray tick during review sends nothing. Every option carries its own final text and target, which means the run replays your pick instead of re-deriving it. *Do none of these* is a real, tickable outcome. And a card is bound and terminal: one decision over a fixed set. If it needs a back-and-forth, it is a ticket.

### 4. Intake, so capture costs one box

Now the other direction. Capture has to cost less than remembering, or you will not do it. In Obsidian the practical answer is Templater with a folder template that pre-fills the note and asks one question:

```markdown
## How should I handle this?
- [ ] **Process as a dictation** — Raw / Shaped / Riff → `04 - RESOURCES/04.02 - dictations/`.
- [ ] **Run as a command** — do it now; log the run to today's daily note.
- [ ] **Capture a link** — fetch and store the full text → `04 - RESOURCES/04.01 - captures/`.
- [ ] **Create a ticket** — file it in `00 - INBOX/00.03 - tickets/` and run it.
- [ ] **Create a card** — file a ticket and a card, linked, and run the ticket.
```

```yaml
type: intake
intake: ""        # dictation | command | link | ticket | card  (agent fills after routing)
status: new       # new | done
```

That is the whole schema: two keys and five boxes. The checked box is the routing key — the agent does that thing, flips `status: new → done`, and links the outcome into the daily note. One item per note, and the note is transient: durable output goes to its numbered home.

The template names the note for you (`00.02.03 - Wednesday 10-14 capture`), and the sweep renames it to a descriptive slug later, so a filename never costs you a decision. The catch is that the core Templates plugin will not do this; it needs Templater's `<% %>` syntax and `tp.file.rename()`.

### 5. Tickets, for work that takes more than one message

A ticket is a conversation in a file. You write at the top, the agent replies below, newest first, and the whole job — what was done, whose turn it is, what comes next — survives you closing the laptop.

```yaml
---
title: "Ticket — <title>"
type: ticket
status: open            # open (your turn) | working (agent's) | blocked | done
turn: you               # you | agent | —
mode: queue             # queue (file mailbox) | live (chat-held)
runs: 0
backing: "[[09 - FLEETING/09.07 - tickets/<slug>]]"
prompt_log: "[[09 - FLEETING/09.07 - tickets/<slug>/PROMPTS]]"
created: 2026-10-21
updated: 2026-10-21
authority: authoritative
tags: [ticket]
---
```

The body has four parts: a status line in plain words, a control block with Execute and Close, a thread with an empty ✍️ slot at the top, and background seeded from wherever the ticket came from. `backing` is where the run keeps its prompts and outputs; `prompt_log` is the index that lets you see the exact prompt the agent decided to run.

The reply contract is what keeps tickets readable. The substance goes in a file; the ticket gets the gist and a link. Every file is an Obsidian wikilink, not a bare path. And the agent acts on the ✍️ slot and clears it after each run, so there is always a blank line waiting for you.

Queue mode is write, tick Execute, sync. Live mode is the same ticket held in chat, rewritten in the same turn so the file never lags the conversation.

### 6. The script that reads the ticks, and the close

The inbox only drives itself if something reads the ticks. This is a small deterministic script — no model call — that runs on a schedule and prints the notes that need attention:

```bash
#!/usr/bin/env bash
# bin/inbox-check.sh — print inbox items that need the agent. Empty = nothing to do.
set -uo pipefail
V="${VAULT:-$HOME/vault}"; H="$V/00 - INBOX/00.01 - handoffs"
I="$V/00 - INBOX/00.02 - intake"; T="$V/00 - INBOX/00.03 - tickets"; TTL=1800

for f in "$H"/*.md; do            # live handoff + a checked box
  grep -q '^action: pending' "$f" && grep -q '^- \[x\]' "$f" && printf 'handoff\t%s\n' "$f"
done
for f in "$I"/*.md; do            # new intake + a checked box
  grep -q '^status: new' "$f" && grep -q '^- \[x\]' "$f" && printf 'intake\t%s\n' "$f"
done
for f in "$T"/*.md; do            # ticket with a box ticked, unless a fresh run holds it
  grep -q '^status: done' "$f" && continue
  grep -q '^- \[x\]' "$f" || continue
  grep -q '^status: working' "$f" && (( $(date +%s) - $(stat -c %Y "$f") < TTL )) && continue
  printf 'ticket\t%s\n' "$f"
done
```

The real one also emits `ticket-syncgap` when the upstream copy has a tick the local one lacks, and `SYNC-STALE` when upstream cannot be read.

Two rules keep it from lying to you. A run sets `status: working` but leaves the box ticked, so a crash re-emits the item, and the `TTL` reclaims a claim older than thirty minutes. And the local vault is the last hop, not the source of truth: a tick that exists upstream but not locally gets pulled down before anything runs, and an unreadable snapshot says `SYNC-STALE` instead of nothing. Without those, "nothing ticked" and "sync broke" look identical.

Closing is its own dumb script. A checked box under `close`, `outbox`, `archive`, `done`, or `mark as read` moves the note to `00.04` and deletes the upstream copy, because a local move is not a close — leave the original upstream and the next sync re-uploads it forever. No interpretation, no model call. Dismissing something should cost as little as a tick.

### 7. Three rules for the agent

The long rules live in the READMEs. Three go wherever the agent always reads — `AGENTS.md`, a system prompt, a rules file:

1. When a handoff has a checked box, perform that action and record the result in the same note.
2. When you need a decision, write a handoff — do not ask in chat.
3. Before starting generative work, check the inbox; if the queue is deep, stop and say so.

Those three are the minimum that makes the pattern function.

> **Template.** Folders, note types, schemas, READMEs, the detector, and the agent instructions are in [JDAK](https://github.com/kenmazaika/jdak-template).

## What the inbox becomes

Once the folders exist, everything else can start using them. A cron job that dies doesn't have to fail quietly or message you at 6am — it leaves a handoff with what broke, a guess at the fix, and boxes for apply, retry, or turn the job off. My blog-idea loop works the same way: one idea a day, and most days I tick *mark as read*.

That is the real change. There is now an address for *"the agent needs you to look at this,"* and it is a file. You check it when you check your inbox — morning, end of day — and the rest of the time it keeps working, because it has somewhere to put the question.

It also means you can give it more rope. A job can start without asking, stop at a fork, and leave the choice behind. I have had jobs fail for three days without my noticing; now the failure is in a folder I already open.

## What you end up with

Four folders, one script, three rules, and an address. Half-finished work gets a place to wait, the agent can ask for a decision, and a crash doesn't lose your approval.

The pattern was already good for one person keeping notes. It is better with two participants — once the second one can read the folder, and the instructions were written where it looks.
