import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      background-color: rgb(34, 34, 83);
      font-family: "Noto Sans KR", sans-serif;
      color: white;
    }
`;

export const Container = styled.div`
  height: auto;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;

  & h1 {
    font-size: 60px;
    font-weight: 800;
    opacity: 0.9;
    font-family: "Gabarito", cursive;
  }
`;

export const Movies = styled.div`
  width: 94%;
  height: auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; /* movie item 간 상하좌우 gap */
`;
