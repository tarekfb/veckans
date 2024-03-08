import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BunMeOIf.js","app":"_app/immutable/entry/app.DXy_eIeJ.js","imports":["_app/immutable/entry/start.BunMeOIf.js","_app/immutable/chunks/entry.CpuuRjN6.js","_app/immutable/chunks/scheduler.hmPMH6-H.js","_app/immutable/entry/app.DXy_eIeJ.js","_app/immutable/chunks/scheduler.hmPMH6-H.js","_app/immutable/chunks/index.Ds6aKYUj.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
