import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const css = {
  code: "html{background-color:#f3f4f6;padding:2em}a{color:#007bff}a:hover{color:#0051a8;text-decoration:underline}a:active{text-decoration:underline}a:focus{outline:thin dotted}a:visited{color:#4a90e2}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Veckans goda nyheter" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""} <footer></footer> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
