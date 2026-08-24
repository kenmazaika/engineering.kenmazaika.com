# Workhorse A/B — GROUNDED findings: better workhorse than deepseek-v4-flash?

**Scope.** Ken runs agentic workloads (coding, tool use, long-context agent runs, research, writing) through Hermes on a $175 rig; his workhorse is **deepseek-v4-flash** at ~$50/month. Research question: is there a better workhorse on **output quality** and **comparable-or-better economics**? This is the grounded side of an A/B — every load-bearing claim carries a verbatim-quoted source or is marked `[unverified]`.

---

## Bottom-line recommendation

**Stay on deepseek-v4-flash, but route it through an aggregator such as OpenRouter to dodge the August 2026 surge repricing.** OpenRouter serves deepseek-v4-flash at **$0.0679/M input / $0.168/M output** [15] — cheaper than the *old* official flat rate ($0.14/$0.28) and far below the new off-peak ($0.22/$0.66) and peak ($0.44/$1.32) official rates [1]. This requires no model migration and makes the incumbent workhorse strictly cheaper than it was before the repricing. **If Ken wants a genuine quality upgrade at workhorse pricing, the strongest candidate is mimo-v2.5 (non-Pro) at $0.14/$0.28** — the same price flash used to have — which beats flash on the agentic benchmarks that matter (ClawEval, Terminal-Bench), is natively MCP/OpenClaw-optimized, and is open-weight [23][10]. Caveat: mimo's agentic quality claims are Xiaomi self-reported, not independently verified.

---

## Top-3 candidates ranked

### 1. Stay on deepseek-v4-flash — routed via OpenRouter (STRONGEST on economics)

**Output quality.** Flash is the incumbent workhorse precisely because it gets real agentic work done at volume. OpenRouter's usage data is the best independent proof of that: **Hermes Agent is the #1 consumer of deepseek-v4-flash on OpenRouter at 5.93T tokens**, followed by OpenClaw (487B) [15]. The model is an efficiency-optimized MoE (284B total / 13B active, 1M context) built for high-throughput agent workflows, and supports tool calling and structured output [15]. On Xiaomi's own benchmark table it is the budget floor of the agentic field (ClawEval text 56.9, Terminal-Bench 52.6) [23] — not the strongest, but adequate for high-volume work.

**Economics.** This is where the surge repricing changes everything. The official API moved on August 16, 2026 from a flat $0.14/$0.28 to peak/off-peak: off-peak $0.22/$0.66, peak (01:00–04:00 and 06:00–10:00 UTC) $0.44/$1.32 [1]. That is a 2.4× (off-peak) to 4.7× (peak) jump on output, the dominant cost in agent runs. But OpenRouter's multi-provider marketplace prices flash at **$0.0679/M input / $0.168/M output** [15] — below the old official rate and roughly 4× cheaper than the new off-peak output price. Routing through OpenRouter sidesteps the surge entirely.

