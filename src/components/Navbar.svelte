<script lang="ts">
	import MoonIcon from '../components/MoonIcon.svelte';
	import SunIcon from '../components/SunIcon.svelte';
	import { onMount } from 'svelte';
	import { findLastMonday, newsAuthor } from '../utils';
	
	const lastMonday = findLastMonday();

	let invertedPreferral = '';
	onMount(() => {
		invertedPreferral = window?.matchMedia?.('(prefers-color-scheme:dark)')
			?.matches
			? 'light'
			: 'dark';
	});
	// later replace this with posts from store, and insert all in details block
</script>

<div class="navbar sticky top-0 left-0 px-4 bg-base-200 py-2">
	<div
		class="flex-1 flex flex-col py-2 md:flex-row items-start md:items-center justify-start text-left overflow-hidden"
	>
		<h1>
			<a
				class="btn-ghost py-1 px-1.5 rounded-lg hover:rounded-lg focus:rounded-lg active:rounded-lg text-2xl justify-start text-start font-mono md:text-6xl link-primary"
				href="/">Veckans</a
			>
		</h1>
		<h2 class="text-xs px-2 opacity-75 md:text-3xl">
			Text:
			<a
				href="https://www.reddit.com/user/{newsAuthor}"
				class="link">@{newsAuthor}</a
			>
		</h2>
	</div>
	<div class="flex-none font-semibold">
		<ul class="menu menu-horizontal md:text-3xl">
			<li><a href="/about" class="p-1 md:mr-6 md:p-4">Om sidan</a></li>
			<li><a href={`/${lastMonday}`} class="p-1 md:p-4">Senaste</a></li>
			<!-- <li>
				<details>
					<summary>Nyheter</summary>
					<ul class="p-2 bg-base-100 rounded-t-none">
					</ul>
				</details>
			</li> -->
		</ul>
	</div>
	<label class="swap swap-rotate md:m-4 btn-ghost p-2 rounded-lg">
		<input type="checkbox" class="theme-controller" value={invertedPreferral} aria-label="theme toggle" />
		<SunIcon />
		<MoonIcon />
	</label>
</div>
