import { error } from '@sveltejs/kit';
import { fetchPosts } from '../api';

export const load = async () => {
	try {
		const posts = await fetchPosts();
		return { posts };
	} catch (e: unknown) {
		if (e instanceof Error) {
			console.error('Error fetching data:', e.message);
			error(500, `Internal Server Error: ${e.message}`);
		} else {
			console.error('Unknown error:', e);
			error(500, 'Internal Server Error');
		}
	}
};
