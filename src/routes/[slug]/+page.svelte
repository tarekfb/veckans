<script lang="ts">
	import Post from '../../components/Post.svelte';
	import { formatDate } from '../../utils';

	export let data;
	const findPost = (posts: RawPost[], date: string): RawPost | undefined => {
		const foundChild = posts.find((child) => {
			const mmddyy = formatDate(child.data.created);
			return mmddyy === date;
		});

		return foundChild;
	};

	const post = findPost(data.posts, data.slug);
	if (!post) throw new Error('Post not found or doesnt exist yet');
	if (post.data.link_flair_richtext[0].t !== 'Positiva Nyheter')
		throw new Error("Link flair rich text not matching 'Positiva Nyheter'");

	const commentsWithParent = data.commentSections.find(
		(section) => section.parent === post.data.id,
	);
	if (!commentsWithParent)
		throw new Error(`Missing comment section for post ${post.data.id}`);
</script>

<!-- pb-2 because top element in post has own padding to not mess with fixed position -->
<div class="pb-2 px-4">
	<Post {post} comments={commentsWithParent.comments} />
</div>
