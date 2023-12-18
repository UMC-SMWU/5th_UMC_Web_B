import React from "react";
import Movie from "../Components/Movie.jsx";
import { movies } from "../movieDummy.js";
import "../MovieApp.css";

export default function Movies() {
  return (
    <div className="app">
      {movies.results.map((movie) => {
        return (
          <div>
            <Movie movie={movie} key={movie.id} />
          </div>
        );
      })}
    </div>
  );
}
