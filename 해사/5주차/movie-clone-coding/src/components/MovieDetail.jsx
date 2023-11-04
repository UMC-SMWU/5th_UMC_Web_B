import styles from './MovieDetail.module.css';

export default function MovieDetail({ title, overview }) {
  return (
    <div className={styles.detail}>
      <p className={styles.title}>{title}</p>
      <p className={styles.overview}>{overview}</p>
    </div>
  );
}
