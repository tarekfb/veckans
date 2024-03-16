<script lang="ts">
	import { format } from 'path';

	export let comments: PostComment[];

	type RecursiveComment = {
		comment: PostComment;
		level: number;
	};

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

	// const getBg = (level: number) => {
	// 	switch (level) {
	// 		case 1:
	// 			return 'b'
	// 			break;
		
	// 		default:
	// 			break;
	// 	}
	
	// }

	// ${getBg(formattedComment.level)}
</script>

<ul>
	{#each comments as comment, index (index)}
		<li>
			<div class="card w-96 bg-base-100 shadow-xl my-2">
				<div class="card-body p-4">
					<h2 class="card-title">{comment.data.author}</h2>
					<p>{comment.data.body}</p>
				</div>
			</div>
		</li>
		<!-- {comment.data.body} -->
		{#each getChildrenOfComment( { comment: comment, level: 0 }, ) as formattedComment}
			{#if formattedComment.level < 3}
				<li style={`margin-left:${formattedComment.level * 8}px`}>
					<div class={`card w-96 bg-base-100 shadow-xl my-2 `}>
						<div class="card-body p-4">
							<h2 class="card-title">{formattedComment.comment.data.author}</h2>
							<p>{formattedComment.comment.data.body}</p>
						</div>
					</div>
				</li>
			{/if}
		{/each}
		<!-- </li> -->
		<!-- <div class="divider my-2" /> -->
	{/each}
</ul>
