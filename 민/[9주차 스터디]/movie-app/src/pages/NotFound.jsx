import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  return (
    <Container>
      <h1>해당 페이지를 찾지 못했습니다.</h1>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <LinkItem to="/">메인 페이지로 이동</LinkItem>
    </Container>
  );
}

export default NotFound;

const Container = styled.div`
  height: calc(100vh - 64px); // header 높이 뺀 길이
  width: 100vw;
  max-width: 1250px;
  box-sizing: border-box;
  padding: 50px 0px;
  margin: 0 auto; // 중앙정렬

  & h1 {
    margin: 0px;
  }
`;

const LinkItem = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
`;
