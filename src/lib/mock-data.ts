export type ProjectStatus = "on-track" | "warning" | "critical";

export interface Project {
  id: string;
  name: string;
  location: string;
  status: ProjectStatus;
  physicalDone: number;
  physicalPlanned: number;
  financialDone: number;
  financialPlanned: number;
  weather: string;
  rdoStatus: string;
  effectivePlanned: number;
  effectiveReal: number;
}

export const PROJECTS: Project[] = [
  {
    id: "torre-a",
    name: "Torre A - Residencial Horizon",
    location: "Vitória, ES",
    status: "warning",
    physicalDone: 68,
    physicalPlanned: 73,
    financialDone: 4.2,
    financialPlanned: 4.5,
    weather: "☀️ 28°C - Sem Impacto",
    rdoStatus: "🟢 RDO Enviado & Aprovado",
    effectivePlanned: 48,
    effectiveReal: 42,
  },
  {
    id: "corporate-tower",
    name: "Corporate Tower",
    location: "São Paulo, SP",
    status: "on-track",
    physicalDone: 42,
    physicalPlanned: 41,
    financialDone: 8.9,
    financialPlanned: 9.0,
    weather: "⛅ 24°C",
    rdoStatus: "🟢 RDO Enviado & Aprovado",
    effectivePlanned: 72,
    effectiveReal: 74,
  },
  {
    id: "residencial-marina",
    name: "Residencial Marina Bay",
    location: "Vila Velha, ES",
    status: "on-track",
    physicalDone: 84,
    physicalPlanned: 82,
    financialDone: 12.1,
    financialPlanned: 12.4,
    weather: "☀️ 30°C",
    rdoStatus: "🟢 RDO Aprovado",
    effectivePlanned: 55,
    effectiveReal: 57,
  },
  {
    id: "shopping-central",
    name: "Shopping Central - Fase 2",
    location: "Serra, ES",
    status: "critical",
    physicalDone: 22,
    physicalPlanned: 34,
    financialDone: 2.1,
    financialPlanned: 3.4,
    weather: "🌧️ 21°C - Impacto",
    rdoStatus: "🔴 Paralisação Registrada",
    effectivePlanned: 90,
    effectiveReal: 41,
  },
  {
    id: "hospital-santa",
    name: "Hospital Santa Clara - Ala Sul",
    location: "Cariacica, ES",
    status: "on-track",
    physicalDone: 55,
    physicalPlanned: 55,
    financialDone: 6.3,
    financialPlanned: 6.4,
    weather: "☀️ 27°C",
    rdoStatus: "🟢 RDO Aprovado",
    effectivePlanned: 60,
    effectiveReal: 58,
  },
  {
    id: "escola-tecnica",
    name: "Escola Técnica Municipal",
    location: "Guarapari, ES",
    status: "warning",
    physicalDone: 38,
    physicalPlanned: 44,
    financialDone: 1.9,
    financialPlanned: 2.3,
    weather: "⛅ 26°C",
    rdoStatus: "🟡 Pendente Revisão",
    effectivePlanned: 34,
    effectiveReal: 28,
  },
];

export interface AlertItem {
  id: string;
  agent: "0" | "1" | "2";
  agentName: string;
  severity: "warning" | "critical";
  projectId: string;
  message: string;
  time: string;
}

export const ALERTS: AlertItem[] = [
  {
    id: "a1",
    agent: "0",
    agentName: "Agente 0 · Contratual & Legal",
    severity: "warning",
    projectId: "torre-a",
    message:
      "Aditivo Contratual: Atraso na Laje L3 ultrapassa limite de carência do contrato em 2 dias.",
    time: "há 12 min",
  },
  {
    id: "a2",
    agent: "1",
    agentName: "Agente 1 · Cronograma & MS Project",
    severity: "warning",
    projectId: "torre-a",
    message:
      "Desvio Detectado: Progresso físico da Torre A está 5% atrás do planejado para a semana 14.",
    time: "há 32 min",
  },
  {
    id: "a3",
    agent: "2",
    agentName: "Agente 2 · Insumos & Histograma",
    severity: "critical",
    projectId: "shopping-central",
    message:
      "Defasagem de Efetivo: Mão de obra de pedreiros está 20% abaixo da meta do histograma.",
    time: "há 1h",
  },
  {
    id: "a4",
    agent: "1",
    agentName: "Agente 1 · Cronograma & MS Project",
    severity: "critical",
    projectId: "shopping-central",
    message:
      "Caminho Crítico Comprometido: Atraso acumulado de 12 dias em atividades sucessoras.",
    time: "há 2h",
  },
  {
    id: "a5",
    agent: "0",
    agentName: "Agente 0 · Contratual & Legal",
    severity: "warning",
    projectId: "escola-tecnica",
    message:
      "Cláusula 8.2: Necessário aditivo formal para prorrogação de prazo detectada em cronograma.",
    time: "há 4h",
  },
];

