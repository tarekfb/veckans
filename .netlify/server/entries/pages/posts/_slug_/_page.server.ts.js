import { e as error } from "../../../../chunks/index.js";
import { f as formatDate } from "../../../../chunks/utils.js";
import { f as fetchPosts } from "../../../../chunks/api.js";
const findPost = (posts, date) => {
  const foundChild = posts.find((child) => {
    const mmddyy = formatDate(child.data.created);
    return mmddyy === date;
  });
  return foundChild;
};
const load = async ({ params }) => {
  try {
    const posts = await fetchPosts();
    if (!params.slug)
      error(404, "Missing slug");
    const post = findPost(posts, params.slug);
    if (!post) {
      return {
        title: "Post not found or doesnt exist yet",
        content: "Either the post wasnt found or it doesnt exist yet"
      };
    }
    if (post.data.link_flair_richtext[0].t !== "Positiva Nyheter") {
      return {
        title: "Link flair rich text not matching 'Positiva Nyheter'",
        content: "Link flair rich text is " + post.data.link_flair_richtext[0].t
      };
    }
    return {
      title: post.data.title,
      content: post.data.selftext_html
    };
  } catch (e) {
    if (e instanceof Error) {
      console.error("Error fetching data:", e.message);
      error(500, `Internal Server Error: ${e.message}`);
    } else {
      console.error("Unknown error:", e);
      error(500, "Internal Server Error");
    }
  }
};
const entries = async () => {
  const posts = await fetchPosts();
  const dates = posts.map((post) => ({ slug: formatDate(post.data.created) }));
  return dates;
};
export {
  entries,
  load
};
