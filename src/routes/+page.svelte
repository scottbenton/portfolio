<script lang="ts">
	import HighLevelDetails from '../components/HighLevelDetails.svelte';
	import JobDetailsSection from '../components/JobDetailsSection.svelte';
	import GradientHeader from '../components/GradientHeader.svelte';
	import Section from '../components/Section.svelte';
	import MostRecentBlogPost from '../components/MostRecentBlogPost.svelte';
	import Head from '../components/Head.svelte';
	import AboutMe from '../components/AboutMe.svelte';
</script>

{#snippet resumeLink()}
	<a
		class="rounded-xl bg-white px-5 py-3 text-xl font-semibold text-indigo-700 shadow-md shadow-indigo-950 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg"
		href="/Scott Benton - Software Engineer.pdf"
		target="__blank"
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
	<AboutMe />
</Section>
<Section divider />
<Section>
	<HighLevelDetails />
</Section>
<Section divider />
<Section>
	<JobDetailsSection />
</Section>
<Section divider />
<Section>
	<MostRecentBlogPost />
</Section>
<Section divider />
