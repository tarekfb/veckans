import { CLIENT_ID, CLIENT_SECRET, USER_AGENT } from '$env/static/private';
import { newsAuthor } from './utils'

export const fetchAccessToken = async () => {
	if (!CLIENT_ID || !CLIENT_SECRET || !USER_AGENT)
		throw new Error('Missing one more environment variables');

	const params = new URLSearchParams();
	params.append('grant_type', 'client_credentials');
	params.append('duration', 'permanent');

	const response = await fetch('https://www.reddit.com/api/v1/access_token', {
		method: 'POST',
		body: params,
		headers: {
			'User-Agent': USER_AGENT,
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
		},
	});

	if (!response.ok)
		throw new Error(`Failed to fetch tokens. Status: ${response.status}`);
	const tokens: Token = await response.json();
	if (!tokens) throw new Error(`Failed to read tokens as json.`);

	return tokens;
};

export const fetchPosts = async (): Promise<RawPost[]> => {
	const { access_token } = await fetchAccessToken();

	const response = await fetch(`https://oauth.reddit.com/user/${newsAuthor}/submitted`, {
		method: "GET",
		headers: { authorization: `bearer ${access_token}` },
	});

	if (!response.ok)
		throw new Error(`Failed to fetch posts. Status: ${response.status}`);

	const data: PostCollection = await response.json();
	if (!data || data.data.children.length < 1) throw new Error('No posts found');

	const posts: RawPost[] = [];
	data.data.children.forEach((child) => {
		if (child.data.link_flair_richtext.length > 0)
			if (child.data.link_flair_richtext[0].t)
				if (child.data.link_flair_richtext[0].t === 'Positiva Nyheter')
					posts.push(child);
	});
	
	return posts;
};

export const fetchComments = async (subreddit: string, postId: string) => {

	const { access_token } = await fetchAccessToken();

	const response = await fetch(`https://oauth.reddit.com/r/${subreddit}/comments/${postId}`, {
		method: "GET",
		headers: { authorization: `bearer ${access_token}` },
	});

	if (!response.ok)
		throw new Error(`Failed to fetch posts. Status: ${response.status}`);

	const data: Listing[] = await response.json();
	return { parent: postId, comments: data[1].data.children };
}