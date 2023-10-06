import MovieDetail from './MovieDetail';
import styles from './Movie.module.css';

export default function Movie({
  movie: { poster_path, title, vote_average, overview },
}) {
  return (
    <>
      <div className={styles.movie}>
        <MovieDetail title={title} overview={overview} />
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
          alt={title}
        />
        <div className={styles.meta}>
          <p className={styles.title}>{title}</p>
          <span>{vote_average}</span>
        </div>
      </div>
    </>
  );
}
