import { createContext } from "react";
import type {UserData} from "../types/types.ts";

type AuthContextType = {
    token: string;
    onLogin: (data: UserData) => Promise<void>;
    onLogout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    token: "",
    onLogin: () => Promise.resolve(),
    onLogout: () => {},
} as AuthContextType);