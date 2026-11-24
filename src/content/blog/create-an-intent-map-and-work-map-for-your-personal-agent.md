---
title: "Create an Intent Map and Work Map for Your Personal Agent"
description: "Your agent needs two things it can't infer: what you're trying to accomplish, and where the work actually lives. Here's how I build both files in an Obsidian vault — and the failure each one prevents."
seoTitle: "Intent Map and Work Map for Your AI Agent: A Practical Setup"
seoDescription: "Build an intent map and work map for your personal AI agent: two Markdown files that stop it optimizing the wrong work or inventing systems that don't exist."
socialTitle: 'Two Markdown files that make a personal agent useful'
pubDate: 'Nov 24, 2026'
heroImage: ../../assets/headers/intent-map-work-map-masthead.jpg
ogCategory: 'Field Note · AI & Engineering'
related:
  - title: 'How I Run Agent Loops With OpenClaw and Obsidian'
    url: '/blog/how-i-run-agent-loops-openclaw-obsidian/'
  - title: 'Obsidian Vault Structure: The Folders That Actually Earn Their Keep'
    url: '/blog/obsidian-vault-structure/'
---


A personal AI agent needs to know two things: what matters to you and where your work happens.

I give mine that context with two Markdown files. An **intent map** describes what I’m trying to accomplish. A **work map** documents the repositories, websites, workflows, and other systems involved.

I keep both in my Obsidian vault, where my agent and several cron jobs can use them. They’re simple files, but they give the agent a much better foundation for deciding what to work on.

## 1. What the two maps contain

The intent map records your goals, chosen pursuits, beliefs, and boundaries.

My current map says:

> Build a growing audience and eventually a useful product around a belief: AI agents can dramatically expand what an individual can accomplish when humans and agents collaborate effectively.

It also names the publication as a desired outcome:

> Build a recognizable, trusted publication about practical personal AI agents.

The work map describes how that intent is being carried out. Mine covers the blog, its repository, articles and drafts, analytics, mailing list, offers, social accounts, publishing workflows, and scheduled jobs.

For each system, it records where it lives, how the agent can inspect it, how it connects to other systems, and its current state. I think of it as an index rather than a copy of every piece of documentation.

## 2. Why both maps matter

A work map helps an agent find available work. The intent map helps it decide which work is actually useful.

For example, one strategist run found a 5.86 MB PNG being loaded as a high-priority hero image. It verified the live behavior and recommended fixing the shared masthead path instead of editing every article.

The intent map established that improving the publication mattered. The work map showed the agent where to inspect the live site and its implementation. Together, they gave it enough context to make a useful recommendation instead of simply pointing out a large file.

Keeping the maps separate also prevents two common mistakes: inferring what matters from whatever happens to be live, and assuming something is live because an old document says so.

I’m the authority on intent. Current evidence is the authority on operational state.

## 3. How to create and use them

Start with an `intent-map.md` file using this structure:

```markdown
## Intent Map

### North star
What am I trying to create or change?

### Chosen pursuits
Which projects are worth doing in themselves?
Which outcomes are useful side effects?

### Beliefs
What do I believe about how this work should be done?

### Relationships
How do these pursuits reinforce one another?
Where should they remain independent?

### Boundaries
What may the agent change, and what should it preserve?
What should it avoid optimizing for?

### Evidence of progress
What would show that the work is reaching people or becoming useful?
```

Then create a `work-map.md` file:

```markdown
## Work Map

### System overview
What are the main projects and services?
How do they connect?

### Surfaces
| Surface | Location | Purpose | State | Verified |
|---|---|---|---|---|

### Repositories and artifacts
Where does the source of truth live for each project?

### Workflows
How does work move from an idea to a finished result?
Which steps require human approval?

### Current state
What is live, degraded, broken, stale, or unverified?

### Known gaps
What still needs to be inspected?

### Maintenance
How and when is this map re-verified?
```

Only authorize systems the agent may read. Mark claims **verified**, **unverified**, or **stale**, and systems **live**, **degraded**, or **broken**. Include evidence and verification dates for operational claims. Never put credentials in the map; record where they are managed instead.

You won’t need to update both files at the same time. Update the intent map when your goals, beliefs, commitments, or project relationships change. Update the work map when systems change or verification becomes stale.

Once the files are in place, ask the agent to recommend one useful piece of work. The answer is a quick test of whether the maps contain enough context. A generic recommendation usually means the work map needs more detail. A recommendation that pulls you away from a chosen pursuit usually means the intent map needs a clearer boundary.

You can create both files with this prompt:

```text
Help me create two Markdown files for my personal agent: an intent map and a work map.

Interview me first. Ask only questions that would change the documents.

For the intent map, identify:
- pursuits I value in themselves;
- outcomes that are benefits rather than the reason for the work;
- beliefs and boundaries that should guide recommendations;
- relationships between projects;
- what the agent may change and what it should preserve.

For the work map, inspect the systems and files I authorize you to read. Record:
- projects, repositories, services, workflows, and their relationships;
- what is live, degraded, broken, stale, or unverified;
- evidence and verification dates for operational claims;
- gaps that require inspection before action.

Do not invent intent from memory. Mark uncertainty and ask me.
Do not record credentials or secret values.
Draft both files for my review. I remain the authority on intent; current evidence is the authority on operational state.
```

My initial setup took about 20 minutes. I explain the larger system behind these workflows in [the 7-part Obsidian breakdown](/loop-breakdown/).

In the next post, I’ll show some of the specific jobs I run with these maps and how they produce useful work automatically.

