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
	"/assets/building-2-D-7HOvqL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174-NzRBW9geDPdlIwMJAJqxVOCaDLQ\"",
		"mtime": "2026-08-30T03:20:11.953Z",
		"size": 372,
		"path": "../public/assets/building-2-D-7HOvqL.js"
	},
	"/assets/calendar-AqD70h4s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f6-EZ95ZKM6q8VHKcdkdKZ+N3MWtMg\"",
		"mtime": "2026-08-30T03:20:11.958Z",
		"size": 246,
		"path": "../public/assets/calendar-AqD70h4s.js"
	},
	"/assets/circle-check-W9BlbTJ3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-cItGFThr0VftU2HtfoVs5Znb3K4\"",
		"mtime": "2026-08-30T03:20:11.958Z",
		"size": 167,
		"path": "../public/assets/circle-check-W9BlbTJ3.js"
	},
	"/assets/clock-oQK892FN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-hFGL5WCdY8l7wMPmgCB6JfobYUA\"",
		"mtime": "2026-08-30T03:20:11.958Z",
		"size": 158,
		"path": "../public/assets/clock-oQK892FN.js"
	},
	"/assets/configuracoes-C9VM1wsI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d1f-bMJ2Kn+jCt3rC4ZPoeh9oKJQqLs\"",
		"mtime": "2026-08-30T03:20:11.958Z",
		"size": 11551,
		"path": "../public/assets/configuracoes-C9VM1wsI.js"
	},
	"/assets/diagnostico-RIbo7lup.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"307c-nnTqh4LJAtXFBF/UwXRohT7umOs\"",
		"mtime": "2026-08-30T03:20:11.964Z",
		"size": 12412,
		"path": "../public/assets/diagnostico-RIbo7lup.js"
	},
	"/assets/loader-circle-BGCecl6d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-Tu3wSVZsk26iD/VSk2EDhFODH9Y\"",
		"mtime": "2026-08-30T03:20:11.967Z",
		"size": 133,
		"path": "../public/assets/loader-circle-BGCecl6d.js"
	},
	"/assets/file-text-BtGOqWPW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-dvrTLFUhoshbPCCLVJ+mNPDebRY\"",
		"mtime": "2026-08-30T03:20:11.965Z",
		"size": 374,
		"path": "../public/assets/file-text-BtGOqWPW.js"
	},
	"/assets/map-pin-BQPcs-Rr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-gCP772RMYMdgjQkL/BjhH6A7qpU\"",
		"mtime": "2026-08-30T03:20:11.968Z",
		"size": 248,
		"path": "../public/assets/map-pin-BQPcs-Rr.js"
	},
	"/assets/obras-BvItRPqy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1919-vg4YkDg0cw2Es6qX81UaRMdY250\"",
		"mtime": "2026-08-30T03:20:11.969Z",
		"size": 6425,
		"path": "../public/assets/obras-BvItRPqy.js"
	},
	"/assets/octagon-alert-BhkHR_y2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a2-TJ8B3GnRsH0KVqgLLAJYQStVniY\"",
		"mtime": "2026-08-30T03:20:11.969Z",
		"size": 418,
		"path": "../public/assets/octagon-alert-BhkHR_y2.js"
	},
	"/assets/rag-Ty9GJO0t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3cca-WINW5f6BAqpVTyWAdgcS9IGJGrM\"",
		"mtime": "2026-08-30T03:20:11.971Z",
		"size": 15562,
		"path": "../public/assets/rag-Ty9GJO0t.js"
	},
	"/assets/index-t-eJ8UyK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"543ce-K4gtN5JpwYcuzs0143tKKxr8lts\"",
		"mtime": "2026-08-30T03:20:11.953Z",
		"size": 345038,
		"path": "../public/assets/index-t-eJ8UyK.js"
	},
	"/assets/rdo-BIpN4ctX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"455a-wWZi0O/8bDTcE/T1yy8LYvyICaM\"",
		"mtime": "2026-08-30T03:20:11.971Z",
		"size": 17754,
		"path": "../public/assets/rdo-BIpN4ctX.js"
	},
	"/assets/styles-D_QHfTqB.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18634-ikrk6SosLpLCeCRUlvX5jESyEeE\"",
		"mtime": "2026-08-30T03:20:11.979Z",
		"size": 99892,
		"path": "../public/assets/styles-D_QHfTqB.css"
	},
	"/assets/triangle-alert-B0T5rX07.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-lGrLMDevDPKx34ZXv1sjT7cMlXU\"",
		"mtime": "2026-08-30T03:20:11.977Z",
		"size": 254,
		"path": "../public/assets/triangle-alert-B0T5rX07.js"
	},
	"/assets/Shell-CgvWh7FM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b5fe-OT+d7Le1c+0SWhp5+FP3dOGtNq0\"",
		"mtime": "2026-08-30T03:20:11.953Z",
		"size": 177662,
		"path": "../public/assets/Shell-CgvWh7FM.js"
	},
	"/assets/users-BFtY6m2s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-8FHp6v2lKwfRBeceVkWlz+0o8zM\"",
		"mtime": "2026-08-30T03:20:11.978Z",
		"size": 295,
		"path": "../public/assets/users-BFtY6m2s.js"
	},
	"/assets/x-D96PhVcJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa-dGZSHHXU0+6y7rq+900a5210mtg\"",
		"mtime": "2026-08-30T03:20:11.979Z",
		"size": 426,
		"path": "../public/assets/x-D96PhVcJ.js"
	},
	"/assets/supabase-B2FDGY0L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32d6a-z5uXyZNkUhH+MNOo3R1DKG28kGM\"",
		"mtime": "2026-08-30T03:20:11.975Z",
		"size": 208234,
		"path": "../public/assets/supabase-B2FDGY0L.js"
	},
	"/assets/routes-xvKuAhBZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5bd8c-CDtTxFZdGcP7nnM3hUsqhuMyD9M\"",
		"mtime": "2026-08-30T03:20:11.971Z",
		"size": 376204,
		"path": "../public/assets/routes-xvKuAhBZ.js"
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
var _lazy_Us4v6B = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Us4v6B
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
