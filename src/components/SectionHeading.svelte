<script lang="ts">
	interface Props {
		title: string;
	}
	const { title }: Props = $props();
</script>

<div class="flex items-center gap-3">
	<h2 class="font-display text-3xl text-slate-900 dark:text-white">{title}</h2>
	<div class="ml-1 h-px flex-1 bg-slate-200 dark:bg-slate-800" aria-hidden="true"></div>
	<span class="h-2 w-2 shrink-0 bg-indigo-500" aria-hidden="true"></span>
</div>
