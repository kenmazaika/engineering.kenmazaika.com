---
title: 'Engineering Management Pulse — June 2026'
description: 'What people in the industry are actually talking about this month.'
ogCategory: 'Industry Pulse · Engineering Leadership'
pubDate: 'Jun 21, 2026'
---

## The News

**The Harvard study landed.** A study tracking 62 million workers found companies that adopt generative AI cut junior developer hiring by 9-10% within six quarters. Senior roles stayed flat. [The thread](https://www.reddit.com/r/ExperiencedDevs/comments/1rnkv2t/the_ai_coding_productivity_data_is_in_and_its_not/) is full of people arguing about whether this is a temporary correction or a new baseline. The bottom rung is getting thinner.

---

**"AI is working great for my team and y'all are making me feel crazy."** 1,000 upvotes, 815 comments. An EM said his team adopted Claude Code and it's working. The comments are a war. The pattern that survives: teams that treat agents as *junior devs whose output you review* succeed. Teams that treat them as autonomous hires don't. [Thread](https://www.reddit.com/r/ExperiencedDevs/comments/1qq8y8u/ai_is_working_great_for_my_team_and_yall_are/)

---

**Google laid off Engineering Education.** [Gergely Orosz confirmed](https://x.com/GergelyOrosz/status/2062861559009820976) Google axed their entire engineering education team. The industry is quietly shifting the cost of growing juniors onto individual teams.

---

**Thiago Ghisi posted the 6 Staff+ Engineer Archetypes at Facebook.** Generalist, Specialist, Coding Machine, Tech Lead, Fixer, Product Hybrid. Worth knowing which ones you have and which ones you're missing. [Thread](https://x.com/thiagoghisi)

---

## One Thing Worth Trying This Week

**Swap one code review for a debugging session.** Pick a ticket that involves a production issue or a tricky bug. Instead of reviewing the fix as a PR, sit with the engineer and ask them to walk you through how they found it. No prep. Just watch how they think. You'll learn more about their actual gaps in 20 minutes than you will from a month of PRs — especially now that AI writes clean first drafts.

---

## Deep Dive: How Do You Evaluate Engineers When Everyone Uses AI?

This is the question every EM I know is quietly worried about and nobody has a good answer for yet.

[The thread](https://www.reddit.com/r/ExperiencedDevs/comments/1pn39gb/how_do_you_evaluate_engineers_when_everyones/) puts it plainly: juniors pump their intent through AI and get back senior-looking code. Their PRs are clean. The patterns are right. But ask them why they chose a specific approach or what happens when an edge case fires, and they can't answer. The AI wrote it, not them.

### What's broken

- **PR review as evaluation** — the code is clean, but you can't tell who wrote it
- **Take-home assignments** — AI does them in 30 seconds
- **"Explain your design decisions" prompts** — the AI writes the explanation too
- **LeetCode-style interviews** — AI solves them instantly

### What still works (from the thread and comments)

**Synchronous gap-probing.** The only signal that holds up is a live conversation where you ask "what would happen if X changed?" and watch them think. AI can generate code. It cannot reason about trade-offs under pressure in real time.

**Debugging in an unfamiliar codebase.** Give someone a system they've never seen, a real bug, and an hour. AI can write tests and suggest fixes. But navigating unknown code to find a root cause still separates people who ship from people who prompt.

**The "no laptops" whiteboard.** One EM in the thread does weekly 30-minute sessions with his team — just a marker and a problem. No code output. He says it's the only signal he trusts anymore. Not because whiteboarding is a good skill, but because it's the one format AI can't fake.

### The hiring angle (from the Harvard study thread)

If junior hiring is down 10%, and the juniors you do hire produce AI-assisted output, your existing evaluation pipeline is broken whether you know it or not. The feedback loop is: you hire someone, they look competent for 3 months, then they hit a real problem they can't solve and you're 90 days in.

The one thing every commenter agreed on: interviews need a synchronous reasoning component. Not more LeetCode. Not a take-home. A conversation where you probe for understanding and the candidate has to defend their thinking in real time. That's the only signal left.

---

*Sources: [r/ExperiencedDevs](https://reddit.com/r/ExperiencedDevs), [r/EngineeringManagers](https://reddit.com/r/EngineeringManagers), [@GergelyOrosz](https://x.com/GergelyOrosz), [@thiagoghisi](https://x.com/thiagoghisi)*
