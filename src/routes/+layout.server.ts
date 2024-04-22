

import { error } from '@sveltejs/kit';
import { fetchComments, fetchPosts } from '../api';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    try {
        const posts = await fetchPosts();
        const commentSections = await Promise.all(posts.map(async (post) => await fetchComments(post.data.subreddit, post.data.id)));
        const commentsOnFocusedPost = commentSections[0];
        return { posts, commentSections, commentsOnFocusedPost };
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('Error fetching posts:', e.message);
            error(500, `Internal Server Error: ${e.message}`);
        } else {
            console.error('Unknown error when fetching posts:', e);
            error(500, 'Internal Server Error');
        }
    }
};
