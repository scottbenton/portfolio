<script lang="ts">
	import type { AppConfig } from '$lib/apps';

	interface Props {
		app: AppConfig;
		titleTag?: 'h2' | 'h3';
	}
	const { app, titleTag = 'h2' }: Props = $props();
</script>

<a
	href={app.url}
	target="_blank"
	rel="noopener noreferrer"
	class="key-surface group relative flex flex-col items-center justify-start border border-slate-200 p-5 text-center hover:border-indigo-500 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40"
	style="--lift: 4px"
>
	{#if app.tags}
		<div class="absolute top-3 right-3 flex gap-2">
			{#each app.tags as tag (tag)}
				<span class="pixel-tag">
					{tag}
				</span>
			{/each}
		</div>
	{/if}
	<img class="mt-2 h-24 w-24" src={app.logoUrl} alt={`${app.name} Logo`} />
	<div class="mt-4 flex items-center gap-2">
		<svelte:element this={titleTag} class="text-xl font-semibold text-slate-900 dark:text-white">
			{app.name}
		</svelte:element>
		<span class="key-icon icon-[pixelarticons--external-link] text-base" aria-hidden="true"></span>
	</div>
	{#if app.about}
		<p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{app.about}</p>
	{/if}
</a>
