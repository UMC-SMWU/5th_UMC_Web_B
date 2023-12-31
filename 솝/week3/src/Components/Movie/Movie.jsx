import React from 'react';
import { movies } from '../../movieDummy';
import Week4MovieDetail from './Week4MovieDetail';
import styled from "styled-components";

function Movie() {
  return (
    <div>
    <Week4MovieDetail/>
    <CardContainer>        
      {movies.results.map((movie) => (
        <CardOne key={movie.id} >
          
          <Poster
          src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} 
          alt={movie.title} />
          <Inform>
          <Title>{movie.title}</Title>
          <VoteAverage>{movie.vote_average}</VoteAverage>
          </Inform>
          
        </CardOne>
      ))}

    </CardContainer>  
    </div>
  );
}
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  background-color: rgb(79, 79, 109);
  padding: 10px 50px 10px 50px;
  `
const CardOne = styled.div`
  width: calc(12.5% - 20px); 
  margin: 10px ; 
  `

const Poster = styled.img`
  width: 100%;
  height: 280px;
  margin: 0;
  `
const Inform = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(118, 118, 160);
  height: 100px;
  `

  const Title = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 600;
  padding-left: 10px;
  `

  const VoteAverage = styled.p`
  color: white;
  padding-right: 10px;
  `

export default Movie;
