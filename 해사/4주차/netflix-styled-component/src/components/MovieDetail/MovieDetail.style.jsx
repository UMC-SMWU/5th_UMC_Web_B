import styled from 'styled-components';

export const Detail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 16px;
  opacity: 0;
  box-sizing: border-box;
  font-size: 14px;
  background-color: black;
  color: white;
  transition: 250ms all ease-out;
`;

export const Title = styled.p`
  margin: 18px 0;
  font-weight: bold;
`;

export const Overview = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
`;
