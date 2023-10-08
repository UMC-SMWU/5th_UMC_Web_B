import React from "react";
import "../index.css";

const Movie = (props) => {
    return (
      /*img 안 불러지는 문제 (해결못함)*/
      <div className="moviecard">
        <div className="poster_img">
          <img src={`https://image.tmdb.org/t/p/w200${props.poster_path}`} alt="poster"/>
        </div>
        <div className="text">
          <div className="text_title">
            {props.title}
          </div>
          <div className="text_rating">
            {props.vote_average}
          </div>
        </div>
      </div>
    )
  }
  
  export default Movie