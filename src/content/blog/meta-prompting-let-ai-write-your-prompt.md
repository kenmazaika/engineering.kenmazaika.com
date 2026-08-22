---
title: 'Meta-Prompting: Let the AI Write Your Prompt'
description: 'Describe what you want in plain language. Ask the AI to turn it into a structured prompt. Use that prompt.'
socialTitle: 'Let the AI Write Your Prompt'
ogCategory: 'Field Note · Hermes Workflows'
pubDate: 'Aug 07, 2026'
related:
  - title: 'Hermes Workflow: Teach Your Agent to Question the Instruction'
    url: '/blog/hermes-workflow-question-the-instruction/'
  - title: 'Capture workflow: a reusable Hermes use case for work that contains your judgment'
    url: '/blog/capture-workflow/'
showPopup: true
---

Here's the technique: instead of writing a prompt yourself, describe what you want in plain language and ask the AI to generate the prompt. Then use that prompt.

That's it. The rest of this post is how to do it, when it works, and a copyable template.

## How it works

The process has three steps:

**1. Dump your raw thinking.** Talk into your AI. Ramble. Dictate. Paste rough notes. Don't try to structure it — just describe what you want in whatever words come out.

**2. Ask the AI to structure it.** Say something like: "Turn this into a structured plan with specific questions, phases, and constraints." The AI takes your messy input and organizes it into something executable.

**3. Use the result as your prompt.** Feed the structured output back to the AI. It executes the plan it just wrote. The output is better than what you'd get from a prompt you crafted yourself.

## Why this works

You know what you want. The AI knows how to structure instructions. The gap between "what I want" and "how to get it" is where this technique creates value.

When you write a prompt yourself, you're doing two jobs: figuring out what you want and figuring out how to ask for it. This technique splits those jobs. You handle the first. The AI handles the second.

## A real example

I had a topic I wanted to research — how to measure AI's impact on engineering teams. I had opinions, but no plan. So I talked into my AI for a few minutes. Thirteen hundred words of scattered thoughts.

Then I said: "Turn this into a research plan."

The AI produced this:

```
Research Brief: Measuring AI Efficiency

Phase 1: Define Research Questions
  1. Velocity is a fundamentally flawed metric — what's the proof?
  2. Lines of code, PR count, review time — what does the
     research say about each?
  3. How are other companies measuring AI efficiency?
  4. What happens to teams that report high AI efficiency?

Phase 2: Execute Baseline Research
Phase 3: Synthesize Findings
Phase 4: Identify Deeper Research Angles
Phase 5: Execute Deeper Research
Phase 6: Produce Final Analysis

Constraints:
  - Simple over complex
  - Honest over optimistic
  - Practical over theoretical
  - Named over hypothetical
```

Six phases. Specific questions. A quality bar. Generated from my rambling.

I fed that back. The AI produced a 22-kilobyte research document. Not because I wrote a great prompt — because the AI wrote one from my intent.

## When to use it

- You know what you want but not how to structure it
- The task needs phases, questions, or constraints to work
- You want to iterate on the approach, not just the output
- You have raw insight that needs organizing

## When not to use it

- The task is trivial — just do it directly
- You already know exactly what prompt you need
- You don't have enough context to give the AI a starting point

## The copyable version

Here's the prompt I use. Adapt it:

```
I have a rough idea for [topic/outcome].

Here's my raw thinking: [paste your rambling, notes, dictation,
or rough description]

Turn this into:
1. A structured plan with specific questions
2. A workflow with phases that build on each other
3. Constraints that define quality
4. File paths or artifacts for each phase

Make it self-contained — someone should be able to execute
this plan without asking me anything else.
```

Describe what you want. Ask the AI to structure it. Use the result as your prompt.
