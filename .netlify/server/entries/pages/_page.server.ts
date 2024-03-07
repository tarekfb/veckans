import { e as error } from "../../chunks/index.js";
import { f as fetchPosts } from "../../chunks/api.js";

/** @type {import('./$types').PageServerLoad} */
const load = async () => {
  try {
    const posts = await fetchPosts();
    return { posts };
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
export {
  load
};