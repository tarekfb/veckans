<script lang="ts">
	import '../app.css';
	import MoonIcon from '../components/MoonIcon.svelte';
	import SunIcon from '../components/SunIcon.svelte';
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
<slot />

<label class="swap swap-rotate fixed bottom-5 right-5">
	<input type="checkbox" class="theme-controller" value="light" />
	<SunIcon />
	<MoonIcon />
</label>
