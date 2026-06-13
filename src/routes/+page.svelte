<script lang="ts">
	import HighLevelDetails from '../components/HighLevelDetails.svelte';
	import JobDetailsSection from '../components/JobDetailsSection.svelte';
	import GradientHeader from '../components/GradientHeader.svelte';
	import Section from '../components/Section.svelte';
	import RecentBlogPosts from '../components/RecentBlogPosts.svelte';
	import Head from '../components/Head.svelte';
	import AboutMe from '../components/AboutMe.svelte';
	import FeaturedApps from '../components/FeaturedApps.svelte';
	import { reveal } from '../utils/reveal';
</script>

{#snippet resumeLink()}
	<a
		class="btn-pixel pixel-btn"
		href="/Scott Benton - Software Engineer.pdf"
		target="_blank"
		rel="noopener noreferrer"
	>
		View my Resumé
	</a>
{/snippet}

<Head />
<Section>
	<GradientHeader title="Scott Benton" subtitle="Software Engineer" cta={resumeLink} />
</Section>
<Section divider />
<Section>
	<div use:reveal>
		<AboutMe />
	</div>
</Section>
<Section divider />
<Section>
	<div use:reveal>
		<HighLevelDetails />
	</div>
</Section>
<Section divider />
<Section>
	<div use:reveal>
		<JobDetailsSection />
	</div>
</Section>
<Section divider />
<Section>
	<div use:reveal>
		<FeaturedApps />
	</div>
</Section>
<Section divider />
<Section>
	<div use:reveal>
		<RecentBlogPosts />
	</div>
</Section>
<Section divider />

<style>
	@reference "../app.css";

	.pixel-btn {
		@apply inline-block bg-white px-6 py-2.5 font-display text-2xl text-indigo-950;
	}
</style>
