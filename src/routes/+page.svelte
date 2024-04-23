<script lang="ts">
	import Post from '../components/Post.svelte';
	import { PostType } from '../utils';
	import ReadFull from '../components/ReadFull.svelte';
	import { maxCommentsForFocused } from '../utils';

	export let data;
</script>

<main class="p-4 bg-base-200">
	<ol>
		{#each data.posts as post, index (index)}
			<li class="flex flex-col p-3 bg-base-100 mb-4 rounded-lg shadow-lg">
				<Post
					{post}
					postType={index === 0 ? PostType.InFocus : PostType.OutOfFocus}
					comments={data.commentsOnFocusedPost.comments}
				/>

				{#if index > 0 || (post.data.num_comments > maxCommentsForFocused && index === PostType.InFocus)}
					<ReadFull created={post.data.created} />
				{/if}
			</li>
		{/each}
	</ol>
</main>
