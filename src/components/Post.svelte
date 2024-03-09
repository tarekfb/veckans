<script lang="ts">
	import { processHtml, formatDateReadable } from '../utils';
	import MdiKeyboardBackspace from 'virtual:icons/mdi/KeyboardBackspace';
	import MdiReddit from 'virtual:icons/mdi/reddit';
	import PostTitle from './PostTitle.svelte';

	export let post: { post: RawPost };
	const { selftext_html, url, created } = post.post.data;

	export let index = -1;
	const truncate = (text: string, limit: number) => {
		if (text.split(' ').length > limit) {
			const truncatedText = text.split(' ').slice(0, limit).join(' ');
			return `${truncatedText}...`;
		}
		return text;
	};

	let html = processHtml(selftext_html);
	if (index > 0) html = truncate(html, 50);
</script>

<div
	class={`${index === -1 && 'sticky'} flex flex-col gap-y-1 justify-center items-stretch w-full bg-gray-100 top-0 left-0 pb-2 pt-1`}
>
	{#if index === -1}
		<div class="flex justify-between items-center gap-2">
			<PostTitle {post} />
			<a
				href="/"
				class="p-1 text-white bg-blue-500 hover:bg-blue-600 rounded-2xl"
			>
				<MdiKeyboardBackspace class="text-xl " />
			</a>
		</div>
	{:else}
		<PostTitle {post} />
	{/if}

	<div class="flex items-center gap-2 text-sm">
		<a href={url} class="text-2xl" placeholder="Läs på reddit.com"
			><MdiReddit /></a
		>
		|
		<h2 class="font-mono whitespace-nowrap">
			{formatDateReadable(created)}
		</h2>
		|
		<span>
			Författare:
			<a href="https://www.reddit.com/user/smurfjojjo123">@smurfjojjo123</a>
		</span>
	</div>

	<hr class="w-full border-t-2 my-2 border-gray-300" />

</div>

<div class={`post-container ${index > 0 && 'text-gradient'}`}>
	{@html html}
</div>

<style lang="postcs">
	/* global because if not will not properly target html inside of html object */
	:global(.post-container p, .post-container li) {
		margin-bottom: 1em;
	}

	:global(.post-container) {
		overflow: hidden;
	}

	.text-gradient {
		background-clip: text;
		color: transparent;
		background-image: linear-gradient(
			to bottom,
			#000000,
			#a1a1a1
		); /* Adjust gradient colors as needed */
	}
</style>
