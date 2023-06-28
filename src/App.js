import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import GlobalStyle from "./GlobalStyle";
import { AuthContextProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}
