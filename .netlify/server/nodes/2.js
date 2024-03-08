import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DjayasG6.js","_app/immutable/chunks/scheduler.hmPMH6-H.js","_app/immutable/chunks/index.Ds6aKYUj.js","_app/immutable/chunks/utils.D2fKV9du.js"];
export const stylesheets = ["_app/immutable/assets/2.9LfLgjpN.css"];
export const fonts = [];
