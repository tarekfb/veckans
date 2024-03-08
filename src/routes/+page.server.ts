import { error } from '@sveltejs/kit';
import { fetchPosts } from '../api';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	try {
		const posts = await fetchPosts();
		return { posts };
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
