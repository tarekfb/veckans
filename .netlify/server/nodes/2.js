import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CNPy-Zz7.js","_app/immutable/chunks/utils.FzZ5g_NA.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.BioOsIEE.js"];
export const stylesheets = ["_app/immutable/assets/2.9LfLgjpN.css"];
export const fonts = [];
