import styles from "./Detail.module.css";

function Detail({ title, overview }) {
  return (
    <div className={styles.container}>
      <h5>{title}</h5>
      <span>
        {overview.length >= 150 ? overview.slice(0, 150) + "..." : overview}
      </span>
    </div>
  );
}

export default Detail;
