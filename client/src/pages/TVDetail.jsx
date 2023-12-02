import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const TVDetail = () => {
  const { title } = useParams();
  const { state: poster_path } = useLocation();
  console.log(title);

  return (
    <div className='contentDetail'>
      <div className='contentDetail_container'>
        <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} 
          alt="poster"/>
        <div className='contentDetail_title'>{title}</div>
      </div>
    </div>
  )
}

export default TVDetail