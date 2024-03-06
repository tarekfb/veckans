import { error } from '@sveltejs/kit';

const findPost = (posts: RedditPostChild[], date: string): RedditPostChild | undefined => {
    const foundChild = posts.find(child => {
        const rawDate = new Date(child.data.created * 1000);
        const year = rawDate.getFullYear().toString().slice(2);
        const month = (rawDate.getMonth() + 1).toString().padStart(2, '0');
        const day = rawDate.getDate().toString().padStart(2, '0');
        const mmddyy = `${month}${day}${year}`;

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

        const data = await response.json() as RedditPost;

        if (data.kind === 'Listing' && data.data.children.length > 0) {
            const post = findPost(data.data.children, params.slug);
            if (!post) {
                return {
                    title: "Post not found or doesnt exist yet",
                    content: "Either the post wasnt found or it doesnt exist yet",
                }
            }
            console.log(post.data)
            console.log(post.data.link_flair_richtext)
            if (post.data.link_flair_richtext[0].t !== "Positiva Nyheter") {
                return {
                    title: "Found a post but it's not a valid news post",
                    content: "Link falir rich text not matching 'Positiva Nyheter'",
                }
            }
            return {
                title: post.data.title,
                content: post.data.selftext,
            }
        }

    } catch (e: any) {
        console.error('Error fetching data:', e.message);
        error(500, 'Internal Server Error');
    }
    // const post = await fetch('https://www.reddit.com/user/smurfjojjo123/submitted.json');

    // if (post) return post;
    // error(404, 'Not found');

}