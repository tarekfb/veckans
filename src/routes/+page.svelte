<script lang="ts">
	import type { PageData } from './$types';
	import Post from '../components/Post.svelte';
	import { formatDate } from '../utils';

	export let data: PageData;
</script>

<main>
	<ol>
		{#each data.posts as post, index (index)}
			<li class="mb-16 flex-col">
				<Post post={{ post }} {index} />
				{#if index > 0}
					<a
						href={`/${formatDate(post.data.created)}`}
						class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 border-b-4 border-r-4 border-blue-700 rounded"
					>
						Read full
					</a>
				{/if}
			</li>
		{/each}
	</ol>
</main>
