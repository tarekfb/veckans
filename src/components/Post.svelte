<script lang="ts">
	import { decodeAndCleanHtml, formatDate } from '../utils';
	import MdiKeyboardReturn from 'virtual:icons/mdi/KeyboardReturn';
	import MdiAttachment from 'virtual:icons/mdi/attachment';
	import PostTitle from './PostTitle.svelte';

	export let post: { post: RawPost };
	const { selftext_html, url, created } = post.post.data;

	export let index = 1;
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

{#if index === 0}
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
	<a href={url}><MdiAttachment /></a>
	<h2 class="font-mono">
		{formatDate(created)}
	</h2>
</div>

<div class="post-container custom-gradient ">
	{@html html}
</div>

<style lang="postcs">
	/* Using global here because if not will not properly target html inside of formattedContent object */
	:global(.post-container li, .post-container p) {
		margin-bottom: 1em;
	}

	.custom-gradient {
		background-clip: text;
		color: transparent;
		background-image: linear-gradient(to bottom, #000000, #a1a1a1); /* Adjust gradient colors as needed */
	  }
</style>
