---
title: 'Engineering Management Pulse — June 2026'
description: 'A quick pulse check on what engineering managers and senior engineers were actually arguing about this week. Not a newsletter — more like notes from the hallway after everyone left the meeting.'
pubDate: 'Jun 28, 2026'
---

> A quick pulse check on what engineering managers and senior engineers were actually arguing about this week. Not a newsletter — more like notes from the hallway after everyone left the meeting.

---

## The News

**AI is turning into an apprenticeship problem, not just a tooling problem.** A highly active r/ExperiencedDevs thread asked whether juniors and new grads are showing "supercharged" confidence because LLMs let them produce plausible-looking work without building the mental models underneath. The thread got loud because it hit two nerves at once: seniors feeling like cleanup crew, and juniors being judged inside a system that now rewards output-shaped artifacts before judgment. [968 votes / 258 comments](https://www.reddit.com/r/ExperiencedDevs/comments/1ugaqo5/anyone_else_notice_supercharged_juniornew_grad/)

---

**The "AI writes it, seniors fix it" pattern is starting to feel like an org design smell.** Another r/ExperiencedDevs thread put it bluntly: "The AI burns the toast, I scrape it." The useful part wasn't "AI bad"; it was the split between teams using AI to speed up known work and teams using it to generate piles of code no one really owns. [333 votes / 193 comments](https://www.reddit.com/r/ExperiencedDevs/comments/1uh8uts/the_ai_burns_the_toast_i_scrape_it/)

---

**Productivity metrics are back, and engineers are already gaming them.** One senior engineer described management tracking individual PRs as a productivity signal, which led to predictable behavior: people splitting work oddly, competing for visible PR credit, and worrying more about being seen than being useful. The interesting contrast: an EM thread defended some GitHub metrics — PR cycle time, stale PRs, review load — when used to find team bottlenecks instead of grade individuals. [281 votes / 226 comments](https://www.reddit.com/r/ExperiencedDevs/comments/1ud3u6f/management_started_introducing_productivity/) and [40 votes / 32 comments](https://www.reddit.com/r/EngineeringManagers/comments/1ufwiv9/5_github_metrics_i_wish_id_tracked_as_an_em/)

---

**New EMs are getting asked to sell an AI operating model they don't fully believe in.** In r/EngineeringManagers, a new manager asked whether they should keep pushing back on a CTO who wants engineers to become more like product owners and consultants while AI handles much of the technical work. The comments split in a very EM-shaped way: understand the business bet, push once clearly, then either commit or leave — but don't become the permanent internal opposition party. [30 votes / 87 comments](https://www.reddit.com/r/EngineeringManagers/comments/1ufhh6t/new_engineering_manager_should_i_keep_pushing/)

---

**There's a quiet backlash against running software teams like sprint factories.** A post on the "negative split" effect argued that software companies are running the first half of the race too fast: too much pressure early, not enough capacity left when the real problems show up. It didn't clear the comment threshold, but it paired well with the week's larger theme: speed is being confused with progress, especially when AI or metrics make speed easier to display. [79 votes / 14 comments](https://www.reddit.com/r/EngineeringManagers/comments/1uh16lx/the_negative_split_software_engineering_effect/)

---

## One Thing Worth Trying This Week

Pick one active AI-assisted project and run a 30-minute "mental model check" with the engineer closest to it.

Ask three questions:

1. "What are the two most important assumptions in this design?"
2. "Where would this fail first in production?"
3. "If the AI-generated part had a subtle bug, where would you look first?"

Do not make it a quiz. Make it a debugging conversation. Your goal is to learn whether the team has ownership of the system, or just ownership of the prompt history.

---

## Deep Dive: AI Is Breaking the Old Apprenticeship Model

The strongest signal this week was not "AI makes bad code." That's too easy, and honestly too boring.

The real issue showing up across the threads is this: a lot of engineering organizations still assume skill grows through the old loop — struggle with the problem, build the thing, debug the thing, explain the thing, get corrected, repeat. AI cuts straight through that loop. Sometimes that's great. Sometimes it means the artifact arrives before the understanding does.

That's what made the r/ExperiencedDevs thread about "supercharged junior/new grad dunning-kruger behavior" land so hard. The complaint wasn't just that juniors are using AI. It was that some juniors can now produce confident-sounding designs, implementation plans, and code without having earned the judgment that normally comes from getting stuck. Seniors in the thread recognized the smell: proposals that look polished, use the right words, and still make no sense in the actual codebase.

Then the "AI burns the toast, I scrape it" thread filled in the next layer. If AI-assisted work creates more review, more cleanup, and more hidden rework for senior people, then the productivity gain is being booked in one place and paid for somewhere else. That is a management problem. If your dashboards count "features started" or "PRs opened" but not "senior hours spent making it safe," you will think the team got faster right up until the people with judgment burn out.

### Has AI made developers less collaborative?

Another thread asked whether AI is making developers less collaborative. The discussion was more nuanced than the headline: engineers are spending less time in shared context, using AI to finish quickly, and becoming less willing to share context. That is the part EMs should pay attention to. AI can make a team more capable, but it can also make knowledge hoarding easier to disguise as productivity.

The new-EM-versus-CTO thread showed the leadership trap. A CTO wants engineers to become product-owner-consultant hybrids who use AI to do most of the technical work. The EM's worry is reasonable: if juniors spend their early career managing AI output instead of learning engineering fundamentals, where do future senior engineers, architects, and tech leads come from?

The comments were pragmatic, maybe brutally so. Several people basically said: understand the CTO's business goal, push back clearly, then decide whether you can commit. That's fair advice for managing up. But it doesn't solve the underlying problem. "Disagree and commit" can keep the org aligned, but it does not magically create a training system for engineers whose day-to-day work no longer forces them to build deep technical instincts.

### So what's broken?

First, code review is being asked to do too much. It used to be a quality gate, a mentoring surface, and a shared context tool. Now it is also becoming an AI-output inspection station. That is too many jobs for one ritual.

Second, individual productivity metrics are pointed at the wrong layer. The PR-count thread was a perfect example. Once engineers know PRs are being counted per person, they will shape work around the count. That doesn't make them bad actors. It makes them humans inside a measurement system.

Third, many teams have not decided what "acceptable AI use" means at each level. A staff engineer using AI to explore a migration plan is not the same as a junior using it to produce code they cannot explain. The policy can't just be "use AI" or "don't use AI." The policy has to include ownership: if you ship it, you need to understand it well enough to debug it.

### What still works?

Small-batch review still works. Pairing still works. Asking engineers to explain tradeoffs still works. Design docs still work when they are short and argued over. Incident reviews still work when they trace how decisions were made, not just which line of code failed.

The GitHub metrics thread also had a useful counterpoint. Metrics are not automatically evil. PR cycle time, stale PRs, review load, and rework can help an EM spot friction the team has normalized. The line is whether the metric is used to ask, "Where is the system stuck?" or "Which person should we shame?"

What people are actually trying is more interesting than the hot takes. They're trying AI leads. They're trying review-load tracking. They're trying to separate team metrics from individual scoring. They're trying to coach juniors without banning the tools those juniors will obviously keep using. They're trying to protect senior engineers from becoming the human garbage collector for every AI-generated mess.

### The open question

Can engineering teams redesign apprenticeship fast enough, or are we about to create a generation of developers who can produce software-shaped output faster than they can reason about software?

---

### Sources

- [r/ExperiencedDevs: Anyone else notice supercharged junior/new grad dunning-kruger behavior lately?](https://www.reddit.com/r/ExperiencedDevs/comments/1ugaqo5/anyone_else_notice_supercharged_juniornew_grad/) — 968 votes / 258 comments
- [r/ExperiencedDevs: The AI burns the toast, I scrape it.](https://www.reddit.com/r/ExperiencedDevs/comments/1uh8uts/the_ai_burns_the_toast_i_scrape_it/) — 333 votes / 193 comments
- [r/ExperiencedDevs: Management started introducing "productivity" metrics that's rubbing me the wrong way](https://www.reddit.com/r/ExperiencedDevs/comments/1ud3u6f/management_started_introducing_productivity/) — 281 votes / 226 comments
- [r/ExperiencedDevs: Has AI made developers less collaborative in your team?](https://www.reddit.com/r/ExperiencedDevs/comments/1uecvi7/has_ai_made_developers_less_collaborative_in_your/) — 269 votes / 164 comments
- [r/ExperiencedDevs: How to manage the tradeoff between mental model and speed when building with AI?](https://www.reddit.com/r/ExperiencedDevs/comments/1uhjvtc/how_to_manage_the_tradeoff_between_mental_model/) — 76 votes / 97 comments
- [r/EngineeringManagers: New engineering manager. Should I keep pushing back on my CTO's AI vision?](https://www.reddit.com/r/EngineeringManagers/comments/1ufhh6t/new_engineering_manager_should_i_keep_pushing/) — 30 votes / 87 comments
- [r/EngineeringManagers: 5 GitHub metrics I wish I'd tracked as an EM earlier](https://www.reddit.com/r/EngineeringManagers/comments/1ufwiv9/5_github_metrics_i_wish_id_tracked_as_an_em/) — 40 votes / 32 comments
- [r/EngineeringManagers: The "Negative split" software engineering effect](https://www.reddit.com/r/EngineeringManagers/comments/1uh16lx/the_negative_split_software_engineering_effect/) — 79 votes / 14 comments
