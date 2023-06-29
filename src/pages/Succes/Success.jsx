import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Content,
  Corpo,
  Footer,
  Header,
  Infos,
} from "./style";

export default function Success() {

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
        </Infos>
        <Infos>
        </Infos>
      </Content>
      <Footer>
      </Footer>
    </Corpo>
  );
}
