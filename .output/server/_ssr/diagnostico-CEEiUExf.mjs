import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { B as Camera, F as CircleCheck, K as ArrowUpRight, V as Calendar, h as OctagonAlert, i as TriangleAlert, j as ClipboardCheck, n as X, o as Sparkles, r as Users, t as Zap, w as FileText } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Shell, n as PROJECTS, o as useAuditLog, s as useProjectFilter } from "./Shell-C9nVmuTq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/diagnostico-CEEiUExf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DiagPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagBody, {}) });
}
function DiagBody() {
	const { projectId } = useProjectFilter();
	const { addEntry } = useAuditLog();
	const project = PROJECTS.find((p) => p.id === projectId) ?? PROJECTS[0];
	const [actions, setActions] = (0, import_react.useState)({
		a1: { status: "pending" },
		a2: { status: "pending" }
	});
	const executeAction = (id, title, metadata) => {
		setActions((s) => ({
			...s,
			[id]: { status: "executing" }
		}));
		addEntry({
			user: "Eng. Carlos Andrade",
			project: project.name.split(" - ")[0],
			event: `Execução de Ação IA · ${title}`,
			category: "Financeiro",
			metadata
		});
		toast.success("Ação Aprovada com Sucesso!", { description: "Registrada no Log de Auditoria Imutável." });
	};
	const rejectAction = (id, title) => {
		setActions((s) => ({
			...s,
			[id]: { status: "rejected" }
		}));
		addEntry({
			user: "Eng. Carlos Andrade",
			project: project.name.split(" - ")[0],
			event: `Alerta Ignorado pelo Gestor · ${title}`,
			category: "Alertas Ignorados",
			metadata: "Ação da IA rejeitada manualmente"
		});
		toast("Ação rejeitada", { description: "Decisão registrada no log." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[11px] font-mono uppercase tracking-widest text-zinc-500",
					children: ["Diagnóstico Profundo · ", project.name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl font-semibold tracking-tight text-zinc-50",
					children: "Gestão Inteligente"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-zinc-400",
					children: "Análise de causa-raiz e ações recomendadas pelos Agentes de IA · atualizado em tempo real."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Seção 01",
				title: "Artefatos Avaliados",
				subtitle: "Status de conformidade dos recursos-base do projeto"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtefactCard, {
						icon: FileText,
						label: "Contrato",
						status: "ok",
						statusLabel: "Conforme"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtefactCard, {
						icon: Calendar,
						label: "Cronograma",
						status: "warn",
						statusLabel: "Alerta de Desvio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtefactCard, {
						icon: Users,
						label: "Histograma",
						status: "crit",
						statusLabel: "Atenção Crítica"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtefactCard, {
						icon: ClipboardCheck,
						label: "RDO do Dia",
						status: "ok",
						statusLabel: "Processado & Validado"
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Seção 02",
				title: "Diagnóstico da IA",
				subtitle: "Descritivo detalhado da anomalia identificada"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagBlock, {
						tone: "critical",
						label: "Problema Identificado",
						body: "Atraso acumulado de 3 dias no cronograma do Pavimento L3 (Caminho Crítico da Obra)."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagBlock, {
						tone: "ia",
						label: "Causas Raiz",
						body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "space-y-1.5 list-decimal list-inside text-xs text-zinc-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Paralisação de 1h30m no fornecimento de concreto usinado no dia 21/Jul." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Déficit constante de 2 pedreiros em relação ao histograma planejado." })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagBlock, {
						tone: "warning",
						label: "Impacto Previsto",
						body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-xs text-zinc-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"Desvio estimado de",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-amber-300",
									children: "R$ 18.500,00"
								}),
								" em custos indiretos e atraso potencial da entrega da laje em",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-amber-300",
									children: "5 dias"
								}),
								"."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicroStat, {
									label: "Custo Extra",
									value: "R$ 18.5K",
									tone: "warn"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicroStat, {
									label: "Prazo Extra",
									value: "+5 dias",
									tone: "warn"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagBlock, {
						tone: "neutral",
						label: "Evidências Cruzadas",
						body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono",
										children: "RDO-2039 · 19/Jul"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono",
										children: "RDO-2041 · 20/Jul"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono",
										children: "RDO-2046 · 21/Jul"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-3.5 w-3.5 text-amber-400" }), "Foto anexada: paralisação concreteira"]
								})
							]
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Seção 03",
				title: "Plano de Ação Proposto pelos Agentes de IA",
				subtitle: "Decisões orientadas a dados · análise de risco por ação"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionCard, {
					id: "a1",
					number: "01",
					title: "Realocar 2 pedreiros da Torre B → Torre A pelos próximos 4 dias",
					risk: "low",
					riskDesc: "Risco Baixo · impacto mínimo na Torre B (3 dias de folga no cronograma).",
					savings: "R$ 12.4K economia projetada",
					state: actions.a1,
					onExecute: () => executeAction("a1", "Realocação de pedreiros Torre B → Torre A", "Economia projetada: R$ 12.400,00 · Duração: 4 dias"),
					onReject: () => rejectAction("a1", "Realocação de pedreiros"),
					executeLabel: "Executar e Notificar Equipe"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionCard, {
					id: "a2",
					number: "02",
					title: "Aprovar horas extras no sábado para equipe de concretagem recuperar Laje L3",
					risk: "medium",
					riskDesc: "Risco Médio · custo adicional estimado em R$ 2.400,00 em folha de pagamento.",
					savings: "Prazo recuperado em 2 dias",
					state: actions.a2,
					onExecute: () => executeAction("a2", "Aprovação de Horas Extras · Concretagem Laje L3", "Impacto: +R$ 2.400,00 · Prazo recuperado: 2 dias"),
					onReject: () => rejectAction("a2", "Horas extras concretagem"),
					executeLabel: "Aprovar Custo Extra"
				})]
			})] })
		]
	});
}
function SectionHeader({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-end justify-between border-b border-zinc-800/60 pb-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-mono uppercase tracking-widest text-indigo-400",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 text-lg font-semibold tracking-tight text-zinc-100",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-zinc-500 mt-0.5",
				children: subtitle
			})
		] })
	});
}
function ArtefactCard({ icon: Icon, label, status, statusLabel }) {
	const map = {
		ok: {
			border: "border-emerald-500/30",
			pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
			icon: CircleCheck,
			tint: "text-emerald-400"
		},
		warn: {
			border: "border-amber-500/30",
			pill: "bg-amber-500/10 text-amber-300 border-amber-500/30",
			icon: TriangleAlert,
			tint: "text-amber-400"
		},
		crit: {
			border: "border-rose-500/30",
			pill: "bg-rose-500/10 text-rose-300 border-rose-500/30",
			icon: OctagonAlert,
			tint: "text-rose-400"
		}
	}[status];
	const StatusIcon = map.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-lg border ${map.border} bg-zinc-900/60 backdrop-blur p-4`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-zinc-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { className: `h-3.5 w-3.5 ${map.tint}` })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-xs text-zinc-500 font-mono uppercase tracking-wider",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium ${map.pill}`,
					children: statusLabel
				})
			})
		]
	});
}
function DiagBlock({ tone, label, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-lg border ${{
			critical: "border-rose-500/30 bg-rose-500/5",
			warning: "border-amber-500/30 bg-amber-500/5",
			ia: "border-indigo-500/30 bg-indigo-500/5",
			neutral: "border-zinc-800/60 bg-zinc-900/60"
		}[tone]} p-4`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `text-[10px] font-mono uppercase tracking-widest ${{
				critical: "text-rose-400",
				warning: "text-amber-400",
				ia: "text-indigo-400",
				neutral: "text-zinc-500"
			}[tone]}`,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-sm text-zinc-100 leading-relaxed",
			children: body
		})]
	});
}
function MicroStat({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[9px] uppercase tracking-wider text-zinc-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `font-mono text-sm ${tone === "warn" ? "text-amber-300" : ""}`,
			children: value
		})]
	});
}
function ActionCard({ id, number, title, risk, riskDesc, savings, state, onExecute, onReject, executeLabel }) {
	const riskMap = {
		low: {
			label: "Risco Baixo",
			cls: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
		},
		medium: {
			label: "Risco Médio",
			cls: "bg-amber-500/10 text-amber-300 border-amber-500/30"
		},
		high: {
			label: "Risco Alto",
			cls: "bg-rose-500/10 text-rose-300 border-rose-500/30"
		}
	}[risk];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4 items-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-md border border-indigo-500/40 bg-indigo-500/10 font-mono text-sm text-indigo-300",
						children: number
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-indigo-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), "Ação Proposta"]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden lg:flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-indigo-400 mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), "Ação Proposta"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold text-zinc-100 leading-snug",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${riskMap.cls}`,
								children: riskMap.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-zinc-500",
								children: riskDesc
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3" }), savings]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex lg:flex-col gap-2 lg:w-52",
					children: [
						state.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onExecute,
							className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 text-xs font-medium transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5" }),
								" ",
								executeLabel
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onReject,
							className: "inline-flex items-center justify-center gap-1.5 rounded-md border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 px-3 py-2 text-xs font-medium transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" }), " Rejeitar"]
						})] }),
						state.status === "executing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200 text-center",
							children: "⚡ Em Resolução · registrado no log"
						}),
						state.status === "rejected" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-400 text-center",
							children: "Rejeitado pelo gestor"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { DiagPage as component };
