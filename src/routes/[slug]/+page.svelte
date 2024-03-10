<script lang="ts">
	import Post from '../../components/Post.svelte';

	export let data;
</script>

<main class="py-2 px-4">
	<Post post={data} />
</main>
