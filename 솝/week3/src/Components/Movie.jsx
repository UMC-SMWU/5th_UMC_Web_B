import React from 'react';
import { movies } from '../movieDummy';
import '../index.css';
import MovieDetail from './MovieDetail';

function Movie() {
  return (
    <div>
    <MovieDetail/>
    <div className='card-container'>
        
      {movies.results.map((movie) => (
        <div key={movie.id} className='card-one' >
          
          <img className='poster'
          src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} 
          alt={movie.title} />
          <div className='inform'>
          <p className='title'>{movie.title}</p>
          <p className='vote_average'>{movie.vote_average}</p>
          </div>
          
        </div>
      ))}

    </div>
    </div>
  );
}

export default Movie;
