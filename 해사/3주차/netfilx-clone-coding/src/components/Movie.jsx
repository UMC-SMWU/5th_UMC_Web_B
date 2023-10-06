import styles from './Movie.module.css';

export default function Movie({ movie: { poster_path, title, vote_average } }) {
  return (
    <div className={styles.movie}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
        alt={title}
      />
      <div className={styles.meta}>
        <p className={styles.title}>{title}</p>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}
