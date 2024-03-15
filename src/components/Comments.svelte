<script lang="ts">
	import { processHtml } from '../utils';

	export let comments: PostComment[];

	comments.forEach((comment) => {
		comment.data.body_html = processHtml(comment.data.body_html);
		console.log(comment.data.replies) // get replies from comment
	});

</script>

{#each comments as comment, index (index)}
	<li class="">
		{comment.data.body_html}
	</li>
{/each}
