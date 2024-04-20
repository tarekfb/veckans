<script lang="ts">
	import MdiArrownDownThin from 'virtual:icons/mdi/ArrowDownThin';
	import MdiArrownUpThin from 'virtual:icons/mdi/ArrowUpThin';
	import MdiLinkVariant from 'virtual:icons/mdi/LinkVariant';
	import { decodeHtmlEntities, newsAuthor } from '../utils';
	import SvelteMarkdown from 'svelte-markdown';
	export let level: number;
	export let author: string;
	export let body: string;
	export let score: number;
	export let url: string;
	export let gradient: boolean = false;

	body = decodeHtmlEntities(body);
</script>

<li
	style={`margin-left:${level * 10}px`}
	class={`${level === 0 ? 'mt-5' : 'mt-2'} ${gradient && 'text-gradient'}`}
>
	<div class="flex justify-between">
		<div class="flex items-center space-x-2">
			<h2 class={`card-title ${author === newsAuthor && 'text-red-600'}`}>
				{author} 
			</h2>
			<a
				href={url}
				aria-label="reddit comment link"
				class="link text-primary flex items-center justify-center"
				placeholder="Läs på reddit.com"><MdiLinkVariant /></a
			>
		</div>
		<div class="flex justify-between space-x-2 items-center">
			<span>{score}</span>
			{#if score > 0}
				<MdiArrownUpThin class="text-primary" />
			{:else if score < 0}
				<MdiArrownDownThin class="text-red-400" />
			{/if}
		</div>
	</div>
	<div class="break-words max-w-full overflow-x-hidden markdown">
		<SvelteMarkdown source={body} />
	</div>

	<!-- <p class="break-words max-w-full overflow-x-hidden">{body}</p> -->
</li>

<style>
	/* global to target markdown content */
	:global(blockquote) {
		font-style: italic;
		margin-bottom: 0.5em;
	}
	:global(.markdown p) {
		margin-bottom: 0.5em;
	}
</style>
