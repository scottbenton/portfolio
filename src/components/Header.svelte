<script lang="ts">
	import { page } from '$app/state';
	import DarkModeToggle from './DarkModeToggle.svelte';
	import IconTransparent from './IconTransparent.svelte';

	const links = [
		{ href: '/', label: 'About Me' },
		{ href: '/apps', label: 'Apps' },
		{ href: '/blog', label: 'Blog' }
	];

	function isActive(href: string, pathname: string): boolean {
		return href === '/' ? pathname === '/' : pathname.startsWith(href);
	}
</script>

<header>
	<div class="flex items-center justify-between gap-2 py-1">
		<a href="/" aria-label="Home" class="logo-link">
			<IconTransparent />
		</a>
		<nav class="flex flex-wrap items-center gap-x-2">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="nav-link"
					class:active={isActive(link.href, page.url.pathname)}
					aria-current={isActive(link.href, page.url.pathname) ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</nav>
		<DarkModeToggle />
	</div>
</header>

<style>
	@reference "../app.css";

	.logo-link {
		@apply transition-opacity duration-200 hover:opacity-80;
	}

	.nav-link {
		@apply px-2 py-3 text-slate-700 dark:text-slate-200;
		background-image: linear-gradient(var(--color-indigo-500), var(--color-indigo-500));
		background-size: 0% 2px;
		background-repeat: no-repeat;
		background-position: left 8px bottom 8px;
		transition:
			background-size 0.25s var(--ease-out-quart),
			color 0.25s var(--ease-out-quart);
	}
	.nav-link:hover {
		@apply text-slate-900 dark:text-white;
		background-size: calc(100% - 16px) 2px;
	}
	.nav-link.active {
		@apply font-semibold text-slate-900 dark:text-white;
		background-size: calc(100% - 16px) 2px;
	}
</style>
