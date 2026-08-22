---
title: 'Hermes Workflow: I thought Kanban was for me to manage'
description: 'A two-word instruction that hands the orchestration middle to Hermes: three distinct profiles make, critique, and verify the work while I keep the kickoff and the final judgment.'
socialTitle: 'I Thought Kanban Was for Me to Manage'
ogCategory: 'Field Note · Hermes Workflows'
pubDate: 'Aug 10, 2026'
showPopup: true
---

I used to think Kanban was a tool that helped me manage Hermes. I pictured myself watching the board, routing work to specialists, and coordinating the handoffs. Honestly, that did not seem especially valuable. It still made me the project manager for a group of agents.

I did not see much value in merely becoming the project manager for agents. I assumed I needed to stay involved in each handoff because that was where I added value. If I was not routing the work, what was I contributing?

I also did not see the point of using more than one agent profile. If one model did not work well, I could select another myself. Having profiles switch models automatically felt like tuning a problem I did not have.

I had the relationship backward. Kanban gives my orchestrator durable infrastructure to manage its subworkers and keep the workflow moving. I start it, then I go do something else. My part is the kickoff and the final judgment. The middle is invisible unless I choose to inspect it.

I was wrong about the profiles too. A critic gets the requirements and the artifact, but not the maker's running context. That fresh review catches assumptions the maker may no longer see. The maker incorporates the feedback, and the quality bar goes up considerably. Kanban also lets larger one-off work expand across turns naturally, without me having to call that out or keep restarting the work.

I built a skill called `waffle-it` that does exactly this. It is the shorthand I use when I want the orchestrator to own the route instead of handing the coordination work back to me.

For a new request, I can say:

```text
Waffle it.
```

If I want another version of something, I say:

```text
Make a new version. Waffle it.
```

In practice, I add `Waffle it.` to the end of a prompt, and the quality of the output improves drastically for me. The request goes through the orchestrator, and three distinct profiles handle the work: a maker creates it, a critic reviews it, and a verifier checks the result.

## The skill

This is the current public-safe skill that defines how the orchestrator handles that middle; readers can copy it as `SKILL.md`. For parity checks, I normalize one optional final newline on both the embedded and standalone copies.

