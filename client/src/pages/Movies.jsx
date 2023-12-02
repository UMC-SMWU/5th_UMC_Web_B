import React from "react";
import Content from "../components/Content";
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
              <div onClick={() => 
                navigate(`/movies/${item.title}`,
                 {state: item.poster_path})
                }>
                <Content
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