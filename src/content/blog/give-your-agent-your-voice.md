---
title: "I Thought My AI Voice Guide Was Working. I Never Tested It."
seoTitle: "Does an AI Voice Guide Work? I Wrote the Same Essay Three Ways"
socialTitle: "My AI Voice Guide Invented a Scene That Never Happened."
description: "My AI voice guide invented a scene I never wrote. I wrote the same short essay three ways — no guide, full guide, trimmed guide — and the full guide lost."
pubDate: 'Oct 20, 2026'
ogCategory: 'Field Note · AI & Engineering'
layoutVariant: harness
heroImage: ../../assets/headers/give-your-agent-your-voice-masthead.jpg
related:
  - title: 'Route the File Before You Write It'
    url: '/blog/route-the-file-before-you-write-it/'
  - title: 'More Context Makes Your Agent Dumber. The Fix Is a File Handoff.'
    url: '/blog/more-context-makes-your-agent-dumber/'
  - title: 'My Agent Kept Writing the Same Post'
    url: '/blog/my-agent-kept-writing-the-same-post/'
faq:
  - question: "Does an AI voice guide actually work?"
    answer: "Partly. Mine worked as a filter for AI idioms and not as a transfer of my voice. Against writing with no guide at all, the trimmed guide won on two things: it opened on the number, and it stopped sooner."
  - question: "How do you test whether a voice guide works?"
    answer: "Write the same short sample three ways: with no guide, with the full guide, and with a trimmed one. Then compare sentence length, variance, em dashes per thousand words, and whether anything in the text was invented."
  - question: "Why did the full guide make the writing worse?"
    answer: "Twenty-odd rules arguing with each other. A paragraph cap fought a length target and a rhythm rule, and the self-specificity rule demanded a concrete personal moment, which the model supplied by inventing one. Output under it ran 32.6 words a sentence with zero em dashes, against 16.8 and 10.8 per thousand with no guide."
  - question: "How many rules should a voice guide have?"
    answer: "Eight: five spine rules, three voice rules, a short never list, and three questions to check the draft against. Mine had twenty-odd and nobody, including me, was reading all of them."
  - question: "What is a voice guide for an AI agent?"
    answer: "A file the agent reads before it writes: tone, a handful of measurable rules, a never-use list, and real excerpts of your own prose. It is a config file, not a prompt — which is also why it can be tested by switching it off."
---

My agent handed me a draft that opened with this:

> On October 19, I wrote down one rule for every overnight OpenClaw job I run: "work on this overnight" is a request, not a scheduler.

I never wrote that sentence. There was no October 19 writing session, no notebook, no rule I sat down and recorded. **The agent hallucinated it**, because my voice guide told it to open on a dated, countable instance of my own work.

The draft passed the voice guide.

## The test I skipped

I ran that voice guide for about a month: twenty-odd rules, a paragraph cap, a seven-question sign-off. Every draft went through it, and whenever one sounded better than the last I credited the guide.

I never ran the same sample with it and without it. Not once.

Without a control a guide gets credit for everything: a draft improves and the guide did it, a draft gets worse and the topic was hard. That is a mood with a filename. It is also how [a rule mined from one post becomes the rule for every post](/blog/my-agent-kept-writing-the-same-post/) — the same mistake, one layer down.

## The control

I picked one thing: a 663-upvote r/OpenClaw post, tip three — *"Work on this overnight doesn't work the way you think."* The brief was a short essay about that post, 150–200 words, no headers. The post is the subject. The essay is the sample, and the same one gets written three ways: plain, under the full guide, under the trimmed one.

## The same essay, no guide

> I learned to stop treating "work on this overnight" as a durable instruction. A highly voted r/OpenClaw post—663 upvotes—calls out the same trap: a chat session is stateful only while that chat stays open. If I tell the agent to keep working, then close the chat, it does not continue holding the task in memory. The work disappears with the session. For actual background work, I use cron jobs with isolated session targets. Each run starts an independent agent session on schedule, gives it a defined job, and messages me with the result. That is reliable because the task is encoded outside the conversation instead of depending on a chat remaining alive. For one-off deferred work, cron alone is not enough; I pair it with a queue. The queue can be Notion, SQLite, or even a plain text file. A scheduled agent checks for pending items, claims one, does the work, records the outcome, and notifies me. The rule I use is simple: chat is for work happening now; cron plus durable state is for work that must survive after I leave.

Read that one first, because it's good. It opens on the lesson, uses two em dashes, runs sentences from eight to thirty-five words, and invents nothing. That is my voice with no help at all, and it is what any guide has to beat.

## The same essay, full twenty-rule guide

> On October 19, I wrote down one rule for every overnight OpenClaw job I run: "work on this overnight" is a request, not a scheduler. A 663-upvote r/OpenClaw post warns that this fails for a simple reason: chat state lasts only while that chat remains open, so closing it after assigning work leaves the agent with nothing to resume. I treat background work as infrastructure instead, using cron jobs with isolated session targets; each scheduled run starts an independent agent session, does the work, and messages me the result without depending on yesterday's chat. For a one-off deferred task, I put a record in a queue such as Notion, SQLite, or a plain text file, then run a cron job that checks for due items and hands each one to a fresh isolated session. That setup gives the task durable state and a clock; once both are explicit, "overnight" means a job that will actually start after I close my laptop.

