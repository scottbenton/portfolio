<script lang="ts">
	import { featuredApps } from '$lib/apps';
	import AppCard from './AppCard.svelte';
	import SectionHeading from './SectionHeading.svelte';
</script>

<div class="py-8">
	<SectionHeading title="Things I've Built" />
	<div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
		{#each featuredApps as app (app.url)}
			<AppCard {app} titleTag="h3" />
		{/each}
	</div>
	<div class="mt-4 flex justify-end">
		<a
			href="/apps"
			class="key-surface group flex items-center gap-2 border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
		>
			View all apps
			<span class="key-icon icon-[pixelarticons--arrow-right] text-base" aria-hidden="true"></span>
		</a>
	</div>
</div>
