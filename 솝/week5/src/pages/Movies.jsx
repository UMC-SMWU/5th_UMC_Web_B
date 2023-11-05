import React from 'react';
import { movies } from '../movieDummy';
import styled from "styled-components";

function Movie() {
  return (
    <div>

    <CardContainer>        
      {movies.results.map((movie) => (
        <>
        <CardOne key={movie.id} >
          
          <Poster
          src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} 
          alt={movie.title} />
          <Inform>
          <Title>{movie.title}</Title>
          <VoteAverage>{movie.vote_average}</VoteAverage>
          </Inform>
          
        </CardOne>
                <DetailOne key={movie.id} >
         
                <TitleDetail>{movie.title}</TitleDetail> 
                <OverView>{movie.overview}</OverView>
                
                </DetailOne>
                </>
      ))}
      
    </CardContainer>  

    </div>
  );
}
//------------호버됐을 때 올라오는 디테일부분-----------
const DetailOne =styled.div` 
position: absolute;
top: 0;
left: 0;
width: calc(12.5% - 20px); 
 
max-height: 385px; 
overflow-y: auto; 
background-color: black;
opacity: 0;

&:hover {
opacity: 0.8;
}
`

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
//-----------원래 화면창에 뜨는 부분--------
const CardContainer = styled.div`

  display: flex;
  flex-wrap: wrap; 
  background-color: rgb(79, 79, 109);
  padding: 10px 50px 10px 50px;
  position: relative;
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
