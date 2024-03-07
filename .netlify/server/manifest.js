export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.C-KX-yWn.js","app":"_app/immutable/entry/app.md8Xp3F3.js","imports":["_app/immutable/entry/start.C-KX-yWn.js","_app/immutable/chunks/entry.Dk_I-mx4.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.md8Xp3F3.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.BioOsIEE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
