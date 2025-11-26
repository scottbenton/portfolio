<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		openGraphImageSrc?: string;
	}

	const { title, description, openGraphImageSrc }: Props = $props();
</script>

<svelte:head>
	<title>{title ? `${title} | Scott Benton` : 'Scott Benton'}</title>
	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
	{/if}
	<meta property="og:title" content={title} />
	{#if openGraphImageSrc}
		<meta property="og:image" content={openGraphImageSrc} />
	{/if}
</svelte:head>
