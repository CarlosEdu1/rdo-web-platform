import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { PROJECTS, ALERTS } from "@/lib/mock-data";
import { useProjectFilter } from "@/lib/project-context";
import {
  Building2,
  CheckCircle2,
  AlertTriangle,
  OctagonAlert,
  TrendingUp,
  MapPin,
  ArrowRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard Estratégico · SmartForeman Web" },
      {
        name: "description",
        content:
          "Visão executiva de todas as obras: KPIs, alertas preditivos dos Agentes de IA e desempenho de efetivo.",
      },
      { property: "og:title", content: "Dashboard Estratégico · SmartForeman Web" },
      {
        property: "og:description",
        content: "Centro de controle executivo para diretores e gerentes de engenharia.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <Shell>
      <DashboardBody />
    </Shell>
  );
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
  const rdosMonth = 48;

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-end justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            Overview · 24 Jul 2026
          </div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-50">
            Dashboard Estratégico
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Síntese executiva de {total} {total === 1 ? "obra" : "obras"} sob supervisão.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live · sincronizado há 34s
        </div>
      </div>

      {/* KPI banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard
          icon={Building2}
          tone="ia"
          label="Total de Obras / RDOs"
          value={`${total} Obras Ativas`}
          sub={`${rdosMonth} RDOs este mês`}
        />
        <KpiCard
          icon={CheckCircle2}
          tone="success"
          label="Conforme"
          value={`${onTrack} Obras em Dia`}
          sub={`${Math.round((onTrack / total) * 100)}% do portfólio`}
        />
        <KpiCard
          icon={AlertTriangle}
          tone="warning"
          label="Em Alerta"
          value={`${warn} Obras com Risco`}
          sub={`${Math.round((warn / total) * 100)}% do portfólio`}
        />
        <KpiCard
          icon={OctagonAlert}
          tone="critical"
          label="Crítico / Atenção"
          value={`${crit} ${crit === 1 ? "Obra" : "Obras"} com Paralisação`}
          sub={`${Math.round((crit / total) * 100)}% do portfólio`}
        />
      </div>

      {/* Main grid: projects + alerts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Projects grid */}
        <div className="xl:col-span-2 space-y-3">
          <SectionTitle title="Projetos Ativos" subtitle="Progresso físico, financeiro e status operacional" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>

        {/* Alerts feed */}
        <div className="space-y-3">
          <SectionTitle
            title="Alertas Preditivos"
            subtitle="Feed em tempo real dos Agentes de IA"
            live
          />
          <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur">
            {alerts.length === 0 ? (
              <div className="p-6 text-center text-sm text-zinc-500">
                Nenhum alerta ativo neste contexto.
              </div>
            ) : (
              alerts.map((a) => (
                <div
                  key={a.id}
                  onClick={() => navigate({ to: "/diagnostico" })}
                  className="border-b border-zinc-800/60 last:border-0 p-4 hover:bg-zinc-800/30 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={[
                        "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] font-bold",
                        a.severity === "critical"
                          ? "border-rose-500/40 bg-rose-500/10 text-rose-400"
                          : "border-amber-500/40 bg-amber-500/10 text-amber-400",
                      ].join(" ")}
                    >
                      A{a.agent}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-[10px] font-medium text-indigo-400 truncate">
                          {a.agentName}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 shrink-0">{a.time}</div>
                      </div>
                      <p className="mt-1 text-xs text-zinc-200 leading-relaxed">
                        {a.severity === "critical" ? "🚨 " : "⚠️ "}
                        {a.message}
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[11px] text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver diagnóstico <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div>
        <SectionTitle
          title="Efetivo Planejado vs. Real"
          subtitle="Comparativo por obra · semana corrente"
        />
        <div className="mt-3 rounded-lg border border-zinc-800/60 bg-zinc-900/60 p-5">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={projects.map((p) => ({
                  name: p.name.split(" - ")[0].slice(0, 14),
                  Planejado: p.effectivePlanned,
                  Real: p.effectiveReal,
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#27272A" vertical={false} />
                <XAxis dataKey="name" stroke="#71717A" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717A" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#18181B",
                    border: "1px solid #3F3F46",
                    borderRadius: "6px",
                    fontSize: "12px",
                  }}
                  cursor={{ fill: "rgba(99,102,241,0.05)" }}
                />
                <Legend
                  wrapperStyle={{ fontSize: "11px", color: "#A1A1AA", paddingTop: "12px" }}
                  iconType="circle"
                />
                <Bar dataKey="Planejado" fill="#52525B" radius={[3, 3, 0, 0]} />
                <Bar dataKey="Real" fill="#6366F1" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  title,
  subtitle,
  live,
}: {
  title: string;
  subtitle?: string;
  live?: boolean;
}) {
  return (
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-sm font-semibold tracking-tight text-zinc-100">{title}</h2>
        {subtitle && <p className="text-xs text-zinc-500 mt-0.5">{subtitle}</p>}
      </div>
      {live && (
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </div>
      )}
    </div>
  );
}

function KpiCard({
  icon: Icon,
  tone,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  tone: "ia" | "success" | "warning" | "critical";
  label: string;
  value: string;
  sub: string;
}) {
  const tones = {
    ia: { ring: "border-indigo-500/30", bg: "bg-indigo-500/10", fg: "text-indigo-400", pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30" },
    success: { ring: "border-emerald-500/30", bg: "bg-emerald-500/10", fg: "text-emerald-400", pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" },
    warning: { ring: "border-amber-500/30", bg: "bg-amber-500/10", fg: "text-amber-400", pill: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
    critical: { ring: "border-rose-500/30", bg: "bg-rose-500/10", fg: "text-rose-400", pill: "bg-rose-500/10 text-rose-300 border-rose-500/30" },
  }[tone];

  return (
    <div className={`group relative rounded-lg border ${tones.ring} bg-zinc-900/60 backdrop-blur p-4 transition-all hover:bg-zinc-900`}>
      <div className="flex items-start justify-between">
        <div className={`flex h-9 w-9 items-center justify-center rounded-md ${tones.bg}`}>
          <Icon className={`h-4 w-4 ${tones.fg}`} />
        </div>
        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${tones.pill}`}>
          {label}
        </span>
      </div>
      <div className="mt-4">
        <div className="text-xl font-semibold tracking-tight text-zinc-50">{value}</div>
        <div className="mt-0.5 text-xs text-zinc-500 font-mono">{sub}</div>
      </div>
    </div>
  );
}

function ProjectCard({ project: p }: { project: (typeof PROJECTS)[number] }) {
  const statusMap = {
    "on-track": { color: "emerald", label: "Em Dia" },
    warning: { color: "amber", label: "Alerta" },
    critical: { color: "rose", label: "Crítico" },
  } as const;
  const s = statusMap[p.status];
  const phyPct = Math.min(100, (p.physicalDone / Math.max(p.physicalPlanned, 1)) * 100);
  const finPct = Math.min(100, (p.financialDone / Math.max(p.financialPlanned, 1)) * 100);

  return (
    <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur p-4 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-zinc-100 truncate">{p.name}</div>
          <div className="mt-0.5 flex items-center gap-1 text-[11px] text-zinc-500">
            <MapPin className="h-3 w-3" />
            {p.location}
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-${s.color}-500/10 text-${s.color}-300 border-${s.color}-500/30`}
        >
          {s.label}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <ProgressRow
          label="Progresso Físico"
          value={p.physicalDone}
          planned={p.physicalPlanned}
          unit="%"
          barClass="bg-indigo-500"
          pct={phyPct}
        />
        <ProgressRow
          label="Progresso Financeiro"
          value={p.financialDone}
          planned={p.financialPlanned}
          unit="M"
          prefix="R$ "
          barClass="bg-emerald-500"
          pct={finPct}
        />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-zinc-800/60 pt-3 text-[11px]">
        <span className="text-zinc-400">{p.weather}</span>
        <span className="text-zinc-400">{p.rdoStatus}</span>
      </div>
    </div>
  );
}

function ProgressRow({
  label,
  value,
  planned,
  unit,
  prefix = "",
  barClass,
  pct,
}: {
  label: string;
  value: number;
  planned: number;
  unit: string;
  prefix?: string;
  barClass: string;
  pct: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-zinc-400">{label}</span>
        <span className="font-mono text-zinc-300">
          {prefix}
          {value}
          {unit} <span className="text-zinc-500">/ {prefix}{planned}{unit}</span>
        </span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
        <div className={`h-full ${barClass} transition-all`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
