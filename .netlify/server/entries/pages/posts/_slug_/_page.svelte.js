import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { d as decodeAndCleanHtml } from "../../../../chunks/utils.js";
const css = {
  code: ".post-container li, .post-container p{margin-bottom:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const decodedHtml = decodeAndCleanHtml(data.content);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1 class="text-3xl font-bold mb-5">${escape(data.title)}</h1> <div class="post-container"><!-- HTML_TAG_START -->${decodedHtml}<!-- HTML_TAG_END --> </div>`;
});
export {
  Page as default
};
