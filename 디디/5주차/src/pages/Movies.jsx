import React from 'react';
import Movie from '../Components/Movie';
import { movies } from '../movieDummy.js';
import '../MovieApp.css';

export default function Movies() {
  return (
    <div className="app">
      {movies.results.map((movie) => {
        return (
          <div>
            <Movie
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          </div>
        );
      })}
    </div>
  );
}
