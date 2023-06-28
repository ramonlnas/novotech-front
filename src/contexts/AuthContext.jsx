import { createContext, useState } from "react";


export const AuthContext = createContext()

export function AuthContextProvider({children}) {
    
    const [token, setToken] = useState("")

    function getToken(Token) {
        setToken(Token)
        console.log(token)
    }

    

    return (
        <AuthContext.Provider
            value={{getToken, token}}
        >
            {children}
        </AuthContext.Provider>
    )
}