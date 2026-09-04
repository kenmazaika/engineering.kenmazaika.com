# Job search results — ALL models (for PDF Test 4 section)

Criteria (applied uniformly 2026-08-17): location = LA or remote-US AND recency = not stale >45d.
Unknown posting dates fail recency exactly like stale ones.

## deepseek-v4-flash (23 scored, 3 pass)
| Company | Role | Location | Posted | Verdict |
|---|---|---|---|---|
| OpenAI | EM, Artifacts | San Francisco | 08-13 | ❌ location |
| Perplexity | EM, API Platform | San Francisco | 08-12 | ❌ location |
| Sierra | EM, Agent | NYC / SF | 08-11 | ❌ location |
| Suno | EM, Engineering | Los Angeles | fresh | ✅ PASS — Apply |
| Anduril | EM, Autonomy | Costa Mesa | fresh | ✅ PASS — Hold (high-priority) |
| Harvey | EM, Model Infra | San Francisco | 07-22 | ❌ location |
| Anthropic | EM, Search | SF / NYC | 08-03 | ❌ location |
| Anthropic | EM, Enterprise | San Francisco | 06-12 (upd 08-10) | ❌ location |
| Notion | EM, Mobile AI | NYC / SF | 05-21 | ❌ location |
| Descript | EM, AI | Remote-US | fresh | ✅ PASS — Apply |

