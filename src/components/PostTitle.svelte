<script lang="ts">
	import { formatDate } from '../utils';

	export let post: RawPost ;
	export let index = -1; // -1 is from dynamic route. 0 is first post on landing page. > 0 is all other posts on landig page.
	const { title, created } = post.data;
</script>

<h1 class="flex text-lg font-semibold">
	{#if index === -1}
		{title}
	{:else}
		<a href={`/${formatDate(created)}`} class="link link-primary">{title}</a>
	{/if}
</h1>
