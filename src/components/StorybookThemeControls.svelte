<script lang="ts">
	import { ironLinkSchemes } from '../lib/ironLinkSchemes';

	interface Props {
		mode: 'light' | 'dark';
		scheme: string;
	}
	let { mode = $bindable(), scheme = $bindable() }: Props = $props();
</script>

<div class="not-prose my-6 flex flex-wrap items-center gap-4">
	<div class="flex border border-slate-300 dark:border-slate-700" role="group" aria-label="Preview color mode">
		{#each ['light', 'dark'] as const as option (option)}
			<button
				type="button"
				class="key-surface cursor-pointer px-3 py-1.5 font-mono text-xs uppercase tracking-wide"
				class:bg-indigo-600={mode === option}
				class:text-white={mode === option}
				class:text-slate-600={mode !== option}
				class:dark:text-slate-400={mode !== option}
				aria-pressed={mode === option}
				onclick={() => (mode = option)}
			>
				{option}
			</button>
		{/each}
	</div>

	<div class="flex flex-wrap gap-1.5" role="group" aria-label="Preview color scheme">
		{#each ironLinkSchemes as option (option.key)}
			<button
				type="button"
				class="scheme-swatch key-surface h-8 w-8 cursor-pointer rounded-full outline-offset-2"
				class:outline-2={scheme === option.key}
				class:outline-indigo-500={scheme === option.key}
				style="background: linear-gradient(135deg, {option.iconColors.join(', ')});"
				aria-pressed={scheme === option.key}
				title={option.label}
				onclick={() => (scheme = option.key)}
			>
				<span class="sr-only">{option.label}</span>
			</button>
		{/each}
	</div>
</div>

<style>
	.scheme-swatch:focus-visible {
		outline-color: var(--color-slate-400);
	}
	:global(.dark) .scheme-swatch:focus-visible {
		outline-color: var(--color-slate-500);
	}
</style>
