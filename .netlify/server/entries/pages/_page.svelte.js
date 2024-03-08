import { c as create_ssr_component, d as spread, f as escape_object, v as validate_component, h as each, i as add_attribute, e as escape } from "../../chunks/ssr.js";
import { f as formatDate, d as decodeAndCleanHtml } from "../../chunks/utils.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/>`}<!-- HTML_TAG_END --></svg>`;
});
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
  return `<main><nav class="flex justify-between mb-5"><h1 class="text-4xl font-semibold" data-svelte-h="svelte-1b319yz">Alla samlade positiva nyheter</h1> <a href="/" class="flex justify-center items-center">${validate_component(Home, "MdiHome").$$render(
    $$result,
    {
      "font-size": "3em",
      class: "hover:text-blue-800"
    },
    {},
    {}
  )}</a></nav> <ol>${each(data.posts, (post) => {
    return `<li class="mb-2"><h1 class="text-3xl font-semibold my-3"><a${add_attribute("href", post.data.url, 0)}>🔗</a> <a${add_attribute("href", `/posts/${formatDate(post.data.created)}`, 0)}>${escape(post.data.title)}</a></h1> <h2 class="text-xl mb-3">📅 ${escape(formatDate(post.data.created))}</h2> <p><!-- HTML_TAG_START -->${truncateText(decodeAndCleanHtml(post.data.selftext_html), 50)}<!-- HTML_TAG_END --></p> <p><a${add_attribute("href", `/posts/${formatDate(post.data.created)}`, 0)}>Läs mer här</a></p> </li>`;
  })}</ol> </main>`;
});
export {
  Page as default
};
