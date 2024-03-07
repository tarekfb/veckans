import * as universal from '../entries/pages/posts/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.5vnxDUV7.js","_app/immutable/chunks/utils.FzZ5g_NA.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.BioOsIEE.js"];
export const stylesheets = ["_app/immutable/assets/3.1jtkkX-k.css"];
export const fonts = [];
