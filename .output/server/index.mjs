globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/building-2-CqoDA3kH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174-oX7NQ4rZ9zORBOHMSCzLr7LeJdQ\"",
		"mtime": "2026-09-02T05:11:08.942Z",
		"size": 372,
		"path": "../public/assets/building-2-CqoDA3kH.js"
	},
	"/assets/calendar-DUACUQjn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f6-bZcRr3mFVBjmAfw7XmCae5dww+U\"",
		"mtime": "2026-09-02T05:11:08.944Z",
		"size": 246,
		"path": "../public/assets/calendar-DUACUQjn.js"
	},
	"/assets/circle-check-BUQTf3Qf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-mnGBGNaTpAMYbmgmaoQOO1eCw8E\"",
		"mtime": "2026-09-02T05:11:08.944Z",
		"size": 167,
		"path": "../public/assets/circle-check-BUQTf3Qf.js"
	},
	"/assets/clock-CtvGPoO-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-trqlhFjF3QvvOuNYBteTizfimmo\"",
		"mtime": "2026-09-02T05:11:08.944Z",
		"size": 158,
		"path": "../public/assets/clock-CtvGPoO-.js"
	},
	"/assets/configuracoes-9QglntvR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d1a-YZYKM+YwvLo27QtQdtI20VDQ+vM\"",
		"mtime": "2026-09-02T05:11:08.947Z",
		"size": 11546,
		"path": "../public/assets/configuracoes-9QglntvR.js"
	},
	"/assets/file-text-SL3C5By7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-myPVv9OUwEfC0BVbkGmE9fFyyyw\"",
		"mtime": "2026-09-02T05:11:08.947Z",
		"size": 374,
		"path": "../public/assets/file-text-SL3C5By7.js"
	},
	"/assets/diagnostico-BckvdgSK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3081-AWBEMWZyEvbQBCL43URaVe3vhK4\"",
		"mtime": "2026-09-02T05:11:08.947Z",
		"size": 12417,
		"path": "../public/assets/diagnostico-BckvdgSK.js"
	},
	"/assets/loader-circle-DOHet-0d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-KjJ1bhTaEgUI5/OvltWOASZfggA\"",
		"mtime": "2026-09-02T05:11:08.947Z",
		"size": 133,
		"path": "../public/assets/loader-circle-DOHet-0d.js"
	},
	"/assets/map-pin-VB4m87ZO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-iYEqW47m5G3ha2BW2xlvlSKNAfs\"",
		"mtime": "2026-09-02T05:11:08.947Z",
		"size": 248,
		"path": "../public/assets/map-pin-VB4m87ZO.js"
	},
	"/assets/obras-DtMydbHJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18eb-KLyNS/FycIv2ESYB4/6azj1cUp8\"",
		"mtime": "2026-09-02T05:11:08.947Z",
		"size": 6379,
		"path": "../public/assets/obras-DtMydbHJ.js"
	},
	"/assets/index-BeDInVNZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"543aa-vQbdLkZuhWGv9GTky65cBMeEqho\"",
		"mtime": "2026-09-02T05:11:08.941Z",
		"size": 345002,
		"path": "../public/assets/index-BeDInVNZ.js"
	},
	"/assets/octagon-alert-Cc6LYmYv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a2-yh7Aoo/4Mpt1i5dgY5ed+sR4Z4I\"",
		"mtime": "2026-09-02T05:11:08.947Z",
		"size": 418,
		"path": "../public/assets/octagon-alert-Cc6LYmYv.js"
	},
	"/assets/rag-BSds3zcl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3cc0-3Fb5D8nxYwet55T/H29vS4X6y9Q\"",
		"mtime": "2026-09-02T05:11:08.952Z",
		"size": 15552,
		"path": "../public/assets/rag-BSds3zcl.js"
	},
	"/assets/rdo-8Tqd89gY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4744-JU/WIuefGhqIeNm3OASiNzV5n5E\"",
		"mtime": "2026-09-02T05:11:08.953Z",
		"size": 18244,
		"path": "../public/assets/rdo-8Tqd89gY.js"
	},
	"/assets/triangle-alert-CkWgTuA9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-UfeDK6zWmE1ZGPlESa686LVDcxs\"",
		"mtime": "2026-09-02T05:11:08.953Z",
		"size": 254,
		"path": "../public/assets/triangle-alert-CkWgTuA9.js"
	},
	"/assets/x-De2L11a4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa-E6tkWAluQazdD6hQ9+O/Nj4q5pM\"",
		"mtime": "2026-09-02T05:11:08.955Z",
		"size": 426,
		"path": "../public/assets/x-De2L11a4.js"
	},
	"/assets/users-iwCv7gML.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-DB50NRKkeSu7vodGdyj5bOWuZT4\"",
		"mtime": "2026-09-02T05:11:08.955Z",
		"size": 295,
		"path": "../public/assets/users-iwCv7gML.js"
	},
	"/assets/styles-D_QHfTqB.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18634-ikrk6SosLpLCeCRUlvX5jESyEeE\"",
		"mtime": "2026-09-02T05:11:08.957Z",
		"size": 99892,
		"path": "../public/assets/styles-D_QHfTqB.css"
	},
	"/assets/routes-DPgOFVly.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5bd8c-aDzjuTCTzndHkuCFvcM0S/wEeDI\"",
		"mtime": "2026-09-02T05:11:08.953Z",
		"size": 376204,
		"path": "../public/assets/routes-DPgOFVly.js"
	},
	"/assets/Shell-CBYbhm64.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5df4a-ki+Xlu/3rGUPQ2AKqYMffsW3svI\"",
		"mtime": "2026-09-02T05:11:08.942Z",
		"size": 384842,
		"path": "../public/assets/Shell-CBYbhm64.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_S0ziO2 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_S0ziO2
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
