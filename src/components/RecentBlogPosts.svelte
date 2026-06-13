<script lang="ts">
	import { blogPosts } from '../blogContent';
	import { dateToLongString } from '../utils/timeUtils';
	import SectionHeading from './SectionHeading.svelte';

	const recentPosts = blogPosts.slice(0, 3);
</script>

<div class="py-8">
	<SectionHeading index="05" title="Recent Blog Posts" />
	<div class="mt-5 flex flex-col gap-4">
		{#each recentPosts as post (post.slug)}
			<a
				href={`/blog/${post.slug}`}
				class="key-surface group block border border-slate-200 p-5 hover:border-indigo-500 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40"
				style="--lift: 4px"
			>
				<div class="flex items-start justify-between gap-4">
					<p class="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
						{post.title}
					</p>
					<span class="key-icon mt-1 icon-[pixelarticons--arrow-right] text-xl" aria-hidden="true"
					></span>
				</div>
				{#if post.subtitle}
					<p class="mt-1 text-lg">
						{post.subtitle}
					</p>
				{/if}
				<div class="mt-3 flex flex-wrap items-center justify-between gap-2">
					<p class="font-mono text-sm text-slate-500 dark:text-slate-400">
						{dateToLongString(post.datePosted)}
					</p>
					<div class="flex items-center gap-1.5">
						{#each post.tags ?? [] as tag (tag)}
							<span class="pixel-tag">
								{tag}
							</span>
						{/each}
					</div>
				</div>
			</a>
		{/each}
	</div>
	<div class="mt-4 flex justify-end">
		<a
			href="/blog"
			class="key-surface group flex items-center gap-2 border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
		>
			View all posts
			<span class="key-icon icon-[pixelarticons--arrow-right] text-base" aria-hidden="true"></span>
		</a>
	</div>
</div>
