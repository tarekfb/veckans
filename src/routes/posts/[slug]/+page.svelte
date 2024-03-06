<script lang="ts">
	import { decodeAndCleanHtml } from '../../../utils';
	export let data: SmallPost;
	const decodedHtml = decodeAndCleanHtml(data.content);
</script>

<h1 class="text-3xl font-bold mb-5">{data.title}</h1>
<div class="post-container">
	{@html decodedHtml}
</div>

<style lang="postcs">
	/* Using global here because if not will not properly target html inside of formattedContent object */
	:global(.post-container li, .post-container p) {
		margin-bottom: 1em;
	}
</style>
