<script lang="ts">
	import '../app.css';

	const title = 'Veckans positiva nyheter';
</script>

<svelte:head>
	<title>{title}</title>
	<meta charset="UTF-8" />
	<meta
		name="description"
		content="Alla gamla och kommande av veckans positiva nyheter."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>
<footer></footer>
<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.bgBright);
	}
	/* Using global here because if not will not properly target html inside of formattedContent object */
	:global(a) {
		color: theme(colors.focus);
	}
	:global(a:hover) {
		color: theme(colors.focusDark);
		text-decoration: underline;
	}
	:global(a:active) {
		text-decoration: underline;
	}
	:global(a:focus) {
		outline: thin dotted;
	}
</style>
