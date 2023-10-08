import React from "react";
import "../index.css";

const MovieInfo = (props) => {
    return (
      <div className="movieinfo">
        <div className="info">
          <p className="info_title">
            {props.title}
          </p>
          <p className="info_overview">
            {props.overview}
          </p>
        </div>
      </div>
    )
  }
  
  export default MovieInfo