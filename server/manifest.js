const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Web-Portfolio/_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.814a2d4a.js","app":"_app/immutable/entry/app.6669edae.js","imports":["_app/immutable/entry/start.814a2d4a.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.a6908263.js","_app/immutable/chunks/paths.0c5e8de1.js","_app/immutable/entry/app.6669edae.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.443e41d3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-8c99090b.js')),
			__memo(() => import('./chunks/1-99090f9e.js')),
			__memo(() => import('./chunks/2-36d6c027.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/Web-Portfolio/About/","/Web-Portfolio/Comic/","/Web-Portfolio/Contact/","/Web-Portfolio/Work/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
