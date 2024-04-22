import { formatDate } from '../../utils';
import { fetchPosts } from '../../api';
import { error } from '@sveltejs/kit';

export const load = async ({ params, parent }) => {
    const isValidDateFormat = (str: string): boolean => {
        // 2digits-2digits-2digits
        const regex = /^\d{2}-\d{2}-\d{2}$/;
        return regex.test(str);
    };

    const findPost = (posts: RawPost[], date: string): RawPost | undefined => {
        const foundChild = posts.find((child) => {
            const mmddyy = formatDate(child.data.created);
            return mmddyy === date;
        });

        return foundChild;
    };

    if (!isValidDateFormat(params.slug)) {
        console.error('Page slug is not a valid format', params.slug);
        error(404, {
            message: "Page not found",
        });
    }

    const { posts, commentSections } = await parent();
    const post = findPost(posts, params.slug);

    if (!post) {
        throw new Error('Post not found or doesnt exist yet')
    };
    if (post.data.link_flair_richtext[0].t !== 'Positiva Nyheter') {
        console.error('Link flair rich text not matching "Positiva Nyheter"');
        error(500, "Link flair mismatch");
    }

    const commentsWithParent = commentSections.find(
        (section) => section.parent === post.data.id,
    );
    if (!commentsWithParent) {
        console.error(`Missing comment section for post ${post.data.id}`);
        error(500, `Missing comments`);
    }



    return {
        slug: params.slug
    }
}

export const entries: import('./$types').EntryGenerator = async () => {
    const posts = await fetchPosts();
    const dates = posts.map((post) => ({ slug: formatDate(post.data.created) }));
    return dates;
};
