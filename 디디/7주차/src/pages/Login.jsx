import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errmsg, setErrmsg] = useState({
    errEmail: '',
    errPassword: '',
  });
  const navigate = useNavigate();
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const check1 = emailPattern.test(email);
    const check2 = passwordPattern.test(password);
    setErrmsg({
      errEmail: check1 ? '' : '이메일 형식으로 작성해주세요',
      errPassword: check2
        ? ''
        : '영문, 숫자, 특수문자 포함 8자 이상으로 작성해야 합니다',
    });

    if (check1 && check2) {
      alert('로그인 되었습니다');
      navigate('/');
    }
  };

  return (
    <LoginContainer>
      <div>이메일과 비밀번호를 입력해주세요</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>이메일 주소</div>
          <input
            type="text"
            value={email}
            placeholder="이메일 주소"
            onChange={(event) => setEmail(event.target.value)}
            //e.target.value는 input값
          />
          <Error>{errmsg.errEmail}</Error>
          <br />
          <div>비밀번호</div>
          <input
            type="password"
            value={password}
            placeholder="영문, 숫자 특수문자 포함 8자 이상"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Error>{errmsg.errPassword}</Error>
          <br />
          <br />

          <Submit type="submit" />
        </form>
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 30%;
  width: 500px;
  align-items: center;
  div {
    position: relative;

    &:first-child {
      font-size: 30px;
    }
    &:nth-child(2) {
      margin: 20px;
      div {
        font-size: 15px;
        text-align: left;
        margin: 5px 0px;
        font-weight: bold;
      }
      input {
        width: 100%;
        height: 40px;

        border-style: solid;
        border-radius: 10px;
        border-color: rgb(179, 176, 176);
        &:nth-child(3) {
          background-color: black;
          border-radius: 20px;
        }
      }
    }
  }
`;
const Error = styled.div`
  color: red;
`;
const Submit = styled.input`
  background-color: black;
  border-radius: 30px;
  border: 0;
  color: white;
  cursor: pointer;
`;
