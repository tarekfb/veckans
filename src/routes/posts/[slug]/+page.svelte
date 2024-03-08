<script lang="ts">
	import Post from '../../../components/Post.svelte';

	export let data: SmallPost;
</script>

<Post post={data} />
