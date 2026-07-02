import { createContext, ReactNode, useEffect, useState } from "react";




interface AuthProviderProps {
    children:ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UsuarioLogin | null>(null);

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin