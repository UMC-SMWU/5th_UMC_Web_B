/* eslint-disable no-shadow */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

function LoginButton({ token }) {
  const navigate = useNavigate();

  return (
    <Container>
      {token === "" ? (
        <Button type="button" onClick={() => navigate(`/login`)}>
          로그인
        </Button>
      ) : (
        <Button type="button" onClick={() => window.location.replace("/")}>
          로그아웃
        </Button>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  token: state.token,
});
export default connect(mapStateToProps)(LoginButton);

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
