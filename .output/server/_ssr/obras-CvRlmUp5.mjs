import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { U as Building2, _ as MapPin, f as Plus, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Shell } from "./Shell-C9nVmuTq.mjs";
import { t as supabase } from "./supabase-CZ80o7Kp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/obras-CvRlmUp5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ObrasPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObrasBody, {}) });
}
function ObrasBody() {
	const [obras, setObras] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [showForm, setShowForm] = (0, import_react.useState)(false);
	const [nome, setNome] = (0, import_react.useState)("");
	const [localizacao, setLocalizacao] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("ativa");
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const loadObras = async () => {
			try {
				setLoading(true);
				const { data, error } = await supabase.from("obras").select("*");
				if (!error && data) setObras(data);
			} catch (err) {
				console.log("Erro ao carregar obras");
			} finally {
				setLoading(false);
			}
		};
		loadObras();
	}, []);
	const handleCreate = async (e) => {
		e.preventDefault();
		if (!nome.trim() || !localizacao.trim()) {
			toast.error("Preencha todos os campos");
			return;
		}
		try {
			setSaving(true);
			const { data, error } = await supabase.from("obras").insert([{
				nome,
				localizacao,
				status
			}]).select();
			if (error) {
				toast.error("Erro ao criar obra: " + error.message);
				return;
			}
			toast.success("Obra criada com sucesso!");
			setNome("");
			setLocalizacao("");
			setStatus("ativa");
			setShowForm(false);
			const { data: updated } = await supabase.from("obras").select("*");
			if (updated) setObras(updated);
		} catch (err) {
			toast.error("Erro ao criar obra");
		} finally {
			setSaving(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-mono uppercase tracking-widest text-zinc-500",
						children: "Gerenciamento"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-2xl font-semibold tracking-tight text-zinc-50",
						children: "Gerenciar Obras"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-zinc-400",
						children: "Cadastre novas obras e acompanhe o portfólio do projeto."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setShowForm(!showForm),
					className: "inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 text-sm font-medium transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Nova Obra"]
				})]
			}),
			showForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-indigo-500/30 bg-indigo-500/5 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold text-zinc-50 mb-4",
					children: "Cadastrar Nova Obra"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleCreate,
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm text-zinc-300 mb-2",
								children: "Nome da Obra"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: nome,
								onChange: (e) => setNome(e.target.value),
								placeholder: "Ex: Torre A - Residencial Horizon",
								className: "w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm text-zinc-300 mb-2",
								children: "Localização"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: localizacao,
								onChange: (e) => setLocalizacao(e.target.value),
								placeholder: "Ex: Vitória, ES",
								className: "w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm text-zinc-300 mb-2",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: status,
								onChange: (e) => setStatus(e.target.value),
								className: "w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-indigo-500/50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "ativa",
										children: "Ativa"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "planejada",
										children: "Planejada"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "pendente",
										children: "Pendente"
									})
								]
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: saving,
							className: "inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-2 text-sm font-medium transition-colors",
							children: saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Criando..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Criar Obra"] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowForm(false),
							className: "inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-4 py-2 text-sm font-medium transition-colors",
							children: "Cancelar"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-zinc-800/60 bg-zinc-900/60 overflow-hidden",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-indigo-400" })
				}) : obras.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 text-center text-zinc-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-12 w-12 mx-auto mb-3 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nenhuma obra cadastrada ainda." })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-zinc-800/60 bg-zinc-900 text-[11px] uppercase tracking-wider text-zinc-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left font-medium",
									children: "Nome"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left font-medium",
									children: "Localização"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left font-medium",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left font-medium",
									children: "Criada em"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: obras.map((obra) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-zinc-800/40 hover:bg-zinc-800/30 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-zinc-200 font-medium",
									children: obra.nome
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-4 py-3 flex items-center gap-2 text-zinc-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), obra.localizacao]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${obra.status === "ativa" ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30" : obra.status === "planejada" ? "bg-amber-500/10 text-amber-300 border border-amber-500/30" : "bg-zinc-800 text-zinc-300 border border-zinc-700"}`,
										children: obra.status.charAt(0).toUpperCase() + obra.status.slice(1)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono text-[11px] text-zinc-500",
									children: new Date(obra.criado_em).toLocaleDateString("pt-BR")
								})
							]
						}, obra.id)) })]
					})
				})
			})
		]
	});
}
//#endregion
export { ObrasPage as component };
