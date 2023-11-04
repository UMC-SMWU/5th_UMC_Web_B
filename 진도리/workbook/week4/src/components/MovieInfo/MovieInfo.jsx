import React from "react";
import * as H from './MovieInfo.style';

const MovieInfo = (props) => {
    return (
      <H.MovieInfoCard>
        <H.Info>
          <H.InfoTitle>
            {props.title}
          </H.InfoTitle>
          <H.InfoOverview>
            {props.overview}
          </H.InfoOverview>
        </H.Info>
      </H.MovieInfoCard>
    )
  }
  
  export default MovieInfo