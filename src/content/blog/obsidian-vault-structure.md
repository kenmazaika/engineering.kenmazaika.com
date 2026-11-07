---
title: "A Walkthrough of My Obsidian Vault"
description: "The twelve-shelf Obsidian vault structure I run an AI agent against: PARA for the shape, Johnny Decimal for the addresses, and what each folder is for."
seoTitle: "Obsidian Vault Structure for AI Agents: Johnny Decimal + PARA"
socialTitle: "Twelve shelves, one agent, one vault"
ogCategory: 'Field Note · Agent Memory'
pubDate: 'Nov 6, 2026'
heroImage: ../../assets/headers/obsidian-vault-structure-masthead.jpg
related:
  - title: 'Set Up an Inbox System in Your Obsidian Vault'
    url: '/blog/obsidian-inbox-system/'
  - title: 'How I Run Agent Loops with OpenClaw and Obsidian'
    url: '/blog/how-i-run-agent-loops-openclaw-obsidian/'
  - title: 'Connect Obsidian on Your Phone to Your OpenClaw or Hermes Agent'
    url: '/blog/obsidian-vault-on-your-phone/'
  - title: 'Route the File Before You Write It.'
    url: '/blog/route-the-file-before-you-write-it/'
faq:
  - question: "What is the best folder structure for an Obsidian vault you use with an AI agent?"
    answer: "Start with an inbox and one project, not twelve shelves. The structure that works for an agent is numbered and stable: an inbox for work in flight, one folder per project, and shelves added only when a real problem asks for one."
  - question: "Should I use PARA or Johnny Decimal in Obsidian?"
    answer: "They solve different problems, so I use both. PARA gives the four top-level kinds of work — projects, areas, resources, and archive — and Johnny Decimal gives every folder a fixed number, so the same address appears in the same position in the folder tree and in a link."
  - question: "Can an AI agent read and write an Obsidian vault?"
    answer: "Yes. An Obsidian vault is a folder of Markdown files, so an agent with filesystem access can read it, write to it, and route new work into the right project folder. Obsidian is the interface; the files are the state."
  - question: "How many folders should an Obsidian vault have?"
    answer: "As many as you have recurring problems. Mine has twelve numbered shelves, but I tell people to start with the inbox and one project, then add a shelf when its absence causes a real failure."
---

If you already run OpenClaw or Hermes, you have the hard part: an agent that can do real work without you
watching it. What most setups are missing is somewhere for that work to live.

Every session starts from zero. The research from last week is in a chat log. The decision about how your writing
should sound is in a message you'd have to scroll back through. Nothing the agent learns survives the run, so it
can't get better at your work — it just keeps being competent and forgetful.

That is the problem a vault solves, and it has nothing to do with being an Obsidian person. The file store is
what makes an agent compound. The folders are how the file store stays usable.

My vault is twelve numbered folders — PARA for the shape, Johnny Decimal for the addresses. Each one exists because something went wrong when I didn't have it. This
post is the tour: what's on each shelf, why it's there, and when you should skip it.

I've written about most of these shelves on their own, because each one took a while to get right. I'll point you at
those as we go.

## The two failures that built the shelves

The first was a wiki where everything was a concept. My opinions, facts I had found, articles I had saved — same
level, same authority. There was a lot in there and I couldn't tell what was mine.

The second was worse. I wrote that the review is the bottleneck in engineering, which was true inside one post.
It got written into the wiki, linked from the agent files, and treated as a standing rule. Every brief came back
with the same premise for a month. When I removed the rule, I had to go find every layer it had propagated into.

A fact that is true in one context becomes false the moment it is promoted to policy. Structure is what keeps
those two apart: a post is a post, a preference is a preference, and an instruction is an instruction. I wrote
about that failure directly here:
[My Agent Kept Writing the Same Post. The Memory Was the Problem.](/blog/my-agent-kept-writing-the-same-post/).

## Where the shelves come from: PARA and Johnny Decimal

Almost none of this is mine, which is the point.

Four of these shelves are PARA, the system Tiago Forte describes in *Building a Second Brain*: Projects (work
with a finish line), Areas (ongoing responsibilities), Resources (reference material), and Archives (things you
are done with). It's the default organization in a lot of Obsidian vaults, and it predates agents by years.

The numbering is Johnny Decimal, created by Johnny Noble around 2010 and borrowed from the Dewey Decimal library
catalogue. Ten areas, each with ten categories, each with numbered items. The point is that a number is a fixed
address: 02.03 is always in the same place, in the same order, whether you're reading the folder tree or a link.

What I did was build a new vault for the agent rather than reuse mine. I reused the principles — PARA for the
shape, Johnny Decimal for the addresses — and then wrote the rules for how the agent reads and writes inside it.
The vault is new; the organization underneath it isn't, and that's the reason it works.

