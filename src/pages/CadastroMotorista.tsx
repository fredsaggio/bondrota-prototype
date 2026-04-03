import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CadastroMotorista = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nome: "", cpf: "", telefone: "", nascimento: "", turno: "",
  });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = () => {
    if (!form.nome) {
      toast({ title: "Preencha pelo menos o nome do motorista", variant: "destructive" });
      return;
    }
    toast({ title: "Motorista cadastrado com sucesso!", description: `${form.nome} foi registrado no sistema.` });
    setForm({ nome: "", cpf: "", telefone: "", nascimento: "", turno: "" });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground">Cadastro de Motorista</h1>
        <p className="text-sm text-muted-foreground">Preencha os dados abaixo para salvar no sistema</p>
      </div>

      <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-bold text-foreground">Nome completo</label>
            <Input className="mt-1 bg-muted border-none" value={form.nome} onChange={(e) => update("nome", e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-bold text-foreground">CPF</label>
            <Input className="mt-1 bg-muted border-none" value={form.cpf} onChange={(e) => update("cpf", e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-bold text-foreground">Telefone</label>
            <Input className="mt-1 bg-muted border-none" value={form.telefone} onChange={(e) => update("telefone", e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-bold text-foreground">Data de nascimento</label>
            <Input type="date" className="mt-1 bg-muted border-none" value={form.nascimento} onChange={(e) => update("nascimento", e.target.value)} />
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <label className="text-sm font-bold text-foreground">Turno</label>
          <Input className="mt-1 bg-muted border-none" value={form.turno} onChange={(e) => update("turno", e.target.value)} />
        </div>

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={() => setForm({ nome: "", cpf: "", telefone: "", nascimento: "", turno: "" })}
          >
            Limpar Formulário
          </Button>
          <Button onClick={handleSubmit} className="bg-primary text-primary-foreground px-8">
            Cadastrar Motorista
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CadastroMotorista;
