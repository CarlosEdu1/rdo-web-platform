import type { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { TopHeader } from "./TopHeader";
import { ProjectProvider } from "@/lib/project-context";
import { AuditLogProvider } from "@/lib/audit-log-context";
import { Toaster } from "sonner";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <ProjectProvider>
      <AuditLogProvider>
        <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
          <AppSidebar />
          <div className="md:pl-[250px]">
            <TopHeader />
            <main className="p-6">{children}</main>
          </div>
        </div>
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#18181B",
              border: "1px solid #3F3F46",
              color: "#FAFAFA",
            },
          }}
        />
      </AuditLogProvider>
    </ProjectProvider>
  );
}
