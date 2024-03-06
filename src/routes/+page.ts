import { error } from '@sveltejs/kit';
import { fetchPosts } from '../utils';

export const load = async () => {
    try {
        const posts = await fetchPosts()
        return { posts };
    } catch (e: any) {
        console.error('Error fetching data:', e.message);
        error(500, 'Internal Server Error');
    }
}