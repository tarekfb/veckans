<script lang="ts">
	import { PostType, formatDate } from '../utils';

	export let post: RawPost ;
	export let postType: PostType = PostType.Default; 
	const { title, created } = post.data;
</script>

<h1 class="flex text-lg font-semibold">
	{#if postType === PostType.Default}
		{title}
	{:else}
		<a href={`/${formatDate(created)}`} class="link link-primary">{title}</a>
	{/if}
</h1>
