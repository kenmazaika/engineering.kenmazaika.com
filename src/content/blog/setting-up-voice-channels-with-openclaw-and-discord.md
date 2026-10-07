---
title: "Setting Up Voice Channels With OpenClaw and Discord"
description: "I wired voice onto my agent, said hello, and waited about eight seconds for the reply. It wasn't the model — it was the turn-taking config: a two-second silence grace, and a full-agent round-trip on every turn. Here's the exact OpenClaw + Discord config, the feel before and after, and the per-minute bill."
seoTitle: "How to Set Up OpenClaw + Discord Voice (and Fix the Awkward Pause)"
socialTitle: "Setting up OpenClaw + Discord voice channels"
pubDate: 'Oct 6, 2026'
updatedDate: 'Oct 6, 2026'
ogCategory: 'Field Note · AI & Engineering'
layoutVariant: harness
heroImage: ../../assets/headers/setting-up-voice-channels-with-openclaw-and-discord-masthead.png
related:
  - title: 'My Default Model Stack for AI Agent Work'
    url: '/blog/my-default-model-stack-for-ai-agent-work/'
  - title: 'What is an AI Work Harness'
    url: '/blog/what-is-an-ai-harness/'
  - title: 'Which AI Model Should You Run for Agent Work? 11 Models, 5 Real Tasks, Receipts'
    url: '/blog/best-ai-model-for-agent-work/'
  - title: 'How Much Does It Cost to Run a Capable AI Agent Each Month? About $50'
    url: '/blog/cost-to-run-an-agent/'
faq:
  - question: "Why is my AI voice agent slow to respond?"
    answer: "Usually two things, and neither is the model. A fixed wait for silence (OpenClaw's captureSilenceGraceMs defaulted to 2000ms) plus a full-agent round-trip on every turn before the voice layer speaks. Cut the silence grace and switch consultPolicy to auto and most of the lag disappears."
  - question: "How do I make OpenClaw voice on Discord feel conversational?"
    answer: "Turn the turn-taking knobs under channels.discord.voice: set captureSilenceGraceMs to 800, set realtime.consultPolicy to auto, pin realtime.bargeIn true, set minBargeInAudioEndMs to 0, and drop 'Never open with filler' so the voice layer can use a brief backchannel while it consults."
  - question: "What does OpenClaw voice cost to run?"
    answer: "You pay while you talk, on the order of a few cents a minute on the realtime model. One session over a drive from home to the office cost me about $3.25, most of it input — the base listening."
showPopup: true
---

I put voice on my agent, joined the channel, and said hello. About eight seconds later it answered. I thought the usual thing: this isn't ready for prime time.

It was ready. The pause was a config default.

Short version: it wasn't the model — it was the turn-taking config, and these are the settings that make it feel like talking to a person.

Here is the before and after, the settings that did it, and what it costs to talk to your agent like a person.

## The eight seconds were two things, and neither was the model

The first was a fixed wait for silence. OpenClaw's `captureSilenceGraceMs` defaulted to `2000` — it waited a full two seconds after I stopped talking before deciding I was done. People leave each other a few hundred milliseconds, not two thousand; a two-second gap reads as hesitation.

The second was hidden. The realtime model was consulting the **full agent** on every turn before it said a word. I'd say "hello," and behind the scenes the whole OpenClaw agent ran — tools, memory, the lot — and only then did voice speak. That round-trip is what made it feel like a bad phone line.

I would have gone and bought a faster model. The model was fine. This is the same lesson as [the latency post on my other blog](https://publish.kenmazaika.com/blog/your-voice-agent-is-slow-because-of-the-silence/) — the pause lives in the turn-taking, not the LLM. This post is the config that fixes it.

## The config that fixed it

It all lives under `channels.discord.voice` in `~/.openclaw/openclaw.json`. The before/after:

| Setting | Before (default) | After | Why |
|---|---|---|---|
| `captureSilenceGraceMs` | `2000` | `800` | Wait a beat, not two seconds |
| `realtime.consultPolicy` | `always` | `auto` | The model answers the conversation glue; consult the agent only for facts, tools, memory |
| `realtime.bargeIn` | (on) | `true` | Pinned — you can cut it off mid-sentence |
| `realtime.minBargeInAudioEndMs` | `250` | `0` | Interrupt with no 250ms tail gate |
| `realtime.instructions` | ends `…conversational. Never open with filler.` | ends `…conversational.` | Lets it use a brief backchannel ("one sec") while an agent consult runs |
| `model` (the brain behind voice) | `openai/gpt-5.6-terra` | `deepseek/deepseek-v4-flash` | A cheaper, faster brain behind the realtime front end |

The single biggest win was `consultPolicy: "auto"`. The realtime front end (`gpt-realtime-2.1`) is only the voice layer — turn-taking, barge-in, playback. The *brain* is your OpenClaw agent, reached through a tool the realtime model can call. On `always`, every turn round-tripped that agent before a word was spoken. On `auto`, the front end handles the glue and consults only when the turn needs something real.

The block, after:

```json
"channels": {
  "discord": {
    "voice": {
      "enabled": true,
      "mode": "agent-proxy",
      "captureSilenceGraceMs": 800,
      "realtime": {
        "provider": "openai",
        "model": "gpt-realtime-2.1",
        "speakerVoice": "cedar",
        "providers": {
          "openai": { "apiKey": "${OPENAI_API_KEY}" }
        },
        "instructions": "Always speak English unless the user is clearly speaking another language to you. Keep spoken replies short, natural, and conversational.",
        "consultPolicy": "auto",
        "bargeIn": true,
        "minBargeInAudioEndMs": 0
      },
      "model": "deepseek/deepseek-v4-flash"
    }
  }
}
```

(You'll need an API account to do this — OpenAI, or Grok if you want to see whether that side is cheaper.)

## What it feels like now

The realtime model answers first, then tells you what it actually called. Talking to it feels less like talking *to* my agent and more like talking to someone who has access to my agent — and it is very effective. Back-and-forth is what this is supreme at, and the awkward pause is gone.

## The bill

One session, over the drive from home to the office: about **$3.25**. Most of it was input — the base listening. You pay while you talk, on the order of thirty cents a minute on the realtime model. For a drive's worth of conversation, that's the price of a coffee.

## Still rough

- On Bluetooth, the reply audio cuts out in ways music doesn't. The connection feels a little flakier than it should.
- Long dictation and quick back-and-forth are different modes. Voice is supreme at the back-and-forth. For deep brain-dump dictation, I fall back to Wispr Flow; and I set up a "skinny mode" so the agent answers short and skimmable when I want to skim and reply fast.

The pause was the thing. Once it's gone, talking to your agent out loud stops feeling like a demo.