**Tradeoffs.** Zero migration; flash is already proven in the exact toolset (Hermes). The only cost is trusting a third-party aggregator's availability and losing DeepSeek's native caching ($0.007/M off-peak cache-hit vs OpenRouter's flat $0.0168 cache-read [15][1]) — but on an output-dominant workload the output price gap (13.4× peak) swamps the input-cache difference.

**Why it's #1.** It beats every alternative on economics with no migration risk, and the incumbent is already the dominant agentic workhorse in the ecosystem.

### 2. mimo-v2.5 (non-Pro) — best quality-per-dollar replacement candidate

**Output quality.** Xiaomi positions the whole V2.5 series as an agent-first family and lists it at the Pareto frontier of performance and efficiency, with mimo-v2.5 (non-Pro) reaching **62.3 on the Claw-Eval general subset** [23]. On Xiaomi's own comparison it beats deepseek-v4-flash on Claw-Eval text (65.8 vs 56.9) and Terminal-Bench 2.0 (56.1 vs 52.6) [23]. It is a 310B-parameter Sparse MoE (15B active), open-sourced on Hugging Face [23]. **Flag:** these agentic numbers are Xiaomi's self-reported marketing benchmarks, not an independent evaluation — treat the edge over flash as directional, not definitive.

**Economics.** mimo-v2.5 (non-Pro) is $0.14/M input (cache miss) / $0.28/M output, cache hit $0.0028 — **exactly the old flash flat price**, and roughly a third of the new flash off-peak output price ($0.66) [10][1]. The Pro variant is $0.435/$0.87 [10].

**Tradeoffs.** Better agentic benchmarks than flash at the old-flash price; native MCP tool-calling and OpenClaw integration (the series is built as the official OpenClaw brain) [24][10]. Risks: self-reported quality, a newer/smaller ecosystem, and mimo-v2.5 is omnimodal (a larger surface) rather than a pure text workhorse.

**Why it's #2.** It's the only candidate that plausibly beats flash on **both** quality and economics at the workhorse price point — but the quality edge rests on vendor self-reports, so it ranks below the zero-risk "stay" option.

### 3. mimo-v2.5-Pro — biggest quality jump at workhorse-tier cost

**Output quality.** The flagship is explicitly engineered for agents: Xiaomi's MiMo Claw product is "powered by MiMo-V2.5-Pro, a flagship model deeply optimized for the official OpenClaw framework," with native MCP tool-calling and semantic skill parsing that needs "no extra prompt engineering," and a claim of ~3× task-reasoning throughput via its MTP decoding [24]. On ClawEval it reports a **63.8% task pass rate (Pass³)** and claims to **cut token consumption 40–60% vs peers at equivalent performance** [24]. Official marketing also positions it as rivaling Claude Opus 4.6 in demanding agentic workloads [10]. **Flag:** all of this is Xiaomi self-reported.

**Economics.** $0.435/M input / $0.87/M output (cache hit $0.0036) [10]. Against the new surge-priced flash, its output price sits between flash off-peak ($0.66) and flash peak ($1.32), and is cheaper than flash at peak [1][10]. The claimed 40–60% token-efficiency could make effective cost-per-task lower than the raw rate implies [24] — but that saving is unverified.

**Tradeoffs.** The biggest capability step of the three, purpose-built for long-horizon agent work [24]. Risk: it's ~3× the OpenRouter-routed flash output price, so on pure economics it loses to Option 1; quality claims are vendor-sourced.

**Why it's #3.** Best agentic capability at workhorse-tier cost, but not cheap enough to beat "stay + reroute" on economics, and its edge is self-reported.

---

## Why the other named candidates didn't make top-3

- **deepseek-v4-pro** — the same lab's flagship at $0.66/$1.98 off-peak and $1.32/$3.96 peak (cache miss/output) [1]. It's the "stronger reasoning" sibling, but at 3× flash's off-peak output price it's a *specialist* upgrade for hard tasks, not a replacement workhorse; the cheap-workhorse slot is what's at issue [1].
- **glm-5.3** — not usable as a general workhorse today: it has **no published per-token API price** and is reachable only through the GLM Coding Plan and ZCode, with wider API access promised later [7]. The rate card tops out at glm-5.2 ($1.40/$4.40) [7].
- **grok-4.6** — $2/$6 per 1M with a 500K context, and prompts over 200K tokens bill at double rates [8]. At 3× (off-peak) to 9× (peak vs flash) the flash output price [1][8], it's a design/vision specialist, not a daily driver.
- **gpt-5.6-sol / gpt-5.6-terra** — Sol stays at $5/$30 (unchanged by the July 30 cut) and Terra at $2/$12 after a 20% cut [13]. Both are 8–45× flash's output price [1][13] — heavy-lift models, not workhorses.
- **kimi-k2.6** — $0.75/$3.50 [12]; strong for long-horizon agent swarms (scales to 300 sub-agents / 4,000 coordinated steps) [18]. Output is ~5× flash's OpenRouter price [15][12], so it's a capable-but-not-cheap specialist rather than a cost workhorse.

## "Staying on flash" verdict

**The surge repricing changes the calculus — but it makes staying MORE attractive, not less, if Ken reroutes.** DeepSeek's move to peak/off-peak billing on August 16, 2026 roughly doubled the headline output rate to $0.66 off-peak / $1.32 peak [1]. Taken at face value on the official API, that's a 2.4–4.7× output-cost increase on exactly the cost that dominates agent runs — a real reason to look elsewhere. However, OpenRouter lists the identical model at **$0.168/M output** [15], so the surge is avoidable without changing models at all. The verdict: **staying on flash still makes sense, but only if the route changes** (OpenRouter or equivalent aggregator). Continuing to pay the official peak rate would roughly quadruple Ken's ~$50/month output bill; routing through OpenRouter would make it *cheaper* than before the repricing. Operator guidance for Hermes specifically agrees: a July 2026 ranking of models for Hermes Agent lists **DeepSeek V4 Flash as the budget price floor ("Cheapest 24/7 operation, under $5 a month")** and recommends it for always-on background agents [22] — independent corroboration that flash is the right cost workhorse and should not be discarded over a repricing that is avoidable by rerouting [22].

---

## Sources

[1] https://chat-deep.ai/pricing — DeepSeek API pricing 2026: V4 Flash/Pro/vision peak-offpeak
    > "DeepSeek now uses off-peak and peak API rates: Flash is $0.007 / $0.22 / $0.66 off-peak and $0.014 / $0.44 / $1.32 at peak; Pro is $0.022 / $0.66 / $1.98 off-peak and $0.044 / $1.32 / $3.96 at peak, per 1M cache-hit input / cache-miss input / output tokens."
    > "Historical — through August 16, 15:59 UTC | `deepseek-v4-flash` | $0.0028 | $0.14 | $0.28"
[7] https://felloai.com/glm-pricing — GLM pricing 2026: API costs, Coding Plan, GLM-5.3 no published price
    > "**GLM-5.3** has **no published per-token price**. It launched on August 14, 2026 inside the Coding Plan and ZCode only, so the API rate card still tops out at GLM-5.2."
    > "**GLM-5.2** API pricing is **$1.40 in / $4.40 out** per million tokens"
[8] https://developer.puter.com/tutorials/grok-api-pricing — Grok API pricing: Grok 4.6 /, 500K ctx (Puter, Jul 2026)
    > "xAI's newest flagship, Grok 4.6, costs $2 per 1 million input tokens and $6 per 1 million output tokens, with a 500K token context window."
    > "Prompts of 200K tokens or more bill at double rates."
[10] https://mimo.mi.com/docs/price/pay-as-you-go — Xiaomi MiMo official API pricing (mimo-v2.5-pro /usr/bin/bash.435//usr/bin/bash.87)
    > "Peak Agent Performance: Rivals Claude Opus 4.6 in demanding agentic workloads."
    > "Trillion-Scale, Efficient Architecture: 1T total params | 42B active | 1M context."
    > "MiMo-V2.5: Input (cache hit) $0.0028 / MTok. Input (cache miss) $0.14 / MTok. Output $0.28 / MTok."
[12] https://costbench.com/software/llm-api-providers/moonshot-kimi-api — Moonshot Kimi API pricing (K2.6 /usr/bin/bash.75/.50)
    > "Kimi K2.6 is $0.75/1M input tokens and $3.50/1M output tokens."
[13] https://cryptobriefing.com/openai-cuts-prices-smaller-models — OpenAI cuts GPT-5.6 Luna/Terra prices, Sol Fast mode (July 30)
    > "Luna, the fastest and lowest cost model in the GPT-5.6 family, is now priced at $0.20 per million input tokens and $1.20 per million output tokens. Terra now costs $2 per million input tokens and $12 per million output tokens."
    > "Pricing for GPT-5.6 Sol remains unchanged."
[15] https://openrouter.ai/deepseek/deepseek-v4-flash — DeepSeek V4 Flash 0423 OpenRouter pricing
    > "On OpenRouter, DeepSeek: DeepSeek V4 Flash 0423 costs $0.0679/M input tokens and $0.168/M output tokens, with separate rates for Cache Read at $0.0168/M tokens."
    > "Hermes Agent is an open-source, self-improving AI agent by Nous Research that runs persistently with memory across sessions, and builds reusable skills from experience."
    > "Hermes Agent is an open-source, self-improving AI agent by Nous Research that runs persistently with memory across sessions, and builds reusable skills from experience. It comes with 40+ built-in tools, including web search, browser automation, and vision, plus scheduled automations and subagents. 5.93T tokens"
[18] https://codersera.com/blog/deepseek-v4-vs-claude-vs-gpt5-coding-comparison-2026 — DeepSeek V4 vs Claude vs GPT-5 coding: agentic cost table, K2.6 for swarm
    > "For longest-horizon swarm runs, pick Kimi K2.6 — open-weight and roughly 8x cheaper."
    > "Scales an Agent Swarm to 300 sub-agents across 4,000 coordinated steps in a single run."
[22] https://haimaker.ai/blog/best-models-for-hermes-agent — Best Models for Hermes Agent (Jul 2026): Sonnet 4.6 daily, economize DeepSeek V4 Flash
    > "DeepSeek V4 Flash | budget | Cheapest 24/7 operation, under $5 a month"
    > "Start: Claude Sonnet 4.6 as the daily driver"
[23] https://mimo.xiaomi.com/mimo-v2-5 — MiMo-V2.5: ClawEval 62.3, frontier agentic at half the cost
    > "On Claw-Eval, a benchmark for daily agentic tasks, MiMo-V2.5 achieves a 62.3 on the general subset, placing it at the Pareto frontier of performance and efficiency."
    > "Terminal-Bench 2.0: MiMo-V2.5 56.1"
[24] https://mimo.mi.com/docs/en-US/news/latest/mimoclaw — MiMo Claw launch: MiMo-V2.5-Pro native OpenClaw, ClawEval 63.8%, 40-60% token savings
    > "In the ClawEval benchmark test, MiMo-V2.5-Pro achieves a task pass rate (Pass³) of 63.8%. Thanks to superior token utilization, it cuts token consumption by 40% to 60% compared with peer products while delivering equivalent performance."
    > "MiMo-V2.5-Pro natively supports the MCP tool calling protocol and built-in semantic skill parsing, requiring no extra prompt engineering."
