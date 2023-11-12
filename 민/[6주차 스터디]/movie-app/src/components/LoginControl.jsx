import React, { useState } from "react";
import styled from "styled-components";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container>
      <Button type="button" onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </Button>
      <span>{isLoggedIn ? "환영합니다!" : "로그인 해주세요!"}</span>
    </Container>
  );
}

export default LoginControl;

const Container = styled.div`
  display: flex;
  align-items: center;

  & span {
    font-size: 14px;
    font-weight: lighter;
    color: white;
    margin: 0px 10px;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 12px;
  width: 70px;
  height: 25px;
  text-align: center;

  cursor: pointer;
  background-color: white;
`;
