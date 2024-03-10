<script lang="ts">
	import type { PageData } from './$types';
	import Post from '../components/Post.svelte';
	import { formatDate } from '../utils';

	export let data: PageData;
</script>

<main class="p-4 bg-bgBlue">
	<ol>
		{#each data.posts as post, index (index)}
			<li class="flex flex-col items-start p-1 bg-bgBright mb-4">
				<Post post={{ post }} {index} />
				{#if index > 0}
					<a
						href={`/${formatDate(post.data.created)}`}
						class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl mb-4"
					>
						Read full
					</a>
				{/if}
			</li>
		{/each}
	</ol>
</main>
