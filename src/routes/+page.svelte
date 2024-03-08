<script lang="ts">
	import type { PageData } from './$types';
	import Post from '../components/Post.svelte';
	import { formatDate } from '../utils';

	export let data: PageData;
</script>

<main>
	<ol>
		{#each data.posts as post, index (index)}
			<li class="flex flex-col  items-start">
				<Post post={{ post }} {index} />
				{#if index > 0}
					<a
						href={`/${formatDate(post.data.created)}`}
						class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl"
					>
						Read full
					</a>
				{/if}
				<hr class="w-full border-t-2 my-6 border-gray-300" />
			</li>
		{/each}
	</ol>
</main>
