<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		title?: string;
		subtitle?: string;
		cta?: Snippet;
	}
	const { title, subtitle, cta }: Props = $props();
</script>

<div
	class="hero relative flex flex-col items-center justify-center gap-2 py-16 text-center md:py-20"
>
	<div class="hero-glow" aria-hidden="true"></div>
	<h1 class="hero-rise z-10 font-display text-6xl text-white md:text-7xl" style="--rise-delay: 0ms">
		{title}
	</h1>
	{#if subtitle && typeof subtitle === 'string'}
		<p
			class="hero-rise z-10 font-display text-2xl text-indigo-200 md:text-3xl"
			style="--rise-delay: 120ms"
		>
			{subtitle}<span class="cursor" aria-hidden="true"></span>
		</p>
	{/if}
	{#if cta}
		<div class="hero-rise z-10 mt-6" style="--rise-delay: 240ms">
			{@render cta?.()}
		</div>
	{/if}
</div>

<style>
	.hero {
		overflow: hidden;
		background-color: var(--color-slate-950);
		background-image:
			linear-gradient(rgba(129, 140, 248, 0.08) 1px, transparent 1px),
			linear-gradient(90deg, rgba(129, 140, 248, 0.08) 1px, transparent 1px);
		background-size: 24px 24px;
	}

	/* Laser line along the bottom edge */
	.hero::after {
		content: '';
		position: absolute;
		inset-inline: 0;
		bottom: 0;
		height: 2px;
		background: linear-gradient(
			90deg,
			transparent,
			var(--color-indigo-400) 35%,
			var(--color-violet-400) 65%,
			transparent
		);
	}

	.hero-glow {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			ellipse 65% 75% at 50% 42%,
			rgba(99, 102, 241, 0.35),
			transparent 70%
		);
	}

	.cursor {
		display: inline-block;
		width: 0.3em;
		/* Matches Jersey 15's measured cap height (0.556em); the font's caps
		   sit exactly on the metric baseline, so plain baseline alignment
		   lines the block up with the letterforms. */
		height: 0.556em;
		margin-left: 0.15em;
		background-color: var(--color-indigo-300);
		vertical-align: baseline;
	}

	@media (prefers-reduced-motion: no-preference) {
		.hero-rise {
			animation: hero-rise 0.7s var(--ease-out-quart) both;
			animation-delay: var(--rise-delay, 0ms);
		}

		.cursor {
			animation: cursor-blink 1.2s steps(2, start) infinite;
			animation-delay: 700ms;
		}

		.hero-glow {
			animation: glow-pulse 9s ease-in-out infinite alternate;
		}
	}

	@keyframes hero-rise {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes cursor-blink {
		to {
			visibility: hidden;
		}
	}

	@keyframes glow-pulse {
		from {
			opacity: 0.75;
		}
		to {
			opacity: 1;
		}
	}
</style>
