import { useNavigate } from "react-router-dom";
import { GraduationCap, User, Bus, MapPin, Database, Radio } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Bom Dia!";
  if (h < 18) return "Boa Tarde!";
  return "Boa Noite!";
};

const formatDate = () =>
  new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const cards = [
  { title: "Cadastrar Aluno", desc: "Cadastre novos alunos para as rotas", icon: GraduationCap, color: "text-student", path: "/cadastro/aluno" },
  { title: "Cadastrar Motorista", desc: "Cadastre novos motoristas para as rotas", icon: User, color: "text-driver", path: "/cadastro/motorista" },
  { title: "Cadastrar Ônibus", desc: "Cadastre novos ônibus para as rotas", icon: Bus, color: "text-bus", path: null },
  { title: "Cadastrar Ponto", desc: "Cadastre novos pontos para as rotas", icon: MapPin, color: "text-stop", path: null },
  { title: "Acessar dados", desc: "Visualize métricas e banco de dados completo", icon: Database, color: "text-datacolor", path: null },
  { title: "Transmissão", desc: "Acompanhe a localização dos veículos em tempo real", icon: Radio, color: "text-transmission", path: "/transmissao" },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground">Visão Geral</h1>
        <p className="text-sm text-muted-foreground">{formatDate()}</p>
      </div>

      <div className="relative rounded-2xl overflow-hidden h-44">
        <img src={heroBanner} alt="Banner" className="w-full h-full object-cover" width={1200} height={512} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent flex flex-col justify-center px-8">
          <h2 className="text-3xl font-extrabold text-card">{getGreeting()}</h2>
          <p className="text-card/90 mt-1 max-w-md text-sm">
            Seja Bem-Vindo! Selecione uma das opções abaixo para gerenciar seus dados ou realizar novos cadastros
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <button
            key={c.title}
            onClick={() => c.path && navigate(c.path)}
            disabled={!c.path}
            className={`bg-card rounded-xl p-5 text-left border border-border transition-all
              ${c.path ? "hover:shadow-md hover:-translate-y-0.5 cursor-pointer" : "opacity-50 cursor-not-allowed"}
            `}
          >
            <c.icon className={`w-8 h-8 ${c.color} mb-3`} />
            <h3 className="font-bold text-foreground">{c.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
            <span className={`text-xs font-semibold mt-3 inline-block ${c.path ? c.color : "text-muted-foreground"}`}>
              Acessar agora
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
