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
	class="key-surface flex h-9 w-9 cursor-pointer items-center justify-center border border-slate-300 text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
	onclick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
>
	<span class="icon-swap" aria-hidden="true">
		<span class="icon-[pixelarticons--sun] text-xl" class:icon-swap-hidden={currentTheme !== 'dark'}
		></span>
		<span
			class="icon-[pixelarticons--moon] text-xl"
			class:icon-swap-hidden={currentTheme === 'dark'}
		></span>
	</span>
	<span class="sr-only">{currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
</button>
