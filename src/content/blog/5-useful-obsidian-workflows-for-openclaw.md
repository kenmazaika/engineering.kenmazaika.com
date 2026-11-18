---
title: "5 Useful Obsidian Workflows for OpenClaw"
description: "Five practical ways to use Obsidian with OpenClaw: durable project state, phone-based approvals, scheduled reports, inspectable context, and resumable work."
seoTitle: "5 Useful Obsidian Workflows for OpenClaw and Hermes"
socialTitle: "5 useful Obsidian workflows for OpenClaw"
ogCategory: 'Field Note · Agent Workflows'
pubDate: 'Nov 13, 2026'
layoutVariant: harness
heroImage: ../../assets/headers/obsidian-value-masthead.jpg
related:
  - title: 'How I Run Agent Loops with OpenClaw and Obsidian'
    url: '/blog/how-i-run-agent-loops-openclaw-obsidian/'
  - title: 'Set Up an Inbox System in Your Obsidian Vault'
    url: '/blog/obsidian-inbox-system/'
  - title: 'A Walkthrough of My Obsidian Vault'
    url: '/blog/obsidian-vault-structure/'
faq:
  - question: "Why does Obsidian matter if I already run OpenClaw or Hermes?"
    answer: "The runtime gives the agent file access, tools, and a model. Obsidian gives you a readable interface to the same Markdown files. Together they create one shared place for project state, approvals, and history, so the work does not depend on chat context."
  - question: "Do I need a memory plugin or a vector database?"
    answer: "No. Plain Markdown that the agent can list, grep, and read is enough when the folder structure tells it where things belong. Retrieval gets easier because the paths are conventions, not guesses."
  - question: "What makes an LLM-maintained wiki useful instead of a junk drawer?"
    answer: "The schema. Folders, READMEs, and fixed note formats tell the model where to file things and what to update. Without that layer the model still writes, but the result is an unstructured pile."
  - question: "Can I approve agent work from my phone?"
    answer: "Yes. If the vault syncs to your phone, decisions can be checkboxes in a note. Ticking one gives the agent a durable signal to act on, while the note retains the decision and timestamp."
---

For the first few months I used OpenClaw, my project management system was a chat window and the unread filter.

I would start something, get pulled away, and mark the conversation unread. The unread badge was my backlog, and the thread list was my project list. If I cleared the badge, I had usually lost the reminder.

The files still existed. What was easy to lose was the state around them: what I had decided, what was half-finished, and what the agent should do next.

Connecting OpenClaw to an Obsidian vault changed more than where those files lived. It gave the agent a wiki that could become more useful every time I used it.

A conversation can leave behind a decision or the next action. A scheduled job can add a report, a failure receipt, or new evidence. An approval from my phone can update the same project the agent will read the next time I ask it to continue. Instead of each chat starting with whatever context fits in the window, useful context accumulates in one place that both of us can inspect.

That does not happen merely because an LLM can write Markdown. Without structure, the vault becomes a dump of plausible notes that nobody can reliably retrieve. With a schema, each new file strengthens the system: the agent knows where to put it, what existing state to update, and where to look later.

After the initial setup, ordinary use does part of the maintenance. Chatting with the agent can improve the project record. Adding a scheduled job can expand the history available for comparison. The vault becomes more valuable as the work compounds—not because Obsidian makes the model smarter, but because the agent has more organized context to work with.

In practice, that has given me five useful interfaces I did not have in chat:

1. A map that tells the agent where every piece of work belongs.
2. Project state that lets interrupted work resume without a recap.
3. A phone-based approval surface for agent actions.
4. Scheduled reports whose evidence and failures remain inspectable.
5. Agent context I can read, debug, and correct myself.

None require a special Obsidian plugin. They work because Obsidian edits ordinary Markdown files that OpenClaw and Hermes can also read and write. Here is what each one looks like in my workflow.

## 1. Give the agent a map it can follow

My first attempt at an LLM-maintained wiki produced linked pages but no reliable way to decide where a new item belonged or which existing file it should update.

The missing piece was a schema: folders with defined purposes, READMEs that explain what belongs in them, and standard shapes for recurring notes.

For example, before writing a work product, my agent checks a small project registry:

```text
Before writing a work-product file:
1. Search the project registry.
2. One strong match: attach to it and write inside that folder.
3. Two matches: ask the owner.
4. No match: create a project folder and register it.
```

That mundane rule keeps drafts, receipts, and decisions from scattering across unrelated folders. The agent does not have to invent an information architecture every time it writes a file.

