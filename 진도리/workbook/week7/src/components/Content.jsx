import React from "react";
import "../index.css";

const Content = (props) => {
    return (
      <div className="contentcard">
        <div className="poster_img">
          <img src={`https://image.tmdb.org/t/p/w200${props.poster_path}`} 
          alt="poster"/>
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
  
  export default Content