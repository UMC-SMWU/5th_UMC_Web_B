import React from 'react';
import { tv as dummyTVData } from '../tvDummy'; 
import styled from "styled-components";

const Tv = () => {
  return (
    <div className="movieBox">
      <CardContainer>
      {dummyTVData.results.map((show)  => (
          <CardOne key={Tv.id} >
            <Poster
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
              alt={show.name}
            />
            <Inform>
              <Title>{show.name}</Title>
              <VoteAverage>{show.vote_average}</VoteAverage>
            </Inform>
          </CardOne>
        ))}
      </CardContainer>

    </div>
  );
};

const CardContainer = styled.div`

  display: flex;
  flex-wrap: wrap; 
  background-color: rgb(79, 79, 109);
  padding: 10px 50px 10px 50px;
  `
const CardOne = styled.div`
  width: calc(12.5% - 20px); 
  margin: 10px ; 
  position: relative;
  cursor: pointer;
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
  
export default Tv;