There's a small amount of evidence for why the shelf framing helps, beyond it being tidy. In a 2017 study in
*Neuron*, six weeks of method-of-loci training — associating items with remembered places — took recall of a
72-word list from about 26 words to about 62. Place is a memory aid. The agent doesn't need the metaphor; I do.


<p class="inline-cta"><em>If you want the full system behind this tour, I break it down in <a href="/loop-breakdown/">seven emails</a>.</em></p>

## 00 — INBOX

This is the one I look at first. The agent and I needed a way to talk when I'm not sitting in a chat, and more
importantly a way to pick a long job back up without losing where we were. So anything that needs to go from me
to it, or from it to me, lands here. I check it in the morning. It checks it all day.

```
$ ls "00 - INBOX"
00.01 - handoffs
00.02 - intake
00.03 - tickets
00.04 - outbox
README.md
```

1. **Handoffs** — this is the agent handing something back to me. A job failed at 4am, so it writes down what it
   thinks happened and what it wants to do about it. Or it's writing a post and wants to know whether a paragraph
   should stay. Either way it arrives as a file with checkboxes, so I tick the one I want and walk away. I don't
   have to type a reply.
2. **Intake** — this is my side of it. I see an article, I send the link. I'm in the car, I talk into my phone,
   that's a dictation. I don't have to decide what it is or where it goes; something picks it up and files it.
3. **Tickets** — one file per thing that isn't finished. And the ticket is about the work, not the files. It says
   what we changed, what we tried that didn't work, where it stopped. So if I open one from three weeks ago I'm
   caught up in a minute instead of reading a folder full of documents.
4. **Outbox** — when a note is handled it comes here. Nothing's deleted, it just gets out of the three folders
   I'm actually reading so they stay honest. And if I ever wonder what happened to something, the answer is in
   here.

I also wrote a whole blog post about how this works — the four folders, the sweep, and the tick-box thing:
[Set Up an Inbox System in Your Obsidian Vault](/blog/obsidian-inbox-system/).

Skip it if you never defer anything. Everyone else needs it.

## 01 — PROJECTS

Projects are the things with an end. And the useful part isn't the folder itself — it's the routing. When a piece
of work is going to outlive the session, the file gets written into its project folder instead of wherever the
agent happened to be standing. That's a QBall: a project file the agent routes to automatically, so the vault
stays organized by project rather than by date or by accident.

```
$ ls "01 - PROJECTS"
01.02 - qballs
README.md
```

Here's what's inside one, this post:

```
$ ls "01 - PROJECTS/01.02 - qballs/01.50 - vault-walkthrough"
POST.md
BRIEF.md
PLAN.md
SOURCES.md
drafts/
receipts/
```

