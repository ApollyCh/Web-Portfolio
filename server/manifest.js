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
		client: {"start":"_app/immutable/entry/start.b700be00.js","app":"_app/immutable/entry/app.91ad11b3.js","imports":["_app/immutable/entry/start.b700be00.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.2c44cdac.js","_app/immutable/chunks/paths.ca5ec801.js","_app/immutable/entry/app.91ad11b3.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.443e41d3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-75c054ff.js')),
			__memo(() => import('./chunks/1-9a4f3583.js')),
			__memo(() => import('./chunks/2-5741db9a.js'))
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
