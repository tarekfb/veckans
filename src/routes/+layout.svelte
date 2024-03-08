<script lang="ts">
	import '../app.css';
	import MdiHome from 'virtual:icons/mdi/home';

	export let title = 'Veckans goda nyheter';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<nav class="flex justify-between mb-5">
	<h1 class="text-4xl font-semibold">Alla samlade positiva nyheter</h1>
	<div class="flex flex-row gap-2">
		<a href="/" class="hover:underline"><MdiHome font-size="3em" class="bgt"/></a>
	</div>
</nav>
<footer></footer>
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
