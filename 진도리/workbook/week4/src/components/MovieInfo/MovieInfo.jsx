import React from "react";
<<<<<<< HEAD
=======
import "../../index.css";
>>>>>>> 723bab8dc7ccaf066fb9a1be7b1c93e443a563c9
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