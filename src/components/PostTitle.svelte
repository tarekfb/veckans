<script lang="ts">
	import { formatDate } from '../utils';

	export let post: { post: RawPost };
	const { title, created } = post.post.data;
</script>

<h1 class="flex text-2xl font-semibold">
	<a href={`/${formatDate(created)}`}>{title}</a>
</h1>
