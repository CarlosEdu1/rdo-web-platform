import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { RAG_DOCS, type RagDocument } from "@/lib/mock-data";
import { useAuditLog } from "@/lib/audit-log-context";
import { toast } from "sonner";
import { useState, useRef } from "react";
import {
  FileText,
  Calendar,
  BarChart3,
  Lock,
  UploadCloud,
  CheckCircle2,
  Loader2,
  Clock,
  Trash2,
  Plug,
  RefreshCw,
  Database,
  CalendarClock,
} from "lucide-react";

export const Route = createFileRoute("/rag")({
  head: () => ({
    meta: [
      { title: "Setup de Inteligência (RAG) · SmartForeman Web" },
      {
        name: "description",
        content:
          "Alimente os Agentes de IA com contratos, cronogramas e histogramas. Pipeline RAG com vetorização e criptografia AES-256.",
      },
      { property: "og:title", content: "Setup de Inteligência (RAG) · SmartForeman Web" },
      {
        property: "og:description",
        content: "Upload seguro e vetorização de documentos para os Agentes 0, 1 e 2.",
      },
    ],
  }),
  component: RagPage,
});

function RagPage() {
  return (
    <Shell>
      <RagBody />
    </Shell>
  );
}

interface Connector {
  id: string;
  name: string;
  category: string;
  status: "connected" | "syncing" | "offline";
  lastSync: string;
  agent: "0" | "1" | "2";
}

const INITIAL_CONNECTORS: Connector[] = [
  {
    id: "msproject",
    name: "MS Project",
    category: "Cronograma",
    status: "connected",
    lastSync: "Auto-Sync 1h · há 22 min",
    agent: "1",
  },
  {
    id: "primavera",
    name: "Oracle Primavera P6",
    category: "Cronograma",
    status: "connected",
    lastSync: "Auto-Sync 1h · há 34 min",
    agent: "1",
  },
  {
    id: "sienge",
    name: "Sienge ERP",
    category: "Mão de Obra & Suprimentos",
    status: "connected",
    lastSync: "há 8 min",
    agent: "2",
  },
  {
    id: "totvs",
    name: "TOTVS Construção",
    category: "Financeiro & Contratos",
    status: "syncing",
    lastSync: "sincronizando…",
    agent: "0",
  },
  {
    id: "sap",
    name: "SAP S/4HANA",
    category: "Financeiro Corporativo",
    status: "offline",
    lastSync: "desconectado há 2 dias",
    agent: "0",
  },
];

