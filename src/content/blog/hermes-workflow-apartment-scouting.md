---
title: 'Hermes Workflow: Using the Scouting Pattern for Apartment Hunting'
description: 'How I use a dedicated inbox, a scoring skill, and a daily Hermes job to turn apartment alerts into a short list worth reviewing.'
pubDate: 'Jul 18, 2026'
---

# Hermes Workflow: Using the Scouting Pattern for Apartment Hunting

Apartment hunting burns time in a predictable way. You scroll across several sites, reopen the same listings, and spend ten minutes on a place before noticing the bad commute, missing outdoor space, or outdated interior.

Saved searches help with discovery. They do not tell me which apartments are worth my attention.

That is the part I gave Hermes.

## The architecture

```text
Saved searches on rental sites
            ↓
Alerts arrive in my agent's inbox
            ↓
Himalaya reads the messages
            ↓
Hermes verifies and scores each listing
            ↓
A daily cron job sends me the short list
            ↓
I decide what deserves a tour
```

| Component | Job |
|---|---|
| Zillow and Trulia alerts | Find new inventory |
| Dedicated inbox | Give the agent a clean input stream |
| [Himalaya](https://github.com/pimalaya/himalaya) | Let Hermes read the alerts |
| Apartment-scout skill | Hold my filters, scoring, and output format |
| Maps and browser tools | Check commute, status, and photos |
| [Hermes cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) | Run it every morning |
| Me | Choose who to contact and what to tour |

The useful split is simple: listing sites collect, Hermes filters, I decide.

## Use alerts as the ingestion layer

I first tried scraping Zillow directly. CAPTCHAs and bot protection made it unreliable, and stale listings made broad web search noisy.

Saved-search alerts were the better interface. Zillow and Trulia already know when inventory changes. I let them send immediate alerts and let Hermes work from those emails.

Hermes still opens accessible listing pages and searches an exact address elsewhere when it needs to verify something. Scraping just is not responsible for discovery anymore.

## Give the agent its own inbox

The rental alerts go to a dedicated Gmail account that I use for agent-facing workflows.

It is not only for apartments. It is where I send things meant for Hermes rather than for me: automated alerts, reports, and other machine-readable inputs.

That creates a useful boundary. My personal inbox is full of human context and sensitive conversations. The agent inbox contains narrower, predictable work queues.

I use [Himalaya](https://github.com/pimalaya/himalaya) to connect that inbox to Hermes. I asked Hermes through the CLI to install the Himalaya and Maps skills, handle the routine setup, and stop when authentication needed me.

## Put the judgment in a skill

The inbox tells Hermes what is new. The [skill](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) tells it what I care about.

Mine includes:

- Target areas and commute anchor
- Budget and hard constraints
- Bedrooms, bathrooms, and property type
- Parking, laundry, pets, and outdoor space
- A weighted scoring rubric
- Rules for freshness and duplicate addresses
- The final report format
- A boundary against contacting anyone without approval

The rubric is what makes the workflow useful. Instead of requiring every apartment to be perfect, I score the tradeoffs:

| Factor | Weight |
|---|---:|
| Location and commute | 25 |
| Interior quality and brightness | 20 |
| Property type and layout | 15 |
| Price and value | 15 |
| Outdoor space | 10 |
| School fit | 10 |
| Hidden-concern risk | 5 |

Hard constraints are still hard constraints. A listing over the absolute budget ceiling or missing something we truly require can be rejected immediately.

Everything else contributes to the score. A great apartment can lose points for an older kitchen without disappearing from the results. A beautiful interior can still rank poorly if the commute is bad. One imperfection is not automatically a deal breaker, but listings with several meaningful compromises naturally move down the list.

The exact score is not scientific. The ranking is what matters. Sorting by the weighted score has been a reliable way to put the listings with fewer—and usually smaller—deal breakers near the top.

I keep **fit** separate from **confidence**.

A listing can be a 92/100 fit with medium confidence because the original page was blocked or the school information was unclear. That is a promising lead to verify, not a certain recommendation.

The important part of the skill is the contract:

```markdown
For each unseen listing:
- Extract the address, rent, beds, baths, square footage, and URL.
- Deduplicate by normalized address.
- Verify that the listing still appears active.
- Estimate the commute.
- Inspect available photos.
- Score the listing against my rubric.
- Report missing or uncertain information separately.

Return only strong new candidates, ordered by score.
Include the facts, fit score, confidence, reasons it fits, concerns,
source URL, and recommended next action.

Do not contact landlords, submit applications, or schedule tours.
```

The rubric changes as I see mistakes. If good apartments are losing too many points for an older kitchen, I adjust the skill. If bad commutes keep appearing, I make that filter harder.

## Keep the cron job thin

Once the skill worked in a normal session, I asked Hermes to run it every morning.

```text
Every morning at 8:00, read apartment alerts from the previous 24 hours.
Use the apartment-scout, Himalaya, and Maps skills. Process only unseen
listings and send me one report with the strongest candidates.

Do not contact anyone or schedule anything.
```

That is almost the entire cron prompt. The schedule belongs in cron. The judgment belongs in the skill.

The report gives me the basic facts, commute, fit score, confidence, reasons it fits, concerns, and the original URL. It also includes a short count of listings skipped as duplicates, stale, over budget, or poor fits.

## Keep the last decision human

Hermes reads the alerts, removes duplicates, checks the commute, reviews available photos, applies the rubric, and builds the short list.

I contact the realtor, ask follow-up questions, visit the property, and decide whether it works for my family.

That is my 97% automation boundary here. I want the agent to remove the scrolling, not choose where I live.

## The scouting pattern

The apartment workflow is one version of a broader pattern:

```text
Collect → Normalize → Enrich → Score → Filter → Deliver → Decide
```

I use the same idea whenever there is too much incoming information and a repeatable way to judge it. The source feeds the agent, the skill holds the rubric, cron keeps it moving, and I stay at the decision boundary.

## Watch the walkthrough

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/tp7cCsQkD7k"
    title="Hermes apartment-scouting workflow"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
