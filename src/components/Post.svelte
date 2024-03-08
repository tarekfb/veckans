<script lang="ts">
	import { decodeAndCleanHtml, formatDateReadable } from '../utils';
	import MdiKeyboardReturn from 'virtual:icons/mdi/KeyboardReturn';
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

	let html = decodeAndCleanHtml(selftext_html);
	if (index > 0) html = truncate(html, 50);
</script>

{#if index !== -1}
	<PostTitle {post} />
{:else}
	<div class="flex justify-between items-start gap-3">
		<PostTitle {post} />
		<a href="/">
			<MdiKeyboardReturn class="text-4xl text-blue-500 hover:text-blue-600" />
		</a>
	</div>
{/if}

<div class="flex items-center gap-2 my-2 text-xl">
	<a href={url} class="text-3xl" placeholder="Läs på reddit.com"
		><MdiReddit /></a
	>
	|
	<h2 class="font-mono text-lg">
		{formatDateReadable(created)}
	</h2>
	|
	<span>
		Författare:
		<a href="https://www.reddit.com/user/smurfjojjo123">@smurfjojjo123</a>
	</span>
</div>

<div class={`post-container ${index > 0 && 'text-gradient'}`}>
	{@html html}
</div>

<style lang="postcs">
	/* Using global here because if not will not properly target html inside of formattedContent object */
	:global(.post-container li, .post-container p) {
		margin-bottom: 1em;
	}
	/* li > :not(a) add this later */

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
