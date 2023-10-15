import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 280px;
  background-color: rgb(55, 55, 108);
  overflow-x: hidden;
  border-radius: 5px;
  position: relative;

  /* 마우스 올렸을 때 확대 모션 */
  &:hover {
    transform: scale(1.07);
    transition: transform 0.3s ease-in-out;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  gap: 5px;
`;
