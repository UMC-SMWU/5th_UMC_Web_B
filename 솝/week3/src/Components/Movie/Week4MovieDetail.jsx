//CSS in JS ...Styled-Components 사용
import React from 'react';
import { movies } from '../../movieDummy';
import styled from "styled-components";

function MovieDetail() {
  return (
    <DetailContainer>
      {movies.results.map((movie) => (
        <DetailOne key={movie.id} >
         
          <TitleDetail>{movie.title}</TitleDetail> 
          <OverView>{movie.overview}</OverView>
          
          </DetailOne>
      ))}
    </DetailContainer>
  );
}


  /* card에 hover가 걸리면 opacity값을 올리도록. */
  const DetailOne =styled.div` 
    width: calc(12.5% - 20px); 
    margin: 10px ;
    max-height: 385px; 
    overflow-y: auto; 
    background-color: black;
    opacity: 0;
 
  &:hover {
    opacity: 0.8;
  }
`;

  const OverView = styled.p`
   
    color: white;
    `

  const DetailContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    padding: 10px 50px 10px 50px;
    position: absolute;
  `

  const TitleDetail = styled.p`
    font-size: 16px;
    color: white;
    font-weight: 600;
    padding-left: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
  `
export default MovieDetail;
