/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setId, setPw, isLoading, setToken } from "../redux/action";

function Login({ id, pw, loading, setId, setPw, isLoading, setToken }) {
  const navigate = useNavigate(); // Use useHistory hook
  const handleLogin = async (e) => {
    e.preventDefault();

    // input이 하나라도 비어있으면 alert
    if (!id || !pw) {
      alert("아이디와 비밀번호를 모두 입력하세요.");
      return;
    }

    // axios 요청 시작 -> 로딩
    isLoading(true);

    try {
      await axios
        .post("http://localhost:8000/user/login", {
          id,
          pw,
        })
        .then((res) => {
          // axios 요청 후 1.5초 뒤 -> 로그인 끝
          setTimeout(() => {
            isLoading(false);
            alert(`로그인 완료! ${res.data.result.username}`);

            // 토큰 저장
            const userToken = res.data.result.AccessToken;
            setToken(userToken);
            localStorage.setItem("token", userToken);

            // 홈화면으로 이동
            navigate("/");
          }, 1500);
        });
    } catch (err) {
      isLoading(false);
      alert(`로그인 실패! ${err.response.data.message}`);
    }
  };

  return (
    <Container>
      <DetailBox>
        <Title>
          <h1>Log In</h1>
          <span>이메일과 비밀번호를 입력해주세요.</span>
        </Title>
        <Form onSubmit={handleLogin}>
          <Label>
            아이디
            <Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디 입력"
            />
          </Label>
          <Label>
            비밀번호
            <Input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="비밀번호 입력"
            />
          </Label>
          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "로그인"}
          </Button>
        </Form>
      </DetailBox>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  id: state.id,
  pw: state.pw,
  loading: state.loading,
  token: state.token,
});

const mapDispatchToProps = {
  setId,
  setPw,
  isLoading,
  setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
  margin: 5px 0px;
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
  background-color: ${(props) =>
    props.disabled ? "#c2c2c2" : "rgb(3, 37, 65)"};
  color: white;
  margin: 10px 0px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:hover {
    transform: scale(1.01);
    transition: transform 0.3s ease-in-out;
  }
`;
