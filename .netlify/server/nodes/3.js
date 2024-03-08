import * as server from '../entries/pages/posts/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CgrqKQaX.js","_app/immutable/chunks/scheduler.hmPMH6-H.js","_app/immutable/chunks/index.Ds6aKYUj.js","_app/immutable/chunks/utils.D2fKV9du.js"];
export const stylesheets = ["_app/immutable/assets/3.1jtkkX-k.css"];
export const fonts = [];
