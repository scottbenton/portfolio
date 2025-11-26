<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/IconFilled.svg';

	import '@fontsource-variable/source-sans-3';
	import '@fontsource/jersey-15';
	import Section from '../components/Section.svelte';
	import Header from '../components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col overflow-hidden font-body">
	<Section>
		<Header />
	</Section>

	<main class="relative flex flex-col overflow-hidden">
		{@render children?.()}
	</main>
</div>
