<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
</script>

<div class="py-8">
	<SectionHeading index="03" title="Experience" />
	<div class="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-[auto_1fr] sm:gap-y-8">
		<p class="date">2022-Present</p>
		<div class="job-details">
			<h3>Indeed</h3>
			<p class="role">Software Engineer</p>
			<p>
				At Indeed, I work as a part of our access management team, building and maintaining critical
				components of our authorization systems that allow large employers to better organize their
				hiring efforts on our platform. I work closely with cross-functional teams such as design
				and product management to deliver stable, scalable software that meets the needs of our
				employers, and the needs of other teams.
			</p>
			<div class="mt-3 flex flex-wrap gap-1.5">
				{#each ['React', 'Java', 'GraphQL', 'AWS'] as tech (tech)}
					<span class="pixel-tag">{tech}</span>
				{/each}
			</div>
		</div>
		<p class="date">2021-2022</p>
		<div class="job-details">
			<h3>InFlight Integrations</h3>
			<p class="role">Software Developer</p>
			<p>
				At InFlight, I helped to modernize HR platforms by building custom, user friendly,
				accessible applications that integrated with existing HR systems. After our acquisition by
				Skuid, I continued supporting our companies largest client, delivering new features on tight
				timelines.
			</p>
			<div class="mt-3 flex flex-wrap gap-1.5">
				{#each ['Angular', 'A11y'] as tech (tech)}
					<span class="pixel-tag">{tech}</span>
				{/each}
			</div>
		</div>
		<p class="date">2019-2021</p>
		<div class="job-details">
			<h3>WSFS Bank</h3>
			<p class="role">Software Developer Intern / Software Developer</p>
			<p>
				At WSFS, I built and maintained many different internal tools that supported different teams
				within the bank. I was responsible for building and designing new features, fixing bugs, and
				transitioning our department to using React.
			</p>
			<div class="mt-3 flex flex-wrap gap-1.5">
				{#each ['React', 'Java'] as tech (tech)}
					<span class="pixel-tag">{tech}</span>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@reference "../app.css";

	.date {
		@apply pt-0.5 font-mono text-sm leading-6 text-slate-500 sm:text-right dark:text-slate-400;
	}
	.job-details {
		@apply relative mb-6 border-l-2 border-slate-200 pl-5 transition-colors duration-300 sm:mb-0 dark:border-slate-800;
	}
	.job-details:hover {
		@apply border-indigo-500 dark:border-indigo-400;
	}
	/* Pixel node on the timeline rail */
	.job-details::before {
		content: '';
		position: absolute;
		left: -5px;
		top: 8px;
		width: 8px;
		height: 8px;
		background-color: var(--color-indigo-500);
	}
	.job-details h3 {
		@apply text-xl font-bold text-slate-900 dark:text-white;
	}
	.job-details .role {
		@apply font-medium text-indigo-700 dark:text-indigo-400;
	}
	.job-details p:not(.role) {
		@apply mt-1 max-w-prose leading-relaxed;
	}
</style>
