import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import GlobalStyle from "./GlobalStyle";
import { AuthContextProvider } from "./contexts/AuthContext";
import Home from "./pages/Home/Home";
export default function App() {
  return (
    <>
      <AuthContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}
