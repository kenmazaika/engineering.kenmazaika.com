---
title: "Who Still Understands the System?"
description: 'If AI does more of the building, does anyone still understand the system well enough to run it?'
ogCategory: 'Industry Pulse · Engineering Leadership'
pubDate: 'Aug 23, 2026'
related:
  - title: "Tests Pass. That's No Longer Enough."
    url: '/blog/tests-pass-thats-no-longer-enough/'
  - title: 'Engineering’s New Argument: Who Builds, Who Reviews, and Who Gets Left Behind?'
    url: '/blog/engineerings-new-argument-who-builds-who-reviews/'
---

This week: engineering managers are being told to submit PRs again so they stay sharp. Enterprise AI adoption is growing faster outside engineering than inside it — legal's weekly active users grew 108x between February and June. Teams are debating whether a paid two-hour mini-project still tells you anything about a candidate. And teams that moved faster are seeing more incidents. Four stories, one question underneath: if AI does more of the building, does anyone still understand the system well enough to run it?

## Engineering managers told to code again

On r/ExperiencedDevs, a manager relayed a firm mandate from upper management: EMs need to be submitting PRs regularly to stay sharp and lead AI adoption by example. The thread splits the way these usually do. One side says the manager has to stay technically relevant and show the team it's possible — "If we're asking teams to use AI, we need to show we can too." The other side says it dilutes the job — "My job is to remove blockers, not become another IC writing PRs. Where does this end?" Nobody's wrong, and both sides are pointing at the same thing: technical competence is being redefined around tool fluency, and nobody's decided whether that's the right bar.

## AI is spreading fastest outside engineering

Enterprise Codex usage grew 108x in legal between February and June this year — far faster than in engineering teams. The optimistic read is that AI is finally reaching knowledge work beyond software. "Legal teams can now process contracts in hours instead of weeks." The skeptical read is that the people using it don't have the same instincts for what a confident wrong answer looks like. "When non-technical teams use AI without proper guardrails, you get confident but incorrect outputs that can have real business consequences." For a manager, this is a governance problem with no clean answer: usage is exploding in directions nobody planned for, and the standards haven't caught up.

## What a take-home test measures now

There's a live argument about whether a paid two-hour mini-project is a fair screen for junior and mid candidates. The anxiety is real: portfolios look strong on paper, but after hire, teams find candidates who struggle to debug, explain architectural choices, or write working logic without an AI assist. One side says a practical test still sorts it out — "You can't fake problem-solving under time pressure." The other says the take-home has become an AI test, not a developer test. Either way, the validation problem is the same: when AI can produce polished output, the interview has to find out whether the person can operate on the output, not just generate it.

## Faster, with more incidents

Cortex's data shows teams are shipping roughly 20% faster and seeing about 23.5% more incidents. PRs per author are up, deployment frequency is up. Change failure rates are up around 30%. Only about 45% of organizations have a formal AI usage policy. None of that is a shock to anyone who's run a team through this. The question is who's accountable when output and failure both rise — and the answer, so far, is the same people who were accountable before, with less of the context they used to have.

My read: these stories aren't really about adoption. They're about what happens to understanding when the building gets cheaper. The EM being told to code again is being asked to prove they can still operate the system their team is responsible for. The legal team using AI at 108x has to be able to tell a good clause from a confident wrong one. The hiring manager has to figure out whether a candidate can run the software, not just produce it. And the team shipping faster with more incidents has to diagnose whether the failure is in the AI's logic or in their own oversight — which you can only do if you understand the system.

The model that wrote the code isn't on call. It won't give the explanation to a director about why the deployment fell over, or the moment someone has to tell the legal team the AI-reviewed contract missed a clause. The more work a team ships without understanding it, the more systems it's responsible for that it can't actually run. The review bottleneck has quietly become an understanding bottleneck — and understanding is the part AI hasn't gotten cheaper.
