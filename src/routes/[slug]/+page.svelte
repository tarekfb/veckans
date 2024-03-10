<script lang="ts">
	import Post from '../../components/Post.svelte';

	export let data;
</script>

<main class="p-2">
	<Post post={data} />
</main>
