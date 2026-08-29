import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { PROJECTS } from "@/lib/mock-data";
import { useAuditLog, type AuditCategory } from "@/lib/audit-log-context";
import { useState } from "react";
import { Building2, Users, KeyRound, Bell, ShieldCheck, Download, Search } from "lucide-react";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [
      { title: "Configurações · SmartForeman Web" },
      {
        name: "description",
        content: "Gestão de empresa, projetos, membros e integrações da plataforma SmartForeman.",
      },
      { property: "og:title", content: "Configurações · SmartForeman Web" },
      {
        property: "og:description",
        content: "Configurações centrais da empresa, projetos e permissões.",
      },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <Shell>
      <div className="space-y-6">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            Empresa & Projetos
          </div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-50">
            Configurações
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Gerencie dados da empresa, projetos ativos, usuários e permissões.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card icon={Building2} title="Empresa">
            <Field label="Razão Social" value="Construtora Andrade Engenharia S.A." />
            <Field label="CNPJ" value="12.345.678/0001-90" mono />
            <Field label="Sede" value="Vitória · Espírito Santo" />
            <Field label="Plano" value="Enterprise · v2.4" mono />
          </Card>

          <Card icon={Users} title="Membros">
            {[
              { n: "Carlos Andrade", r: "Diretor · Admin" },
              { n: "Marcelo Silva", r: "Eng. Responsável" },
              { n: "Ana Beatriz", r: "Eng. Responsável" },
              { n: "Patrícia Souza", r: "Auditor Técnico" },
            ].map((m) => (
              <div key={m.n} className="flex items-center gap-3 py-2 border-b border-zinc-800/50 last:border-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-[11px] font-semibold text-zinc-200 border border-zinc-700">
                  {m.n.split(" ").map((x) => x[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-xs text-zinc-100">{m.n}</div>
                  <div className="text-[10px] text-zinc-500">{m.r}</div>
                </div>
              </div>
            ))}
          </Card>

          <Card icon={KeyRound} title="Integrações & Segurança">
            <Toggle label="MFA obrigatório para admins" enabled />
            <Toggle label="SSO · Azure AD" enabled />
            <Toggle label="Criptografia AES-256 em uploads" enabled />
            <Toggle label="Log de auditoria imutável" enabled />
          </Card>
        </div>

        <div>
          <div className="mb-3 flex items-end justify-between">
            <div>
              <h2 className="text-sm font-semibold text-zinc-100">Projetos Ativos</h2>
              <p className="text-xs text-zinc-500 mt-0.5">Contexto de dados por obra</p>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/60 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-zinc-800/60 bg-zinc-900 text-[10px] uppercase tracking-wider text-zinc-500">
                  <th className="px-4 py-2.5 text-left font-medium">Projeto</th>
                  <th className="px-4 py-2.5 text-left font-medium">Localização</th>
                  <th className="px-4 py-2.5 text-left font-medium">Status</th>
                  <th className="px-4 py-2.5 text-right font-medium">Progresso</th>
                </tr>
              </thead>
              <tbody>
                {PROJECTS.map((p) => (
                  <tr key={p.id} className="border-b border-zinc-800/40 last:border-0 hover:bg-zinc-800/30">
                    <td className="px-4 py-3 text-zinc-100">{p.name}</td>
                    <td className="px-4 py-3 text-zinc-400">{p.location}</td>
                    <td className="px-4 py-3">
                      <span
                        className={[
                          "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium",
                          p.status === "on-track"
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                            : p.status === "warning"
                              ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
                              : "border-rose-500/30 bg-rose-500/10 text-rose-300",
                        ].join(" ")}
                      >
                        {p.status === "on-track" ? "Em Dia" : p.status === "warning" ? "Alerta" : "Crítico"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-zinc-300">
                      {p.physicalDone}% <span className="text-zinc-600">/ {p.physicalPlanned}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Card icon={Bell} title="Notificações dos Agentes">
          <Toggle label="Alertas do Agente 0 (Contratual)" enabled />
          <Toggle label="Alertas do Agente 1 (Cronograma)" enabled />
          <Toggle label="Alertas do Agente 2 (Insumos)" enabled />
          <Toggle label="Digest diário por e-mail" enabled={false} />
        </Card>

        <AuditLogSection />
      </div>

    </Shell>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur p-5">
      <div className="flex items-center gap-2 border-b border-zinc-800/60 pb-3 mb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 border border-indigo-500/30">
          <Icon className="h-4 w-4 text-indigo-400" />
        </div>
        <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function Field({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="py-2 border-b border-zinc-800/50 last:border-0">
      <div className="text-[10px] uppercase tracking-wider text-zinc-500">{label}</div>
      <div className={`mt-0.5 text-xs text-zinc-100 ${mono ? "font-mono" : ""}`}>{value}</div>
    </div>
  );
}

function Toggle({ label, enabled }: { label: string; enabled: boolean }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-zinc-800/50 last:border-0">
      <span className="text-xs text-zinc-200">{label}</span>
      <div
        className={[
          "relative h-5 w-9 rounded-full transition-colors",
          enabled ? "bg-indigo-500" : "bg-zinc-700",
        ].join(" ")}
      >
        <div
          className={[
            "absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform",
            enabled ? "translate-x-4" : "translate-x-0.5",
          ].join(" ")}
        />
      </div>
    </div>
  );
}

const CATEGORY_STYLES: Record<AuditCategory, string> = {
  Financeiro: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  "Assinatura Mobile": "border-sky-500/30 bg-sky-500/10 text-sky-300",
  "Alteração de Cronograma": "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
  "Alertas Ignorados": "border-amber-500/30 bg-amber-500/10 text-amber-300",
  "RAG / Integração": "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
  Configuração: "border-zinc-600 bg-zinc-800/60 text-zinc-300",
};

function AuditLogSection() {
  const { entries } = useAuditLog();
  const [filter, setFilter] = useState<"all" | AuditCategory>("all");
  const [q, setQ] = useState("");
  const categories: (AuditCategory | "all")[] = [
    "all",
    "Financeiro",
    "Assinatura Mobile",
    "Alteração de Cronograma",
    "Alertas Ignorados",
    "RAG / Integração",
    "Configuração",
  ];

  const filtered = entries.filter(
    (e) =>
      (filter === "all" || e.category === filter) &&
      (q === "" ||
        [e.user, e.project, e.event, e.metadata].some((f) =>
          f.toLowerCase().includes(q.toLowerCase()),
        )),
  );

  return (
    <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10 border border-emerald-500/30">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-zinc-100">Log de Auditoria Imutável</h2>
            <p className="text-[11px] text-zinc-500">
              Registro forense · hash SHA-256 por evento · retenção 10 anos (LGPD & Lei nº 8.666)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
            {entries.length} eventos
          </span>
          <button className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 text-[11px] text-zinc-300 hover:border-indigo-500/40">
            <Download className="h-3.5 w-3.5" />
            Exportar CSV
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800/60 px-5 py-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por usuário, projeto, evento…"
            className="w-full rounded-md border border-zinc-800 bg-zinc-950 py-1.5 pl-8 pr-3 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/50"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={[
                  "rounded-full border px-2.5 py-0.5 text-[10px] font-medium transition-colors",
                  active
                    ? "border-indigo-500/40 bg-indigo-500/15 text-indigo-200"
                    : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200",
                ].join(" ")}
              >
                {c === "all" ? "Todos" : c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-zinc-800/60 bg-zinc-900 text-[10px] uppercase tracking-wider text-zinc-500">
              <th className="px-4 py-2.5 text-left font-medium">Timestamp</th>
              <th className="px-4 py-2.5 text-left font-medium">Usuário</th>
              <th className="px-4 py-2.5 text-left font-medium">Projeto</th>
              <th className="px-4 py-2.5 text-left font-medium">Evento</th>
              <th className="px-4 py-2.5 text-left font-medium">Categoria</th>
              <th className="px-4 py-2.5 text-right font-medium">Hash</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => (
              <tr key={e.id} className="border-b border-zinc-800/40 last:border-0 hover:bg-zinc-800/30 align-top">
                <td className="px-4 py-3 font-mono text-[11px] text-zinc-400 whitespace-nowrap">
                  {e.timestamp}
                </td>
                <td className="px-4 py-3 text-zinc-200 whitespace-nowrap">{e.user}</td>
                <td className="px-4 py-3 text-zinc-400 whitespace-nowrap">{e.project}</td>
                <td className="px-4 py-3">
                  <div className="text-zinc-100">{e.event}</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">{e.metadata}</div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={[
                      "inline-flex rounded-full border px-2 py-0.5 text-[10px]",
                      CATEGORY_STYLES[e.category],
                    ].join(" ")}
                  >
                    {e.category}
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-mono text-[10px] text-emerald-300/80 whitespace-nowrap">
                  {e.hash}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-xs text-zinc-500">
                  Nenhum evento corresponde ao filtro selecionado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
