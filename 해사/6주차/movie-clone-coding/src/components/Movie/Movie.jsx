import { useNavigate } from 'react-router-dom';
import MovieDetail from '../MovieDetail/MovieDetail';
import styles from './Movie.module.css';

export default function Movie({
  movie: {
    poster_path: posterPath,
    title,
    vote_average: voteAverage,
    overview,
  },
}) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/movie/${title}`, { state: posterPath });
  };

  return (
    <div className={styles.movie} onClick={handleClick}>
      <MovieDetail title={title} overview={overview} />
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w1280/${posterPath}`}
        alt={title}
      />
      <div className={styles.meta}>
        <p className={styles.title}>{title}</p>
        <span>{voteAverage}</span>
      </div>
    </div>
  );
}
