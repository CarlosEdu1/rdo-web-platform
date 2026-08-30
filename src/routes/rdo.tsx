import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { RDOS, PROJECTS, type RdoRow } from "@/lib/mock-data";
import { useProjectFilter } from "@/lib/project-context";
import { supabase } from "@/lib/supabase";
import { useMemo, useState, useEffect } from "react";
import {
  FileText,
  FileSpreadsheet,
  Filter,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  MapPin,
  Camera,
  PenLine,
  X,
  Cloud,
  Users,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/rdo")({
  head: () => ({
    meta: [
      { title: "Centro de Revisão de RDO · SmartForeman Web" },
      {
        name: "description",
        content:
          "Auditoria de RDOs com visualizador lado a lado: RDO original vs análise da IA e ações rápidas de aprovação.",
      },
      { property: "og:title", content: "Centro de Revisão de RDO · SmartForeman Web" },
      { property: "og:description", content: "Auditoria comparativa de RDOs com Agentes de IA." },
    ],
  }),
  component: RdoPage,
});

function RdoPage() {
  return (
    <Shell>
      <RdoBody />
    </Shell>
  );
}

function RdoBody() {
  const { projectId } = useProjectFilter();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [openRdo, setOpenRdo] = useState<RdoRow | null>(null);
  const [rdos, setRdos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Carregar RDOs do Supabase
  useEffect(() => {
    const loadRdos = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("rdos").select("*");
        if (!error && data) {
          setRdos(data);
        } else {
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
    void loadRdos();
  }, []);

  const rows = useMemo(() => {
    if (rdos.length === 0) return RDOS;
    return rdos.filter((r) => {
      const matchProject = projectId === "all" ? true : r.obra_id === projectId;
      const matchStatus =
        statusFilter === "all" || statusFilter === "rascunho"
          ? r.status === "rascunho"
          : r.status === statusFilter;
      return matchProject && matchStatus;
    });
  }, [rdos, projectId, statusFilter]);

  return (
    <div className="space-y-6">
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
          Auditoria · RDOs
        </div>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-50">
          Centro de Revisão de RDO
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          {rows.length} RDOs no contexto atual · visualizador lado a lado disponível.
        </p>
      </div>

      {/* Filters + Exports */}
      <div className="flex flex-wrap items-center gap-3 rounded-lg border border-zinc-800/60 bg-zinc-900/60 p-3">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Filter className="h-3.5 w-3.5" />
          Filtros:
        </div>
        <FilterChip label="Intervalo: 22–24 Jul" />
        <FilterChip
          label={
            projectId === "all"
              ? "Obra: Todas"
              : `Obra: ${PROJECTS.find((p) => p.id === projectId)?.name.split(" - ")[0]}`
          }
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 focus:outline-none focus:border-indigo-500/50"
        >
          <option value="all">Status: Todos</option>
          <option value="rascunho">Rascunho (Pendentes)</option>
          <option value="aprovado">Aprovado</option>
          <option value="rejeitado">Rejeitado</option>
        </select>
        <FilterChip label="Resp. Técnico: Todos" />

        <div className="ml-auto flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 hover:border-indigo-500/40 hover:text-zinc-100 transition-colors">
            <FileText className="h-3.5 w-3.5" />
            Exportar PDF
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 hover:bg-emerald-500/20 transition-colors">
            <FileSpreadsheet className="h-3.5 w-3.5" />
            Auditoria Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-zinc-800/60 bg-zinc-900 text-[10px] uppercase tracking-wider text-zinc-500">
                <Th>Data RDO</Th>
                <Th>ID</Th>
                <Th>Obra</Th>
                <Th>Resp. Técnico</Th>
                <Th className="text-right">Efetivo Real / Meta</Th>
                <Th className="text-center">Clima</Th>
                <Th className="text-center">Ocorrências</Th>
                <Th>Status IA</Th>
                <Th className="text-right">Ações</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const project = PROJECTS.find((p) => p.id === r.projectId);
                return (
                  <tr
                    key={r.id}
                    onClick={() => setOpenRdo(r)}
                    className="border-b border-zinc-800/40 last:border-0 cursor-pointer hover:bg-zinc-800/30 transition-colors"
                  >
                    <Td className="font-mono text-zinc-300">{r.date}</Td>
                    <Td className="font-mono text-indigo-400">{r.id}</Td>
                    <Td className="text-zinc-200">{project?.name.split(" - ")[0]}</Td>
                    <Td className="text-zinc-300">{r.responsible}</Td>
                    <Td className="text-right font-mono">
                      <span
                        className={
                          r.effectiveReal < r.effectivePlanned ? "text-amber-400" : "text-emerald-400"
                        }
                      >
                        {r.effectiveReal}
                      </span>
                      <span className="text-zinc-500"> / {r.effectivePlanned}</span>
                    </Td>
                    <Td className="text-center text-base">{r.weather}</Td>
                    <Td className="text-center font-mono text-zinc-300">{r.occurrences}</Td>
                    <Td>
                      <IaStatusBadge status={r.iaStatus} />
                    </Td>
                    <Td className="text-right">
                      <span className="inline-flex items-center text-indigo-400 hover:text-indigo-300">
                        Revisar <ChevronRight className="h-3 w-3 ml-0.5" />
                      </span>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-zinc-800/60 px-4 py-2.5 text-[11px] text-zinc-500">
          <span>Exibindo {rows.length} de {RDOS.length} RDOs</span>
          <div className="flex items-center gap-1">
            <button className="rounded border border-zinc-800 px-2 py-1 hover:bg-zinc-800">‹</button>
            <span className="px-2">Página 1 de 1</span>
            <button className="rounded border border-zinc-800 px-2 py-1 hover:bg-zinc-800">›</button>
          </div>
        </div>
      </div>

      {openRdo && <RdoSplitModal rdo={openRdo} onClose={() => setOpenRdo(null)} />}
    </div>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`px-4 py-2.5 text-left font-medium ${className}`}>{children}</th>
  );
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-2.5 ${className}`}>{children}</td>;
}

function FilterChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] font-mono text-zinc-400">
      {label}
    </span>
  );
}

function IaStatusBadge({ status }: { status: RdoRow["iaStatus"] }) {
  const map = {
    approved: { icon: CheckCircle2, label: "Aprovado", cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" },
    warning: { icon: AlertTriangle, label: "Com Alerta", cls: "border-amber-500/30 bg-amber-500/10 text-amber-300" },
    critical: { icon: XCircle, label: "Crítico", cls: "border-rose-500/30 bg-rose-500/10 text-rose-300" },
    pending: { icon: Clock, label: "Pendente", cls: "border-zinc-700 bg-zinc-800 text-zinc-300" },
  }[status];
  const Icon = map.icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${map.cls}`}>
      <Icon className="h-3 w-3" />
      {map.label}
    </span>
  );
}

