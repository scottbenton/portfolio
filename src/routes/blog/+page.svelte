<script lang="ts">
	import GradientHeader from '../../components/GradientHeader.svelte';
	import Section from '../../components/Section.svelte';
	import { blogPosts } from '../../blogContent/index';
	import { dateToLongString } from '../../utils/timeUtils';
	import Head from '../../components/Head.svelte';
	import { reveal } from '../../utils/reveal';
</script>

<Head title="Blog" />
<Section>
	<GradientHeader title="Blog" />
</Section>
<Section divider />
<Section>
	<div class="py-8" use:reveal>
		<div class="flex flex-col gap-4">
			{#each blogPosts as post (post.slug)}
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
	</div>
</Section>
<Section divider />
