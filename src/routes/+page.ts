import { error } from '@sveltejs/kit';

export const load = async () => {
    try {
        const response = await fetch('https://www.reddit.com/user/smurfjojjo123/submitted.json');

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json() as PostCollection;
        
        if (!data) error(404, 'No posts found')
        return { posts: data.data.children }

    } catch (e: any) {
        console.error('Error fetching data:', e.message);
        error(500, 'Internal Server Error');
    }
}