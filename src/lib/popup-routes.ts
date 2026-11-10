// Deterministic article → popup routing.
// start: getting-started / costs / models / hardware / first workflow
// obsidian: vaults, memory, handoffs, hooks, loops, operating infrastructure
// general: broader engineering or personal essays
export type PopupCampaign = 'start' | 'obsidian' | 'general' | 'none';

export const POPUP_ROUTES: Record<string, PopupCampaign> = {
	// Getting started
	'support-isnt-tickets-its-loops': 'start',
	'cost-to-run-an-agent': 'start',
	'my-175-ai-agent-rig': 'start',
	'best-ai-model-for-agent-work': 'start',
	'my-default-model-stack-for-ai-agent-work': 'start',
	'your-first-useful-hour-with-openclaw': 'start',
	'what-is-an-ai-harness': 'start',
	'hermes-vs-openclaw': 'start',
	'before-you-blame-the-model-audit-your-hermes-setup': 'start',
	'hermes-kit': 'start',
	'hermes-workflow-apartment-scouting': 'start',
	'hermes-workflow-i-thought-kanban-was-for-me-to-manage': 'start',
	'hermes-workflow-question-the-instruction': 'start',
	'hermes-workflow-six-bots-one-media-company': 'start',
	'meta-prompting-let-ai-write-your-prompt': 'start',
	'discord-vs-telegram-agentic-work': 'start',
	'setting-up-voice-channels-with-openclaw-and-discord': 'start',

	// Obsidian / advanced operating system
	'inspect-harness': 'obsidian',
	'obsidian-vault-structure': 'obsidian',
	'obsidian-inbox-system': 'obsidian',
	'obsidian-vault-on-your-phone': 'obsidian',
	'how-i-run-agent-loops-openclaw-obsidian': 'obsidian',
	'agent-hooks': 'obsidian',
	'route-the-file-before-you-write-it': 'obsidian',
	'i-gave-openclaw-less-memory': 'obsidian',
	'my-agent-kept-writing-the-same-post': 'obsidian',
	'more-context-makes-your-agent-dumber': 'obsidian',
	'pass-password-store-for-ai-agents': 'obsidian',
	'capture-workflow': 'obsidian',
	'hermes-memory-skills-wiki-learns': 'obsidian',

	// General newsletter
	'measuring-ai-impact-on-developer-teams': 'general',
	'give-your-agent-your-voice': 'general',
	'designing-blind': 'general',
	'a-feature-that-makes-your-agent-show-its-receipts': 'general',
};

export function getPopupCampaign(slug: string): PopupCampaign {
	return POPUP_ROUTES[slug] ?? 'none';
}