export interface RdoRow {
  id: string;
  date: string;
  projectId: string;
  responsible: string;
  effectiveReal: number;
  effectivePlanned: number;
  weather: string;
  occurrences: number;
  iaStatus: "approved" | "warning" | "critical" | "pending";
}

export const RDOS: RdoRow[] = [
  { id: "RDO-2048", date: "24/07/2026", projectId: "torre-a", responsible: "Eng. Marcelo Silva", effectiveReal: 42, effectivePlanned: 48, weather: "☀️", occurrences: 2, iaStatus: "warning" },
  { id: "RDO-2047", date: "24/07/2026", projectId: "corporate-tower", responsible: "Eng. Ana Beatriz", effectiveReal: 74, effectivePlanned: 72, weather: "⛅", occurrences: 0, iaStatus: "approved" },
  { id: "RDO-2046", date: "24/07/2026", projectId: "shopping-central", responsible: "Eng. Roberto Lima", effectiveReal: 41, effectivePlanned: 90, weather: "🌧️", occurrences: 5, iaStatus: "critical" },
  { id: "RDO-2045", date: "23/07/2026", projectId: "torre-a", responsible: "Eng. Marcelo Silva", effectiveReal: 44, effectivePlanned: 48, weather: "⛅", occurrences: 1, iaStatus: "warning" },
  { id: "RDO-2044", date: "23/07/2026", projectId: "residencial-marina", responsible: "Eng. Patrícia Souza", effectiveReal: 57, effectivePlanned: 55, weather: "☀️", occurrences: 0, iaStatus: "approved" },
  { id: "RDO-2043", date: "23/07/2026", projectId: "hospital-santa", responsible: "Eng. Diego Almeida", effectiveReal: 58, effectivePlanned: 60, weather: "☀️", occurrences: 1, iaStatus: "approved" },
  { id: "RDO-2042", date: "22/07/2026", projectId: "escola-tecnica", responsible: "Eng. Camila Rocha", effectiveReal: 28, effectivePlanned: 34, weather: "⛅", occurrences: 2, iaStatus: "pending" },
  { id: "RDO-2041", date: "22/07/2026", projectId: "torre-a", responsible: "Eng. Marcelo Silva", effectiveReal: 40, effectivePlanned: 48, weather: "🌧️", occurrences: 3, iaStatus: "warning" },
  { id: "RDO-2040", date: "22/07/2026", projectId: "corporate-tower", responsible: "Eng. Ana Beatriz", effectiveReal: 71, effectivePlanned: 72, weather: "☀️", occurrences: 0, iaStatus: "approved" },
  { id: "RDO-2039", date: "21/07/2026", projectId: "shopping-central", responsible: "Eng. Roberto Lima", effectiveReal: 38, effectivePlanned: 90, weather: "🌧️", occurrences: 6, iaStatus: "critical" },
];

export interface RagDocument {
  id: string;
  name: string;
  agent: "0" | "1" | "2";
  size: string;
  status: "vectorized" | "processing" | "queued";
  progress: number;
}

export const RAG_DOCS: RagDocument[] = [
  { id: "d1", name: "Cronograma_Base_TorreA_v2.xlsx", agent: "1", size: "2.4 MB", status: "vectorized", progress: 100 },
  { id: "d2", name: "Contrato_Empreitada_Global.pdf", agent: "0", size: "8.1 MB", status: "processing", progress: 62 },
  { id: "d3", name: "Histograma_MaoDeObra_Q3.xlsx", agent: "2", size: "1.1 MB", status: "vectorized", progress: 100 },
  { id: "d4", name: "Aditivo_Contratual_003.pdf", agent: "0", size: "1.8 MB", status: "vectorized", progress: 100 },
  { id: "d5", name: "Memorial_Descritivo_TorreA.docx", agent: "0", size: "3.2 MB", status: "processing", progress: 34 },
  { id: "d6", name: "Cronograma_MSProject_Corporate.mpp", agent: "1", size: "5.7 MB", status: "queued", progress: 0 },
  { id: "d7", name: "Tabela_Equipamentos_2026.csv", agent: "2", size: "412 KB", status: "vectorized", progress: 100 },
];

export const agentColor = (agent: "0" | "1" | "2") =>
  agent === "0" ? "text-indigo-400" : agent === "1" ? "text-indigo-400" : "text-indigo-400";
