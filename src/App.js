import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import GlobalStyle from "./GlobalStyle";
import { AuthContextProvider } from "./contexts/AuthContext";
import Home from "./pages/Home/Home";
import Success from "./pages/Succes/Success";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}
