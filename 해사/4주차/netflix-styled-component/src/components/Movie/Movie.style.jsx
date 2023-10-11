import styled from 'styled-components';

export const MovieItem = styled.div`
  position: relative;
  justify-content: center;
  background-color: #373b69;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 5px 5px 9px -8px rgba(0, 0, 0, 0.53);
  -webkit-box-shadow: 5px 5px 9px -8px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 5px 5px 9px -8px rgba(0, 0, 0, 0.53);
  &:hover {
    & > div {
      opacity: 0.7;
    }
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 300px;
`;

export const Meta = styled.div`
  height: 50px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  color: white;
`;

export const Title = styled.p`
  font-weight: bold;
  word-break: break-all;
  word-wrap: break-word;
`;