1. **POST.md** — where the work stands: the current draft, the decisions already made, and the next action.
2. **BRIEF.md and PLAN.md** — why the post exists and how it's built. One screen each.
3. **drafts/** — every version, never overwritten. This is version ten of this one.

The point is that a project spanning four sessions needs the fourth session to start from the files, not from a
summary of the first three. I wrote a separate post about that routing rule:
[Route the File Before You Write It.](/blog/route-the-file-before-you-write-it/).

Skip it if nothing you do outlives a single session.

## 02 — AREAS

Areas are the things that never finish. There's no done state, so the folder's job is to hold the answer once so
I stop repeating myself.

```
$ ls "02 - AREAS"
02.01 - program
02.02 - goals
02.03 - voice-guide
02.04 - daily-notes
02.05 - scenario-guides
README.md
```

1. **Voice guide** — how I want a post to sound, written down one time. Every draft gets checked against it, and
   when I give the same note twice, the note goes in here instead of into my head.
2. **Daily notes** — the raw log of the day. Half of everything else starts here.
3. **Goals and scenario guides** — the same trick for decisions I make over and over: what I'm working toward,
   and the shape I want a thing to take the fifth time I make it.

This is also where a rule has to earn its place. Advice I read in a forum doesn't become one of my rules. It
becomes a rule if I decide it belongs in the voice guide. I also had one on the voice guides, since that's the
file I use most:
[I Thought My AI Voice Guide Was Working. I Never Tested It.](/blog/give-your-agent-your-voice/).

Skip it if you have no standing preferences worth writing down. Most people with an agent do.

## 03 — PERMANENT

This is the settled stuff. Areas are alive and keep moving; this shelf doesn't. It's the reference material about
me and my work that other files are allowed to point at.

```
$ ls "03 - PERMANENT"
03.01 - concepts
03.02 - guidance
03.03 - ken-resume
03.04 - reddit-retrofit-examples
03.05 - workshop
README.md
```

1. **Concepts** — the definitions I've actually committed to, so the agent stops re-deriving them.
2. **Guidance** — longer-form direction that's stable enough to be quoted.
3. **Examples** — finished work I want new work measured against, like the writing samples a retrofit gets
   compared to.

Skip it until something is actually settled.

## 04 — RESOURCES

Everything I collected and didn't write. That's the whole test for this shelf: I didn't make it, and it might be
useful later.

```
$ ls "04 - RESOURCES"
04.01 - captures
04.02 - dictations
04.03 - proposals
04.04 - reviews
04.05 - artifacts
04.07 - distribution
04.08 - blog-content
04.09 - workshop-funnel
04.10 - agent-tooling
README.md
```

1. **Captures** — I send the agent a link while I'm doing something else and the page lands here. I almost never
   read them again, but when a research task runs, this is one of the places it looks. The reading I didn't do
   still counts. I wrote about the capture side of this here:
   [Capture workflow: a reusable Hermes use case for work that contains your judgment](/blog/capture-workflow/).
2. **Dictations** — the other half. Most of this post started as me talking into my phone in the car, and the
   transcript is a file in that folder that nobody edited.
3. **Artifacts** — screenshots, exports, the byproducts of a job that are worth keeping but aren't a note.

The rest are subject folders: proposals, reviews, and the working material for whatever I'm publishing right now.
Same rule for all of them — if I didn't write it, it goes here.

Skip it if you don't collect anything. If you do, this shelf pays for itself.

## 05 — KITS

Kits are the in-between thing: too small to be a skill, too operational to be a note. It's the scripts and
instructions that make a repeated action come out the same every time.

```
$ ls "05 - KITS"
05.01 - macros
05.02 - templates
05.03 - scripts
05.04 - install
05.05 - feedback
05.06 - qball.md
05.07 - skill-handoffs.md
05.08 - compact.md
05.09 - inbox-message-playbook.md
05.10 - credentials.md
README.md
```

1. **Macros** — one file per procedure I run often, written so the agent can run it without improvising.
2. **Templates and scripts** — the starting shapes, and the shell commands that go with them.
3. **Credentials** — and to be clear, this file is metadata *about* the credentials: where they live and how to
   fetch one. It isn't the credentials themselves. My tools file says where the store is, this file says how to
   reach it, and when I ask for a credential the agent goes and gets it instead of asking me. I haven't thought
   about that handoff in months. How the store actually works is a different post:
   [Set Up a Secrets Store Your Agent Can Use](/blog/pass-password-store-for-ai-agents/).

Kits are also the backbone of most of my hooks. A hook fires, reads the thing the kit says, and does the work the
same way every time — I wrote the other half of that pair here:
[Agent Hooks: Named Triggers for Durable Agent Work](/blog/agent-hooks/).

Skip it if your agent has no recurring habits yet. You'll know when you're pasting the same instructions for the
third time.

## 06 — LOOPS

A loop is a job that runs on a schedule and leaves a receipt. One folder per loop, and the folder is the loop's
memory: what it's supposed to do, what it isn't allowed to do, and what it's already done.

I went deeper on this one in its own post — the contract, the ledger, the failure modes, and why a scheduled job
needs a folder at all:
[How I Run Agent Loops with OpenClaw and Obsidian](/blog/how-i-run-agent-loops-openclaw-obsidian/).

```
$ ls -d "06 - LOOPS"/06.*/
06.01 - distribution-research/
06.02 - publish-blog/
06.03 - research-engine/
06.05 - blog-idea/
06.06 - feedback-mining/
06.07 - forge-draft/
06.08 - jdak-template-pr/
06.09 - interactive-ticket/
06.10 - engineering-blog-improvement/
06.11 - blog-signal-review/
06.12 - blog-reference-discovery/
```

Every one of them has the same shape inside:

```
$ ls "06 - LOOPS/06.02 - publish-blog"
LOOP.md
ledger.md
feedback.md
cron-message.md
publish-prompt.md
runs/
```

1. **LOOP.md** — the contract. What the job is, what it's allowed to touch, what it must never do.
2. **ledger.md** — what it has already done, so a run knows what the runs before it changed.
3. **runs/** — one dated folder per run, holding whatever that run produced.

```text
$ ls "06 - LOOPS/06.02 - publish-blog/runs"
2026-10-31
2026-11-02
2026-11-03
2026-11-04
README.md
```

That last one is why the shelf exists. When a job fails at 4am I don't want a transcript — I want the file that
run wrote, sitting next to the files from the runs before it. The failure has a location instead of an
investigation.

The other loops are the same shape with different jobs: research, drafting, review, and a couple that maintain
the setup itself. Skip the shelf if nothing runs on a schedule yet. When you add the first one, its memory goes
here.

## 07 — SKILLS

These are the skills the agent loads. They live here so they're in the same git history as everything else; the
place the runtime actually reads is a symlink to this folder.

```
$ ls "07 - SKILLS"
07.01 - distribution-scout
07.02 - wispr-dictation
07.03 - loop-studio
07.04 - blog-idea-scout
07.05 - feedback-miner
07.06 - use-case-factory
07.07 - checkbox-runner
07.08 - project-boot
07.09 - project-status
07.10 - three-phase-pr
07.11 - interactive-ticket-pipeline
vault-keeper
qball-router
```

Two that show the range: `07.02 wispr-dictation` turns a voice message into a filed note, and `07.07
checkbox-runner` reads a ticked box and does what it says. The rest are the same idea pointed at other jobs.

You don't need this. Everything works without it. I just like being able to open a skill in the same editor as my
notes.

## 08 — PRODUCTION

Work that's half-made. Files from a long job, a draft that isn't a project yet, media waiting to get assembled.

```
$ ls "08 - PRODUCTION"
drafts
media-company
working
README.md
```

This one's experimental. It might merge into Fleeting. I'm leaving it while I decide.

## 09 — FLEETING

The catchall. Not a resource, not a project, hasn't earned a home. It sits here until it turns into something or
gets archived.

```
$ ls "09 - FLEETING"
09.01 - raw
09.02 - concepts
09.03 - entities
09.04 - comparisons
09.05 - questions
09.07 - tickets
README.md
```

The point is that I don't have to decide at 11pm where a thought belongs. If it matters later it gets promoted;
if it doesn't, it gets archived with everything else.

Skip it if you enjoy deciding where everything goes.

## 10 — ARCHIVE

Retired work. Nothing gets deleted, it gets moved with a note about what it was, so I can go back.

```
$ ls -d "10 - ARCHIVE"/10.*/
10.90 - legacy-archive/
10.91 - raw-scans/
10.92 - pre-consolidation-2026-09-14/
10.93 - merge-leftovers/
10.94 - pre-resources-cleanup-2026-10-12/
10.95 - permanent-cruft-2026-10-12/
10.96 - blog-authoring-skills-2026-11-04/
```

`10.96` is from yesterday: thirteen writing skills that had turned into conflicting instructions. They weren't
deleted, they were moved with a manifest, so the old setup can come back if the new one disappoints.

Deleting is permanent. Archiving is a decision you can revisit.

## 99 — META

This is the agent's own paperwork — its rules, its memory file, who I am, what tools it has. They're symlinked
into the workspace, so they're versioned along with the notes the agent reads.

```
$ ls "99 - META"/*.md
AGENTS.md
IDENTITY.md
MEMORY.md
SOUL.md
TOOLS.md
USER.md
```

1. **AGENTS.md** — the working rules, including where files are allowed to be written.
2. **MEMORY.md** — the small curated layer that loads in every session.
3. **USER.md, SOUL.md, IDENTITY.md** — who I am, what the agent is like, how it should talk.
4. **TOOLS.md** — the local specifics: hosts, accounts, channels, where the secrets are.

There's no separate memory product in my setup. The vault is the state, and the agent's config is part of it.
Those are the same files the hooks in Kits keep current, and cutting the memory layer down to this is the change
that made it reliable: [I Gave OpenClaw Less Memory. It Got More Reliable.](/blog/i-gave-openclaw-less-memory/).

## What makes it compound

Three things, and they're all small.

The agent can file. It knows the shelves, so "capture this" produces a file in the right place instead of a
message I have to process later. The vault syncs to my phone, which is how approvals happen away from the desk —
if you want that setup:
[Connect Obsidian on Your Phone to Your OpenClaw or Hermes Agent](/blog/obsidian-vault-on-your-phone/). And the
inbox has a sweep that reads what I ticked and moves the work forward.

None of those are impressive alone. Together they mean the thing I did on Tuesday is still available on Friday
without me remembering it.

## JDAK

Everything above is packaged as JDAK, the Johnny Decimal Agent Kit. It's open source, and it's the structure in
this post with the hooks and scripts already wired: the schema an agent follows before it writes anything, the
template for forking it, the inbox board, the sync setup, and the install steps.

Install is about twenty minutes if you already use Obsidian and Dropbox. Clone the repo, point your agent at it,
and the shelves exist before you've decided what to put in them.

You don't have to adopt twelve shelves, and I'd rather you didn't use the ones you don't need.
Start with the inbox and one project, see whether the vault starts surviving, and add shelves when a real problem
asks for one.

The repo is at github.com/kenmazaika/jdak-template. Point your agent at it and start filing.
