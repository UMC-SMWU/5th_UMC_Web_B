import { useState } from "react";
import styled from "styled-components";
import Detail from "./Detail";

function Movie({ movie }) {
  const [detailOpen, setDetailOpen] = useState(false);
  return (
    <Container
      onMouseOver={() => setDetailOpen(true)}
      onMouseOut={() => setDetailOpen(false)}
    >
      <img
        key={movie.id}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path} `}
        height="230"
        alt={movie.title}
      />
      <Title>
        <span>{movie.title}</span>
        <span>{movie.vote_average}</span>
      </Title>
      {detailOpen && <Detail title={movie.title} overview={movie.overview} />}
    </Container>
  );
}

export default Movie;

const Container = styled.div`
  width: 150px;
  height: 280px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  overflow-x: hidden;
  border-radius: 5px;
  position: relative;

  /* 마우스 올렸을 때 확대 모션 */
  &:hover {
    transform: scale(1.07);
    transition: transform 0.3s ease-in-out;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  box-sizing: border-box;
  font-weight: 500;
  color: #1d1d1d;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  gap: 5px;
`;
