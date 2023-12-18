import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function NotFound() {
  const navigate = useNavigate();
  const backHome = () => {
    navigate('/');
  };
  return (
    <Container>
      <div>
        <div>해당 페이지를 찾지 못했습니다</div>
        <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
        <span onClick={backHome}>돌아가기</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 6rem;
  width: 100vw;
  div {
    margin: 10px;
    div {
      margin: 10px 0;
      &:first-child {
        font-size: 30px;
        font-weight: bold;
      }
      &:nth-child(2) {
        font-size: 15px;
      }
    }
    span {
      color: red;
      cursor: pointer;
    }
  }
`;
