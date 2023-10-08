
const MOVIEURL='https://image.tmdb.org/t/p/w500'
export default function Movie({title, poster_path, vote_average}){
    return (
      <div className='movieContainer' >
            <img src={MOVIEURL+poster_path} alt="포스터"/>
            <div className='Info'>
                <span>{title}</span>
                <span>{vote_average}</span>
            </div>

      </div>
    )
  }
  
