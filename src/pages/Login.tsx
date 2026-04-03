import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bus, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Login efetuado com sucesso!", description: `Bem-vindo, ${email}` });
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-login-bg">
      {/* Clouds */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-card rounded-full opacity-60"
          style={{
            width: `${80 + i * 40}px`,
            height: `${40 + i * 15}px`,
            top: `${10 + (i * 17) % 60}%`,
            left: `${5 + (i * 23) % 80}%`,
          }}
        />
      ))}

      <form onSubmit={handleLogin} className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden bg-card">
        <div className="bg-login-header py-8 text-center">
          <Bus className="w-10 h-10 mx-auto text-primary-foreground mb-2" />
          <h1 className="text-2xl font-extrabold text-primary-foreground tracking-wide">SISTEMA BONDROTA</h1>
          <p className="text-sm text-primary-foreground/80 mt-1">TELA DE LOGIN</p>
        </div>

        <div className="border-b-2 border-dashed border-border mx-6" />

        <div className="p-8 space-y-5">
          <div>
            <label className="text-xs font-bold text-muted-foreground tracking-wider">SEU E-MAIL</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-muted border-none"
                placeholder="email@exemplo.com"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-muted-foreground tracking-wider">SUA SENHA</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-muted border-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-6 text-lg font-bold bg-warning text-warning-foreground hover:bg-warning/90"
          >
            {loading ? (
              <>Carregando <Bus className="ml-2 w-5 h-5 animate-pulse" /></>
            ) : (
              <>Entrar Agora <Bus className="ml-2 w-5 h-5" /></>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
