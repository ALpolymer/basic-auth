import {useState} from "react";
import {fakeAuth} from "../utils/fakeAuth.ts";
import {AuthContext} from "./authContext.ts"
import type {UserData} from "../types/types.ts";

type AuthProviderProps = {
    children: React.ReactNode;
}

 export const AuthProvider = ({children}:AuthProviderProps) => {

     const [token, setToken] = useState(() => {
         return localStorage.getItem("authToken") || "";
     });


    const handleLogin = async (data: UserData) => {
        const authToken = await fakeAuth(data)
        setToken(authToken)
        localStorage.setItem("authToken", authToken)
    }

    const handleLogout =  () => {
        setToken("");
        localStorage.removeItem("authToken");
    }

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};



