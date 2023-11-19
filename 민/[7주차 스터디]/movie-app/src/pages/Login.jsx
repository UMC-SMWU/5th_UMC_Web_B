import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [password, setPassword] = useState("");
  const [pwMsg, setPwMsg] = useState("");

  /* -------- 정규식 --------- */
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  /* -------- 이벤트 핸들러 --------- */
  const onEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailRegex.test(e.target.value) || e.target.value === "")
      setEmailMsg("");
    else setEmailMsg("올바른 이메일을 입력해주세요.");
  };

  const onPwChange = (e) => {
    setPassword(e.target.value);
    if (pwRegex.test(e.target.value) || e.target.value === "") setPwMsg("");
    else setPwMsg("올바른 비밀번호를 입력해주세요.");
  };

  return (
    <Container>
      <DetailBox>
        <Title>
          <h1>Log In</h1>
          <span>이메일과 비밀번호를 입력해주세요.</span>
        </Title>
        <Form>
          <Label>
            이메일 주소
            <Input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e)}
              placeholder="이메일 입력"
            />
          </Label>
          <Message>{emailMsg}</Message>
          <Label>
            비밀번호
            <Input
              type="password"
              value={password}
              onChange={(e) => onPwChange(e)}
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            />
          </Label>
          <Message>{pwMsg}</Message>
          <Button type="submit">확인</Button>
        </Form>
      </DetailBox>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 64px); // header 높이 뺀 길이

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailBox = styled.div`
  width: 50%;
  max-width: 700px;
  border-radius: 10px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Title = styled.div`
  & h1 {
    margin: 10px 0px;
    font-size: 40px;
  }

  & span {
    font-weight: 500;
    color: #3b3b3b;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 7px;
  border: 1px solid gray;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0px 10px;
`;

const Button = styled.button`
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: rgb(3, 37, 65);
  color: white;
  margin: 10px 0px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    transition: transform 0.3s ease-in-out;
  }
`;

const Message = styled.span`
  height: 20px;
  font-size: 12px;
  color: red;
  margin-bottom: 10px;
`;
