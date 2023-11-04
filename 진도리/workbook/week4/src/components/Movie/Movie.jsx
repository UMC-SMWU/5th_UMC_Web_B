import React from "react";
<<<<<<< HEAD
=======
import "../../index.css";
>>>>>>> 723bab8dc7ccaf066fb9a1be7b1c93e443a563c9
import * as S from './Movie.style';

const Movie = (props) => {
    return (
<<<<<<< HEAD
=======
      /*img 안 불러지는 문제 (해결못함)*/
>>>>>>> 723bab8dc7ccaf066fb9a1be7b1c93e443a563c9
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