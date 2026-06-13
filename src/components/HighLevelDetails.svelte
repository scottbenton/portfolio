<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';

	const email = 'scott@scottbenton.dev';
	let copied = $state(false);
	let resetTimeout: ReturnType<typeof setTimeout>;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(email);
		} catch {
			// Clipboard API can be unavailable or denied; fall back to execCommand
			const textarea = document.createElement('textarea');
			textarea.value = email;
			textarea.style.position = 'fixed';
			textarea.style.opacity = '0';
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			textarea.remove();
		}
		copied = true;
		clearTimeout(resetTimeout);
		resetTimeout = setTimeout(() => (copied = false), 2000);
	}
</script>

<div class="flex flex-col py-8">
	<SectionHeading index="02" title="At a Glance" />
	<div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
		<div class="fact">
			<span class="fact-icon icon-[pixelarticons--briefcase]" aria-hidden="true"></span>
			<p><b>Software Engineer</b> at Indeed</p>
		</div>
		<div class="fact">
			<span class="fact-icon icon-[pixelarticons--pin]" aria-hidden="true"></span>
			<p>Philadelphia, PA</p>
		</div>
	</div>
	<div class="mt-4 flex flex-wrap items-center gap-3">
		<a
			class="contact-link key-surface group"
			href="https://www.linkedin.com/in/scott-m-benton/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="icon-[pixelarticons--user] text-xl" aria-hidden="true"></span>
			LinkedIn
			<span class="contact-arrow icon-[pixelarticons--external-link]" aria-hidden="true"></span>
		</a>
		<a
			class="contact-link key-surface group"
			href="https://github.com/scottbenton"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="icon-[pixelarticons--github] text-xl" aria-hidden="true"></span>
			GitHub
			<span class="contact-arrow icon-[pixelarticons--external-link]" aria-hidden="true"></span>
		</a>
		<button class="contact-link key-surface group cursor-pointer" onclick={copyEmail}>
			<span class="icon-[pixelarticons--mail] text-xl" aria-hidden="true"></span>
			{email}
			<span class="icon-swap" aria-hidden="true">
				<span class="contact-arrow icon-[pixelarticons--copy]" class:icon-swap-hidden={copied}
				></span>
				<span
					class="icon-[pixelarticons--check] text-base text-indigo-500 dark:text-indigo-400"
					class:icon-swap-hidden={!copied}
				></span>
			</span>
			<span class="sr-only" role="status"
				>{copied ? 'Email copied to clipboard' : 'Copy email'}</span
			>
		</button>
	</div>
</div>

<style>
	@reference "../app.css";

	.fact {
		@apply flex items-center gap-3 border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/50;
	}
	.fact > p {
		@apply text-lg text-slate-700 dark:text-slate-200;
	}
	.fact-icon {
		@apply shrink-0 text-2xl text-indigo-600 dark:text-indigo-400;
	}

	.contact-link {
		@apply flex items-center gap-2 border border-slate-300 px-4 py-2.5 text-lg font-medium text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300;
	}
	.contact-arrow {
		@apply text-base text-slate-400 transition-colors duration-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400;
	}
</style>
