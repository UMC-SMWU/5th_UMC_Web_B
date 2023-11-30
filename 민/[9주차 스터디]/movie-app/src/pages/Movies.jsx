import React from "react";
import styled from "styled-components";
import { movies } from "../data/movieDummy";
import Contents from "../components/Contents";

function Movies() {
  return (
    <Container>
      <Box>
        {movies.results.map((movie) => (
          <Contents content={movie} key={movie.id} />
        ))}
      </Box>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  width: 100vw;
  padding: 70px 0px;
`;

const Box = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  justify-content: center;
  gap: 24px;
`;
