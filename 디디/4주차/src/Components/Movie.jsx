
import Add from './Add';
import * as C from './Movie.style'; 

const MOVIEURL='https://image.tmdb.org/t/p/w500'
export default function Movie({title, poster_path, vote_average, overview}){
    return (
      <C.Moviecontainer>
            <C.Img src={MOVIEURL+poster_path} alt="포스터"/>
            <C.Info>
                <C.Span>{title}</C.Span>
                <C.Span>{vote_average}</C.Span>
                <Add
                overview={overview}
                title={title}
                />
            </C.Info>

      </C.Moviecontainer>
    )
  }
  
