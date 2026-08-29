import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  ClipboardCheck,
  Microscope,
  BrainCircuit,
  Settings,
  Smartphone,
  HardHat,
  CircleDot,
} from "lucide-react";

const links = [
  { to: "/", label: "Dashboard Estratégico", icon: LayoutDashboard },
  { to: "/rdo", label: "Centro de Revisão & Auditoria de RDO", icon: ClipboardCheck },
  { to: "/diagnostico", label: "Diagnóstico & Gestão Inteligente", icon: Microscope },
  { to: "/rag", label: "Hub de Integrações & RAG", icon: BrainCircuit },
  { to: "/configuracoes", label: "Configurações & Logs de Auditoria", icon: Settings },
] as const;

export function AppSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <aside className="hidden md:flex fixed inset-y-0 left-0 z-30 w-[250px] flex-col border-r border-zinc-800/60 bg-zinc-900/95 backdrop-blur">
      {/* Header */}
      <div className="px-5 py-5 border-b border-zinc-800/60">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-lg shadow-indigo-500/20">
            <HardHat className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-zinc-50">SmartForeman</div>
            <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Web · v2.4 Enterprise</div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1.5">
          <CircleDot className="h-3 w-3 text-emerald-400 animate-pulse" />
          <span className="text-[11px] font-medium text-emerald-300">IA Agents Active</span>
          <span className="ml-auto font-mono text-[10px] text-emerald-400/70">3/3</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-4">
        <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
          Workspace
        </div>
        <ul className="space-y-1">
          {links.map(({ to, label, icon: Icon }) => {
            const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={[
                    "group flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-all",
                    active
                      ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
                      : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100 border border-transparent",
                  ].join(" ")}
                >
                  <Icon className={["h-4 w-4 shrink-0", active ? "text-indigo-400" : ""].join(" ")} />
                  <span className="truncate">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-zinc-800/60 p-3">
        <div className="flex items-center gap-2.5 rounded-md p-2 hover:bg-zinc-800/50 transition-colors">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold text-zinc-200 border border-zinc-700">
            CA
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-xs font-semibold text-zinc-100">Eng. Carlos Andrade</div>
            <div className="truncate text-[10px] text-zinc-500">Diretor · Admin</div>
          </div>
        </div>
        <button className="mt-2 flex w-full items-center gap-2 rounded-md border border-zinc-800 px-2.5 py-1.5 text-[11px] text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors">
          <Smartphone className="h-3.5 w-3.5" />
          Trocar para Mobile
        </button>
      </div>
    </aside>
  );
}
