<script lang="ts">
	import '../app.css';

	const title = 'Veckans positiva nyheter';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<footer></footer>
<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
		padding: 1em;
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
</style>
