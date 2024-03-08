<script lang="ts">
	import { decodeAndCleanHtml } from '../utils';
	export let post: SmallPost;
	export let isTruncated = false;

	const truncate = (text: string, limit: number) => {
		if (text.split(' ').length > limit) {
			const truncatedText = text.split(' ').slice(0, limit).join(' ');
			return `${truncatedText}...`;
		}
		return text;
	};

	let html = decodeAndCleanHtml(post.content);
	if (isTruncated) html = truncate(html, 50);
</script>

<h1 class="text-3xl font-bold mb-5">{post.title}</h1>
<div class="post-container">
	{@html html}
</div>

<style lang="postcs">
	/* Using global here because if not will not properly target html inside of formattedContent object */
	:global(.post-container li, .post-container p) {
		margin-bottom: 1em;
	}
</style>
