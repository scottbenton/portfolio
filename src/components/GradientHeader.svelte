<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		title?: string;
		subtitle?: string;
		cta?: Snippet;
	}
	const { title, subtitle, cta }: Props = $props();
</script>

<div class="name-header relative flex flex-col items-center justify-center gap-3 py-12 text-center">
	<h1 class="z-20 font-display text-6xl text-white text-shadow-indigo-950 text-shadow-md">
		{title}
	</h1>
	{#if subtitle && typeof subtitle === 'string'}
		<h2 class="z-20 font-display text-3xl text-white text-shadow-indigo-950 text-shadow-md">
			{subtitle}
		</h2>
	{/if}
	{#if cta}
		<div class="z-20 mt-4">
			{@render cta?.()}
		</div>
	{/if}
</div>

<style>
	@reference "../app.css";

	.name-header {
		background-image:
			repeating-linear-gradient(
				45deg,
				rgba(129, 140, 248, 0.09) 0px,
				rgba(129, 140, 248, 0.09) 1px,
				transparent 1px,
				transparent 11px,
				rgba(129, 140, 248, 0.09) 11px,
				rgba(129, 140, 248, 0.09) 12px,
				transparent 12px,
				transparent 32px
			),
			repeating-linear-gradient(
				90deg,
				rgba(129, 140, 248, 0.09) 0px,
				rgba(129, 140, 248, 0.09) 1px,
				transparent 1px,
				transparent 11px,
				rgba(129, 140, 248, 0.09) 11px,
				rgba(129, 140, 248, 0.09) 12px,
				transparent 12px,
				transparent 32px
			),
			repeating-linear-gradient(
				0deg,
				rgba(129, 140, 248, 0.09) 0px,
				rgba(129, 140, 248, 0.09) 1px,
				transparent 1px,
				transparent 11px,
				rgba(129, 140, 248, 0.09) 11px,
				rgba(129, 140, 248, 0.09) 12px,
				transparent 12px,
				transparent 32px
			),
			repeating-linear-gradient(
				135deg,
				rgba(129, 140, 248, 0.09) 0px,
				rgba(129, 140, 248, 0.09) 1px,
				transparent 1px,
				transparent 11px,
				rgba(129, 140, 248, 0.09) 11px,
				rgba(129, 140, 248, 0.09) 12px,
				transparent 12px,
				transparent 32px
			),
			linear-gradient(90deg, var(--color-indigo-800), var(--color-violet-900));
	}
</style>
