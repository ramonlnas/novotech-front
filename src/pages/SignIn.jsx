import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [classData, setClassData] = useState("");
  const Navigate = useNavigate();
  const { getClass, getClass2, getToken } = useContext(AuthContext);

  function fazerLogin(event) {
    event.preventDefault();

    axios
      .post(
        "https://www2.sgcpapi.homologacao.sp.gov.br/api/v1/Usuario/Authentication",
        {
          userNameOrEmail: "ti@canaisstart.com.br",
          password: "123qwe",
        }
      )
      .then((res) => {
        console.log(res.data);
        setToken(res.data.token);
        fetchData(res.data.token);
        fetchData2(res.data.token);
        getToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fetchData(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(
        "https://www2.sgcpapi.homologacao.sp.gov.br/api/v1/Matricula/Turma/5436",
        config
      )
      .then((res) => {
        console.log(res.data);
        console.log("Chegou aqui");
        setClassData(res.data);
        getClass2(res.data);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fetchData2(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(
        "https://www2.sgcpapi.homologacao.sp.gov.br/api/v1/Matricula/Turma/5474",
        config
      )
      .then((res) => {
        console.log(res.data);
        console.log("Chegou aqui");
        // sendDataAPI(res.data, token);
        setClassData(res.data);
        getClass(res.data);
        Navigate("/home");

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function sendDataAPI(data, token) {
  //   console.log(data);
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   const currentDate = new Date();

  //   console.log(dataApi);

  //   axios
  //     .post(
  //       "https://www2.sgcpapi.homologacao.sp.gov.br/api/v1/Frequencia",
  //       dataApi,
  //       config
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       console.log("Chegou aqui no Post");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  return (
    <Corpo>
      <h1>NovoTec</h1>

      <DivLogin>
        <form onSubmit={fazerLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>
        </form>
      </DivLogin>
      <Link to={"/sign-up"}>
        <p>Não possuí uma conta? Cadastre-se</p>
      </Link>
    </Corpo>
  );
}
const Corpo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;

  h1 {
    font-family: "Saira Stencil One";
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    margin-bottom: 24px;
  }

  p {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 299px;

  input {
    height: 58px;
    width: 326px;
    border-radius: 5px;
    padding: 18px 0px 18px 14px;
    font-family: "Raleway";
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-bottom: 13px;
  }

  button {
    width: 326px;
    height: 46px;
    background: #a328d6;
    border-radius: 5px;
    margin: 8px 0px 24px 0px;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    margin-bottom: 36px;
  }
`;
