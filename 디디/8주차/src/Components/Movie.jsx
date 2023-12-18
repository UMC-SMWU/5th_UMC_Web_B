import { useNavigate } from 'react-router-dom';

const URL = 'https://image.tmdb.org/t/p/w500';
export default function Movie({ movie }) {
  const navigate = useNavigate();
  const onClickImg = () => {
    navigate(`/movie/${movie.title}`, {
      state: movie,
    });
  };

  return (
    <div className="Container">
      <div className="containerContent">
        <img
          src={URL + movie.poster_path}
          alt={movie.title}
          onClick={onClickImg}
        />
        <div className="Info">
          <span>{movie.title}</span>
          <span>{movie.vote_average}</span>
        </div>
      </div>
    </div>
  );
}
