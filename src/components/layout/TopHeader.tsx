import { Bell, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { PROJECTS, ALERTS } from "@/lib/mock-data";
import { useProjectFilter } from "@/lib/project-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Profile = "gestor" | "engenheiro" | "empresa";

interface ProfileAlert {
  id: string;
  profile: Profile;
  title: string;
  detail: string;
  severity: "warning" | "critical";
  time: string;
}

const PROFILE_ALERTS: ProfileAlert[] = [
  {
    id: "g1",
    profile: "gestor",
    title: "💰 Multa Contratual iminente",
    detail: "Atraso acumulado de 3 dias na Torre A (R$ 45.000,00 de risco).",
    severity: "critical",
    time: "há 8 min",
  },
  {
    id: "g2",
    profile: "gestor",
    title: "📈 Desvio Financeiro",
    detail: "Shopping Central com 12% acima do orçamento na fase de fundação.",
    severity: "warning",
    time: "há 42 min",
  },
  {
    id: "e1",
    profile: "engenheiro",
    title: "🚜 Sugestão de IA · Realocação",
    detail: "Realocar 2 pedreiros para a Laje L3 para evitar perda do caminho crítico.",
    severity: "warning",
    time: "há 15 min",
  },
  {
    id: "e2",
    profile: "engenheiro",
    title: "🛠️ Frente de serviço travada",
    detail: "Alvenaria do 5º pavimento sem material desde 14h30 (Torre A).",
    severity: "critical",
    time: "há 1h",
  },
  {
    id: "c1",
    profile: "empresa",
    title: "📜 Aditivo Exigido",
    detail: "Formalização de aditivo de prazo referente às paralisações por chuva em Julho.",
    severity: "warning",
    time: "há 3h",
  },
  {
    id: "c2",
    profile: "empresa",
    title: "⚖️ Cláusula 8.2 acionada",
    detail: "Cláusula de força maior recomendada para 2 dias de paralisação registrados.",
    severity: "warning",
    time: "há 5h",
  },
];

export function TopHeader() {
  const { projectId, setProjectId } = useProjectFilter();
  const [q, setQ] = useState("");
  const [tab, setTab] = useState<Profile>("gestor");
  const navigate = useNavigate();
  const selected =
    projectId === "all"
      ? "Todas as Obras"
      : PROJECTS.find((p) => p.id === projectId)?.name ?? "Todas as Obras";

  const filtered = PROFILE_ALERTS.filter((a) => a.profile === tab);
  const totalCount = PROFILE_ALERTS.length + ALERTS.length;

  return (
    <header className="sticky top-0 z-20 h-14 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
      <div className="flex h-full items-center gap-3 px-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-200 hover:border-indigo-500/40 hover:bg-zinc-900 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <span className="max-w-[280px] truncate">{selected}</span>
              <ChevronDown className="h-3.5 w-3.5 text-zinc-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-72 bg-zinc-900 border-zinc-800">
            <DropdownMenuLabel className="text-[10px] uppercase tracking-wider text-zinc-500">
              Contexto Global
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => setProjectId("all")}
              className="text-sm focus:bg-zinc-800"
            >
              🏢 Todas as Obras
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-zinc-800" />
            {PROJECTS.map((p) => (
              <DropdownMenuItem
                key={p.id}
                onClick={() => setProjectId(p.id)}
                className="flex flex-col items-start gap-0.5 text-sm focus:bg-zinc-800"
              >
                <span className="text-zinc-100">{p.name}</span>
                <span className="text-[10px] text-zinc-500">{p.location}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar RDOs, fotos, ocorrências, contratos…"
              className="w-full rounded-md border border-zinc-800 bg-zinc-900/60 py-1.5 pl-9 pr-16 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:bg-zinc-900 transition-colors"
            />
            <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
              ⌘K
            </kbd>
          </div>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-indigo-500/40 transition-colors">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
                {totalCount}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-[420px] p-0 bg-zinc-900 border-zinc-800">
            <div className="border-b border-zinc-800 px-4 py-3">
              <div className="text-sm font-semibold text-zinc-100">Central de Notificações Inteligentes</div>
              <div className="text-[11px] text-zinc-500">
                Matriz segmentada por perfil · {totalCount} alertas ativos
              </div>
            </div>
            <div className="grid grid-cols-3 border-b border-zinc-800 bg-zinc-950/40">
              {(
                [
                  { k: "gestor", label: "Gestor", sub: "Financeiro" },
                  { k: "engenheiro", label: "Engenheiro", sub: "Operacional" },
                  { k: "empresa", label: "Empresa", sub: "Contratual" },
                ] as const
              ).map((t) => {
                const active = tab === t.k;
                return (
                  <button
                    key={t.k}
                    onClick={() => setTab(t.k)}
                    className={[
                      "px-3 py-2 text-[11px] transition-colors border-b-2",
                      active
                        ? "border-indigo-500 text-indigo-300 bg-indigo-500/5"
                        : "border-transparent text-zinc-500 hover:text-zinc-300",
                    ].join(" ")}
                  >
                    <div className="font-semibold">{t.label}</div>
                    <div className="text-[9px] uppercase tracking-wider opacity-70">{t.sub}</div>
                  </button>
                );
              })}
            </div>
            <div className="max-h-96 overflow-y-auto scrollbar-thin">
              {filtered.map((a) => (
                <button
                  key={a.id}
                  onClick={() => navigate({ to: "/diagnostico" })}
                  className="w-full text-left border-b border-zinc-800/60 px-4 py-3 hover:bg-zinc-800/40 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <span
                      className={[
                        "mt-1 h-1.5 w-1.5 shrink-0 rounded-full",
                        a.severity === "critical" ? "bg-rose-500" : "bg-amber-500",
                      ].join(" ")}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium text-zinc-100">{a.title}</div>
                      <div className="mt-0.5 text-[11px] text-zinc-400 leading-relaxed">{a.detail}</div>
                      <div className="mt-1 text-[10px] text-zinc-500 font-mono">{a.time}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
