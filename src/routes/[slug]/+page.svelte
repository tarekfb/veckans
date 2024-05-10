<script lang="ts">
	import Post from '../../components/Post.svelte';

	export let data;
	$: ({ post, comments } = data);
</script>

<!-- pb-2 because top element in post has own padding to not mess with fixed position -->
<div class="pb-2 px-4 lg:flex lg:flex-col">
	<Post {post} {comments} />
</div>	
