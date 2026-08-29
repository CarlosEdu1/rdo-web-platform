import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { PROJECTS } from "@/lib/mock-data";
import { useProjectFilter } from "@/lib/project-context";
import { useAuditLog } from "@/lib/audit-log-context";
import { toast } from "sonner";
import { useState } from "react";
import {
  FileText,
  Calendar,
  Users,
  ClipboardCheck,
  CheckCircle2,
  AlertTriangle,
  OctagonAlert,
  ArrowUpRight,
  Zap,
  X,
  Camera,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico & Gestão Inteligente · SmartForeman Web" },
      {
        name: "description",
        content:
          "Análise profunda de causa-raiz, impacto previsto e planos de ação data-driven propostos pelos Agentes de IA.",
      },
      { property: "og:title", content: "Diagnóstico Inteligente · SmartForeman Web" },
      {
        property: "og:description",
        content: "Diagnóstico da IA e planos de ação com análise de risco para gestores.",
      },
    ],
  }),
  component: DiagPage,
});

function DiagPage() {
  return (
    <Shell>
      <DiagBody />
    </Shell>
  );
}

interface ActionState {
  status: "pending" | "executing" | "rejected";
}

function DiagBody() {
  const { projectId } = useProjectFilter();
  const { addEntry } = useAuditLog();
  const project = PROJECTS.find((p) => p.id === projectId) ?? PROJECTS[0];
  const [actions, setActions] = useState<Record<string, ActionState>>({
    a1: { status: "pending" },
    a2: { status: "pending" },
  });

  const executeAction = (id: string, title: string, metadata: string) => {
    setActions((s) => ({ ...s, [id]: { status: "executing" } }));
    addEntry({
      user: "Eng. Carlos Andrade",
      project: project.name.split(" - ")[0],
      event: `Execução de Ação IA · ${title}`,
      category: "Financeiro",
      metadata,
    });
    toast.success("Ação Aprovada com Sucesso!", {
      description: "Registrada no Log de Auditoria Imutável.",
    });
  };

  const rejectAction = (id: string, title: string) => {
    setActions((s) => ({ ...s, [id]: { status: "rejected" } }));
    addEntry({
      user: "Eng. Carlos Andrade",
      project: project.name.split(" - ")[0],
      event: `Alerta Ignorado pelo Gestor · ${title}`,
      category: "Alertas Ignorados",
      metadata: "Ação da IA rejeitada manualmente",
    });
    toast("Ação rejeitada", { description: "Decisão registrada no log." });
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
          Diagnóstico Profundo · {project.name}
        </div>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-50">
          Gestão Inteligente
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          Análise de causa-raiz e ações recomendadas pelos Agentes de IA · atualizado em tempo real.
        </p>
      </div>

      {/* Section 1: Artefatos */}
      <section>
        <SectionHeader
          eyebrow="Seção 01"
          title="Artefatos Avaliados"
          subtitle="Status de conformidade dos recursos-base do projeto"
        />
        <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <ArtefactCard icon={FileText} label="Contrato" status="ok" statusLabel="Conforme" />
          <ArtefactCard icon={Calendar} label="Cronograma" status="warn" statusLabel="Alerta de Desvio" />
          <ArtefactCard icon={Users} label="Histograma" status="crit" statusLabel="Atenção Crítica" />
          <ArtefactCard icon={ClipboardCheck} label="RDO do Dia" status="ok" statusLabel="Processado & Validado" />
        </div>
      </section>

      {/* Section 2: Descritivo */}
      <section>
        <SectionHeader
          eyebrow="Seção 02"
          title="Diagnóstico da IA"
          subtitle="Descritivo detalhado da anomalia identificada"
        />

        <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <DiagBlock
            tone="critical"
            label="Problema Identificado"
            body="Atraso acumulado de 3 dias no cronograma do Pavimento L3 (Caminho Crítico da Obra)."
          />
          <DiagBlock
            tone="ia"
            label="Causas Raiz"
            body={
              <ol className="space-y-1.5 list-decimal list-inside text-xs text-zinc-200">
                <li>Paralisação de 1h30m no fornecimento de concreto usinado no dia 21/Jul.</li>
                <li>Déficit constante de 2 pedreiros em relação ao histograma planejado.</li>
              </ol>
            }
          />
          <DiagBlock
            tone="warning"
            label="Impacto Previsto"
            body={
              <div className="space-y-2 text-xs text-zinc-200">
                <div>
                  Desvio estimado de{" "}
                  <span className="font-mono text-amber-300">R$ 18.500,00</span> em custos indiretos e
                  atraso potencial da entrega da laje em{" "}
                  <span className="font-mono text-amber-300">5 dias</span>.
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800">
                  <MicroStat label="Custo Extra" value="R$ 18.5K" tone="warn" />
                  <MicroStat label="Prazo Extra" value="+5 dias" tone="warn" />
                </div>
              </div>
            }
          />
          <DiagBlock
            tone="neutral"
            label="Evidências Cruzadas"
            body={
              <div className="space-y-2">
                <a className="flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-pointer">
                  <span className="font-mono">RDO-2039 · 19/Jul</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a className="flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-pointer">
                  <span className="font-mono">RDO-2041 · 20/Jul</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a className="flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-pointer">
                  <span className="font-mono">RDO-2046 · 21/Jul</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <div className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-300">
                  <Camera className="h-3.5 w-3.5 text-amber-400" />
                  Foto anexada: paralisação concreteira
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Section 3: Plano de ação */}
      <section>
        <SectionHeader
          eyebrow="Seção 03"
          title="Plano de Ação Proposto pelos Agentes de IA"
          subtitle="Decisões orientadas a dados · análise de risco por ação"
        />

        <div className="mt-3 space-y-3">
          <ActionCard
            id="a1"
            number="01"
            title="Realocar 2 pedreiros da Torre B → Torre A pelos próximos 4 dias"
            risk="low"
            riskDesc="Risco Baixo · impacto mínimo na Torre B (3 dias de folga no cronograma)."
            savings="R$ 12.4K economia projetada"
            state={actions.a1}
            onExecute={() =>
              executeAction(
                "a1",
                "Realocação de pedreiros Torre B → Torre A",
                "Economia projetada: R$ 12.400,00 · Duração: 4 dias",
              )
            }
            onReject={() => rejectAction("a1", "Realocação de pedreiros")}
            executeLabel="Executar e Notificar Equipe"
          />
          <ActionCard
            id="a2"
            number="02"
            title="Aprovar horas extras no sábado para equipe de concretagem recuperar Laje L3"
            risk="medium"
            riskDesc="Risco Médio · custo adicional estimado em R$ 2.400,00 em folha de pagamento."
            savings="Prazo recuperado em 2 dias"
            state={actions.a2}
            onExecute={() =>
              executeAction(
                "a2",
                "Aprovação de Horas Extras · Concretagem Laje L3",
                "Impacto: +R$ 2.400,00 · Prazo recuperado: 2 dias",
              )
            }
            onReject={() => rejectAction("a2", "Horas extras concretagem")}
            executeLabel="Aprovar Custo Extra"
          />
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-end justify-between border-b border-zinc-800/60 pb-3">
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">{eyebrow}</div>
        <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-100">{title}</h2>
        <p className="text-xs text-zinc-500 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

function ArtefactCard({
  icon: Icon,
  label,
  status,
  statusLabel,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  status: "ok" | "warn" | "crit";
  statusLabel: string;
}) {
  const map = {
    ok: { border: "border-emerald-500/30", pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30", icon: CheckCircle2, tint: "text-emerald-400" },
    warn: { border: "border-amber-500/30", pill: "bg-amber-500/10 text-amber-300 border-amber-500/30", icon: AlertTriangle, tint: "text-amber-400" },
    crit: { border: "border-rose-500/30", pill: "bg-rose-500/10 text-rose-300 border-rose-500/30", icon: OctagonAlert, tint: "text-rose-400" },
  }[status];
  const StatusIcon = map.icon;
  return (
    <div className={`rounded-lg border ${map.border} bg-zinc-900/60 backdrop-blur p-4`}>
      <div className="flex items-center justify-between">
        <Icon className="h-4 w-4 text-zinc-400" />
        <StatusIcon className={`h-3.5 w-3.5 ${map.tint}`} />
      </div>
      <div className="mt-3 text-xs text-zinc-500 font-mono uppercase tracking-wider">{label}</div>
      <div className="mt-2">
        <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium ${map.pill}`}>
          {statusLabel}
        </span>
      </div>
    </div>
  );
}

function DiagBlock({
  tone,
  label,
  body,
}: {
  tone: "critical" | "warning" | "ia" | "neutral";
  label: string;
  body: React.ReactNode;
}) {
  const tones = {
    critical: "border-rose-500/30 bg-rose-500/5",
    warning: "border-amber-500/30 bg-amber-500/5",
    ia: "border-indigo-500/30 bg-indigo-500/5",
    neutral: "border-zinc-800/60 bg-zinc-900/60",
  };
  const label_tone = {
    critical: "text-rose-400",
    warning: "text-amber-400",
    ia: "text-indigo-400",
    neutral: "text-zinc-500",
  };
  return (
    <div className={`rounded-lg border ${tones[tone]} p-4`}>
      <div className={`text-[10px] font-mono uppercase tracking-widest ${label_tone[tone]}`}>{label}</div>
      <div className="mt-2 text-sm text-zinc-100 leading-relaxed">{body}</div>
    </div>
  );
}

function MicroStat({ label, value, tone }: { label: string; value: string; tone: "warn" }) {
  return (
    <div className="rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2">
      <div className="text-[9px] uppercase tracking-wider text-zinc-500">{label}</div>
      <div className={`font-mono text-sm ${tone === "warn" ? "text-amber-300" : ""}`}>{value}</div>
    </div>
  );
}

function ActionCard({
  id,
  number,
  title,
  risk,
  riskDesc,
  savings,
  state,
  onExecute,
  onReject,
  executeLabel,
}: {
  id: string;
  number: string;
  title: string;
  risk: "low" | "medium" | "high";
  riskDesc: string;
  savings: string;
  state: ActionState;
  onExecute: () => void;
  onReject: () => void;
  executeLabel: string;
}) {
  const riskMap = {
    low: { label: "Risco Baixo", cls: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" },
    medium: { label: "Risco Médio", cls: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
    high: { label: "Risco Alto", cls: "bg-rose-500/10 text-rose-300 border-rose-500/30" },
  }[risk];

  return (
    <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur p-4">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4 items-start">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-indigo-500/40 bg-indigo-500/10 font-mono text-sm text-indigo-300">
            {number}
          </div>
          <div className="lg:hidden">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-indigo-400">
              <Sparkles className="h-3 w-3" />
              Ação Proposta
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-indigo-400 mb-1">
            <Sparkles className="h-3 w-3" />
            Ação Proposta
          </div>
          <h3 className="text-sm font-semibold text-zinc-100 leading-snug">{title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${riskMap.cls}`}>
              {riskMap.label}
            </span>
            <span className="text-[11px] text-zinc-500">{riskDesc}</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
            <Zap className="h-3 w-3" />
            {savings}
          </div>
        </div>

        <div className="flex lg:flex-col gap-2 lg:w-52">
          {state.status === "pending" && (
            <>
              <button
                onClick={onExecute}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 text-xs font-medium transition-colors"
              >
                <Zap className="h-3.5 w-3.5" /> {executeLabel}
              </button>
              <button
                onClick={onReject}
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 px-3 py-2 text-xs font-medium transition-colors"
              >
                <X className="h-3.5 w-3.5" /> Rejeitar
              </button>
            </>
          )}
          {state.status === "executing" && (
            <div className="w-full rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200 text-center">
              ⚡ Em Resolução · registrado no log
            </div>
          )}
          {state.status === "rejected" && (
            <div className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-400 text-center">
              Rejeitado pelo gestor
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
