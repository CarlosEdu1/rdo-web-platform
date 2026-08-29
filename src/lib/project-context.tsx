import { createContext, useContext, useState, type ReactNode } from "react";

interface Ctx {
  projectId: string; // "all" or project id
  setProjectId: (id: string) => void;
}

const ProjectContext = createContext<Ctx | null>(null);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projectId, setProjectId] = useState<string>("all");
  return (
    <ProjectContext.Provider value={{ projectId, setProjectId }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectFilter() {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProjectFilter must be used within ProjectProvider");
  return ctx;
}
