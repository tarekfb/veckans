import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../chunks/ssr.js";
import { f as formatDate, d as decodeAndCleanHtml } from "../../chunks/utils.js";
const css = {
  code: "ol li, ol p{margin-bottom:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const truncateText = (text, limit) => {
    if (text.split(" ").length > limit) {
      const truncatedText = text.split(" ").slice(0, limit).join(" ");
      return `${truncatedText}...`;
    }
    return text;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main><ol>${each(data.posts, (post) => {
    return `<li class="mb-2"><h1 class="text-3xl font-semibold my-3"><a${add_attribute("href", post.data.url, 0)}>🔗</a> <a${add_attribute("href", `/posts/${formatDate(post.data.created)}`, 0)}>${escape(post.data.title)}</a></h1> <h2 class="text-xl mb-3">📅 ${escape(formatDate(post.data.created))}</h2> <p><!-- HTML_TAG_START -->${truncateText(decodeAndCleanHtml(post.data.selftext_html), 50)}<!-- HTML_TAG_END --></p> <p><a${add_attribute("href", `/posts/${formatDate(post.data.created)}`, 0)}>Läs mer här</a></p> </li>`;
  })}</ol> </main>`;
});
export {
  Page as default
};
