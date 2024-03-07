const fetchPosts = async () => {
  const response = await fetch(
    "https://www.reddit.com/user/smurfjojjo123/submitted.json"
  );
  console.log("reposne is");
  console.log(response);
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
