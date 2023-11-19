import Video from '../Video/Video';
import styles from './Videos.module.css';

export default function Videos({ videos }) {
  return (
    <section className={styles.videos}>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
}
