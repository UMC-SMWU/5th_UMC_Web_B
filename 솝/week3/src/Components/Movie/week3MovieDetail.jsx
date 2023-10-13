import React from 'react';
import { movies } from '../../movieDummy';
import '../index.css';

function MovieDetail() {
  return (
    <div className='detail-container'>
      {movies.results.map((movie) => (
        <div key={movie.id} className='detail-one' >
         
          <p className='title_detail'>{movie.title}</p>
          <p className='overview'>{movie.overview}</p>
          
        </div>
      ))}
    </div>
  );
}

export default MovieDetail;