```markdown
---
name: waffle-it
description: Trigger whenever the user says "waffle it," "waffle this," or asks to waffle a task. Compile intent—not merely literal instructions—into the smallest fit-for-purpose Kanban workflow, generate role-specific prompts, execute and adapt the graph, independently verify where warranted, and stop at the user's external-action gate.
version: 1.3.0
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [kanban, orchestration, intent-compiler, adaptive-workflow, independent-review]
    related_skills: [kanban]
---

# Waffle It — public skill

`Waffle it` is shorthand for: **recover what I am actually trying to accomplish, design and run the right Kanban workflow, verify the real result, and stop before external action**.

This is an intent-to-workflow compiler, not a card generator. The user supplies intent and final judgment. The orchestrator recovers the outcome, decides whether diagnosis is warranted, chooses the smallest useful pattern, generates role-specific prompts, executes and adapts the graph, and verifies the result.

Load and follow a local `kanban` skill when available.

## Invocation

Trigger on phrases such as `waffle it`, `waffle this`, `make a new version and waffle it`, and `waffle the draft`.

Recover context from the active conversation and accessible sources before asking questions. Ask only when no target can be recovered or missing information materially changes the outcome, safety boundary, or irreversible action. Do not ask the user to design cards.

## Compile before decomposing

Internally produce an outcome contract:

- intended outcome;
- concrete deliverable or system state;
- observable success criteria;
- authoritative context;
- constraints and material to preserve;
- assumptions;
- whether the request states an outcome, a useful implementation, or a possibly premature solution;
- external-action boundary.

Keep this ephemeral for simple tasks. Persist it as a project-local brief for complex, multi-source, high-consequence, or long-running work.

## Conditional diagnosis

Explicitly choose `run` or `skip`.

Run diagnosis when the request names a symptom, assumes an unverified cause, repeats a failed approach, hides a strategic decision, has several plausible causes, is difficult to reverse, or describes a subjective defect despite technical competence.

Skip diagnosis when the task is bounded and objective, the mechanism and target are known, success is easy to test, and diagnosis would only restate the request.

A diagnosis card is review-only: identify the primary cause, alternatives, evidence, material to preserve, and smallest effective correction. Do not draft or edit there. Make the builder consume the diagnosis.

## Select proportionate complexity

Choose complexity from uncertainty and consequence, not message length or card count:

- low uncertainty + low consequence: direct execution → verification;
- high uncertainty + low consequence: diagnosis/research → build → verification;
- low uncertainty + high consequence: build → independent verification → user gate;
- high uncertainty + high consequence: diagnosis → alternatives → build → critic → verification → user gate.

Compose patterns such as Direct + Verify, Diagnose + Fix, Reviewed Artifact, Versioned Finishing Pass, Research Synthesis, Decision Memo, Visual Loop, Code/TDD, Migration/External Side Effect, Recovery, and Verify–Repair–Reverify. Add only stages that materially protect quality or risk.

## Generate role-specific prompts

There is rarely one ideal prompt. Compile the common outcome into distinct prompts:

- **Builder:** outcome, deliverable, inputs, constraints, preservation, acceptance criteria, prohibited actions.
- **Critic:** independent failure modes and facts to verify; review-only; do not inherit builder reasoning as truth.
- **Verifier:** exact commands, checks, expected conditions, actual output path, strict pass/fail evidence.
- **Reviser:** outcome, candidate, valid findings, acceptance criteria, authority order, preservation rules.

Every card states role, goal, intended outcome, authoritative inputs, output/handoff, acceptance criteria, assumptions, preservation constraints, edit scope, verification, prohibited side effects, assignee, and dependencies.

## Independent judgment

Independent review is required when consequence, subjectivity, evidence risk, specialization, or creator assumptions warrant it. It is not mandatory ceremony for small mechanical tasks.

When roles are separated:

- maker creates;
- critic reviews without silently editing;
- verifier runs objective checks;
- reviser applies valid findings;
- orchestrator owns the outcome and rejects conflicting advice.

When profile-level independence is part of the quality mechanism and the available fleet permits it, assign maker, critic, and verifier to three distinct profiles. The reviser may return to the maker profile. Do not claim three-profile separation when the critic and verifier were handled by the same profile.

Authority order: latest explicit user direction; verified facts/safety; accepted requirements; evidence-backed critic findings; maker preference.

## Adaptive verification

Do not pre-create speculative loops. A failed required build, test, render, command, or route check remains a failure even if the defect predates the artifact, stale output exists, or a temporary workaround produced output. Report artifact correctness and pipeline correctness separately; do not label the overall result `PASS` while a required check is failed.

If verification fails, append a focused repair card and a fresh verifier. Preserve acceptance criteria unless evidence proves them wrong. Cap automatic repair attempts at two for the same failure class; persistent failure triggers reframing or user input.

## Versioning

When the user requests V5, reserve V5 for the reviewed output. Use labeled candidate and critique artifacts, preserve earlier versions byte-for-byte, and verify lineage/hashes where appropriate. Never critique V5 and surprise the user with V6.

## Runtime ownership

The orchestrator creates and runs the graph, monitors heartbeats/logs, intervenes in over-expanding research, recompiles remaining work when evidence invalidates a central assumption, reads actual outputs, and performs parent-level verification. Do not stop at a plan or trust worker self-report without readback.

## Human gate

Waffling authorizes internal planning and execution, not publishing, deploying, merging, emailing, posting, purchasing, submitting, deleting approved artifacts, overwriting prior versions, or other consequential external actions unless specifically authorized. Prepare up to the gate, then ask. Verify the live destination after authorized execution.

## Completion report

Report the interpreted outcome, diagnosis decision, pattern and graph that actually ran, final artifact or system state, material independent findings, objective evidence, adaptive repair/recompilation, preservation of prior versions, and confirmation that no unauthorized external action occurred.
```

I can still inspect or intervene, but I do not operate the middle. When the work returns, I accept it, request another pass, or reject it.
