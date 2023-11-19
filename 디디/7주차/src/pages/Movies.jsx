import React from "react";
import Movie from "../../../5th_UMC_Web_B/디디/7주차/src/Components/Movie.jsx";
import { movies } from "../../../5th_UMC_Web_B/디디/7주차/src/movieDummy.js";
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
