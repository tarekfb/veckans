<script lang="ts">
	import Comment from './Comment.svelte';

	export let comments: PostComment[];

	const getChildrenOfComment = ({
		comment,
		level,
	}: RecursiveComment): RecursiveComment[] => {
		let children: RecursiveComment[] = [];
		if (comment.data.replies && comment.data.replies.data.children) {
			children = comment.data.replies.data.children.flatMap((child) => {
				const childRecursive: RecursiveComment = {
					comment: child,
					level: level + 1,
				};
				const grandchildren = getChildrenOfComment(childRecursive);
				return [childRecursive, ...grandchildren];
			});
		}
		return children;
	};
</script>

<!-- 
<ul>
	{#each comments as comment, index (index)}
		<Comment author={comment.data.author} body={comment.data.body} margin={0} />
		{#each getChildrenOfComment( { comment: comment, level: 0 }, ) as formattedComment}
			<Comment
				author={formattedComment.comment.data.author}
				body={formattedComment.comment.data.body}
				margin={formattedComment.level * 10}
			/>
		{/each}
		<div class="divider my-2" />
	{/each}
</ul> -->
<ul>
	{#each comments as comment, index (index)}
	
			<Comment
				author={comment.data.author}
				body={comment.data.body}
				margin={0}
			/>
		{#each getChildrenOfComment( { comment: comment, level: 1 }, ) as formattedComment}
		
				<Comment
					author={formattedComment.comment.data.author}
					body={formattedComment.comment.data.body}
					margin={formattedComment.level * 10}
				/>
		{/each}
		<div class="divider my-2" />
	{/each}
</ul>
