import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Reducer.js";

export default function Login() {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });
  const { id, pw } = inputs;
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //========onchange==================================
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  //========onsubmit==================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("Loading...");

    axios
      .post("http://localhost:8000/user/login", {
        id,
        pw,
      })

      .then((response) => {
        //loading 1.5초 이후 없애기
        alert("환영합니다");
        navigate(`/`);

        console.log(response);
        dispatch(loginUser(response.data.result));
      })
      .catch((error) => {
        const code = error.response.status;
        console.log(code);
        if (code === 400) {
          alert("값을 입력하세요");
          return;
        }
        if (code === 404) {
          alert("아이디와 비밀번호를 확인하세요");
          return;
        }
      })
      .finally(() => {
        setTimeout(() => {
          setMsg("");
        }, 1500);
        setLoading(false);
      });
  };

  return (
    <LoginContainer>
      <div>아이디와 비밀번호를 입력해주세요</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>아이디</div>
          <input
            type="text"
            value={id}
            placeholder="아이디"
            onChange={onChange}
            name="id"
            //e.target.value는 input값
          />
          <br />
          <div>비밀번호</div>
          <input
            type="password"
            value={pw}
            placeholder="비밀번호"
            onChange={onChange}
            name="pw"
          />
          <br />
          <br />

          <Submit type="submit" disabled={loading} />
        </form>
        <div>{msg}</div>
      </div>
    </LoginContainer>
  );
}

//======================css==============================

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

const Submit = styled.input`
  background-color: black;
  border-radius: 30px;
  border: 0;
  color: white;
  cursor: pointer;
`;
