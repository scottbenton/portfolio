<script lang="ts">
	import GradientHeader from '../../components/GradientHeader.svelte';
	import Head from '../../components/Head.svelte';
	import Section from '../../components/Section.svelte';

	interface AppConfig {
		name: string;
		url: string;
		about?: string;
		logoUrl: string;
		tags?: string[];
	}

	const apps: AppConfig[] = [
		{
			name: 'Sentinel',
			url: 'https://sentinel.scottbenton.dev',
			logoUrl: 'https://sentinel.scottbenton.dev/favicon.svg',
			tags: ['Beta'],
			about: 'A tool to help activists and community members keep up with local government.'
		},
		{
			name: 'Iron Link',
			url: 'https://iron-link.com',
			about:
				'The follow up to Iron Fellowship and Crew Link, Iron Link allows people to play the table top roll playing games Ironsworn and Starforged online with friends.',
			logoUrl: 'https://iron-link.com/favicon.svg',
			tags: ['Beta']
		},
		{
			name: 'Iron Fellowship',
			url: 'https://iron-fellowship.scottbenton.dev',
			about: 'An online tool to help people play the Ironsworn tabletop role playing game.',
			logoUrl: 'https://iron-fellowship.scottbenton.dev/theme/sunset.svg'
		},
		{
			name: 'Crew Link',
			url: 'https://starforged-crew-link.scottbenton.dev',
			about: 'An online tool to help people play the Starforged tabletop role playing game.',
			logoUrl: 'https://starforged-crew-link.scottbenton.dev/theme/eidolon.svg'
		},
		{
			name: 'Pomodoro',
			url: 'https://pomodoro.scottbenton.dev',
			logoUrl: 'https://pomodoro.scottbenton.dev/favicon.ico',
			about:
				'A simple productivity timer based on the Pomodoro Technique, with plenty of personalization options.'
		}
	];
</script>

<Head title="Apps" />
<Section>
	<GradientHeader title="Apps" subtitle="A collection of things I've built in my spare time" />
</Section>
<Section divider />
<Section>
	<div class="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 md:grid-cols-3">
		{#each apps as app (app.url)}
			<a
				href={app.url}
				target="_blank"
				class="flex cursor-pointer flex-col items-center justify-start border border-slate-300 bg-slate-100 p-4 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
			>
				{#if app.tags}
					<div class="relative -mb-6 flex gap-2 self-end">
						{#each app.tags as tag (tag)}
							<span
								class="rounded bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900"
							>
								{tag}
							</span>
						{/each}
					</div>
				{/if}
				<img class="h-24 w-24" src={app.logoUrl} alt={`${app.name} Logo`} />
				<div class="flex items-baseline gap-2">
					<h2 class="mt-4 text-xl font-semibold">{app.name}</h2>
				</div>
				{#if app.about}
					<p class="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">{app.about}</p>
				{/if}
			</a>
		{/each}
	</div></Section
>
<Section divider />
