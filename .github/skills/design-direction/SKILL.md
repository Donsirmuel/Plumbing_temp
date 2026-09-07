---
name: design-direction
description: Use when designing, redesigning, reviewing, or polishing a website or software interface. Establish product context and a project-specific visual direction before coding, preserve meaningful variation between products, and validate hierarchy, accessibility, responsiveness, motion, copy, and anti-patterns before shipping.
---

# Design Direction

Use this skill as a design operating system, not as a fixed visual theme.

## First establish context

Before changing UI, identify:

- The audience and their primary task
- Whether the surface is for Persuade, Operate, Read, or Experience
- The product's honest claims and available evidence
- The desired emotional character
- What the product must not feel like
- The important desktop and mobile workflows

If the project contains `PRODUCT.md`, read it first. Do not invent proof, metrics, customers, or brand claims.

## Then establish a design world

Choose a project-specific visual direction before selecting components. Define:

- Visual signature
- Typography roles
- Palette and contrast strategy
- Shape language
- Image or illustration treatment
- Layout rhythm
- Interaction and motion character
- Content voice
- Anti-patterns and references to avoid

If the project contains `DESIGN.md`, treat it as the source of truth. Reuse component behavior and accessibility patterns, but do not force another project's colors, typography, imagery, or composition onto this one.

## Reference analysis

When references are supplied, describe what works and why before copying anything. Analyze composition, density, hierarchy, imagery, typography, control placement, motion, and responsive implications. References are evidence for decisions, not a substitute for product context.

## Build sequence

1. Write or update product context.
2. Write or update the design direction.
3. Define tokens and reusable primitives.
4. Compose the page or workflow around the user's primary task.
5. Add imagery and content that are real, contextual, and available.
6. Add motion only where it communicates state, spatial continuity, hierarchy, or occasional delight.
7. Render and inspect desktop and mobile states.
8. Refine the named discipline: `typeset`, `layout`, `color`, `motion`, `distill`, or `harden`.

## Quality rules

- Give every section one dominant job.
- Prefer clear hierarchy over decorative density.
- Avoid generic AI patterns: interchangeable palettes, excessive pills, nested cards, floating blobs, decorative status dots, giant vague headlines, and gratuitous gradients.
- Do not remove useful controls merely to make a screenshot cleaner.
- Use familiar interaction patterns for operational software.
- Keep repeated interactions fast and predictable.
- Keep most UI transitions under 300ms unless a larger marketing composition needs a slower sequence.
- Do not animate elements from `scale(0)` when a visible starting form would feel more natural.
- Prevent layout shift, hover flicker, and accidental motion.
- Respect reduced-motion preferences.
- Keep body text readable, controls keyboard accessible, and touch targets at least 44px where practical.
- Test overflow, long labels, empty states, errors, loading, narrow screens, and real content.

## Copy quality

Write specific, human copy. State what the product does and what the user can do. Avoid inflated importance, unsupported superlatives, vague marketing claims, repetitive three-part slogans, and AI-sounding filler. Use a copy-focused humanizer skill only after the product meaning is correct.

## Review before shipping

Perform a focused review of:

- Hierarchy and first-viewport clarity
- Task completion and conversion paths
- Typography and readable measures
- Contrast, focus, keyboard access, and reduced motion
- Responsive layout and content overflow
- Image loading and performance
- Empty, loading, error, and edge states
- Visual distinctiveness and consistency with the project's design direction

Document durable decisions in `DESIGN.md` so future work extends the system instead of resetting it.
