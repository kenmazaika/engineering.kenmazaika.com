---
title: "Inspecting the Harness Before Changing an Agent Behavior"
description: "A fix that works 80% of the time is worse than no fix. The workflow I use: bundle everything the agent knows about one behavior, hand it to a second model, and paste back the prompt that model writes."
seoTitle: "Why Fixing Your Agent Breaks Something Else"
seoDescription: "When fixing one agent behavior breaks another, the cause spans several files. The inspect, bundle, second-model handover I use, plus the kit to install it."
socialTitle: "Why Fixing Your Agent Breaks Something Else"
pubDate: 'Nov 10, 2026'
ogCategory: 'Field Note · Agent Workflows'
layoutVariant: harness
heroImage: ../../assets/headers/inspect-harness-masthead.jpg
related:
  - title: 'Meta-Prompting: Let the AI Write Your Prompt'
    url: '/blog/meta-prompting-let-ai-write-your-prompt/'
  - title: 'More Context Makes Your Agent Dumber. The Fix Is a File Handoff.'
    url: '/blog/more-context-makes-your-agent-dumber/'
  - title: 'Set Up an Inbox System in Your Obsidian Vault'
    url: '/blog/obsidian-inbox-system/'
  - title: 'Agent Hooks: Named Triggers for Durable Agent Work'
    url: '/blog/agent-hooks/'
faq:
  - question: 'Why does fixing one agent behavior break another?'
    answer: 'The rules for one behavior do not live in one file. The same format is defined in a skill, validated by a script, described in a note, and run by a scheduled job. A new rule added to the skill conflicts with an older one, or over-constrains a case that used to work.'
  - question: 'How do I find every file that affects one agent behavior?'
    answer: 'Run a command that builds one markdown bundle: the instruction-file lines, every matching skill and the files it references, the scripts and hooks, the notes that describe it, and the scheduled jobs and config entries that wire it up. The command prints the path and changes nothing.'
  - question: 'Should the same model fix the behavior?'
    answer: 'No. A separate session with a stronger model reads the bundle and writes the prompt; the agent implements it. Because that session sees the whole component instead of one file, the instruction covers the files involved, what must stay unchanged, and a check that proves the change worked.'
---

When an agent behavior spans several files, patching the file you are looking at usually moves the problem rather than solving it. Here is the workflow I use now.

## The example

My agent sends decision cards for things that need a choice. Each card should list every applicable option plus a "something else" line. That format is defined in a skill, validated by a script, described in a note, and run by a scheduled job.

I kept getting cards that were slightly wrong: a missing option, a checkbox that did nothing. I would tell the agent, it would add a rule to the skill, and the next card would be right. Then a different card would break, because the new rule conflicted with an older one or over-constrained a case that used to work.

## What I do

1. Inspect the harness for the files involved in the behavior, and copy all of it to my clipboard.
2. Open a new ChatGPT window with a stronger model, complain about the problem, paste the context, and ask for a prompt that fixes it.
3. Copy the returned prompt into my agent.

That is a reverse prompt: the model writes the instruction, the agent implements it. I wrote about the same move in [Meta-Prompting: Let the AI Write Your Prompt](/blog/meta-prompting-let-ai-write-your-prompt/).

Because the other session sees the whole component instead of the one file, the instruction covers the files involved, what has to stay unchanged, and a check to prove the change worked.

Step 1 is the part that makes this repeatable. Without it I forget a file, or paste a summary that drops the part that mattered.

In my environment the command is:

> inspect the harness for how the inbox decides what to process

The agent writes the matching instruction-file lines, skills, scripts, notes, and scheduled jobs into one markdown bundle, prints the path, and stops.

<p class="inline-cta"><em>The routing, skills and scheduled jobs this inspection has to gather are the same system I walk through in <a href="/loop-breakdown/">seven emails</a>.</em></p>

## The kit

Point your agent at this post and ask it to set this up. It should adapt paths and file names to your setup.

**Prompt for your agent:**

```
Read this post and build the "inspect harness" capability in my environment.

1. Give me one command I can run with a topic: "inspect the harness for how <X> works".
2. It must collect, into ONE markdown file:
   - the instruction files you load every turn, as line-numbered excerpts around matches;
   - every skill that matches, with the files it references;
   - the scripts and hooks that implement the behavior;
   - notes or docs that describe it;
   - scheduled jobs, config entries and plugin registrations that wire it up.
3. Search on the topic's terms. Rank filename and heading hits above body mentions. Keep every
   file that could influence the behavior; do not trim to the obvious ones.
4. Print the path to the file. Do not summarise it.
5. If a category does not exist here, skip it and say so in the file.
6. Do not change anything while inspecting.
```

**Line to add to `TOOLS.md` or `AGENTS.md`:**

```
## Inspect the harness
When I say "inspect the harness for how <X> works", build one markdown file containing every
file that could influence <X> — instruction files, skills, scripts, notes and scheduled jobs —
then print its path. Do not summarise it and do not change anything.
```

This takes longer than editing the skill. I run the inspection, open the other window, paste, read, paste back. The change holds better, because the model writing the instruction sees the whole component instead of the one file I happened to be looking at. I'll take the extra few minutes.
