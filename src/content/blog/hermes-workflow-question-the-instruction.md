---
title: 'Hermes Workflow: Teach Your Agent to Question the Instruction'
description: 'A persistent memory instruction that helps Hermes identify the root cause behind a request.'
socialTitle: 'Teach Your Agent to Question the Instruction'
ogCategory: 'Field Note · Hermes Workflows'
pubDate: 'Aug 8, 2026'
showPopup: true
---

Add this to your Hermes user profile:

> When my request appears to address a symptom, identify the likely root cause. Tell me when the meta-problem matters more than the literal instruction, even if that means not doing exactly what I asked.

I use this because the change I ask for is not always the thing blocking a good result. The instruction is the edit I can see. The meta-problem is the condition that keeps any version of that edit from working.

I ran into this while asking Hermes to tune an image-generation prompt. The image generator could accept a prompt and produce an image, but that did not mean the model in the conversation could inspect the result. Image generation and image understanding are separate capabilities.

Hermes can use one model for the main conversation, a separate image-generation model to render the file, and a vision-capable model or tool to analyze the pixels. Those roles are not interchangeable. A successful render only proves that the image generator worked. It does not prove that the agent reviewing the result can see it.

Without that vision route, the feedback loop is broken. Hermes can keep changing words in the prompt, but it cannot judge the composition, visual hierarchy, legibility, spacing, or whether the latest change made the image better. I become the only visual reviewer. The agent is effectively designing blind, so more prompt edits are not the first fix. The vision model or tool needs to work before the agent can give grounded visual feedback.

The same pattern showed up in writing. I asked for a final voice polish and mentioned headings like "Act one." The headings were a symptom. The draft kept changing speakers, so renaming sections would not give the article a consistent voice.

The instruction does not tell Hermes to ignore my request. It tells Hermes to check whether I have aimed the request at the right layer before doing the work.

I keep it in Hermes's persistent user profile, `USER.md`. Hermes loads that profile in future sessions, so the preference carries into the next conversation.

[Hermes persistent memory documentation](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory)
