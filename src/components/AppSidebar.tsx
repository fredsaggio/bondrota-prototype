import { useNavigate, useLocation } from "react-router-dom";
import { Home, GraduationCap, User, Bus, MapPin, Database, Radio } from "lucide-react";

const menuItems = [
  { label: "Home", icon: Home, path: "/home", color: "text-foreground", enabled: true },
];

const cadastroItems = [
  { label: "Aluno", icon: GraduationCap, path: "/cadastro/aluno", color: "text-student", enabled: true },
  { label: "Motorista", icon: User, path: "/cadastro/motorista", color: "text-driver", enabled: true },
  { label: "Ônibus", icon: Bus, path: "#", color: "text-bus", enabled: false },
  { label: "Ponto", icon: MapPin, path: "#", color: "text-stop", enabled: false },
];

const dadosItems = [
  { label: "Acessar Dados", icon: Database, path: "#", color: "text-datacolor", enabled: false },
  { label: "Transmissão", icon: Radio, path: "/transmissao", color: "text-transmission", enabled: true },
];

interface SidebarItemProps {
  label: string;
  icon: React.ElementType;
  path: string;
  color: string;
  enabled: boolean;
  active: boolean;
  onClick: () => void;
}

const SidebarItem = ({ label, icon: Icon, color, enabled, active, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    disabled={!enabled}
    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all
      ${active ? "bg-accent shadow-sm" : "hover:bg-muted"}
      ${!enabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
    `}
  >
    <span className="text-foreground">{label}</span>
    <Icon className={`w-5 h-5 ${color}`} />
  </button>
);

const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border p-5 flex flex-col gap-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <Bus className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-extrabold text-foreground">BondRota</span>
      </div>
      <p className="text-xs text-muted-foreground mb-3">Prefeitura de...</p>
      <hr className="border-border mb-2" />

      {menuItems.map((item) => (
        <SidebarItem
          key={item.label}
          {...item}
          active={location.pathname === item.path}
          onClick={() => item.enabled && navigate(item.path)}
        />
      ))}

      <p className="text-xs font-bold text-foreground mt-4 mb-1 px-1">Cadastro</p>
      {cadastroItems.map((item) => (
        <SidebarItem
          key={item.label}
          {...item}
          active={location.pathname === item.path}
          onClick={() => item.enabled && navigate(item.path)}
        />
      ))}

      <p className="text-xs font-bold text-foreground mt-4 mb-1 px-1">Dados no Sistema</p>
      {dadosItems.map((item) => (
        <SidebarItem
          key={item.label}
          {...item}
          active={location.pathname === item.path}
          onClick={() => item.enabled && navigate(item.path)}
        />
      ))}
    </aside>
  );
};

export default AppSidebar;
