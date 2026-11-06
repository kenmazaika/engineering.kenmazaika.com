---
title: "How I Run Agent Loops with OpenClaw and Obsidian"
description: "Twelve scheduled agent loops, one OpenClaw runtime, one Obsidian vault: the file conventions that keep state between runs, hold approvals, and make the next loop cheap to add."
seoTitle: "Agent Loops in OpenClaw: 12 Cron Jobs, One System"
socialTitle: "Twelve loops, one system to operate"
ogCategory: 'Field Note · Agent Architecture'
pubDate: 'Nov 4, 2026'
layoutVariant: harness
heroImage: ../../assets/headers/how-i-run-agent-loops-openclaw-obsidian-masthead.jpg
related:
  - title: 'Set Up an Inbox System in Your Obsidian Vault'
    url: '/blog/obsidian-inbox-system/'
  - title: 'Connect Obsidian on Your Phone to Your OpenClaw or Hermes Agent'
    url: '/blog/obsidian-vault-on-your-phone/'
  - title: 'Agent Hooks: Named Triggers for Durable Agent Work'
    url: '/blog/agent-hooks/'
  - title: 'More Context Makes Your Agent Dumber. The Fix Is a File Handoff.'
    url: '/blog/more-context-makes-your-agent-dumber/'
faq:
  - question: "What is an agent loop?"
    answer: "A scheduled run that does a piece of work, records what it did, and leaves the result where you can find and approve it — as opposed to a chat that waits for you to start it."
  - question: "How do you schedule an AI agent to run on a schedule?"
    answer: "A cron entry starts an isolated OpenClaw session with a short run prompt. The prompt names the loop's contract and parameter files; the schedule, model, timeout, and delivery target live on the job itself."
  - question: "Where should an agent keep state between runs?"
    answer: "In plain files in the vault: a contract, parameters, a ledger, staged run files, and one record per proposal. The session ends and its context is gone, so anything that has to survive lives on disk."
  - question: "Do you need a different system for each recurring task?"
    answer: "No. Twelve loops share one runtime, one vault layout, one card format, and one approval path. Each loop adds only the machinery its job needs."
---

# How I Run Agent Loops with OpenClaw and Obsidian

The most useful thing I do with an agent is not a conversation. It is a set of loops: scheduled runs that do a
piece of work, write down what they did, and leave the results where I will find them. Not a chat that keeps
going — a run with somewhere to put what it learned.

A chat waits for me to start it. A loop runs at 04:00, and by the time I sit down there is a card in my inbox
with a recommendation and the evidence behind it. Research accumulates without my asking. A failing job arrives
already diagnosed.

I have twelve. Getting to twelve is where the engineering is, because every new loop asks the same
infrastructure questions, and answering them from scratch is what turns a collection of automations into a
maintenance problem. OpenClaw runs them; an Obsidian vault holds the state; a set of file conventions keeps it
one system instead of twelve.

## What this builds on

Three pieces already exist, and this post assumes them.

- **The inbox.** [Set up an inbox system in your Obsidian vault](/blog/obsidian-inbox-system/). Every loop writes
  its result as a card into the same four folders, so I never redesign how work is delivered or approved.
- **The phone.** [Connect Obsidian on your phone to your OpenClaw or Hermes agent](/blog/obsidian-vault-on-your-phone/).
  The vault syncs to my phone, which is where I read, preview, and decide on most of these cards.
- **The hooks.** [Agent hooks: named triggers for durable agent work](/blog/agent-hooks/). Hooks keep the vault
  and the agent on the same page, so a run starts from files instead of reconstructed context.

That is the point of building on them. Each loop adds work, not plumbing.

## The seven questions every agent loop asks

A single loop is straightforward: a cron entry fires, a session starts, a prompt runs, something gets written.

The second one reveals the pattern. It needs a place to keep state, a way to know what happened last time, a
rule about what it may do without me, somewhere to put its output, and a way to inspect it when it goes wrong.
So does the third.

- **Instructions:** what is the job?
- **Scheduling:** when does it run?
- **State:** what survives between runs?
- **Execution:** one step or several, and what does each leave behind?
- **Outputs:** where does the result go, in what shape?
- **Approval:** what may it do alone?
- **Monitoring:** how do I know it failed, and how do I change it?

Every loop answers all seven. The system's job is that the answers already exist.

## Two halves: the runtime and the state store

OpenClaw supplies the runtime. A cron entry starts an isolated session, hands it a prompt, and gives it model
access, skills, and shell. Each job carries its own model, timeout, and delivery target, so behaviour is set per
loop rather than inherited from a default.

The vault supplies everything that outlives the session: the loop's folder, its procedure, its history, and its
output surface. Plain markdown, versioned with git, synced to my phone. The shelves themselves are [the vault
walkthrough](/blog/obsidian-vault-structure/); this post is about what runs inside them.

```
OpenClaw cron ── isolated session ──▶ prompt → LOOP.md + prompt.md → skill → model
                                            │ reads and writes
                                            ▼
                            Obsidian vault (git, synced to phone)
                            06 - LOOPS/<loop>/   contract · parameters · ledger · runs
                            00 - INBOX/          cards with checkboxes
                                            ▼
                                  me: approve / reject / change
```

