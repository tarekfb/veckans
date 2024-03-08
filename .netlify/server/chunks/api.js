const CLIENT_ID = "DZwr2UsaI_2j91CQPV9zYw";
const CLIENT_SECRET = "FyNFjvLuq_ITgntukrUY0pay6Bm6mA";
const USER_AGENT = "veckans v1.0 by /u/OnlyProductiveSubs";
const fetchAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("duration", "permanent");
  const response = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    body: params,
    headers: {
      "User-Agent": USER_AGENT,
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`
      // Put password as empty
    }
  });
  if (!response.ok)
    throw new Error(`Failed to fetch tokens. Status: ${response.status}`);
  const tokens = await response.json();
  if (!tokens)
    throw new Error(`Failed to read tokens as json.`);
  const paramsPosts = new URLSearchParams();
  paramsPosts.append("grant_type", "client_credentials");
  return tokens;
};
const fetchPosts = async () => {
  const tokens = await fetchAccessToken();
  console.log(tokens);
  const response = await fetch(`https://oauth.reddit.com/user/smurfjojjo123/submitted`, {
    method: "GET",
    headers: { authorization: `bearer ${tokens.access_token}` }
  });
  if (!response.ok)
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  const data = await response.json();
  if (!data || data.data.children.length < 1)
    throw new Error("No posts found");
  const posts = [];
  data.data.children.forEach((child) => {
    if (child.data.link_flair_richtext.length > 0) {
      if (child.data.link_flair_richtext[0].t) {
        if (child.data.link_flair_richtext[0].t === "Positiva Nyheter")
          posts.push(child);
      }
    }
  });
  return posts;
};
export {
  fetchPosts as f
};
