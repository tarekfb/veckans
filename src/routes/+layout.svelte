<script lang="ts">
	import '../app.css';
	export let title = 'Veckans goda nyheter';
</script>

<svelte:head>
	<link rel="stylesheet" href="../app.css" />
	<title>{title}</title>
</svelte:head>

<p class="text-xl block text-end"><a href="/">Hem</a></p>
<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
		padding: 2em;
	}
	/* Using global here because if not will not properly target html inside of formattedContent object */
	:global(a) {
		color: #007bff;
	}
	:global(a:hover) {
		color: #0051a8; /* Darker blue for hover */
		text-decoration: underline;
	}
	:global(a:active) {
		text-decoration: underline;
	}
	:global(a:focus) {
		outline: thin dotted;
	}
	:global(a:visited) {
		color: #4a90e2;
	}
</style>
