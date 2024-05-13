<script lang="ts">
	import Post from '../components/Post.svelte';
	import { PostType } from '../utils';
	import ReadFull from '../components/ReadFull.svelte';
	import { maxCommentsForFocused } from '../utils';

	export let data;
	const firstPost = data.posts[0];
</script>

<main class="bg-base-200">
	<div class="p-4 md:max-w-screen-xl md:mx-auto">
		<div
			class="md:h-auto md:max-w-full flex flex-col p-3 bg-base-100 mb-4 rounded-lg shadow-lg"
		>
			<Post
				post={firstPost}
				postType={PostType.InFocus}
				comments={data.commentsOnFocusedPost.comments}
			/>

			<ReadFull created={firstPost.data.created} />
		</div>

		<div class="md:grid md:grid-cols-3 md:gap-4">
			{#each data.posts as post, index (index)}
				{#if index > 0}
					<div
						class="md:h-auto md:max-w-full flex flex-col justify-between p-3 bg-base-100 mb-4 rounded-lg shadow-lg"
					>
						<Post
							{post}
							postType={index === 0 ? PostType.InFocus : PostType.OutOfFocus}
							comments={data.commentsOnFocusedPost.comments}
						/>

						{#if index > PostType.InFocus || (post.data.num_comments > maxCommentsForFocused && index === PostType.InFocus)}
							<ReadFull created={post.data.created} />
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</main>
