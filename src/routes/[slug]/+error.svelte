<script>
	import { page } from '$app/stores';
	import MdiHeartBroken from 'virtual:icons/mdi/HeartBroken';
	import { findLastMonday } from '../../utils';

	const lastMonday = findLastMonday();
</script>

<main class="py-4 px-6 text-center">
	<h1 class="text-3xl">{$page.status} | {$page.error?.message}</h1>
	<div class="flex justify-center mt-4">
		<MdiHeartBroken class="text-6xl" />
	</div>
	<p class="mt-4 text-xl">
		Något verkar ha gått snett. Kika på senaste inlägget vettja!
	</p>

	<div class="flex justify-center mt-4">
		<a class="btn btn-primary" href={lastMonday}>Senaste inlägget</a>
	</div>
</main>
