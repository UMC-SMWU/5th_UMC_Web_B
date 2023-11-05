import React from "react";
import styled from "styled-components";
import { movies } from "../data/movieDummy";
import Movie from "../components/Movie";

function Movies() {
  return (
    <Container>
      <Box>
        {movies.results.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </Box>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  height: auto;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`;

const Box = styled.div`
  width: 94%;
  height: auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; /* movie item 간 상하좌우 gap */
`;