Five sentences, a mean of 32.6 words, zero em dashes, and an opening scene that never happened. The self-specificity rule demanded a concrete, countable personal moment and the model supplied one, in a file that also says never fabricate a number, a quote, or an opinion. Twenty rules from twenty afternoons, fighting each other.

## The same essay, trimmed eight-rule guide

> The 663-upvote r/OpenClaw post gets the failure mode exactly right: "work on this overnight" does not work the way people think. I can tell an agent to keep going, but if I close that chat, the session state goes with it. The agent does not quietly continue in the background and remember where it was—it forgets. For real background work, I use cron jobs with isolated session targets. Each run spins up an independent agent session on schedule, gives it the job, and messages me with the result. That works well for recurring tasks because the schedule itself is the trigger. One-off deferred work needs another piece: a queue. I can keep that queue in Notion, SQLite, or a plain text file; the storage matters less than having a durable record outside the chat. Then I run a cron job that checks the queue, claims pending work, executes it in an isolated session, and reports back. My rule is simple: chat is for work happening now. Cron plus durable state is for work that must survive me closing the window.

That is the one I ship. It opens on the post instead of the lesson, runs eleven sentences at a mean of 16.6 words, and keeps one em dash.

## The numbers behind the three versions

| Text               | Words | Sentences | Mean sentence |   sd | Em dashes /1k |
| ------------------ | ----: | --------: | ------------: | ---: | ------------: |
| No guide           |   185 |        11 |          16.8 |  5.4 |          10.8 |
| Full guide         |   163 |         5 |          32.6 |  6.2 |       **0.0** |
| Trimmed guide      |   183 |        11 |          16.6 |  5.2 |           5.5 |
| My published posts |     — |         — |          15.2 | 10.3 |          10.8 |

Same shape as the control, near enough. The full guide is a different writer.

## The honest size of the win

It beat no guide on two things: it opened on the number instead of the lesson, and it stopped sooner. That is the whole delta, worth about thirty seconds of a reader's attention. A voice guide is a filter for AI idioms. It is not a transfer function for your voice, and mine never was.

## The eight rules I kept

Eight rules, one list, three questions, down from twenty-odd. The paragraph cap went, because it was unenforceable next to the length target and the rhythm rule — three rules arguing about the same sentence. The self-specificity language went, because it bought the invented opening. Rule 6 now permits the em dash, because the old file had talked me out of punctuation I use in every post I like.

## The guide I kept, in full

Five spine rules, three voice rules, a short never list, three questions. This is the file itself, verbatim:

```text
1. Open on the concrete thing. The first sentence names the tool, number,
   file, or result. No framing, no backstory, no "in today's…".
2. One idea per section. If a later passage repeats an earlier beat, cut
   the later one.
3. Receipt, then verdict. Name the artifact or number, then one line on
   what it means. A stat never ends a paragraph.
4. Operator-active first person. "I ran it, it did X." Not "it returns /
   it packages."
5. Stop when the lesson is done. No recap, no FAQ, no motivational close.
6. No AI idioms. No "not X but Y" / "it's not just X, it's Y", no forced
   triads, no em-dash pileups. An em dash only when it replaces a comma or
   colon and makes the sentence clearer; never as a rhythm tic.
7. One owned opinion, stated plainly. No both-sides mush. One inline
   caveat max, only where a claim needs it.
8. Let sentence length follow the thought. Short punch, then a longer
   explanation. Don't perform burstiness, and don't use rhythm as a
   substitute for a point.

Never — words: leverage · utilize · delve · seamless · robust · holistic ·
transformative · game-changer · revolutionize · unlock · "in today's…" ·
"it's important to note" · "at the end of the day" · "dive in" ·
"in conclusion".

Never — moves: "not X but Y" / "it's not just X, it's Y" · forced triads ·
em-dash pileups · rhetorical-question filler · recap conclusions.

Check: does the first paragraph name the concrete thing? Does every claim
have a receipt or an owned opinion? Would I say this out loud to a peer?
```

## The kit

The test is the useful part, so it is in a small kit: a blank guide template, one Reddit post, one prompt that runs the three ways, and the worked example above. Fill the template with the rules you use today and it writes the same essay three ways for you to read side by side — the prompt goes in [a file the agent reads before it writes](/blog/route-the-file-before-you-write-it/), which is the only reason it gets followed at all. If your voice guide can't beat the no-guide version, its rules haven't earned their place.

My guide is not in it — a finished guide is a personal artifact, and someone else's tells you nothing about yours. Mine is above; the failed one is below.

The kit is here: https://gist.github.com/kenmazaika/c74400587ea6579ab8f20c41e5927394

## The guide that failed

Twenty-odd rules, and nobody including me was reading all of them: guidance that stopped being reviewed, and quietly turned into ambient truth — [the same failure I hit when I gave my agent less memory](/blog/i-gave-openclaw-less-memory/). The whole file is in its own gist: https://gist.github.com/kenmazaika/f6c1e5c5f351668fe7d54b9bad692aea

It is not bad on its face, which is the point. Read *every load-bearing claim carries a number, a file, or a command* next to the line the model invented in my opening. That plus *the verdict is the first sentence* is a machine for producing "On October 19, I wrote down one rule." Nothing in the file forbids inventing a memory, and nothing in it outranks the demand for a concrete first sentence.

## What the control is for

I am not arguing against voice guides. The no-guide version here is doing good work, and every rule has to justify itself against it. A guide that can't beat it is a tax you pay in the currency you can't get back: your own cadence. The spine is still the lever.