## grok-4.6 (7 scored, 0 pass)
| Company | Role | Location | Posted | Verdict |
|---|---|---|---|---|
| OpenAI | EM, Artifacts | San Francisco | 08-13 | ❌ location |
| Anthropic | EM, UI Platform | SF / NYC / Seattle | 02-12 (upd 08-03) | ❌ location |
| Hightouch | EM, Agents | Remote | 58d stale | ❌ recency (borderline — grok's own window kept it) |
| Perplexity | EM, API Platform | San Francisco | 08-12 | ❌ location |
| Anthropic | EM, Growth | SF / NYC / Seattle | 07-17 | ❌ location |
| Runway | EM, API | — | stale | ❌ recency |
| Harvey | Dir of Eng, Core Product | San Francisco | 2025-12-13 | ❌ location + recency |

## mimo-v2.5-pro (6 verified, 0 pass)
| Company | Role | Location | Posted | Verdict |
|---|---|---|---|---|
| Anthropic | EM, Growth | SF / NYC / Seattle | active (no date) | ❌ location |
| Anthropic | EM, GRC Platform | SF / NYC / Seattle | active (no date) | ❌ location |
| Scale AI | EM, Agent Oversight | SF / NY | active (no date) | ❌ location |
| OpenAI | EM, Sensitive Deployments | Mountain View | recent | ❌ location |
| Snap | Manager, Privacy Eng | Los Angeles | — | ❌ not EM at an AI company (its one LA hit) |
| Anthropic | EM, Applied AI (Life Sciences) | SF / NYC | Jun 25 | ❌ location |

## glm-4.5 (8 scored, 0 viable)
| Company | Role | Location | Posted | Verdict |
|---|---|---|---|---|
| Affirm | Mgr, ML Engineering (Fraud) | Remote US | Unknown | ❌ recency (date Unknown) — the only location pass |
| Scale AI | EM, Agent Oversight | SF / NY (in-person 3x/wk) | Unknown | ❌ location |
| Scale AI | Frontier Agent EM, Enterprise | SF / NY | Unknown | ❌ location |
| Adobe | Dir Eng, ML & AI Products | San Jose | 20d ago | ❌ location |
| Adonis | Dir of Data Science / ML | New York (Hybrid) | Unknown | ❌ location |
| SS&C | Dir Eng, Agentic AI Platform | Waltham, MA (Hybrid) | 23d ago | ❌ location |
| Cellanome | Sr Director, AI | Foster City | Unknown | ❌ location |
| JazzX AI | Sr Engineering Manager | Bangalore | Unknown | ❌ location |

## gpt-5.5 (6 scored, 0 viable)
| Company | Role | Location | Posted | Verdict |
|---|---|---|---|---|
| Magnet Forensics | EM, AI Engineering | Waterloo/Toronto/Ottawa | Unknown | ❌ location |
| OpenAI | EM, Core Services | San Francisco | Unknown | ❌ location |
| Anthropic | EM, Marketplace | SF / Seattle | Unknown | ❌ location |
| Klaviyo | AI Engineering Manager | Boston (remote option) | Unknown | ❌ location + recency (date Unknown) |
| Anthropic | EM, Growth | San Francisco | Reposted 3h ago | ❌ location |
| OpenAI | EM, Financial Data Quality | San Francisco | 3d ago | ❌ location |

## gpt-5.6-luna (6 scored, 0 viable)
*(luna's shortlist omitted location fields; locations below corroborated from the same companies' postings in other models' shortlists + battery recount "all SF")*
| Company | Role | Location | Posted | Verdict |
|---|---|---|---|---|
| Anthropic | EM, Growth | SF / NYC / Seattle | ~4 weeks ago | ❌ location |
| OpenAI | EM, Order Systems | San Francisco | Unknown | ❌ location |
| Scale AI | EM, Agent Oversight | SF / NY | Unknown | ❌ location |
| OpenAI | EM, Identity & Access Platform | San Francisco | Unknown | ❌ location |
| Anthropic | EM, GPU (ML Accelerator) | SF / Seattle | Unknown | ❌ location |
| Anthropic | EM, Research Productivity | SF / NYC | Unknown | ❌ location |

## gpt-5.6-sol (6 scored, 0 viable)
| Company | Role | Location | Posted | Verdict |
|---|---|---|---|---|
| Anthropic | EM, Enterprise | SF hybrid | Unknown | ❌ location |
| Anthropic | EM, Safeguards Review Tooling | SF hybrid | Unknown | ❌ location |
| Front | AI EM, Core AI Platform | SF (3 office days) | Unknown | ❌ location |
| Scale AI | Frontier Agent EM, Enterprise | SF (3 office days) | Unknown | ❌ location |
| Anthropic | EM, UI Platform | SF hybrid | Unknown | ❌ location |
| Scale AI | EM, Agent Oversight | SF (3 office days) | Unknown | ❌ location |

## gpt-5.6-terra (5 scored, 0 viable)
| Company | Role | Location | Posted | Verdict |
|---|---|---|---|---|
| Sanity | SEM, AI Growth | Remote-US or SF | Unknown | ❌ recency (date Unknown) — the only location pass |
| Plaid | EM, AI Applications | SF hybrid | Unknown | ❌ location |
| Front | AI EM (Core AI Platform) | SF hybrid | Unknown | ❌ location |
| Scale AI | EM, Agent Oversight | SF / NY (3x/wk) | Unknown | ❌ location |
| Aledade | Sr EM, AI Enablement & EHR Agents | Remote-US | Unknown | ❌ recency (date Unknown) — the only location pass |

## kimi-k2.6 — built the skill only; no shortlist shipped.
## glm-4.5-flash — no shortlist shipped.

Headline (from test-battery.md): **Applied identically across all shortlists: only deepseek's run produces viable roles (3 of 23). Every other model: 0.**


## glm-5.3 refresh (14 verified, 9 Apply, 1 Watch, 4 Skip)

The glm-5.3 refresh was a stronger standalone job-finder run, but it is not a perfect apples-to-apples replacement for the original strict LA/remote recency scoreboard: it used a 60-day freshness window, verified 14 live employer-ATS roles, and recommended 9 Apply / 1 Watch / 4 Skip, including several SF/NY/Seattle relocation roles. The useful signal is process quality: 28 boards probed successfully, 93 roles discovered, 14 verified live, no aggregator URLs as sources, and every compensation/date field either traced to employer data or marked unknown.

See `content/test4_jobs/glm-5.3.md` for the full shortlist and evidence summary.
