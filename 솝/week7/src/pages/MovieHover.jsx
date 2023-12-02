import React from 'react'
import { movies } from '../movieDummy';
import styled from "styled-components";

export default function MovieDetail({movie}) {
  return (
        
        <DetailOne key={movie.id} >
         
            <TitleDetail>{movie.title}</TitleDetail> 
            <OverView>{movie.overview}</OverView>
         
         </DetailOne>


  )
}

//------------호버됐을 때 올라오는 디테일부분----- //부모요소가 relative라서 딱 맞게 가능!
const DetailOne =styled.div`
position: absolute;
top: 0;
left: 0;
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

const TitleDetail = styled.p`
font-size: 16px;
color: white;
font-weight: 600;
padding-left: 10px;
padding-top: 30px;
padding-bottom: 30px;
`