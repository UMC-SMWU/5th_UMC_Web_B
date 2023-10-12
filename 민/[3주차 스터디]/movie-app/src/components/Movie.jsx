import { useState } from "react";
import Detail from "./Detail";
import styles from "./Movie.module.css";

function Movie({ movie }) {
  const [detailOpen, setDetailOpen] = useState(false);
  return (
    <div
      className={styles.container}
      onMouseOver={() => setDetailOpen(true)}
      onMouseOut={() => setDetailOpen(false)}
    >
      <img
        key={movie.id}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path} `}
        height="230"
        alt={movie.title}
      />
      <div className={styles.title}>
        <span>{movie.title}</span>
        <span>{movie.vote_average}</span>
      </div>
      {detailOpen && <Detail title={movie.title} overview={movie.overview} />}
    </div>
  );
}

export default Movie;
