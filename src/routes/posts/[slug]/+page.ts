import { error } from '@sveltejs/kit';
import { formatDate } from '../../../utils';

const findPost = (posts: RawPost[], date: string): RawPost | undefined => {
    const foundChild = posts.find(child => {
        const mmddyy = formatDate(child.data.created);
        return mmddyy === date;
    });

    return foundChild;
};

export const load = async ({ params }) => {
    try {
        const response = await fetch('https://www.reddit.com/user/smurfjojjo123/submitted.json');

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json() as PostCollection;

        if (data.kind === 'Listing' && data.data.children.length > 0) {
            const post = findPost(data.data.children, params.slug);
            if (!post) {
                return {
                    title: "Post not found or doesnt exist yet",
                    content: "Either the post wasnt found or it doesnt exist yet",
                }
            }
            if (post.data.link_flair_richtext[0].t !== "Positiva Nyheter") {
                return {
                    title: "Link flair rich text not matching 'Positiva Nyheter'",
                    content: "Link flair rich text is " + post.data.link_flair_richtext[0].t,
                }
            }
            return {
                title: post.data.title,
                content: post.data.selftext_html,
            }
        }

    } catch (e: any) {
        console.error('Error fetching data:', e.message);
        error(500, 'Internal Server Error');
    }
}