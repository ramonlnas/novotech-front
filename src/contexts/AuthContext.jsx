import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [classInfo, setClassInfo] = useState("");
  const [classInfo2, setClassInfo2] = useState("")
  const [tokenContext, setTokenContext] = useState("")

  function getClass(Class) {
    setClassInfo(Class);
  }

  function getClass2(Class2) {
    setClassInfo2(Class2)
  }

  function getToken(Token) {
    setTokenContext(Token)
    console.log(tokenContext)
  }

  return (
    <AuthContext.Provider value={{ getClass, classInfo, getClass2, classInfo2, getToken, tokenContext }}>
      {children}
    </AuthContext.Provider>
  );
}
