import { useState } from "react";
import Detail from "../Detail/Detail";
import { Container, Title } from "./Movie.style";

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
