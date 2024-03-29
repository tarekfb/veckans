import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.D9VO8kem.js","_app/immutable/chunks/scheduler.hmPMH6-H.js","_app/immutable/chunks/index.Ds6aKYUj.js"];
export const stylesheets = ["_app/immutable/assets/0.DqiPt99S.css"];
export const fonts = [];
