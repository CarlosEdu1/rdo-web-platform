import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export type AuditCategory =
  | "Financeiro"
  | "Assinatura Mobile"
  | "Alteração de Cronograma"
  | "Alertas Ignorados"
  | "RAG / Integração"
  | "Configuração";

export interface AuditEntry {
  id: string;
  timestamp: string; // dd/MM/yyyy - HH:mm:ss
  user: string;
  project: string;
  event: string;
  category: AuditCategory;
  metadata: string;
  hash: string;
}

const seed: AuditEntry[] = [
  {
    id: "log-001",
    timestamp: "21/07/2026 - 17:48:02",
    user: "Eng. Carlos Andrade",
    project: "Torre A",
    event: "Aprovação de Custo Extra (Horas Extras - Concretagem)",
    category: "Financeiro",
    metadata: "Impacto: +R$ 2.400,00 · Validade: Aprovada",
    hash: "8f9a2b1c",
  },
  {
    id: "log-002",
    timestamp: "21/07/2026 - 17:45:12",
    user: "Eng. Roberto Silva",
    project: "Torre A",
    event: "Assinatura e Envio de RDO",
    category: "Assinatura Mobile",
    metadata: "GPS: Validado (-20.31, -40.31) · Assinatura: Digital",
    hash: "3c4d1e88",
  },
  {
    id: "log-003",
    timestamp: "21/07/2026 - 14:10:00",
    user: "Agente 1 (IA)",
    project: "Torre A",
    event: "Alerta Ignorado pelo Gestor",
    category: "Alertas Ignorados",
    metadata: "Alerta: Déficit de Pedreiros (Atraso 5%)",
    hash: "7a1b9c4d",
  },
  {
    id: "log-004",
    timestamp: "20/07/2026 - 09:22:41",
    user: "Hub RAG",
    project: "Torre A",
    event: "Reprocessamento de Linha de Base (MS Project)",
    category: "Alteração de Cronograma",
    metadata: "Documento: Cronograma_Base_TorreA_v2.xlsx · Vetores: 4.8K",
    hash: "2e5f0aa9",
  },
];

function randHash() {
  return Array.from({ length: 8 })
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
}

function nowStamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} - ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

interface Ctx {
  entries: AuditEntry[];
  addEntry: (e: Omit<AuditEntry, "id" | "timestamp" | "hash">) => void;
}

const AuditLogContext = createContext<Ctx | null>(null);

export function AuditLogProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<AuditEntry[]>(seed);

  const addEntry = useCallback((e: Omit<AuditEntry, "id" | "timestamp" | "hash">) => {
    setEntries((cur) => [
      {
        ...e,
        id: `log-${Date.now()}`,
        timestamp: nowStamp(),
        hash: randHash(),
      },
      ...cur,
    ]);
  }, []);

  return (
    <AuditLogContext.Provider value={{ entries, addEntry }}>{children}</AuditLogContext.Provider>
  );
}

export function useAuditLog() {
  const ctx = useContext(AuditLogContext);
  if (!ctx) throw new Error("useAuditLog must be used within AuditLogProvider");
  return ctx;
}
