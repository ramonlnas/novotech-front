import styled from "styled-components";

export const Corpo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;
  font-family: "Raleway";
`;

export const Header = styled.div`
  width: 326px;
  margin: 25px 0 22px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }

  ion-icon {
    width: 30px;
    height: 30px;
    color: #ffffff;
  }
`;

export const Content = styled.div`
  width: 55vw;
  height: 67vh;
  background-color: #ffffff;
  margin-bottom: 13px;
  border-radius: 8px;
  padding: 23px 60px 11px 35px;
  position: relative;

  p {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }

  span {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

export const Footer = styled.div`
  width: 326px;
  display: flex;
  justify-content: space-between;
`;

export const InsideFooter = styled.div`
  width: 156px;
  height: 114px;
  display: flex;
  background: #a328d6;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-between;
  padding: 11px 0px 10px 10px;

  p {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }

  ion-icon {
    width: 25px;
    height: 25px;
    color: #ffffff;
  }
`;

export const InsideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  h2 {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-right: 150px;
  }
  h3 {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    text-align: right;

    /* color: #c70000; */
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 5px;
  left: 0;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    margin: 0px 230px 0 11px;
  }

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    text-decoration: none;
  }
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
`;

export const Button = styled.button`
  background-color: #a328d6;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-family: "Raleway";
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
`;
