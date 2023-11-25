import React from "react";
import Movie from "../components/Movie";
import movies from "../components/movieDummy";
import { useNavigate } from "react-router-dom";

const Movies = () => {
    const navigate = useNavigate();
  
    return (
      <div className="movies">
        <div className="app-container">
        {
          movies.results.map((item)=> {
            return ( 
              <div className="movie_pair_movie" onClick={() => 
                navigate(`/movies/${item.title}`,
                 {state: item.poster_path})
                }>
                <Movie className="movie_pair_movie"
                  poster_path={item.poster_path}
                  title={item.title}
                  vote_average={item.vote_average}
                />
              </div>
            )
          })
        }
      </div>
      </div>
    )
}

export default Movies;