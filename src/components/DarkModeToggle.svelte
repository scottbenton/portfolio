<script lang="ts">
	import { onMount } from 'svelte';

	let currentTheme = $state<'light' | 'dark'>('light');
	function applyTheme() {
		let shouldUseDarkMode = false;
		const doesPreferDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (localStorage.theme === 'dark' || !('theme' in localStorage && doesPreferDarkColorScheme)) {
			shouldUseDarkMode = true;
		}

		currentTheme = shouldUseDarkMode ? 'dark' : 'light';

		document.documentElement.classList.toggle('dark', shouldUseDarkMode);
	}

	function setTheme(theme: 'light' | 'dark') {
		localStorage.theme = theme;
		applyTheme();
	}

	onMount(() => {
		applyTheme();
	});
</script>

<button
	class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-slate-800 text-white md:-mr-4 dark:border-slate-800 dark:bg-slate-200 dark:text-slate-800"
	onclick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
>
	{#if currentTheme === 'dark'}
		<span class="icon-[pixelarticons--sun] text-xl">
			<span class="sr-only">Light Mode</span>
		</span>
	{:else}
		<span class="icon-[pixelarticons--moon] text-xl">
			<span class="sr-only">Dark Mode</span>
		</span>
	{/if}
</button>
