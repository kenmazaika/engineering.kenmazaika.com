---
title: "I Gave OpenClaw Less Memory. It Got More Reliable."
description: "Semantic and keyword recall tied at the useful ranks in my test. The local index took 34 times longer. I kept the files and removed the invisible machinery."
seoTitle: "How I Tuned OpenClaw Memory Without Embeddings"
socialTitle: "My OpenClaw Memory Works Better as Pointers, Not a Second Brain"
pubDate: 'Sep 15, 2026'
ogCategory: 'Field Note · Agent Memory'
hideDefaultNewsletter: true
layoutVariant: harness
related:
  - title: "My Agent Kept Writing the Same Post. The Memory Was the Problem."
    url: "/blog/my-agent-kept-writing-the-same-post/"
  - title: "Route the File Before You Write It."
    url: "/blog/route-the-file-before-you-write-it/"
  - title: "Hermes vs OpenClaw: Why I Moved My Main Workflow (Test Data Included)."
    url: "/blog/hermes-vs-openclaw/"
---

On September 14, I turned off OpenClaw's memory search completely. Six minutes later, I turned part of it back on.

The part I kept was boring: keyword search across a folder of Markdown files. The part I left off was the sophisticated one: local embeddings, semantic retrieval, and the background work required to keep the vector index current.

My agent still knows which projects are active. It can still find decisions, receipts, and unfinished work. The difference is that search helps it locate those files; search no longer pretends to be the source of truth.

That is the setup I wanted all along. **Memory is a pointer system. The files decide what is true.**

## I started with the ambitious version

Two days earlier, I had asked OpenClaw to design a proper memory architecture. The recommendation was good. It proposed five layers:

1. a tiny always-loaded `MEMORY.md`;
2. a project registry and one state file per project;
3. an authoritative vault of sources, decisions, and work;
4. an Obsidian-compatible compiled wiki;
5. a separate, gated area for opinionated guidance such as voice and strategy.

The distinction between authoritative state and guidance was the best part. “This post is halfway done” is a state claim. “This is the best way to distribute posts” is advice. The first is safe to retrieve by default. The second can go stale and quietly steer future work.

The proposal also recommended semantic recall over the vault and old sessions. That sounded like the obvious upgrade. If keyword search can find the exact phrase, embeddings should find the idea even when I describe it differently.

So I tested it.

## The embeddings worked. That was not the problem.

I ran the same 15 natural-language queries against two embedding providers over the same 170-file corpus. OpenAI's `text-embedding-3-small` and a local `embeddinggemma-300m` model both reached 0.73 recall at rank three and 0.80 at rank five. OpenAI won rank one by one query: 0.67 versus 0.60.

For the searches I cared about, local quality was close enough.

The cost was not.

OpenAI indexed the 1,965 chunks in 68 seconds. The local model took 2,290 seconds—38 minutes—on my six-core i7-8700T with no GPU. That is roughly 34 times longer for the initial index. It also added a local model process, vector state, provider health, and synchronization behavior to a system I expected to answer ordinary Discord messages.

During the rollout, the system developed enough latency and timeout friction that I no longer trusted the experience. I cannot prove the embedding process caused every delayed turn; the same window includes ordinary model-provider timeouts. I can prove that local indexing was slow on this machine, and that removing it eliminated an entire class of background work I did not value enough to maintain.

The test did not say embeddings were bad. It said they were not solving my binding problem.

## I needed project continuity, not better similarity search

The problem that sent me into memory tuning was simple: I would open a new Discord thread and have to explain the project again. Work lived in several chats and several folders. I did not know what the agent knew, and it did not know which artifact represented the current state.

Semantic recall can retrieve a relevant fragment from an old conversation. It cannot decide whether that fragment is still authoritative.

I had already seen the dangerous version of that mistake. One compliment I gave Hermes about a code-review idea became a global preference, and fresh engineering posts kept converging on the same thesis. I wrote the full autopsy in [My Agent Kept Writing the Same Post](/blog/my-agent-kept-writing-the-same-post/). The lesson was not that memory should disappear. It was that an old observation should not quietly outrank a current decision.

The fix is a boring separation of jobs:

- **Search discovers.** It points the agent toward likely files.
- **Project state decides.** One explicit file says what is done, what remains, and which decisions must survive the next session.
- **Guidance advises.** Voice rules, strategy, and recommendations stay scoped and reviewable instead of becoming ambient truth.

Once I made that split, the semantic layer became optional.

## What survived in my OpenClaw setup

My current setup still has several layers, but each one has a narrow job.

`MEMORY.md` is small and always available. It holds durable context and pointers, not a history of everything that happened.

`BALLS.md` is a one-line-per-project registry: project, path, status, last touched, next action. Each project points to a QBall folder containing current state, decisions, lineage, and receipts. The mechanics are in [Route the File Before You Write It](/blog/route-the-file-before-you-write-it/); the important part here is that the folder, not a retrieved chat fragment, owns the answer to “what is left?”

The larger vault remains searchable and inspectable. The compiled wiki can synthesize it into Obsidian-friendly pages. Opinionated guidance lives separately and does not get promoted into always-on context without review.

OpenClaw's memory search is still enabled, but it is deliberately lexical. This is the relevant part of my configuration as of September 15, 2026:

```json
{
  "memorySearch": {
    "enabled": true,
    "provider": "none",
    "fallback": "none",
    "sources": ["memory"],
    "extraPaths": ["/home/matthew/.openclaw/workspace/claw-vault"],
    "sync": {
      "onSessionStart": false,
      "watch": false
    }
  }
}
```

In current OpenClaw, [`provider: "none"` means intentional FTS-only recall](https://docs.openclaw.ai/concepts/memory-search): filenames and exact terms work; embeddings and semantic vectors do not. `extraPaths` adds my vault. Disabling session-start sync and file watching keeps index maintenance out of the path where I was noticing friction. Full session transcripts are not part of the search source.

The status command makes the tradeoff visible instead of magical:

```text
Provider: none
Sources: memory
Extra paths: ~/.openclaw/workspace/claw-vault
FTS: ready
Vector store: disabled
Semantic vectors: disabled
```

That is less capable than semantic search. If I ask for “the thing about the bill,” keyword search may miss a note titled `xai-cost-rules.md`. If I ask for “xAI bill,” it finds it immediately. I accept that limitation because project names, filenames, configuration keys, error messages, and declared decisions are usually exact strings.

## Start with the part you can inspect

If I were setting up OpenClaw memory again, I would add it in this order:

1. **Create one small `MEMORY.md`.** Keep durable facts and pointers there. Do not turn it into a transcript archive.
2. **Give each active project one state file.** Record the objective, current status, next action, open decisions, and artifact paths.
3. **Create one project registry.** A new session should have a deterministic place to start before it searches anything.
4. **Enable keyword recall over those files.** Use it for discovery, never as the authority on current state.
5. **Log the misses.** When keyword recall fails, write down the real query and the file it should have found.
6. **Add embeddings only when the misses form a consequential pattern.** A vector index should solve a measured retrieval problem, not decorate the architecture.

There are setups where semantic memory is worth it. A large corpus full of paraphrases is different from a small project registry full of exact names. A machine with a GPU is different from my used OptiPlex. A team knowledge system is different from one person's private working files.

My mistake was treating semantic recall as the foundation. It is an escalation path.

Start with a file that says what is true now. Give the agent a reliable way to find it. Make richer memory earn its place.

