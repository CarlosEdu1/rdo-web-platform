import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as Clock, B as Camera, C as Funnel, F as CircleCheck, I as ChevronRight, N as CircleX, O as Cloud, T as FileSpreadsheet, _ as MapPin, i as TriangleAlert, m as PenLine, n as X, r as Users, w as FileText } from "../_libs/lucide-react.mjs";
import { a as Shell, i as RDOS, n as PROJECTS, s as useProjectFilter } from "./Shell-C9nVmuTq.mjs";
import { t as supabase } from "./supabase-CZ80o7Kp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rdo-CjezZMpo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RdoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RdoBody, {}) });
}
function RdoBody() {
	const { projectId } = useProjectFilter();
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [openRdo, setOpenRdo] = (0, import_react.useState)(null);
	const [rdos, setRdos] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const loadRdos = async () => {
			try {
				setLoading(true);
				const { data, error } = await supabase.from("rdos").select("*");
				if (!error && data) setRdos(data);
				else {
					console.log("Usando mock data para RDOs");
					setRdos(RDOS);
				}
			} catch (err) {
				console.log("Usando mock data como fallback");
				setRdos(RDOS);
			} finally {
				setLoading(false);
			}
		};
		loadRdos();
	}, []);
	const rows = (0, import_react.useMemo)(() => {
		if (rdos.length === 0) return RDOS;
		return rdos.filter((r) => {
			const matchProject = projectId === "all" ? true : r.obra_id === projectId;
			const matchStatus = statusFilter === "all" || statusFilter === "rascunho" ? r.status === "rascunho" : r.status === statusFilter;
			return matchProject && matchStatus;
		});
	}, [
		rdos,
		projectId,
		statusFilter
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] font-mono uppercase tracking-widest text-zinc-500",
					children: "Auditoria · RDOs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl font-semibold tracking-tight text-zinc-50",
					children: "Centro de Revisão de RDO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-zinc-400",
					children: [rows.length, " RDOs no contexto atual · visualizador lado a lado disponível."]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 rounded-lg border border-zinc-800/60 bg-zinc-900/60 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-zinc-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5" }), "Filtros:"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, { label: "Intervalo: 22–24 Jul" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, { label: projectId === "all" ? "Obra: Todas" : `Obra: ${PROJECTS.find((p) => p.id === projectId)?.name.split(" - ")[0]}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: statusFilter,
						onChange: (e) => setStatusFilter(e.target.value),
						className: "rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 focus:outline-none focus:border-indigo-500/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "Status: Todos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "rascunho",
								children: "Rascunho (Pendentes)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "aprovado",
								children: "Aprovado"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "rejeitado",
								children: "Rejeitado"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, { label: "Resp. Técnico: Todos" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 hover:border-indigo-500/40 hover:text-zinc-100 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), "Exportar PDF"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 hover:bg-emerald-500/20 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-3.5 w-3.5" }), "Auditoria Excel"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto scrollbar-thin",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-zinc-800/60 bg-zinc-900 text-[10px] uppercase tracking-wider text-zinc-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Data RDO" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "ID" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Obra" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Resp. Técnico" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
									className: "text-right",
									children: "Efetivo Real / Meta"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
									className: "text-center",
									children: "Clima"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
									className: "text-center",
									children: "Ocorrências"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Status IA" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
									className: "text-right",
									children: "Ações"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => {
							const project = PROJECTS.find((p) => p.id === r.projectId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								onClick: () => setOpenRdo(r),
								className: "border-b border-zinc-800/40 last:border-0 cursor-pointer hover:bg-zinc-800/30 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
										className: "font-mono text-zinc-300",
										children: r.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
										className: "font-mono text-indigo-400",
										children: r.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
										className: "text-zinc-200",
										children: project?.name.split(" - ")[0]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
										className: "text-zinc-300",
										children: r.responsible
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Td, {
										className: "text-right font-mono",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: r.effectiveReal < r.effectivePlanned ? "text-amber-400" : "text-emerald-400",
											children: r.effectiveReal
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-zinc-500",
											children: [" / ", r.effectivePlanned]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
										className: "text-center text-base",
										children: r.weather
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
										className: "text-center font-mono text-zinc-300",
										children: r.occurrences
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IaStatusBadge, { status: r.iaStatus }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
										className: "text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center text-indigo-400 hover:text-indigo-300",
											children: ["Revisar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 ml-0.5" })]
										})
									})
								]
							}, r.id);
						}) })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-zinc-800/60 px-4 py-2.5 text-[11px] text-zinc-500",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Exibindo ",
						rows.length,
						" de ",
						RDOS.length,
						" RDOs"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded border border-zinc-800 px-2 py-1 hover:bg-zinc-800",
								children: "‹"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-2",
								children: "Página 1 de 1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded border border-zinc-800 px-2 py-1 hover:bg-zinc-800",
								children: "›"
							})
						]
					})]
				})]
			}),
			openRdo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RdoSplitModal, {
				rdo: openRdo,
				onClose: () => setOpenRdo(null)
			})
		]
	});
}
function Th({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
		className: `px-4 py-2.5 text-left font-medium ${className}`,
		children
	});
}
function Td({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		className: `px-4 py-2.5 ${className}`,
		children
	});
}
function FilterChip({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] font-mono text-zinc-400",
		children: label
	});
}
function IaStatusBadge({ status }) {
	const map = {
		approved: {
			icon: CircleCheck,
			label: "Aprovado",
			cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
		},
		warning: {
			icon: TriangleAlert,
			label: "Com Alerta",
			cls: "border-amber-500/30 bg-amber-500/10 text-amber-300"
		},
		critical: {
			icon: CircleX,
			label: "Crítico",
			cls: "border-rose-500/30 bg-rose-500/10 text-rose-300"
		},
		pending: {
			icon: Clock,
			label: "Pendente",
			cls: "border-zinc-700 bg-zinc-800 text-zinc-300"
		}
	}[status];
	const Icon = map.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${map.cls}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3" }), map.label]
	});
}
function RdoSplitModal({ rdo, onClose }) {
	const project = PROJECTS.find((p) => p.id === rdo.projectId);
	const [decision, setDecision] = (0, import_react.useState)("none");
	const [saving, setSaving] = (0, import_react.useState)(false);
	const handleApprove = async () => {
		try {
			setSaving(true);
			const { error } = await supabase.from("rdos").update({
				status: "aprovado",
				atualizado_em: (/* @__PURE__ */ new Date()).toISOString()
			}).eq("id", rdo.id || rdo.projectId);
			if (!error) {
				setDecision("approved");
				setTimeout(() => onClose(), 1500);
			} else console.error("Erro ao aprovar:", error);
		} finally {
			setSaving(false);
		}
	};
	const handleReject = async () => {
		try {
			setSaving(true);
			const { error } = await supabase.from("rdos").update({
				status: "rejeitado",
				atualizado_em: (/* @__PURE__ */ new Date()).toISOString()
			}).eq("id", rdo.id || rdo.projectId);
			if (!error) {
				setDecision("rejected");
				setTimeout(() => onClose(), 1500);
			} else console.error("Erro ao rejeitar:", error);
		} finally {
			setSaving(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col w-full max-w-6xl max-h-[92vh] rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-zinc-800 px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm text-indigo-400",
							children: rdo.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-zinc-600",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-zinc-100",
							children: project?.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-zinc-500",
							children: rdo.date
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] text-zinc-500 mt-0.5",
					children: "Visualizador Duplo · Auditoria Split-Screen"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-y-auto scrollbar-thin border-r border-zinc-800 p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitHeader, {
							label: "RDO Original de Campo",
							tone: "neutral"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold text-zinc-200 border border-zinc-700",
								children: rdo.responsible.split(" ").slice(-1)[0].slice(0, 2).toUpperCase()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium text-zinc-100",
									children: rdo.responsible
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-zinc-500",
									children: "Responsável Técnico · CREA 12345-ES"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldMini, {
								icon: Cloud,
								label: "Clima Real",
								children: [rdo.weather, " 27°C · Umidade 74%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldMini, {
								icon: Users,
								label: "Mão de Obra",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-zinc-100",
									children: rdo.effectiveReal
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-zinc-500 font-mono",
									children: " pessoas"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-wider text-zinc-500 mb-2",
								children: "Atividades Realizadas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-1.5 text-xs text-zinc-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" }), " Concretagem parcial da Laje L3 (63% da área)"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" }), " Montagem de fôrmas do Pilar P12"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" }), " Armação de aço · nível 4"]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-amber-500/20 bg-amber-500/5 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] uppercase tracking-wider text-amber-400 mb-1",
								children: [
									"Ocorrências (",
									rdo.occurrences,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-zinc-300 leading-relaxed",
								children: "Paralisação de 1h30min por atraso na entrega do concreto usinado (fornecedor: Concrepar)."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-wider text-zinc-500 mb-2",
							children: "Galeria de Fotos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-2",
							children: [
								"from-indigo-950 to-zinc-900",
								"from-zinc-800 to-zinc-950",
								"from-amber-950/40 to-zinc-900",
								"from-emerald-950/40 to-zinc-900"
							].map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `aspect-square rounded-md border border-zinc-800 bg-gradient-to-br ${g} flex items-center justify-center`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-4 w-4 text-zinc-600" })
							}, i))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-500 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "h-3 w-3" }), " Assinatura Digital"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-12 rounded border border-zinc-800 bg-zinc-950 flex items-end justify-center px-2 pb-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 100 30",
										className: "h-8 w-full text-zinc-400",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M2 20 Q 10 5, 20 18 T 40 15 T 60 20 T 85 12 L 95 22",
											stroke: "currentColor",
											fill: "none",
											strokeWidth: "1.2",
											strokeLinecap: "round"
										})
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-500 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), " Geofencing GPS"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-[11px] text-zinc-300 leading-tight",
										children: [
											"-20.3155°S",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"-40.3128°W"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-[10px] text-emerald-400",
										children: "✓ Dentro do perímetro"
									})
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-y-auto scrollbar-thin p-5 space-y-4 bg-zinc-900/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitHeader, {
							label: "Análise & Ações Sugeridas pela IA",
							tone: "ia"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-indigo-500/30 bg-indigo-500/5 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-wider text-indigo-400 mb-1.5",
								children: "Resumo Cruzado · RAG × Campo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-zinc-200 leading-relaxed",
								children: [
									"O Agente 1 identificou ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-amber-300",
										children: "divergência de efetivo"
									}),
									" em relação ao histograma vigente. O Agente 2 correlacionou a paralisação registrada com atraso no caminho crítico do cronograma L3."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-wider text-zinc-500",
									children: "Divergências Detectadas"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DivergenceBadge, {
									tone: "warning",
									children: [
										"⚠️ Divergência de Efetivo (−",
										rdo.effectivePlanned - rdo.effectiveReal,
										" Pedreiros)"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DivergenceBadge, {
									tone: "warning",
									children: "⚠️ Impacto de Clima Registrado (1h30 paralisação)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DivergenceBadge, {
									tone: "critical",
									children: "🚨 Atraso Acumulado no Caminho Crítico"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-wider text-zinc-500 mb-2",
								children: "Score de Confiança da IA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-gradient-to-r from-indigo-500 to-indigo-400",
										style: { width: "89%" }
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm text-indigo-300",
									children: "89%"
								})]
							})]
						}),
						decision === "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 pt-2 border-t border-zinc-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleApprove,
								disabled: saving,
								className: "w-full inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-2.5 text-sm font-medium transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }),
									" ",
									saving ? "Aprovando..." : "Aprovar RDO"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleReject,
								disabled: saving,
								className: "w-full inline-flex items-center justify-center gap-2 rounded-md border border-rose-500/40 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 disabled:opacity-60 disabled:cursor-not-allowed px-4 py-2.5 text-sm font-medium transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" }),
									" ",
									saving ? "Rejeitando..." : "Solicitar Correção ao Engenheiro"
								]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: ["rounded-md border p-3 text-xs", decision === "approved" ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200" : "border-rose-500/40 bg-rose-500/10 text-rose-200"].join(" "),
							children: decision === "approved" ? "✅ RDO aprovado. Decisão registrada no log de auditoria." : "🔴 Solicitação de correção enviada ao Engenheiro Responsável."
						})
					]
				})]
			})]
		})
	});
}
function SplitHeader({ label, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: ["h-1.5 w-1.5 rounded-full", tone === "ia" ? "bg-indigo-500 animate-pulse" : "bg-zinc-500"].join(" ") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] font-mono uppercase tracking-widest text-zinc-500",
			children: label
		})]
	});
}
function FieldMini({ icon: Icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-500 mb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3" }), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-zinc-200",
			children
		})]
	});
}
function DivergenceBadge({ tone, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-md border ${tone === "critical" ? "border-rose-500/30 bg-rose-500/10 text-rose-200" : "border-amber-500/30 bg-amber-500/10 text-amber-200"} px-2.5 py-2 text-xs font-medium`,
		children
	});
}
//#endregion
export { RdoPage as component };
