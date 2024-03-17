<script lang="ts">
	import MdiArrownDownThin from 'virtual:icons/mdi/ArrowDownThin';
	import MdiArrownUpThin from 'virtual:icons/mdi/ArrowUpThin';
	import MdiLinkVariant from 'virtual:icons/mdi/LinkVariant';
	export let level: number;
	export let author: string;
	export let body: string;
	export let score: number;
	export let url: string;
</script>

<li
	style={`margin-left:${level * 10}px`}
	class={`${level === 0 ? 'mt-5' : 'mt-2'}`}
>
	<div class="flex justify-between">
		<div class="flex items-center space-x-2">
			<h2 class="card-title">{author}</h2>
			<a
				href={url}
				class="link text-primary flex items-center justify-center"
				placeholder="Läs på reddit.com"><MdiLinkVariant /></a
			>
		</div>
		<div class="flex justify-between space-x-2 items-center">
			<span>{score}</span>
			<div class="flex flex-col justify-center">
				<MdiArrownUpThin />
				<MdiArrownDownThin />
			</div>
		</div>
	</div>
	<p>{body}</p>
</li>
