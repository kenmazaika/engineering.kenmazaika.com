---
title: "The $175 Production Box I Use to Run an AI Agent 24/7"
description: "The useful part of my AI agent setup is not the hardware. It is a cheap machine that stays awake, keeps its work, runs on a schedule, and lets me teach a job once instead of repeating it forever."
seoTitle: "How to Run an AI Agent 24/7 on a $175 Used Computer"
socialTitle: "You Don't Need a GPU to Run an AI Agent 24/7"
pubDate: 'Aug 22, 2026'
updatedDate: 'Oct 5, 2026'
related:
  - title: 'My Default Model Stack for AI Agent Work'
    url: '/blog/my-default-model-stack-for-ai-agent-work/'
  - title: 'What It Costs to Run a Capable AI Agent Each Month'
    url: '/blog/cost-to-run-an-agent/'
  - title: 'Which AI Model Should You Run for Agent Work?'
    url: '/blog/best-ai-model-for-agent-work/'
ogCategory: 'Field Note · AI & Engineering'
showPopup: true
faq:
  - question: "What hardware do I need to run an AI agent 24/7?"
    answer: "For my cloud-model workflows, a used Dell OptiPlex with 16GB of RAM and Linux is enough. The important requirement is that the machine stays awake and connected, not that it has a GPU."
  - question: "What makes an AI agent setup production-grade?"
    answer: "For this kind of personal agent, production-grade means availability and reliability: an always-on host, a filesystem it can use, durable memory, scheduled jobs, and a dependable way to reach you. It does not mean expensive hardware."
  - question: "Do I need a GPU or local models to run an AI agent?"
    answer: "No, not for the work described here. My agent uses cloud models, so the local machine mostly provides uptime, storage, scheduling, and access to tools."
  - question: "What can a cheap always-on AI agent actually do?"
    answer: "Mine has scouted apartments, logged Airbnb expenses, turned dictation into drafts, assembled a Sunday industry digest, and handled one-off research. Each workflow started as one useful job with a narrow trigger and a human decision at the end."
  - question: "How should I get started with an AI agent?"
    answer: "Pick one repeated task you already understand, teach the agent how you judge a good result, save the instructions, and run it on a narrow trigger. Add a schedule only after the manual version works."
---

If you want to run an AI agent for real work, start with a cheap computer that never goes to sleep and one task worth teaching it. That is enough to get into production.

My agent runs 24/7 on a used Dell OptiPlex I bought on Facebook Marketplace for $175. It has 16GB of RAM, runs Linux, and has no GPU. I started these workflows on Hermes and have since been moving them to OpenClaw, but the useful part of the setup has stayed the same: the box is always there, its files survive between conversations, and scheduled work runs whether my laptop is open or not.

That is what I mean by production-grade. Not a rack of servers. Not local inference. Availability and reliability for the work I actually ask it to do.

## The first requirement is availability

My agent used to live on my laptop. That worked until I closed the lid.

When the laptop slept, the agent stopped replying. Morning jobs did not run. A request I sent while I was away waited for me to reopen the computer. The model was capable, but the system around it was unreliable.

An agent that sleeps when you close the lid is a chat session with extra steps.

The first upgrade was not a smarter model. It was giving the agent a machine whose job was to remain available. That changed the relationship. I could send it something from my phone, expect a scheduled job to run at 8am, or let a longer research task finish without keeping my work laptop awake on a desk.

For my workflows, uptime matters more than horsepower. The models run in the cloud. The local computer coordinates the work, keeps the files, calls tools, and waits for the next trigger. Those are modest computing requirements, but they are real operational requirements.

## The $175 production box

The machine is a used Dell OptiPlex with 16GB of RAM and Linux. I paid $175 for it once.

No Mac Mini. No GPU. No local models. I am not arguing that those things are useless. I am saying they do not solve the problem I had. My problem was that the agent disappeared when my laptop went to sleep.

I tried to spend even less first. I bought a Wyse thin client for a fraction of the price, fought with the Linux Mint install, and eventually gave up. People run agents on Raspberry Pis, so $175 is not a minimum. It is the point where this became boring and dependable for me.

That is a better standard for starter hardware than maximum theoretical performance: can I install the system, leave it running, replace it cheaply, and stop thinking about it?

The OptiPlex clears that bar. It is common hardware, easy to find used, and powerful enough to coordinate cloud-model work. If it dies, I can replace the machine without redesigning the whole setup. The agent's durable work lives in files and configuration, not in some magical property of this particular computer.

## What production-grade means for an agent

For a personal agent doing real work, I need five things:

