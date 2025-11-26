<script>
	import DarkModeToggle from './DarkModeToggle.svelte';
	import IconTransparent from './IconTransparent.svelte';
</script>

<header>
	<div class="flex items-center justify-between gap-2">
		<IconTransparent />
		<div class="flex flex-wrap items-center gap-x-4">
			<div class="flex items-center gap-3 text-slate-700 dark:text-slate-300">
				<a href="/">About Me</a>
				<a href="/apps">Apps</a>
				<a href="/blog">Blog</a>
			</div>
		</div>
		<DarkModeToggle />
	</div>
</header>

<style>
	@reference "../app.css";

	header a {
		@apply cursor-pointer px-2 py-3 text-slate-700 hover:underline dark:text-slate-200;
	}
</style>
