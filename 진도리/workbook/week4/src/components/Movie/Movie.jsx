import React from "react";
import * as S from './Movie.style';

const Movie = (props) => {
    return (
      <S.MovieCard>
        <div className="poster_img">
          <img src={`https://image.tmdb.org/t/p/w200${props.poster_path}`} alt="poster"/>
        </div>
        <S.Text>
          <div className="text_title">
            {props.title}
          </div>
          <div className="text_rating">
            {props.vote_average}
          </div>
        </S.Text>
      </S.MovieCard>
    )
  }
  
  export default Movie