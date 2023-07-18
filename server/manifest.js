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
		client: {"start":"_app/immutable/entry/start.9950a160.js","app":"_app/immutable/entry/app.12c61515.js","imports":["_app/immutable/entry/start.9950a160.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.b3f067e6.js","_app/immutable/chunks/paths.b3b50dc7.js","_app/immutable/entry/app.12c61515.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.443e41d3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-d913b6c7.js')),
			__memo(() => import('./chunks/1-d60b6e38.js')),
			__memo(() => import('./chunks/2-1eaed832.js'))
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
