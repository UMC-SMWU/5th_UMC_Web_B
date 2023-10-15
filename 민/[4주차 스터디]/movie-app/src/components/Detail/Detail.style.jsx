import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;

  font-size: 12px;
  padding: 10px 10px;
  box-sizing: border-box;
  cursor: default; /* 텍스트 커서 없애기 */

  & h5 {
    font-size: 14px;
    font-weight: 500;
    margin: 10px 0px;
  }
`;

export const Description = styled.span`
  line-height: 17px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
`;
