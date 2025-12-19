import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const logout = ()=> {
        localStorage.removeItem("token");
        setToken(null);
    }

    const setAccessToken = (token) => {
        localStorage.setItem('token', token)
        setToken(token);
    }

    return <AuthContext.Provider value={{token, logout, setAccessToken}}>
        {children}
    </AuthContext.Provider>
}