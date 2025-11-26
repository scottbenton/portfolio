<script lang="ts">
	import { blogPosts } from '../blogContent';
	import { dateToLongString } from '../utils/timeUtils';

	const post = blogPosts[0];
</script>

<h2 class="pt-6 pb-2 text-xl font-semibold">Most Recent Blog Post</h2>
<a
	href={`/blog/${post.slug}`}
	class="block cursor-pointer py-6 transition-colors duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-900"
>
	<p class=" text-xl font-semibold text-indigo-700 dark:text-indigo-400">
		{post.title}
	</p>
	{#if post.subtitle}
		<p class="text-lg">
			{post.subtitle}
		</p>
	{/if}
	<div class="mt-2 flex items-center justify-between">
		<p>{dateToLongString(post.datePosted)}</p>
		<div class="flex items-center gap-1">
			{#each post.tags as tag (tag)}
				<span
					class="rounded bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900"
				>
					{tag}
				</span>
			{/each}
		</div>
	</div>
</a>
