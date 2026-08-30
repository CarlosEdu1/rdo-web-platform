import { i as __toESM, r as __exportAll } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as createRootRouteWithContext, b as useRouter, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CX9ioIGm.js
var router_CX9ioIGm_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D_QHfTqB.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-zinc-950 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-zinc-100 font-mono",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-zinc-100",
					children: "Página não encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-zinc-400",
					children: "A rota solicitada não existe neste workspace."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600",
						children: "Voltar ao Dashboard"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-zinc-950 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-zinc-100",
					children: "Falha ao carregar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-zinc-400",
					children: "Ocorreu um erro inesperado. Tente recarregar a página."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600",
						children: "Tentar novamente"
					})
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SmartForeman Web · Centro de Inteligência ConTech" },
			{
				name: "description",
				content: "Plataforma SaaS B2B de gestão preditiva de obras: RDOs, Agentes de IA, RAG e planos de ação data-driven para diretores e engenheiros."
			},
			{
				name: "author",
				content: "SmartForeman"
			},
			{
				property: "og:title",
				content: "SmartForeman Web · Centro de Inteligência ConTech"
			},
			{
				property: "og:description",
				content: "Gestão preditiva de obras com 3 Agentes de IA, RDOs e planos de ação data-driven."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-zinc-950 text-zinc-100 antialiased",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$5 = () => import("./routes-D0_uK7ay.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Dashboard Estratégico · SmartForeman Web" },
		{
			name: "description",
			content: "Visão executiva de todas as obras: KPIs, alertas preditivos dos Agentes de IA e desempenho de efetivo."
		},
		{
			property: "og:title",
			content: "Dashboard Estratégico · SmartForeman Web"
		},
		{
			property: "og:description",
			content: "Centro de controle executivo para diretores e gerentes de engenharia."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./configuracoes-tIp8gvOy.mjs");
var Route$4 = createFileRoute("/configuracoes")({
	head: () => ({ meta: [
		{ title: "Configurações · SmartForeman Web" },
		{
			name: "description",
			content: "Gestão de empresa, projetos, membros e integrações da plataforma SmartForeman."
		},
		{
			property: "og:title",
			content: "Configurações · SmartForeman Web"
		},
		{
			property: "og:description",
			content: "Configurações centrais da empresa, projetos e permissões."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./diagnostico-CEEiUExf.mjs");
var Route$3 = createFileRoute("/diagnostico")({
	head: () => ({ meta: [
		{ title: "Diagnóstico & Gestão Inteligente · SmartForeman Web" },
		{
			name: "description",
			content: "Análise profunda de causa-raiz, impacto previsto e planos de ação data-driven propostos pelos Agentes de IA."
		},
		{
			property: "og:title",
			content: "Diagnóstico Inteligente · SmartForeman Web"
		},
		{
			property: "og:description",
			content: "Diagnóstico da IA e planos de ação com análise de risco para gestores."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./obras-CvRlmUp5.mjs");
var Route$2 = createFileRoute("/obras")({
	head: () => ({ meta: [{ title: "Gerenciar Obras · SmartForeman Web" }, {
		name: "description",
		content: "Cadastro e gestão de obras do portfólio."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./rag-BNbsHmjv.mjs");
var Route$1 = createFileRoute("/rag")({
	head: () => ({ meta: [
		{ title: "Setup de Inteligência (RAG) · SmartForeman Web" },
		{
			name: "description",
			content: "Alimente os Agentes de IA com contratos, cronogramas e histogramas. Pipeline RAG com vetorização e criptografia AES-256."
		},
		{
			property: "og:title",
			content: "Setup de Inteligência (RAG) · SmartForeman Web"
		},
		{
			property: "og:description",
			content: "Upload seguro e vetorização de documentos para os Agentes 0, 1 e 2."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./rdo-CjezZMpo.mjs");
var Route = createFileRoute("/rdo")({
	head: () => ({ meta: [
		{ title: "Centro de Revisão de RDO · SmartForeman Web" },
		{
			name: "description",
			content: "Auditoria de RDOs com visualizador lado a lado: RDO original vs análise da IA e ações rápidas de aprovação."
		},
		{
			property: "og:title",
			content: "Centro de Revisão de RDO · SmartForeman Web"
		},
		{
			property: "og:description",
			content: "Auditoria comparativa de RDOs com Agentes de IA."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	ConfiguracoesRoute: Route$4.update({
		id: "/configuracoes",
		path: "/configuracoes",
		getParentRoute: () => Route$6
	}),
	DiagnosticoRoute: Route$3.update({
		id: "/diagnostico",
		path: "/diagnostico",
		getParentRoute: () => Route$6
	}),
	ObrasRoute: Route$2.update({
		id: "/obras",
		path: "/obras",
		getParentRoute: () => Route$6
	}),
	RagRoute: Route$1.update({
		id: "/rag",
		path: "/rag",
		getParentRoute: () => Route$6
	}),
	RdoRoute: Route.update({
		id: "/rdo",
		path: "/rdo",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter, router_CX9ioIGm_exports as t };
