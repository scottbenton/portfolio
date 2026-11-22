<script lang="ts">
	interface Props {
		src: string;
		title: string;
		height?: string;
		maxWidth?: string;
	}
	const { src, title, height = '600px', maxWidth = '100%' }: Props = $props();
</script>

<iframe
	{src}
	{title}
	loading="lazy"
	class="my-6 mx-auto block w-full rounded-lg border border-slate-300 dark:border-slate-800"
	style="height: {height}; max-width: {maxWidth};"
></iframe>
