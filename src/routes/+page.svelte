<script lang="ts">
	import type { PageData } from './$types';
	import Post from '../components/Post.svelte';
	import { PostType, formatDate } from '../utils';
	import ReadFull from '../components/ReadFull.svelte';
	import { maxCommentsForFocused } from '../utils';

	export let data: PageData;
</script>

<main class="p-4 bg-base-200">
	<ol>
		{#each data.posts as post, index (index)}
			<li class="flex flex-col p-3 bg-base-100 mb-4 rounded-lg shadow-lg">
				<a
					class="text-start cursor-pointer"
					href={'/' + formatDate(post.data.created)}
				>
					<Post
						{post}
						postType={index === 0 ? PostType.InFocus : PostType.OutOfFocus}
						comments={data.commentsOnFocusedPost}
					/>

					{#if index > 0 || (post.data.num_comments > maxCommentsForFocused && index === PostType.InFocus)}
						<ReadFull created={post.data.created} />
					{/if}
				</a>
			</li>
		{/each}
	</ol>
</main>

<!-- 
<main class="pb-2 px-4">
	{#each data.posts as post, index (index)}
		<li
			class="flex flex-col items-start p-3 bg-base-100 mb-4 rounded-lg shadow-lg"
		>
			<a
				class="text-start cursor-pointer"
				href={'/' + formatDate(post.data.created)}
			>
				<Post {post} comments={data.commentsOnFocusedPost} />
				{#if index > 0}
					<a href={`/${formatDate(post.data.created)}`} class="btn btn-primary">
						Läs hela
					</a>
				{/if}
			</a>
		</li>
	{/each}
</main> -->
