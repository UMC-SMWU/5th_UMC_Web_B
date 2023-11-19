import { useLocation, useParams } from 'react-router-dom';
import styles from './VideoDetail.module.css';

export default function VideoDetail() {
  const { title } = useParams();
  const { state: posterPath } = useLocation();

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w1280/${posterPath}`}
        alt={title}
      />
      <h2>{title}</h2>
    </div>
  );
}
