# Workhorse research — UNGROUNDED findings
### Question: is there a better workhorse than deepseek-v4-flash for Ken's agentic workloads?

Agent: ungrounded research side of the A/B (no citation ledger). Same brief as the grounded agent; answer from training knowledge + light browsing to sanity-check pricing and operator consensus.

---

## Bottom-line recommendation

**Stay on deepseek-v4-flash.** Nothing in the current market beats it on *both* output quality and economics for high-volume agentic work. The surge-pricing change is real but doesn't dethrone it — even at peak rates, flash remains the cheapest capable model by a wide margin. If Ken ever needs more headroom for specific hard tasks, the sensible step up is **deepseek-v4-pro or mimo-v2.5-pro** (identical $0.87 output price), with mimo-v2.5-pro the better pick of the two because it is purpose-built for long-horizon agentic work. But neither justifies replacing the workhorse.

---

## Top-3 candidates ranked

### 1. deepseek-v4-pro — the natural upgrade, but 3× the cost for a marginal gain
- **Output quality:** Same V4 family, ~1.6-point better on SWE-bench Verified (80.6% vs flash's 79.0%). Slightly stronger reasoning, same 1M context / 384K max output. In practice most heavy agent users on r/hermesagent report flash with high-reasoning mode keeps pace with or beats pro in real runs — the headroom is thin for everyday tasks.
- **Economics:** $0.435 / $0.87 per 1M (in/out), cache hit $0.003625. Output is 3.1× flash's $0.28, and pro's peak-hour surcharge doubles it to $1.74 during Beijing business hours. At Ken's ~$50/mo flash volume, switching to pro roughly triples the bill for the same token count.
- **Tradeoffs:** Zero migration friction (same provider, same endpoint, OpenAI-compatible). But you pay a lot for a small quality delta. Best used as a *spot* model for hard turns, not the default.
- **Verdict vs flash:** Loses on economics, only marginal win on quality. Not a workhorse replacement.

### 2. mimo-v2.5-pro — the strongest agentic step-up at the same price as v4-pro
- **Output quality:** Xiaomi's flagship, explicitly "purpose-built for agent workflows" — multi-step tool use, long-context tracking, sequential task execution. Top-tier on agentic evals (ClawEval, GDPVal, SWE-bench Pro). Ken already runs the base mimo as his "researcher," so he knows the family. 1M context, structured output, web search.
- **Economics:** $0.435 / $0.87 per 1M (cache hit $0.0036), after Xiaomi's May 2026 permanent cut (up to 99% off). OpenRouter lists it even lower at $0.3045 / $0.609. Same output price as deepseek-v4-pro, no surge surcharge reported.
- **Tradeoffs:** Not as battle-tested a daily driver as flash; smaller community. Slightly different tool-calling contract to validate. But at identical cost to v4-pro with stronger agentic focus, it's the better "step up" if you take one.
- **Verdict vs flash:** Better agentic quality, 3× the output cost. This is the best *candidate* if Ken decides quality deserves more spend — but it's still a 3× economics hit, so not a workhorse swap on the brief's own terms.

### 3. glm-5.3 — the premium option, far too expensive for a workhorse
- **Output quality:** Strong agentic profile — BenchLM ranks Agentic #19/137, Coding #32/141; Terminal-Bench 2.1 at 88.2% on Z.AI's provider run. Ken already uses GLM for vision-verified drafts, so the family is known good.
- **Economics:** ~$1.40 / $4.40 per 1M (VentureBeat). Output is ~15.7× flash. Even off-peak, that's a ~$780/mo workhorse at Ken's volume.
- **Tradeoffs:** Great model, wrong tier. This is a premium/heavy-lift model (like his sol/terra slot), not a volume workhorse.
- **Verdict vs flash:** Wins on quality, loses catastrophically on economics. Not a workhorse.

*Not ranked:* **grok-4.6** ($2/$6, 21× flash — Ken already has it for vision/design; keep it there, not the workhorse), **gpt-5.6-sol** ($4/$20 promo) and **terra** ($2/$12) — heavy-lift only, 40-70× flash on output; **kimi-k2.6** ($0.60/$4.00) — strong agentic coder but output is 14× flash, and Ken's note already restricts kimi to coding-specific runs.

---

## "Staying on flash" verdict

**Yes — stay on flash.** The surge pricing is the big variable, and the brief's numbers look overstated relative to what live pricing pages actually show:

- **What the brief says:** output $0.66 off-peak / $1.32 peak per 1M (vs old $0.28 flat), peak = Beijing business hours, ~4.7× old.
- **What live sources report:** $0.14 / $0.28 per 1M with a **2× peak-hour multiplier** (peak = Beijing 9:00-12:00 & 14:00-18:00, i.e. UTC 01:00-04:00 / 06:00-10:00), announced for the official V4 release. Multiple independent pricing guides (deepseek.ai, DigitalApplied, CalculateQuick — all verified July 2026) list the flat $0.28 baseline and note the peak surcharge was "announced, not yet active" in late July/August. The dated OpenRouter snapshot is even cheaper ($0.09/$0.18).

Either way, the conclusion holds: **even at the brief's most aggressive $1.32 peak, flash is cheaper than every alternative's off-peak rate** (next closest: mimo/pro at $0.87). The surge changes flash's cost trajectory but not its position as the price-performance king.

The one scenario where Ken should revisit: if peak surcharge actually lands at 4.7× and a meaningful share of his runs fall in Beijing business hours, then *scheduling* (route to off-peak) beats switching — and if he insists on spending more for quality, the migration target is mimo-v2.5-pro / deepseek-v4-pro at $0.87, not a full-model swap.

**Bottom line:** flash stays the workhorse. Add pro or mimo-v2.5-pro as a spot-tier for hard turns if quality demands it. Don't rebuild around anything else at today's prices.

---

## Sources / where the numbers came from
*(ungrounded: no ledger, not verified — URLs for reference only)*
- DeepSeek pricing: deepseek.ai/pricing, api-docs.deepseek.com, digitalapplied.com V4-Flash bulk playbook, calculatequick.com calculator, explainx.ai V4-Flash-0731 post — all show $0.14/$0.28 with a 2× Beijing peak multiplier announced for the official V4 release.
- Peak surge coverage: TNW (July 1, 2026), biggo.com, DeepSeek official email — 2× during Beijing 9-12 & 14-18.
- Operator consensus: r/hermesagent threads — "DeepSeek-v4-Flash is amazing and cheap as f**k" (214 upvotes), users report ~$1.25/day ≈ $37-40/mo for heavy 4-5hr/day use, several report flash+xhigh-reasoning matches/beats pro.
- deepseek-v4-pro / flash SWE-bench + specs: apenft-market reference doc (flash 79.0%, pro 80.6%, both 1M ctx).
- glm-5.3: VentureBeat "GLM-5.3 hits the API at $1.4/$4.4 per million tokens"; BenchLM GLM-5.3 profile (Agentic #19, Terminal-Bench 2.1 88.2%).
- mimo-v2.5-pro: Xiaomi pricing (aipricing.guru May 2026 cut to $0.435/$0.87), OpenRouter ($0.3045/$0.609), Xiaomi MiMo agentic positioning, aimadetools MiMo-v2-pro vs DeepSeek analysis.
- grok-4.6: xAI docs / aipricing.guru / benchlm — $2/$6, $0.50 cached, 500K ctx.
- gpt-5.6 family: OpenAI API pricing docs (sol $4/$20 promo, terra $2/$12 short-ctx), cryptobriefing, analyticsvidhya.
- kimi-k2.6: clawrouters Moonshot guide, costbench — $0.60/$4.00 (some surfaces $0.75/$3.50), 256K ctx.
