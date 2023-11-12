import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      background-color: #efefef;
      /* background-color: rgb(3, 37, 65, 0.9); */
      font-family: "Noto Sans KR", sans-serif;
      color: black;
      padding-top: 64px;
    }
`;

export const Container = styled.div`
  width: 100vw;
  overflow: auto;
`;
