<script lang="ts">
	export let title = 'Veckans goda nyheter';
</script>

<svelte:head>
	<link rel="stylesheet" href="global.css" />
	<title>{title}</title>
</svelte:head>

<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
