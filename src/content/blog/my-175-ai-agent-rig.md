---
title: 'My $175 AI Agent Rig: What It Actually Costs to Run'
description: 'A used Dell OptiPlex from Facebook Marketplace runs my AI agent 24/7. The honest bill: a $20 subscription I already had, plus metered usage — about $10–15 in a routine month, $60.49 in the month I actually measured.'
seoTitle: 'The $175 AI Agent Setup — What It Actually Costs to Run'
socialTitle: 'My $175 AI Agent Rig: What It Really Costs'
pubDate: 'Aug 22, 2026'
related:
  - title: 'My Default Model Stack for AI Agent Work'
    url: '/blog/my-default-model-stack-for-ai-agent-work/'
  - title: 'I Ran Eleven AI Models on Real Agentic Workflows in Hermes'
    url: '/blog/best-ai-model-for-agent-work/'
ogCategory: 'Field Note · Hermes Workflows'
showPopup: true
---

Until I signed a lease, every morning at 8am I got an email with one to three apartments worth a look. Each one is already filtered by school district, commute time, budget, bedrooms, and whether the photos show decent light. When I pay the cleaner for the Airbnb, I send one line and it lands in Google Sheets. My LinkedIn content starts as dictated rambling and comes back as drafts.

All of it runs on a used Dell OptiPlex I bought on Facebook Marketplace for $175.

I'm not an AI researcher. I'm just an engineering manager. The agent is Hermes, which I run most of my actual work through, and it has been sitting in my house for months. I mostly talk to it over Telegram.

## Why a used box

The agent used to live on my laptop, and that worked fine until I closed the lid. When the lid closed, the agent stopped replying. An agent that goes to sleep every time you shut a laptop isn't much of an agent.

The lesson wasn't that I needed more horsepower. It's that I needed availability: a machine that is on 24/7 and answers whenever I send it something. A used OptiPlex with 16GB of RAM and Linux does that for $175.

No Mac Mini. No GPU. No local models. For the work I do, the cost of local inference and GPUs is excessive. The cheap box isn't a compromise — the agent just needs to be awake.

I didn't start at $175, either. I tried a Wyse thin client first, at a fraction of the price, and it struggled with the Linux Mint install until I gave up on it. I'm sure this can be done cheaper; people run agents on Raspberry Pis. The $175 OptiPlex is where it worked for me.

When I posted the setup, one comment said a cheap rig isn't a flex if you're not running local models. Fair. But you don't need local models for this work, and availability matters more than horsepower. The price was never the point.

## What it actually costs

The hardware is the smallest line on the bill: $175, once.

The monthly cost has two parts. The first is the $20/month ChatGPT subscription, which I paid before the agent existed and would pay anyway — roughly 80% of my inference runs on it. The second is metered usage on cheaper models when I hit the subscription's rate limits: DeepSeek Flash is the one I use most, and Xiaomi MiMo has been good too. Both are cheap per token. In routine use, those add-ons run maybe $10–15 a month, if that.

That's the estimate. Here's the measurement.

In [the battery post](/blog/best-ai-model-for-agent-work/), eleven models reconstructed my actual bill from my own usage data, and the ones that got the accounting right converged on $60.49 for 30 days. That number is my real usage — not the cost of running the test.

So I'm not going to hand you one flat number. Here's the honest version:

| Line | Cost | Notes |
|---|---|---|
| Hardware, one time | $175 | Used Dell OptiPlex, 16GB RAM, Linux, Facebook Marketplace |
| ChatGPT subscription | $20/mo | ~80% of my inference. Paid it before the agent existed. |
| Metered models, routine use | ~$10–15/mo | DeepSeek Flash workhorse, Xiaomi MiMo second. Cheap per token. |
| Measured 30-day reality | $60.49 | My actual workload. Not an estimate, not a benchmark. |

The gap between the last two rows is the honest part of this post. A routine month is cheap. A real month — new models, vision work, a research binge — costs more. If your budget needs one number, use the bigger one and be pleasantly surprised.

Which models, and why, is [its own post](/blog/my-default-model-stack-for-ai-agent-work/). The one-line version: a frontier subscription for polish, a cheap workhorse for volume.

## What earns its keep

**Apartment scouting.** Every morning at 8am, the agent pulled new rental listings and filtered them: school district, commute time (it called the Google Maps API to estimate my drive), bedrooms, budget, and the lighting in the photos. About 120 listings became one to three in an email, all places that looked better than where I live now. The hard part of apartment hunting was never booking the viewing — it was finding the gems in the pile. That's the part I gave away.

One person on that thread said they burned $50 in tokens trying to get an agent to scrape Zillow and got nothing for it. The lesson, I think, is that scouting is filtering, not scraping. My agent doesn't crawl the whole site. It narrows the firehose to the few listings worth my morning. The agent curates. I decide.

That search is over now. I signed a lease on one of the top picks from those emails. The loop didn't choose the apartment — I did. It just made sure the good ones never got lost in the pile.

**Expense logging.** I run an Airbnb. "I paid the cleaner $160" becomes a row in Google Sheets. Five minutes of friction I never deal with again.

**Content.** I set up a Wispr dictation topic: I talk, it transcribes, formats, and pushes back on my ideas, and I repurpose the output. Same with LinkedIn infographics and social cards — I hand it an idea plus an example of the style, we go back and forth a few times, and it ships something good. It's output I'd never produce by hand, because the effort was never worth it.

**The Sunday email.** A skill called last-30-days surfaces the most-upvoted and most-controversial posts on Reddit and Twitter from the past month, and the agent writes up what the industry is actually arguing about. It lands Sunday mornings. I curate it lightly and it goes out as my newsletter. I would never read all those threads myself. Now I don't have to.

**One-off research.** Before running a book promo with a specific vendor, I had the agent crawl the 18 or so Reddit posts about them and normalize everyone's experience into one table: who succeeded, who failed, what they'd do differently. It didn't change my decision much. It changed my confidence in the decision — I'd seen all the sources, not just the few that happened to surface.

## What doesn't work: loops

The idea going around the internet is the autonomous loop: the agent finds the bugs, files the tickets, implements, opens the PR, reviews itself, ships, and moves on. In practice, unfettered loops are AI going in circles — building a bunch of trash, whether that's content nobody reads or code somebody has to maintain.

Narrow loops with well-defined goals can work. What works reliably for me is triggers: cron jobs, scheduled emails, when X happens, do Y. The agent grinds until it reaches a decision, then stops and hands it to a human. The human bottleneck isn't something to optimize away. It's where judgment lives.

## The unlock

Teach it to do something once. Save it as a skill or a cron job. Let it run on a schedule. Stop thinking about it.

Everything above is some version of that pattern, plus the occasional message from me. Each job is teach-once, and then it just runs.

None of these things are life-changing individually. But together, it's a layer of operational infrastructure that makes your life measurably less tedious. The $175 setup replaced a handful of apps along the way.

$175 once. $20 a month for a subscription I already had. Maybe $10–15 in metered usage in routine months, and $60.49 in the measured one. That's the whole bill for an agent that answers every time I send it something.
