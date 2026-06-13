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
	<div class="sticky top-0 z-40 bg-white/85 backdrop-blur-md dark:bg-slate-950/85">
		<Section>
			<Header />
		</Section>
	</div>

	<main class="relative flex flex-1 flex-col overflow-hidden">
		{@render children?.()}
		<!-- Carries the column rails to the bottom of the viewport on short pages -->
		<div class="flex flex-1 flex-col" aria-hidden="true">
			<div
				class="mx-auto w-full max-w-3xl flex-1 border-x border-slate-300 dark:border-slate-800"
			></div>
		</div>
	</main>
</div>
