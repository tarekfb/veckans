<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<title>Veckans positiva nyheter</title>
	<meta charset="UTF-8" />
	<meta
		name="description"
		content="Alla gamla och kommande av veckans positiva nyheter från /r/sweden."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>
<Navbar />
<slot />
