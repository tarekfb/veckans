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

<div class="fixed flex justify-between items-center z-1 w-full bg-gray-200 top-0 left-0 pt-2 pb-1 px-2">
	<div class="flex flex-col gap-y-1">
		{#if index !== -1}
			<PostTitle {post} />
		{:else}
			<div class="flex justify-between items-start gap-3">
				<PostTitle {post} />
			</div>
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
	</div>
	<a href="/" class="p-1 text-white bg-blue-500 hover:bg-blue-600 rounded-2xl">
		<MdiKeyboardBackspace class="text-3xl " />
	</a>
</div>

<div class={`post-container ${index > 0 && 'text-gradient'}`}>
	{@html html}
</div>

<style lang="postcs">
	/* global because if not will not properly target html inside of html object */
	:global(.post-container p) {
		margin-bottom: 1em;
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