function RdoSplitModal({ rdo, onClose }: { rdo: RdoRow; onClose: () => void }) {
  const project = PROJECTS.find((p) => p.id === rdo.projectId);
  const [decision, setDecision] = useState<"none" | "approved" | "rejected">("none");
  const [saving, setSaving] = useState(false);

  const handleApprove = async () => {
    try {
      setSaving(true);
      const { error } = await supabase
        .from("rdos")
        .update({ status: "aprovado", atualizado_em: new Date().toISOString() })
        .eq("id", rdo.id || rdo.projectId);

      if (!error) {
        setDecision("approved");
        setTimeout(() => onClose(), 1500);
      } else {
        console.error("Erro ao aprovar:", error);
      }
    } finally {
      setSaving(false);
    }
  };

  const handleReject = async () => {
    try {
      setSaving(true);
      const { error } = await supabase
        .from("rdos")
        .update({ status: "rejeitado", atualizado_em: new Date().toISOString() })
        .eq("id", rdo.id || rdo.projectId);

      if (!error) {
        setDecision("rejected");
        setTimeout(() => onClose(), 1500);
      } else {
        console.error("Erro ao rejeitar:", error);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative flex flex-col w-full max-w-6xl max-h-[92vh] rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-indigo-400">{rdo.id}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-sm text-zinc-100">{project?.name}</span>
              <span className="font-mono text-[11px] text-zinc-500">{rdo.date}</span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">Visualizador Duplo · Auditoria Split-Screen</div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Split body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden flex-1">
          {/* Left: RDO Original */}
          <div className="overflow-y-auto scrollbar-thin border-r border-zinc-800 p-5 space-y-4">
            <SplitHeader label="RDO Original de Campo" tone="neutral" />

            <div className="flex items-center gap-3 rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold text-zinc-200 border border-zinc-700">
                {rdo.responsible.split(" ").slice(-1)[0].slice(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium text-zinc-100">{rdo.responsible}</div>
                <div className="text-[11px] text-zinc-500">Responsável Técnico · CREA 12345-ES</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <FieldMini icon={Cloud} label="Clima Real">
                {rdo.weather} 27°C · Umidade 74%
              </FieldMini>
              <FieldMini icon={Users} label="Mão de Obra">
                <span className="font-mono text-zinc-100">{rdo.effectiveReal}</span>
                <span className="text-zinc-500 font-mono"> pessoas</span>
              </FieldMini>
            </div>

            <div className="rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3">
              <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">Atividades Realizadas</div>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" /> Concretagem parcial da Laje L3 (63% da área)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" /> Montagem de fôrmas do Pilar P12</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" /> Armação de aço · nível 4</li>
              </ul>
            </div>

            <div className="rounded-md border border-amber-500/20 bg-amber-500/5 p-3">
              <div className="text-[10px] uppercase tracking-wider text-amber-400 mb-1">Ocorrências ({rdo.occurrences})</div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Paralisação de 1h30min por atraso na entrega do concreto usinado (fornecedor: Concrepar).
              </p>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">Galeria de Fotos</div>
              <div className="grid grid-cols-4 gap-2">
                {["from-indigo-950 to-zinc-900", "from-zinc-800 to-zinc-950", "from-amber-950/40 to-zinc-900", "from-emerald-950/40 to-zinc-900"].map((g, i) => (
                  <div key={i} className={`aspect-square rounded-md border border-zinc-800 bg-gradient-to-br ${g} flex items-center justify-center`}>
                    <Camera className="h-4 w-4 text-zinc-600" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                  <PenLine className="h-3 w-3" /> Assinatura Digital
                </div>
                <div className="h-12 rounded border border-zinc-800 bg-zinc-950 flex items-end justify-center px-2 pb-1">
                  <svg viewBox="0 0 100 30" className="h-8 w-full text-zinc-400">
                    <path d="M2 20 Q 10 5, 20 18 T 40 15 T 60 20 T 85 12 L 95 22" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                  <MapPin className="h-3 w-3" /> Geofencing GPS
                </div>
                <div className="font-mono text-[11px] text-zinc-300 leading-tight">
                  -20.3155°S<br />-40.3128°W
                </div>
                <div className="mt-1 text-[10px] text-emerald-400">✓ Dentro do perímetro</div>
              </div>
            </div>
          </div>

          {/* Right: IA */}
          <div className="overflow-y-auto scrollbar-thin p-5 space-y-4 bg-zinc-900/30">
            <SplitHeader label="Análise & Ações Sugeridas pela IA" tone="ia" />

            <div className="rounded-md border border-indigo-500/30 bg-indigo-500/5 p-3">
              <div className="text-[10px] uppercase tracking-wider text-indigo-400 mb-1.5">
                Resumo Cruzado · RAG × Campo
              </div>
              <p className="text-xs text-zinc-200 leading-relaxed">
                O Agente 1 identificou <strong className="text-amber-300">divergência de efetivo</strong> em
                relação ao histograma vigente. O Agente 2 correlacionou a paralisação registrada com atraso no
                caminho crítico do cronograma L3.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-wider text-zinc-500">Divergências Detectadas</div>
              <DivergenceBadge tone="warning">⚠️ Divergência de Efetivo (−{rdo.effectivePlanned - rdo.effectiveReal} Pedreiros)</DivergenceBadge>
              <DivergenceBadge tone="warning">⚠️ Impacto de Clima Registrado (1h30 paralisação)</DivergenceBadge>
              <DivergenceBadge tone="critical">🚨 Atraso Acumulado no Caminho Crítico</DivergenceBadge>
            </div>

            <div className="rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3">
              <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                Score de Confiança da IA
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400" style={{ width: "89%" }} />
                </div>
                <span className="font-mono text-sm text-indigo-300">89%</span>
              </div>
            </div>

            {decision === "none" ? (
              <div className="space-y-2 pt-2 border-t border-zinc-800">
                <button
                  onClick={handleApprove}
                  disabled={saving}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-2.5 text-sm font-medium transition-colors"
                >
                  <CheckCircle2 className="h-4 w-4" /> {saving ? "Aprovando..." : "Aprovar RDO"}
                </button>
                <button
                  onClick={handleReject}
                  disabled={saving}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-rose-500/40 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 disabled:opacity-60 disabled:cursor-not-allowed px-4 py-2.5 text-sm font-medium transition-colors"
                >
                  <XCircle className="h-4 w-4" /> {saving ? "Rejeitando..." : "Solicitar Correção ao Engenheiro"}
                </button>
              </div>
            ) : (
              <div
                className={[
                  "rounded-md border p-3 text-xs",
                  decision === "approved"
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                    : "border-rose-500/40 bg-rose-500/10 text-rose-200",
                ].join(" ")}
              >
                {decision === "approved"
                  ? "✅ RDO aprovado. Decisão registrada no log de auditoria."
                  : "🔴 Solicitação de correção enviada ao Engenheiro Responsável."}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SplitHeader({ label, tone }: { label: string; tone: "neutral" | "ia" }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={[
          "h-1.5 w-1.5 rounded-full",
          tone === "ia" ? "bg-indigo-500 animate-pulse" : "bg-zinc-500",
        ].join(" ")}
      />
      <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{label}</div>
    </div>
  );
}

function FieldMini({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-zinc-800/60 bg-zinc-900/60 p-3">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
        <Icon className="h-3 w-3" />
        {label}
      </div>
      <div className="text-xs text-zinc-200">{children}</div>
    </div>
  );
}

function DivergenceBadge({
  tone,
  children,
}: {
  tone: "warning" | "critical";
  children: React.ReactNode;
}) {
  const cls =
    tone === "critical"
      ? "border-rose-500/30 bg-rose-500/10 text-rose-200"
      : "border-amber-500/30 bg-amber-500/10 text-amber-200";
  return (
    <div className={`rounded-md border ${cls} px-2.5 py-2 text-xs font-medium`}>{children}</div>
  );
}
