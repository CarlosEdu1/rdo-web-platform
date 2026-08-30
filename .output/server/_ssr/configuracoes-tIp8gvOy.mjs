import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { E as Download, G as Bell, U as Building2, c as ShieldCheck, r as Users, u as Search, x as KeyRound } from "../_libs/lucide-react.mjs";
import { a as Shell, n as PROJECTS, o as useAuditLog } from "./Shell-C9nVmuTq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/configuracoes-tIp8gvOy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] font-mono uppercase tracking-widest text-zinc-500",
					children: "Empresa & Projetos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl font-semibold tracking-tight text-zinc-50",
					children: "Configurações"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-zinc-400",
					children: "Gerencie dados da empresa, projetos ativos, usuários e permissões."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						icon: Building2,
						title: "Empresa",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Razão Social",
								value: "Construtora Andrade Engenharia S.A."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "CNPJ",
								value: "12.345.678/0001-90",
								mono: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Sede",
								value: "Vitória · Espírito Santo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Plano",
								value: "Enterprise · v2.4",
								mono: true
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: Users,
						title: "Membros",
						children: [
							{
								n: "Carlos Andrade",
								r: "Diretor · Admin"
							},
							{
								n: "Marcelo Silva",
								r: "Eng. Responsável"
							},
							{
								n: "Ana Beatriz",
								r: "Eng. Responsável"
							},
							{
								n: "Patrícia Souza",
								r: "Auditor Técnico"
							}
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 py-2 border-b border-zinc-800/50 last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-[11px] font-semibold text-zinc-200 border border-zinc-700",
								children: m.n.split(" ").map((x) => x[0]).slice(0, 2).join("")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-zinc-100",
								children: m.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] text-zinc-500",
								children: m.r
							})] })]
						}, m.n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						icon: KeyRound,
						title: "Integrações & Segurança",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "MFA obrigatório para admins",
								enabled: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "SSO · Azure AD",
								enabled: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Criptografia AES-256 em uploads",
								enabled: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Log de auditoria imutável",
								enabled: true
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex items-end justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold text-zinc-100",
					children: "Projetos Ativos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-zinc-500 mt-0.5",
					children: "Contexto de dados por obra"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-zinc-800/60 bg-zinc-900/60 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-zinc-800/60 bg-zinc-900 text-[10px] uppercase tracking-wider text-zinc-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2.5 text-left font-medium",
								children: "Projeto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2.5 text-left font-medium",
								children: "Localização"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2.5 text-left font-medium",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2.5 text-right font-medium",
								children: "Progresso"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-zinc-800/40 last:border-0 hover:bg-zinc-800/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-zinc-100",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-zinc-400",
								children: p.location
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: ["inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium", p.status === "on-track" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : p.status === "warning" ? "border-amber-500/30 bg-amber-500/10 text-amber-300" : "border-rose-500/30 bg-rose-500/10 text-rose-300"].join(" "),
									children: p.status === "on-track" ? "Em Dia" : p.status === "warning" ? "Alerta" : "Crítico"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3 text-right font-mono text-zinc-300",
								children: [
									p.physicalDone,
									"% ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-zinc-600",
										children: [
											"/ ",
											p.physicalPlanned,
											"%"
										]
									})
								]
							})
						]
					}, p.id)) })]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				icon: Bell,
				title: "Notificações dos Agentes",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						label: "Alertas do Agente 0 (Contratual)",
						enabled: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						label: "Alertas do Agente 1 (Cronograma)",
						enabled: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						label: "Alertas do Agente 2 (Insumos)",
						enabled: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						label: "Digest diário por e-mail",
						enabled: false
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditLogSection, {})
		]
	}) });
}
function Card({ icon: Icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-b border-zinc-800/60 pb-3 mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 border border-indigo-500/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-indigo-400" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold text-zinc-100",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-1",
			children
		})]
	});
}
function Field({ label, value, mono }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-2 border-b border-zinc-800/50 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-wider text-zinc-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-0.5 text-xs text-zinc-100 ${mono ? "font-mono" : ""}`,
			children: value
		})]
	});
}
function Toggle({ label, enabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between py-2 border-b border-zinc-800/50 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-zinc-200",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: ["relative h-5 w-9 rounded-full transition-colors", enabled ? "bg-indigo-500" : "bg-zinc-700"].join(" "),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: ["absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform", enabled ? "translate-x-4" : "translate-x-0.5"].join(" ") })
		})]
	});
}
var CATEGORY_STYLES = {
	Financeiro: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
	"Assinatura Mobile": "border-sky-500/30 bg-sky-500/10 text-sky-300",
	"Alteração de Cronograma": "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
	"Alertas Ignorados": "border-amber-500/30 bg-amber-500/10 text-amber-300",
	"RAG / Integração": "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
	Configuração: "border-zinc-600 bg-zinc-800/60 text-zinc-300"
};
function AuditLogSection() {
	const { entries } = useAuditLog();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const categories = [
		"all",
		"Financeiro",
		"Assinatura Mobile",
		"Alteração de Cronograma",
		"Alertas Ignorados",
		"RAG / Integração",
		"Configuração"
	];
	const filtered = entries.filter((e) => (filter === "all" || e.category === filter) && (q === "" || [
		e.user,
		e.project,
		e.event,
		e.metadata
	].some((f) => f.toLowerCase().includes(q.toLowerCase()))));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/60 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10 border border-emerald-500/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-emerald-400" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold text-zinc-100",
						children: "Log de Auditoria Imutável"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-zinc-500",
						children: "Registro forense · hash SHA-256 por evento · retenção 10 anos (LGPD & Lei nº 8.666)"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-300",
						children: [entries.length, " eventos"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 text-[11px] text-zinc-300 hover:border-indigo-500/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), "Exportar CSV"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 border-b border-zinc-800/60 px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[200px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Buscar por usuário, projeto, evento…",
						className: "w-full rounded-md border border-zinc-800 bg-zinc-950 py-1.5 pl-8 pr-3 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/50"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: categories.map((c) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilter(c),
							className: ["rounded-full border px-2.5 py-0.5 text-[10px] font-medium transition-colors", filter === c ? "border-indigo-500/40 bg-indigo-500/15 text-indigo-200" : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200"].join(" "),
							children: c === "all" ? "Todos" : c
						}, c);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-zinc-800/60 bg-zinc-900 text-[10px] uppercase tracking-wider text-zinc-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2.5 text-left font-medium",
								children: "Timestamp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2.5 text-left font-medium",
								children: "Usuário"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2.5 text-left font-medium",
								children: "Projeto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2.5 text-left font-medium",
								children: "Evento"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2.5 text-left font-medium",
								children: "Categoria"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-2.5 text-right font-medium",
								children: "Hash"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [filtered.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-zinc-800/40 last:border-0 hover:bg-zinc-800/30 align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-[11px] text-zinc-400 whitespace-nowrap",
								children: e.timestamp
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-zinc-200 whitespace-nowrap",
								children: e.user
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-zinc-400 whitespace-nowrap",
								children: e.project
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-zinc-100",
									children: e.event
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-zinc-500 mt-0.5",
									children: e.metadata
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: ["inline-flex rounded-full border px-2 py-0.5 text-[10px]", CATEGORY_STYLES[e.category]].join(" "),
									children: e.category
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-right font-mono text-[10px] text-emerald-300/80 whitespace-nowrap",
								children: e.hash
							})
						]
					}, e.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 6,
						className: "px-4 py-10 text-center text-xs text-zinc-500",
						children: "Nenhum evento corresponde ao filtro selecionado."
					}) })] })]
				})
			})
		]
	});
}
//#endregion
export { SettingsPage as component };
