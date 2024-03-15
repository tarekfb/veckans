<script lang="ts">
	import '../app.css';
	import MoonIcon from '../components/MoonIcon.svelte';
	import SunIcon from '../components/SunIcon.svelte';
	import { onMount } from 'svelte';

	let invertedPreferral = '';
	onMount(() => {
		invertedPreferral = window?.matchMedia?.('(prefers-color-scheme:dark)')
			?.matches
			? 'light'
			: 'dark';
	});
</script>

<svelte:head>
	<title>Veckans positiva nyheter</title>
	<meta charset="UTF-8" />
	<meta
		name="description"
		content="Alla gamla och kommande av veckans positiva nyheter."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>
<slot />

<label class="swap swap-rotate fixed bottom-5 right-5">
	<input type="checkbox" class="theme-controller" value={invertedPreferral} />
	<SunIcon />
	<MoonIcon />
</label>
