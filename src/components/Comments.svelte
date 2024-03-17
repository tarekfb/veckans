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

<ul>
	{#each comments as comment, index (index)}
		<Comment
			author={comment.data.author}
			body={comment.data.body}
			level={0}
			score={comment.data.score}
			url={`https://reddit.com/${comment.data.permalink}`}
		/>
		{#each getChildrenOfComment( { comment: comment, level: 1 }, ) as formattedComment}
			<Comment
				author={formattedComment.comment.data.author}
				body={formattedComment.comment.data.body}
				level={formattedComment.level}
				score={formattedComment.comment.data.score}
				url={`https://reddit.com/${formattedComment.comment.data.permalink}`}
			/>
		{/each}
	{/each}
</ul>
