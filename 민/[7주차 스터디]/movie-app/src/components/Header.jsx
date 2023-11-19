import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./LoginButton";

function Header() {
  return (
    <HeaderBar>
      <Content>
        <Link to="/">
          <Logo
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
          />
        </Link>
        <Nav>
          <LinkItem to="/movies">영화</LinkItem>
          <LinkItem to="/tv">TV 프로그램</LinkItem>
          <LinkItem to="/celebrity">인물</LinkItem>
        </Nav>

        <LoginButton />
      </Content>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  z-index: 999;
  background-color: rgb(3, 37, 65);

  // 상단 고정
  position: fixed;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1250px;
  padding: 0px 40px;
`;

const Logo = styled.img`
  width: 154px;
  height: 20px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 16px;
`;

const LinkItem = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: white;
  padding: 8px;
  margin: 0px 3px;
  cursor: pointer;
`;
