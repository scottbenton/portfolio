<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		divider?: boolean;
		children?: Snippet;
		disablePadding?: boolean;
	}
	let { divider, disablePadding, children }: Props = $props();
</script>

<div class={`section ${!disablePadding ? 'section-padding' : ''}`}>
	{#if divider}
		<div class="divider"></div>
	{:else}
		{@render children?.()}
	{/if}
</div>

<style>
	@import '../app.css';
	.section {
		@apply border-b border-slate-300 dark:border-slate-800;
		> :global(*) {
			@apply mx-auto w-full max-w-3xl border-x border-slate-300 dark:border-slate-800;
		}
	}

	:global(.section-padding) {
		> :global(*) {
			@apply px-4 md:px-8;
		}
	}

	.divider {
		background-image: repeating-linear-gradient(
			135deg,
			var(--color-slate-200) 0,
			var(--color-slate-200) 1px,
			transparent 2px,
			transparent 9px
		);
		@apply h-8;
	}
	:global(.dark) .divider {
		background-image: repeating-linear-gradient(
			135deg,
			var(--color-slate-900) 0,
			var(--color-slate-900) 1px,
			transparent 2px,
			transparent 9px
		);
	}
</style>
