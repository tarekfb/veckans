// // import { CLIENT_ID, CLIENT_SECRET, USER_AGENT } from '$env/static/private';

// export const fetchAccessToken = async () => {
// 	// const { CLIENT_ID, CLIENT_SECRET, USER_AGENT } = process.env;
// 	if (!CLIENT_ID || !CLIENT_SECRET || !USER_AGENT)
// 		throw new Error('Missing one more environment variables');

// 	const params = new URLSearchParams();
// 	params.append('grant_type', 'client_credentials');

// 	const response = await fetch('https://www.reddit.com/api/v1/access_token', {
// 		method: 'POST',
// 		body: params,
// 		headers: {
// 			'User-Agent': USER_AGENT,
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 			Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`, // Put password as empty
// 		},
// 	});

// 	if (!response.ok)
// 		throw new Error(`Failed to fetch data. Status: ${response.status}`);

// 	const tokens = await response.json();
// 	if (!tokens) throw new Error(`Failed to read tokens as json.`);
// 	return tokens;
// };

export const fetchPosts = async (): Promise<RawPost[]> => {
	// const tokens = await fetchAccessToken();
	// console.log(tokens);
	const response = await fetch(
		'https://www.reddit.com/user/smurfjojjo123/submitted.json',
	);

	console.log('reposne is');
	console.log(response);
	if (!response.ok)
		throw new Error(`Failed to fetch data. Status: ${response.status}`);

	const data = (await response.json()) as PostCollection;
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