function RagBody() {
  const { addEntry } = useAuditLog();
  const [docs, setDocs] = useState<RagDocument[]>(RAG_DOCS);
  const [connectors, setConnectors] = useState<Connector[]>(INITIAL_CONNECTORS);
  const [syncBanner, setSyncBanner] = useState<string | null>(null);

  const syncConnector = (id: string) => {
    const c = connectors.find((x) => x.id === id);
    if (!c) return;
    setConnectors((cs) => cs.map((x) => (x.id === id ? { ...x, status: "syncing", lastSync: "sincronizando…" } : x)));
    setSyncBanner(`🔄 Cronograma Base atualizado via ${c.name}. Agente ${c.agent} reprocessando matriz de riscos e linha de base…`);
    toast.loading(`Sincronizando ${c.name}…`, { id: `sync-${id}` });
    setTimeout(() => {
      setConnectors((cs) =>
        cs.map((x) =>
          x.id === id ? { ...x, status: "connected", lastSync: "Sincronizado agora" } : x,
        ),
      );
      toast.success(`Agente ${c.agent} reprocessou embeddings de ${c.name}`, {
        id: `sync-${id}`,
        description: "Nova linha de base ativa no RAG.",
      });
      addEntry({
        user: "Hub RAG",
        project: "Todas as Obras",
        event: `Reprocessamento via ${c.name}`,
        category: "Alteração de Cronograma",
        metadata: `Conector ${c.category} · Agente ${c.agent} reprocessou embeddings`,
      });
      setTimeout(() => setSyncBanner(null), 4000);
    }, 2600);
  };


  const handleUpload = (agent: "0" | "1" | "2", filename: string) => {
    const newDoc: RagDocument = {
      id: `d${Date.now()}`,
      name: filename,
      agent,
      size: `${(Math.random() * 5 + 0.5).toFixed(1)} MB`,
      status: "processing",
      progress: 0,
    };
    setDocs((d) => [newDoc, ...d]);

    const interval = setInterval(() => {
      setDocs((d) =>
        d.map((x) => {
          if (x.id !== newDoc.id) return x;
          const next = Math.min(100, x.progress + Math.random() * 18 + 6);
          if (next >= 100) {
            clearInterval(interval);
            return { ...x, progress: 100, status: "vectorized" };
          }
          return { ...x, progress: next };
        }),
      );
    }, 450);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
          Pipeline · Retrieval-Augmented Generation
        </div>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-50">
          Setup de Inteligência (RAG)
        </h1>
        <p className="mt-1 text-sm text-zinc-400 max-w-3xl">
          Alimente o cérebro da SmartForeman com os documentos oficiais do projeto para ativar os
          Agentes Preditivos. Todos os arquivos são criptografados end-to-end antes da vetorização.
        </p>
      </div>

      {/* Architecture panel */}
      <div className="rounded-lg border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-zinc-900/40 to-zinc-900/60 p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-indigo-500/20 border border-indigo-500/40">
              <Lock className="h-5 w-5 text-indigo-300" />
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-100">Arquitetura RAG Ativa</div>
              <div className="text-[11px] text-zinc-400 font-mono">
                🔒 Transferência Segura End-to-End · AES-256
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <Stat label="Documentos" value={docs.length.toString()} />
            <Stat label="Vetorizados" value={docs.filter((d) => d.status === "vectorized").length.toString()} />
            <Stat label="Embeddings" value="18.4K" />
          </div>
        </div>
      </div>

      {/* Hub de Integrações */}
      <section className="rounded-lg border border-zinc-800/60 bg-zinc-900/60 backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/60 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/10 border border-indigo-500/30">
              <Plug className="h-4 w-4 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-zinc-100">Hub de Integrações · Fontes Vivas de Dados</h2>
              <p className="text-[11px] text-zinc-500">
                Conectores API para ERPs e Sistemas de Cronograma · dispara reprocessamento dos Agentes em tempo real
              </p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
            {connectors.filter((c) => c.status === "connected").length} / {connectors.length} ativos
          </span>
        </div>

        {syncBanner && (
          <div className="border-b border-indigo-500/30 bg-indigo-500/10 px-5 py-2.5 text-[11px] text-indigo-200 flex items-center gap-2">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            {syncBanner}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 p-4">
          {connectors.map((c) => {
            const Icon = c.category.startsWith("Cronograma")
              ? CalendarClock
              : c.category.startsWith("Financeiro") || c.category.startsWith("Mão")
                ? Database
                : Plug;
            return (
              <div
                key={c.id}
                className="rounded-md border border-zinc-800/60 bg-zinc-950/40 p-4 hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800/80 border border-zinc-700 shrink-0">
                      <Icon className="h-4 w-4 text-indigo-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-zinc-100 truncate">{c.name}</div>
                      <div className="text-[10px] text-zinc-500 truncate">{c.category}</div>
                    </div>
                  </div>
                  <span
                    className={[
                      "shrink-0 rounded-full border px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider",
                      c.status === "connected"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                        : c.status === "syncing"
                          ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
                          : "border-zinc-700 bg-zinc-800/60 text-zinc-500",
                    ].join(" ")}
                  >
                    {c.status === "connected" ? "Ativo" : c.status === "syncing" ? "Sync" : "Offline"}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px]">
                  <span className="text-zinc-500 font-mono flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {c.lastSync}
                  </span>
                  <span className="text-zinc-500">Agente {c.agent}</span>
                </div>
                <button
                  onClick={() => syncConnector(c.id)}
                  disabled={c.status === "syncing"}
                  className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-md border border-indigo-500/30 bg-indigo-500/10 py-1.5 text-[11px] font-medium text-indigo-200 hover:bg-indigo-500/20 disabled:opacity-50 transition-colors"
                >
                  {c.status === "syncing" ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <RefreshCw className="h-3.5 w-3.5" />
                  )}
                  {c.status === "syncing" ? "Sincronizando" : "Sincronizar agora"}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Three dropzones */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <Dropzone
          agent="0"
          title="Agente 0 · Contratos"
          desc="Contrato Principal, Aditivos, Memorial Descritivo"
          formats=".PDF, .DOCX"
          icon={FileText}
          onUpload={(f) => handleUpload("0", f)}
        />
        <Dropzone
          agent="1"
          title="Agente 1 · Cronograma"
          desc="Cronograma Físico-Financeiro, Linha de Base / MS Project"
          formats=".XLSX, .MPP, .PDF"
          icon={Calendar}
          onUpload={(f) => handleUpload("1", f)}
        />
        <Dropzone
          agent="2"
          title="Agente 2 · Histograma & Recursos"
          desc="Histograma de Mão de Obra, Tabela de Equipamentos"
          formats=".XLSX, .CSV"
          icon={BarChart3}
          onUpload={(f) => handleUpload("2", f)}
        />
      </div>

      {/* Docs table */}
      <div>
        <div className="mb-3 flex items-end justify-between">
          <div>
            <h2 className="text-sm font-semibold text-zinc-100">Gerenciador de Documentos Processados</h2>
            <p className="text-xs text-zinc-500 mt-0.5">Status do pipeline de treinamento por documento</p>
          </div>
        </div>
        <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/60 overflow-hidden">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-zinc-800/60 bg-zinc-900 text-[10px] uppercase tracking-wider text-zinc-500">
                  <th className="px-4 py-2.5 text-left font-medium">Documento</th>
                  <th className="px-4 py-2.5 text-left font-medium">Agente</th>
                  <th className="px-4 py-2.5 text-left font-medium">Tamanho</th>
                  <th className="px-4 py-2.5 text-left font-medium w-[45%]">Status de Treinamento</th>
                  <th className="px-4 py-2.5 text-right font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((d) => (
                  <tr key={d.id} className="border-b border-zinc-800/40 last:border-0 hover:bg-zinc-800/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-3.5 w-3.5 text-zinc-500" />
                        <span className="font-mono text-zinc-200">{d.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-indigo-300">
                        Agente {d.agent}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-zinc-400">{d.size}</td>
                    <td className="px-4 py-3">
                      <DocStatus doc={d} />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 text-zinc-500 hover:text-rose-400 hover:border-rose-500/40 transition-colors">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-lg font-semibold text-indigo-300">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-zinc-500">{label}</div>
    </div>
  );
}

function Dropzone({
  agent,
  title,
  desc,
  formats,
  icon: Icon,
  onUpload,
}: {
  agent: "0" | "1" | "2";
  title: string;
  desc: string;
  formats: string;
  icon: React.ComponentType<{ className?: string }>;
  onUpload: (filename: string) => void;
}) {
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach((f) => onUpload(f.name));
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDrag(true);
      }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDrag(false);
        handleFiles(e.dataTransfer.files);
      }}
      className={[
        "group rounded-lg border-2 border-dashed p-5 transition-all cursor-pointer",
        drag
          ? "border-indigo-500 bg-indigo-500/10"
          : "border-zinc-800 bg-zinc-900/40 hover:border-indigo-500/50 hover:bg-zinc-900/70",
      ].join(" ")}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/10 border border-indigo-500/30">
          <Icon className="h-5 w-5 text-indigo-400" />
        </div>
        <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-indigo-300">
          Agente {agent}
        </span>
      </div>
      <h3 className="mt-4 text-sm font-semibold text-zinc-100">{title}</h3>
      <p className="mt-1 text-[11px] text-zinc-500 leading-relaxed">{desc}</p>

      <div className="mt-5 rounded-md border border-zinc-800/80 bg-zinc-950/50 p-4 text-center">
        <UploadCloud className="mx-auto h-6 w-6 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
        <div className="mt-2 text-xs text-zinc-300">
          <span className="font-medium">Arraste arquivos</span>{" "}
          <span className="text-zinc-500">ou clique</span>
        </div>
        <div className="mt-1 text-[10px] font-mono text-zinc-600">{formats}</div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-emerald-400/80">
        <Lock className="h-3 w-3" /> Criptografia AES-256 · End-to-End
      </div>
    </div>
  );
}

function DocStatus({ doc }: { doc: RagDocument }) {
  if (doc.status === "vectorized") {
    return (
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
        <span className="text-emerald-300 text-xs">🟢 Vetorizado & Ativo</span>
        <span className="text-[10px] font-mono text-zinc-500">100% Embeddings</span>
      </div>
    );
  }
  if (doc.status === "processing") {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <Loader2 className="h-3.5 w-3.5 text-indigo-400 animate-spin" />
            <span className="text-indigo-300 text-xs">🔵 Processando leitura OCR…</span>
          </div>
          <span className="font-mono text-[10px] text-indigo-300">{Math.round(doc.progress)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 transition-all"
            style={{ width: `${doc.progress}%` }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <Clock className="h-3.5 w-3.5 text-zinc-500" />
      <span className="text-zinc-400 text-xs">Na fila…</span>
    </div>
  );
}