1. **An always-on host.** The machine stays awake, connected, and ready to receive work.
2. **A filesystem it owns.** Drafts, source material, scripts, receipts, and intermediate work need a stable place to live.
3. **Schedules and triggers.** Cron can start a job at 8am or every Sunday without waiting for me to remember it.
4. **Durable memory.** Decisions and instructions have to survive beyond one model conversation. I keep them in files the agent can read again.
5. **A way to reach me.** The system needs a dependable channel for requests, results, and failures. I have mostly used Telegram and Discord.

None of those requirements calls for a GPU. They call for a small amount of infrastructure and the discipline to keep the important state outside the model's context window.

This is a deliberately bounded definition of production-grade. I am not running a bank, and I am not claiming a used desktop has enterprise redundancy. I am running personal workflows where a missed job is annoying, files need to persist, and the agent should answer when I contact it. The setup is reliable enough for that job.

## Teach it once, then schedule it

The hardware keeps the agent awake. The teach-once habit makes it useful.

When I give the agent a repeated job, I do not want to re-explain the whole process every time. I run the task with it, correct the places where its judgment differs from mine, and save the instructions as a skill or workflow. Once the manual version works, I give it a narrow trigger: a message, a new item to process, or a cron schedule.

That is the production pattern:

1. Pick one job you already do repeatedly.
2. Show the agent the inputs and what a good result looks like.
3. Correct its mistakes while the workflow is still manual.
4. Save those decisions in durable instructions.
5. Add a narrow trigger and a clear stopping point.

The important word is *narrow*. “Help me manage my life” is not a job. “At 8am, find new apartment listings, apply these filters, and send me the best three” is a job. The trigger is obvious, the output is inspectable, and I remain responsible for the decision.

## What runs on the box

The workflows matter because they are receipts that this setup does real work. They are not a catalog of everything an agent could theoretically do.

**Apartment scouting.** Until I signed a lease, the agent checked new rental listings every morning at 8am. It filtered about 120 listings by school district, commute time, budget, bedrooms, and the light visible in the photos. One to three places reached my inbox. I signed a lease on one of its top picks. The agent did not choose my apartment; it kept the good options from disappearing into the pile.

**Expense logging.** I run an Airbnb. I send “I paid the cleaner $160,” and the agent turns it into a row in Google Sheets. It is a small workflow, which is exactly why it works: one input, one destination, no interpretation theater.

**Dictation into content.** I talk through an idea in a dedicated dictation topic. The agent transcribes it, shapes the argument, pushes back on weak parts, and turns it into material I can revise. The value is not autonomous publishing. It is removing the blank page and preserving the thought while it is fresh.

**The Sunday digest.** A saved workflow finds the most-upvoted and most-controversial discussions from the previous month on Reddit and Twitter, then drafts a digest of what the industry is arguing about. It lands on Sunday morning. I curate it before it becomes a newsletter.

**One-off research.** Before I ran a book promotion with a vendor, I had the agent collect roughly 18 Reddit posts and normalize the experiences into a table: who succeeded, who failed, and what they would do differently. The research did not make the decision for me. It let me make the decision after seeing the evidence in one place.

Each workflow follows the same shape: teach the judgment, preserve the instructions, run from a narrow trigger, and put a human at the end.

## Where autonomy breaks down

The seductive version of agent work is the unfettered loop: find a problem, plan the work, execute it, review it, and keep going forever. In my experience, that produces motion faster than it produces value.

An unconstrained agent can make content nobody reads or code somebody has to maintain. Giving the loop more time does not fix a vague goal. It just lets the mistake compound unattended.

Narrow loops work better. A scheduled job starts from a known trigger, works toward a defined artifact, stops at a boundary, and hands the result to me. Apartment scouting ends with a short list. Research ends with a table. Dictation ends with a draft. The human bottleneck is not a defect in these workflows. It is where judgment lives.

The important startup receipt here is the box: $175, once. You can begin without a GPU, local models, or a larger hardware budget. The recurring bill is a separate question, and it has its own post.

## What does it cost to run every month?

Setting up is one-time; running it is a monthly line. **What does it cost to run an agent month to month?** For me, about **$50 a month** — a subscription plus a metered workhorse, with an optional premium lane I can decline. Where that number comes from, and the two things that move it, is its own post: [How Much Does It Cost to Run a Capable AI Agent Each Month?](/blog/cost-to-run-an-agent/).

## Start with one useful loop

Do not begin by designing an all-purpose autonomous employee. Buy or repurpose a machine you can leave on, install the agent harness, and choose one repeated task whose output you already know how to judge.

Run it manually first. Write down every correction that should apply next time. Save those corrections with the workflow. Only then put it on a schedule.

That is enough to get started: a box that stays awake and a habit of teaching work once. The production system is not the computer by itself. It is the computer, the durable instructions, the trigger, and the moment where the agent stops and gives the work back to you.
