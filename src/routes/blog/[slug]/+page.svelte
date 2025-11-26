<script lang="ts">
	import GradientHeader from '../../../components/GradientHeader.svelte';
	import Head from '../../../components/Head.svelte';
	import Section from '../../../components/Section.svelte';
	import { dateToLongString } from '../../../utils/timeUtils';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { post, content } = data;
</script>

<Head title={post.title} description={post.subtitle} />
<Section>
	<GradientHeader title={post.title} subtitle={post.subtitle} />
</Section>
<Section divider />
<Section>
	<div class="mx-auto prose py-8 prose-slate dark:prose-invert">
		<p class="font-bold">{dateToLongString(post.datePosted)}</p>
		{#await content then Module}
			<Module.default />
		{/await}
	</div>
</Section>
<Section divider />
