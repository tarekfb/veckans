<script lang="ts">
	import MoonIcon from '../components/MoonIcon.svelte';
	import SunIcon from '../components/SunIcon.svelte';
	import { onMount } from 'svelte';
	import MdiOpenInNew from 'virtual:icons/mdi/OpenInNew';
	import MdiWhiteBalanceSunny from 'virtual:icons/mdi/WhiteBalanceSunny';
	import MdiMoonWaningCrescent from 'virtual:icons/mdi/MoonWaningCrescent';

	import {
		findLastMonday,
		formatDate,
		formatDateReadable,
		newsAuthor,
	} from '../utils';

	const lastMonday = findLastMonday();

	let invertedPreferral = '';
	onMount(() => {
		invertedPreferral = window?.matchMedia?.('(prefers-color-scheme:dark)')
			?.matches
			? 'light'
			: 'dark';
	});

	export let posts: RawPost[] = [];
</script>

<navbar class="navbar sticky top-0 left-0 pl-3 pr-0 md:px-4 bg-base-200 z-10">
	<div
		class="flex-1 flex flex-col items-start md:flex-row md:items-center overflow-hidden my-2"
	>
		<a
			class="navbar-item ml-0 mr-0 p-1.5 h-full text-2xl font-mono font-semibold md:px-2 md:text-6xl link-primary"
			href="/"
		>
			<h1>Veckans</h1>
		</a>
		<h2 class="text-xs text-base-content/75 md:text-2xl">
			Text:
			<a
				href="https://www.reddit.com/user/{newsAuthor}"
				class="link text-base-content/75">@{newsAuthor}</a
			>
		</h2>
	</div>
	<div class="flex justify-end flex-2 px-2">
		<div class="flex flex-row items-center justify-center">
			<a href="/about" class="navbar-item navbar-item-padding">Om sidan</a>
			{#if posts.length === 0}
				<a href="/{lastMonday}" class="navbar-item navbar-item-padding"
					>Senaste</a
				>
			{:else}
				<div class="dropdown dropdown-end">
					<div
						tabindex="0"
						role="button"
						class="navbar-item navbar-item-padding"
					>
						Alla inlägg
					</div>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu flex-nowrap dropdown-content z-[1] p-2 bg-base-100 rounded-box w-52 mt-4 border-solid border-2 border-primary max-h-96 overflow-y-scroll overflow-x-hidden"
					>
						{#each posts as post, index}
							{#if index === 0}
								<li>
									<a
										href={`/${formatDate(post.data.created_utc)}`}
										class="text-lg navbar-item navbar-item-padding font-semibold flex justify-between w-full"
									>
										<span>Senaste</span>
										<MdiOpenInNew class="text-2xl text-primary" />
									</a>
								</li>
							{:else}
								<li>
									<div class="divider my-1 px-0 pointer-events-none" aria-disabled="true" ></div>
									<a
										href={`/${formatDate(post.data.created_utc)}`}
										class="text-lg navbar-item navbar-item-padding font-normal flex justify-between w-full"
									>
										<span>{formatDateReadable(post.data.created_utc)}</span>
										<MdiOpenInNew class="text-2xl text-primary" />
									</a>
								</li>
							{/if}
						{/each}
					</ul>
				</div>
			{/if}
			<label class="swap swap-rotate navbar-item m-0 h-10 w-10">
				<input
					type="checkbox"
					class="theme-controller"
					value={invertedPreferral}
					aria-label="theme toggle"
				/>
				<SunIcon />
				<MoonIcon />
			</label>
		</div>
	</div>
</navbar>
