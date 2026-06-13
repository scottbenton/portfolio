<script lang="ts">
	import GradientHeader from '../../components/GradientHeader.svelte';
	import Head from '../../components/Head.svelte';
	import Section from '../../components/Section.svelte';
	import AppCard from '../../components/AppCard.svelte';
	import { apps } from '$lib/apps';
	import { reveal } from '../../utils/reveal';
</script>

<Head title="Apps" />
<Section>
	<GradientHeader title="Apps" subtitle="A collection of things I've built in my spare time" />
</Section>
<Section divider />
<Section>
	<div class="py-8" use:reveal>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{#each apps as app (app.url)}
				<AppCard {app} />
			{/each}
		</div>
	</div>
</Section>
<Section divider />
