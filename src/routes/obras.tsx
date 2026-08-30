import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Plus, Building2, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/obras")({
  head: () => ({
    meta: [
      { title: "Gerenciar Obras · SmartForeman Web" },
      { name: "description", content: "Cadastro e gestão de obras do portfólio." },
    ],
  }),
  component: ObrasPage,
});

function ObrasPage() {
  return (
    <Shell>
      <ObrasBody />
    </Shell>
  );
}

function ObrasBody() {
  const [obras, setObras] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [nome, setNome] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [status, setStatus] = useState("ativa");
  const [saving, setSaving] = useState(false);

  // Carregar obras
  useEffect(() => {
    const loadObras = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("obras").select("*");
        if (!error && data) {
          setObras(data);
        }
      } catch (err) {
        console.log("Erro ao carregar obras");
      } finally {
        setLoading(false);
      }
    };
    void loadObras();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !localizacao.trim()) {
      toast.error("Preencha todos os campos");
      return;
    }

    try {
      setSaving(true);
      const { data, error } = await supabase
        .from("obras")
        .insert([{ nome, localizacao, status }])
        .select();

      if (error) {
        toast.error("Erro ao criar obra: " + error.message);
        return;
      }

      toast.success("Obra criada com sucesso!");
      setNome("");
      setLocalizacao("");
      setStatus("ativa");
      setShowForm(false);
      
      // Recarregar lista
      const { data: updated } = await supabase.from("obras").select("*");
      if (updated) setObras(updated);
    } catch (err) {
      toast.error("Erro ao criar obra");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            Gerenciamento
          </div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-50">
            Gerenciar Obras
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Cadastre novas obras e acompanhe o portfólio do projeto.
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 text-sm font-medium transition-colors"
        >
          <Plus className="h-4 w-4" />
          Nova Obra
        </button>
      </div>

      {/* Formulário */}
      {showForm && (
        <div className="rounded-lg border border-indigo-500/30 bg-indigo-500/5 p-6">
          <h2 className="text-lg font-semibold text-zinc-50 mb-4">Cadastrar Nova Obra</h2>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-300 mb-2">Nome da Obra</label>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Torre A - Residencial Horizon"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-2">Localização</label>
                <input
                  value={localizacao}
                  onChange={(e) => setLocalizacao(e.target.value)}
                  placeholder="Ex: Vitória, ES"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-2">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-indigo-500/50"
                >
                  <option value="ativa">Ativa</option>
                  <option value="planejada">Planejada</option>
                  <option value="pendente">Pendente</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-2 text-sm font-medium transition-colors"
              >
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Criando...
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4" />
                    Criar Obra
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-4 py-2 text-sm font-medium transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Lista de Obras */}
      <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/60 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-6 w-6 animate-spin text-indigo-400" />
          </div>
        ) : obras.length === 0 ? (
          <div className="p-8 text-center text-zinc-400">
            <Building2 className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>Nenhuma obra cadastrada ainda.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800/60 bg-zinc-900 text-[11px] uppercase tracking-wider text-zinc-500">
                  <th className="px-4 py-3 text-left font-medium">Nome</th>
                  <th className="px-4 py-3 text-left font-medium">Localização</th>
                  <th className="px-4 py-3 text-left font-medium">Status</th>
                  <th className="px-4 py-3 text-left font-medium">Criada em</th>
                </tr>
              </thead>
              <tbody>
                {obras.map((obra) => (
                  <tr key={obra.id} className="border-b border-zinc-800/40 hover:bg-zinc-800/30 transition-colors">
                    <td className="px-4 py-3 text-zinc-200 font-medium">{obra.nome}</td>
                    <td className="px-4 py-3 flex items-center gap-2 text-zinc-400">
                      <MapPin className="h-3.5 w-3.5" />
                      {obra.localizacao}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${
                          obra.status === "ativa"
                            ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                            : obra.status === "planejada"
                            ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                            : "bg-zinc-800 text-zinc-300 border border-zinc-700"
                        }`}
                      >
                        {obra.status.charAt(0).toUpperCase() + obra.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-[11px] text-zinc-500">
                      {new Date(obra.criado_em).toLocaleDateString("pt-BR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
