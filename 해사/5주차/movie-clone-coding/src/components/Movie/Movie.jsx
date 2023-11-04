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
  return (
    <div className={styles.movie}>
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