Links and search make Obsidian convenient. The schema makes the vault legible to both the person and the agent.

## 2. Resume a project without replaying the conversation

Each project folder carries enough state to restart the work: decisions, current status, produced artifacts, and the next action.

When I say “pick up the retrofit,” the agent reads those files before continuing. I do not have to reconstruct the project from scrollback or hope the original session still has the right context.

A project history can be as simple as this:

```text
| 1 | 2026-10-07 | first retrofit draft | live voice post + playbook §5 | drafts/…v1.md (Proof: f13co6xk) |
| 4 | 2026-10-07 | "crop for dev.to" trigger minted | Ken's ask | prompts/crop-for-devto.md |
| 5 | 2026-10-07 | PUBLISH dev.to | v3 draft | https://dev.to/kenmazaika/…-485e |
```

The project state survives the session in a form both of us can inspect. That also makes handoffs between models less fragile: a new agent can continue from the decisions, evidence, and next action instead of the original conversation.

## 3. Turn your phone into an approval surface

An agent can leave me a note with the relevant context and a few checkboxes. I can select an option in Obsidian on my phone and let the change sync back to the filesystem the agent watches.

![Obsidian note on a phone with Keep, Reject, and Something else checkboxes](/images/obsidian-value/phone-approval-checkboxes.png)

A background sweep sees the checked box, performs the action, and records the decision in the note. The question, choice, and result stay together instead of disappearing into chat.

The vault becomes a small control panel for OpenClaw without requiring a custom mobile app for each workflow.

## 4. Wake up to reports you can audit

A scheduled task can write its result into the vault before I wake up. My morning report combines blog analytics, GA4, Search Console, newsletter activity, and a short bottom line.

![Morning report showing blog, GA4, Search Console, newsletter, and bottom-line sections with private values blurred](/images/obsidian-value/morning-report-redacted.png)

Because the report persists, I can compare a strange metric with earlier notes instead of hunting through chat history.

More complicated jobs can retain their intermediate work:

```text
runs/2026-11-03/
  01-discovery.md   what it searched, what it excluded, why
  02-evidence.md    the policy quotes and activity numbers behind each score
  03-verdict.md     the ranked, scored result
```

If the verdict is wrong, I can inspect whether discovery missed something, the evidence was weak, or the final ranking applied the wrong rule.

Failures can use the same interface. A failed job can leave a note explaining what happened and offering the available responses.

![Obsidian note on a phone offering options to fix, disable, or change a failed cron job](/images/obsidian-value/failed-cron-note.png)

My choice determines the next operation, and the note remains as its receipt.

## 5. Edit what the agent thinks it knows

Some agent memory systems are easy for the model to query and difficult for the owner to inspect. With Markdown, I can open exactly what the agent will read.

My common draft complaints, for example, live in a file with a description of each problem and a test for when it applies:

```markdown
## 1. Performative importance
- **Problem:** The prose announces that something matters instead of showing why.
- **Flag when:** "That's the part I'd defend" · "what actually matters" — and the sentence after it adds no new fact.
- **Accept when:** it's a genuine verdict on a real trade-off, backed by the paragraph around it.
```

A critic can check a draft against that file, and I can edit the rule when it is wrong. Neither of us has to treat a hidden memory store as the source of truth.

The same transparency helps when the system needs debugging. One behavior may be controlled by a skill, script, scheduled job, note, and config entry. Another model can inspect those pieces together before proposing a fix.

```text
"inspect the harness for how the inbox decides what to process"
  → instruction-file lines
  → matching skills and the files they reference
  → scripts and hooks
  → notes that describe it
  → scheduled jobs and config entries
```

Obsidian does not make an agent more capable by itself. It gives the agent’s work a shared, inspectable home: plain files it can operate on and an interface I can use from a laptop or phone.

The result is a system that retains more of its value each time I use it. That has been enough to replace the unread badge as my project system.

The difficult part is that it is easy to build only half of this system. That is what happened to me at first: I had an agent writing Markdown, but not enough structure to make the vault dependable. Files accumulated, yet the agent still could not reliably decide where new work belonged, what state to update, or how to resume it later.

That is why I put together a free seven-part course covering the complete setup: the vault structure, the inbox, and the loops that keep everything usable. If you want to build the system without repeating my half-working first attempt, start with the [seven-part breakdown](https://notesfromtheloop.com/loop-breakdown/?utm_source=engineering.kenmazaika.com&utm_medium=blog&utm_campaign=obsidian-value).
