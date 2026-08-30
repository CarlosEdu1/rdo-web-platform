import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { F as CircleCheck, U as Building2, _ as MapPin, h as OctagonAlert, i as TriangleAlert, q as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Shell, n as PROJECTS, s as useProjectFilter, t as ALERTS } from "./Shell-C9nVmuTq.mjs";
import { a as Bar, c as Legend, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D0_uK7ay.js
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardBody, {}) });
}
function DashboardBody() {
	const { projectId } = useProjectFilter();
	const navigate = useNavigate();
	const projects = projectId === "all" ? PROJECTS : PROJECTS.filter((p) => p.id === projectId);
	const alerts = projectId === "all" ? ALERTS : ALERTS.filter((a) => a.projectId === projectId);
	const total = projects.length;
	const onTrack = projects.filter((p) => p.status === "on-track").length;
	const warn = projects.filter((p) => p.status === "warning").length;
	const crit = projects.filter((p) => p.status === "critical").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-mono uppercase tracking-widest text-zinc-500",
						children: "Overview · 24 Jul 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-2xl font-semibold tracking-tight text-zinc-50",
						children: "Dashboard Estratégico"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-zinc-400",
						children: [
							"Síntese executiva de ",
							total,
							" ",
							total === 1 ? "obra" : "obras",
							" sob supervisão."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-2 text-[11px] text-zinc-500 font-mono",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Live · sincronizado há 34s"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: Building2,
						tone: "ia",
						label: "Total de Obras / RDOs",
						value: `${total} Obras Ativas`,
						sub: `48 RDOs este mês`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: CircleCheck,
						tone: "success",
						label: "Conforme",
						value: `${onTrack} Obras em Dia`,
						sub: `${Math.round(onTrack / total * 100)}% do portfólio`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: TriangleAlert,
						tone: "warning",
						label: "Em Alerta",
						value: `${warn} Obras com Risco`,
						sub: `${Math.round(warn / total * 100)}% do portfólio`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: OctagonAlert,
						tone: "critical",
						label: "Crítico / Atenção",
						value: `${crit} ${crit === 1 ? "Obra" : "Obras"} com Paralisação`,
						sub: `${Math.round(crit / total * 100)}% do portfólio`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 xl:grid-cols-3 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "xl:col-span-2 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						title: "Projetos Ativos",
						subtitle: "Progresso físico, financeiro e status operacional"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-3",
						children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p }, p.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						title: "Alertas Preditivos",
						subtitle: "Feed em tempo real dos Agentes de IA",
						live: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur",
						children: alerts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-6 text-center text-sm text-zinc-500",
							children: "Nenhum alerta ativo neste contexto."
						}) : alerts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							onClick: () => navigate({ to: "/diagnostico" }),
							className: "border-b border-zinc-800/60 last:border-0 p-4 hover:bg-zinc-800/30 transition-colors cursor-pointer group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: ["mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] font-bold", a.severity === "critical" ? "border-rose-500/40 bg-rose-500/10 text-rose-400" : "border-amber-500/40 bg-amber-500/10 text-amber-400"].join(" "),
									children: ["A", a.agent]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] font-medium text-indigo-400 truncate",
												children: a.agentName
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] font-mono text-zinc-500 shrink-0",
												children: a.time
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-zinc-200 leading-relaxed",
											children: [a.severity === "critical" ? "🚨 " : "⚠️ ", a.message]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex items-center gap-1 text-[11px] text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity",
											children: ["Ver diagnóstico ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
										})
									]
								})]
							})
						}, a.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				title: "Efetivo Planejado vs. Real",
				subtitle: "Comparativo por obra · semana corrente"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 rounded-lg border border-zinc-800/60 bg-zinc-900/60 p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: projects.map((p) => ({
								name: p.name.split(" - ")[0].slice(0, 14),
								Planejado: p.effectivePlanned,
								Real: p.effectiveReal
							})),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "#27272A",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									stroke: "#71717A",
									fontSize: 11,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "#71717A",
									fontSize: 11,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: {
										background: "#18181B",
										border: "1px solid #3F3F46",
										borderRadius: "6px",
										fontSize: "12px"
									},
									cursor: { fill: "rgba(99,102,241,0.05)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
									wrapperStyle: {
										fontSize: "11px",
										color: "#A1A1AA",
										paddingTop: "12px"
									},
									iconType: "circle"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "Planejado",
									fill: "#52525B",
									radius: [
										3,
										3,
										0,
										0
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "Real",
									fill: "#6366F1",
									radius: [
										3,
										3,
										0,
										0
									]
								})
							]
						})
					})
				})
			})] })
		]
	});
}
function SectionTitle({ title, subtitle, live }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-sm font-semibold tracking-tight text-zinc-100",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-zinc-500 mt-0.5",
			children: subtitle
		})] }), live && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Live"]
		})]
	});
}
function KpiCard({ icon: Icon, tone, label, value, sub }) {
	const tones = {
		ia: {
			ring: "border-indigo-500/30",
			bg: "bg-indigo-500/10",
			fg: "text-indigo-400",
			pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
		},
		success: {
			ring: "border-emerald-500/30",
			bg: "bg-emerald-500/10",
			fg: "text-emerald-400",
			pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
		},
		warning: {
			ring: "border-amber-500/30",
			bg: "bg-amber-500/10",
			fg: "text-amber-400",
			pill: "bg-amber-500/10 text-amber-300 border-amber-500/30"
		},
		critical: {
			ring: "border-rose-500/30",
			bg: "bg-rose-500/10",
			fg: "text-rose-400",
			pill: "bg-rose-500/10 text-rose-300 border-rose-500/30"
		}
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `group relative rounded-lg border ${tones.ring} bg-zinc-900/60 backdrop-blur p-4 transition-all hover:bg-zinc-900`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex h-9 w-9 items-center justify-center rounded-md ${tones.bg}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${tones.fg}` })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${tones.pill}`,
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xl font-semibold tracking-tight text-zinc-50",
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-xs text-zinc-500 font-mono",
				children: sub
			})]
		})]
	});
}
function ProjectCard({ project: p }) {
	const s = {
		"on-track": {
			color: "emerald",
			label: "Em Dia"
		},
		warning: {
			color: "amber",
			label: "Alerta"
		},
		critical: {
			color: "rose",
			label: "Crítico"
		}
	}[p.status];
	const phyPct = Math.min(100, p.physicalDone / Math.max(p.physicalPlanned, 1) * 100);
	const finPct = Math.min(100, p.financialDone / Math.max(p.financialPlanned, 1) * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur p-4 hover:border-zinc-700 transition-colors",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold text-zinc-100 truncate",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-0.5 flex items-center gap-1 text-[11px] text-zinc-500",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), p.location]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-${s.color}-500/10 text-${s.color}-300 border-${s.color}-500/30`,
					children: s.label
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressRow, {
					label: "Progresso Físico",
					value: p.physicalDone,
					planned: p.physicalPlanned,
					unit: "%",
					barClass: "bg-indigo-500",
					pct: phyPct
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressRow, {
					label: "Progresso Financeiro",
					value: p.financialDone,
					planned: p.financialPlanned,
					unit: "M",
					prefix: "R$ ",
					barClass: "bg-emerald-500",
					pct: finPct
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between border-t border-zinc-800/60 pt-3 text-[11px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-zinc-400",
					children: p.weather
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-zinc-400",
					children: p.rdoStatus
				})]
			})
		]
	});
}
function ProgressRow({ label, value, planned, unit, prefix = "", barClass, pct }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between text-[11px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-zinc-400",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-mono text-zinc-300",
			children: [
				prefix,
				value,
				unit,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-zinc-500",
					children: [
						"/ ",
						prefix,
						planned,
						unit
					]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `h-full ${barClass} transition-all`,
			style: { width: `${pct}%` }
		})
	})] });
}
//#endregion
export { Dashboard as component };