The runtime is disposable; the session ends and its context is gone. The vault is the durable half — the same
argument as [the file-handoff post](/blog/more-context-makes-your-agent-dumber/), applied to scheduled work. The
conventions are what let a run with no memory behave like the fiftieth run of the same job.

## How a loop is defined

Four pieces, separate on purpose.

**The cron entry** holds the schedule and points at the contract:

```
Blog reference discovery — Tier 1 GitHub (06.12), daily 4am
cron: 0 4 * * * America/Los_Angeles · isolated session · model gpt-5.6-sol
```

**The run prompt** is short, because it carries no policy. It names the files and the boundaries: run only Tier
1, follow `LOOP.md` and `prompt.md`, read the ledger and pending handoffs first, never take an external action.

**The contract** (`LOOP.md`) holds what does not change: the job, the surfaces it may touch, what disqualifies a
candidate, what a good run looks like. One line carries most of its personality:

```
Reject weak, stale, promotional, or policy-ambiguous candidates in the run
receipt. `0` cards is a successful run.
```

An empty run is allowed, which removes the pressure to invent a third candidate.

**The parameters** (`prompt.md`) hold the knobs: cadence, how many proposals, which tier, when to skip. Changing
what a loop looks for is a parameter change, not a procedure change.

**The procedure** lives in a skill when the work is reusable, one `SKILL.md` per procedure. When the work is one
step, the prompt carries it instead.

Policy, parameters, and procedure have different lifetimes, so they live in different files.

## What a run does

It starts by reading the vault, not the previous conversation: the contract, parameters, ledger, excluded list,
records, and pending handoffs. Every path is absolute, so there is no ambiguity about which vault it is looking
at.

Then it works in stages, each writing a file before the next one reads it:

```
runs/2026-11-03/
  01-discovery.md   what it searched, what it excluded, why
  02-evidence.md    the policy quotes and activity numbers behind each score
  03-verdict.md     the ranked, scored result
```

Step two sees what step one wrote, not its reasoning. When a recommendation is wrong I open the verdict; if the
mistake is upstream, the evidence. A run that goes sideways has a location instead of a transcript.

The evidence file is where the scoring earns its keep:

```
| Accepts PRs | CONTRIBUTING.md: "edit only data/projects.yaml", run three scripts |
| No duplicate | GitHub issue search repo:Picrew/awesome-agent-harness kenmazaika → 0 |
```

Every score points at a line like that. A component with no line disqualifies the candidate instead of being
estimated.

The output has two shapes. A **record** holds the state: target, article, proposal key, policy quotes, scores,
the exact text it proposes to submit. A **card** holds the decision, and lands in `00.01 - handoffs`:

```
Reference opportunity — measured agent cost controls
Target: Picrew/awesome-agent-harness (readings table)
Article: What Does It Cost to Run an OpenClaw Agent?
Score: 73 · evidence in runs/2026-11-03/02-evidence.md
[ ] Approve for queue   [ ] Reject   [ ] Something else
```

Approving marks the record and creates an unchecked ticket in `00.03 - tickets`. It does not open the pull
request. That is a separate instruction and a separate run; today's PR (#143) went out after I approved, not
during the loop.

## How the next run knows what happened

Before searching, the run reads the ledger — one append-only row per opportunity:

```
| 2026-11-03 | brd-259b49c25806860a | Picrew/awesome-agent-harness |
  What Does It Cost to Run an OpenClaw Agent? | submitted · PR #143 |
```

The row exists because the session does not. Without it the loop can reconstruct what it proposed but not what
happened, and the difference between "we tried that" and "that worked" disappears.

There is also a fingerprint, `"$target|$article|$proposal"`, which catches a rewritten pitch for the same
contribution. It does not catch the same repository with a different article, because the article is part of the
key. What limits repeats is the ledger, the record review, and me: when I want a target closed for good, I
invalidate its record and the next run reads that.

## What the framework provides, and what this loop added

The foundation is the folder, the contract, the parameters, the ledger, the staged runs, the record and card
formats, and the approval boundary. Every loop can rely on those.

The link finder added its own specialization: two tiers on separate schedules, three stages, a weighted rubric
with an evidence requirement, an excluded-articles list, a dedupe fingerprint, and a backlog pause at ten pending
cards.

None of that is required by the framework. It is what this job needed.

## What gets reused when I build another loop

The link finder needs machinery because the work is searching, checking contribution rules, and tracking what was
already proposed. The cron-failure watcher doesn't: a script decides what escalated, the agent diagnoses it, and
one card comes out.

The difference is the job, not the setup. Both run on the same scheduler, write into the same vault, and land in
the same inbox, so the sweep that processes my decisions already works for both.

That's the payoff. A new recurring task still needs a workflow designed — what it should accomplish, how it
should work, what a good result looks like. What it doesn't need is another way to store results, collect
decisions, or hand them back to the agent.

Twelve loops, one system to operate.
