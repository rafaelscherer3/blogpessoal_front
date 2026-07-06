import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { login } from "../services/Service";
import type UsuarioLogin from "../models/UsuarioLogin";

interface AuthContextType {
  usuario: UsuarioLogin;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  handleLogout(): void;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(dadosLogin: UsuarioLogin) {

    setIsLoading(true);

    try {

      await login(
        "/usuarios/logar",
        dadosLogin,
        setUsuario
      );

    } catch (error) {

      alert("Usuário ou senha inválidos!");

    }

    setIsLoading(false);
  }

  function handleLogout() {

    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
    });

  }

  return (

    <AuthContext.Provider
      value={{
        usuario,
        handleLogin,
        handleLogout,
        isLoading
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}