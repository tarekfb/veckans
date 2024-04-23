<script>
	import { page } from '$app/stores';
	import { findLastMonday } from '../utils';

	const lastMonday = findLastMonday();
	// $page.status = $page.status ? $page.status : 500;
	// if (!$page.error || !$page.error.message)
	// 	// @ts-ignore
	// 	$page.error.message = 'Internal server error';
	const is429 = $page.error?.message.includes('429');
</script>

<main class="py-4 px-6 text-center">
	<h1 class="text-4xl md:text-6xl">
		{is429
			? '429 | Too many requests'
			: `${$page.status} | ${$page.error?.message}`}
	</h1>
	<div class="flex justify-center mt-4 animate-heartbeat">
		<p class="text-9xl text-red-500 my-10">💔</p>
	</div>
	<p class="mt-4 text-xl md:text-2xl text-base-content/75">
		{is429
			? 'För mycket trafik på för kort tid. Försök igen senare.'
			: `Något verkar ha gått snett. Kika på senaste inlägget vettja!`}
	</p>

	{#if !is429}
		<div class="flex justify-center mt-4">
			<a class="btn btn-primary" href={lastMonday}>Senaste inlägget</a>
		</div>
	{/if}
</main>

<style>
	@keyframes heartbeat {
		0% {
			transform: scale(1);
			opacity: 0.7;
		}
		25% {
			transform: scale(1.1);
			opacity: 1;
		}
		50% {
			transform: scale(1);
			opacity: 0.7;
		}
		75% {
			transform: scale(1.1);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 0.7;
		}
	}

	.animate-heartbeat {
		animation: heartbeat 2s infinite;
	}
</style>
