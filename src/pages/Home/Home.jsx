import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Content,
  Corpo,
  Footer,
  Header,
  InsideFooter,
  Infos,
  InsideContent,
  Total,
  CheckboxInput,
  Button,
} from "./style";
import { AuthContext } from "../../contexts/AuthContext";
import { dataTurma1, dataTurma2 } from "../../utils";

export default function Home() {
  const { classInfo, classInfo2, tokenContext } = useContext(AuthContext);
  console.log(classInfo, "Info na Home");
  console.log(classInfo2, "Info2 na Home");

  const [checked5474, setChecked5474] = useState(false);
  const [checked5436, setChecked5436] = useState(false);

  const handleChecklistChange5474 = () => {
    setChecked5474(!checked5474);
  };

  const handleChecklistChange5436 = () => {
    setChecked5436(!checked5436);
  };

  const handleSendData = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tokenContext}`,
      },
    };

    if (checked5436) {
      const data5474 = {
        idTurma: "5436",
        dataPresenca: "2023-06-12T11:50:48",
        nrAula: 1,
      };

      axios
        .post(
          "https://www2.sgcpapi.homologacao.sp.gov.br/api/v1/Frequencia",
          dataTurma2,
          config
        )
        .then((res) => {
          console.log(res.data, "CHEGOUUUU a turma 5432");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (checked5474) {
      axios
        .post(
          "https://www2.sgcpapi.homologacao.sp.gov.br/api/v1/Frequencia",
          dataTurma1,
          config
        )
        .then((res) => {
          console.log(res.data, "CHEGOUUUU a turma 5474");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Corpo>
      <Header>
        <h1>Home</h1>
        <Link to={"/"}>
          <ion-icon name="log-out-outline"></ion-icon>
        </Link>
      </Header>
      <Content>
        <Infos>
          <span>Turma 5474</span>
          <CheckboxInput
            type="checkbox"
            checked={checked5474}
            onChange={handleChecklistChange5474}
          />
        </Infos>
        <Infos>
          <span>Turma 5436</span>
          <CheckboxInput
            type="checkbox"
            checked={checked5436}
            onChange={handleChecklistChange5436}
          />
        </Infos>
      </Content>
      <Footer>
        <Button onClick={handleSendData}>Enviar</Button>
      </Footer>
    </Corpo>
  );
}
