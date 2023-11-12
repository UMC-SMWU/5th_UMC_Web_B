import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function MovieDetail() {
  const {
    state: { movie },
  } = useLocation();

  return (
    <Container>
      <DetailBox>
        <Poster
          key={movie.id}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path} `}
          height="350"
          alt={movie.title}
        />
        <Text>
          <h2>{movie.title}</h2>
          <Description>{movie.overview}</Description>
        </Text>
      </DetailBox>
    </Container>
  );
}

export default MovieDetail;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 64px); // header 높이 뺀 길이

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailBox = styled.div`
  border-radius: 10px;
  padding: 50px 50px;
  display: flex;
  gap: 30px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Poster = styled.img`
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: auto 0;
`;

const Text = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: scroll;

  & h2 {
    font-weight: 600;
    margin: 20px 0px;
  }
`;

const Description = styled.span`
  font-size: 18px;
  line-height: 30px;
`;
