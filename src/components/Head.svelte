<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		openGraphImageSrc?: string;
	}

	const { title, description, openGraphImageSrc }: Props = $props();

	const fullTitle = $derived(title ? `${title} | Scott Benton` : 'Scott Benton');
	const ogImage = $derived(openGraphImageSrc ?? 'https://scottbenton.dev/og.jpg');
</script>

<svelte:head>
	<title>{fullTitle}</title>
	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
		<meta name="twitter:description" content={description} />
	{/if}
	<meta property="og:title" content={fullTitle} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
