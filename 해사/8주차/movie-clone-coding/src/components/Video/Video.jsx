import { useNavigate } from 'react-router-dom';
import styles from './Video.module.css';

export default function Video({
  video: {
    poster_path: posterPath,
    title,
    name,
    vote_average: voteAverage,
    overview,
  },
}) {
  const videoTitle = title ?? name;
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/${title ? 'movie' : 'tv'}/${videoTitle}`, { state: posterPath });
  };

  return (
    <div className={styles.video} onClick={handleClick}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w1280/${posterPath}`}
        alt={title}
      />
      <div className={styles.meta}>
        <p className={styles.title}>{videoTitle}</p>
        <span>{voteAverage}</span>
      </div>
    </div>
  );
}
