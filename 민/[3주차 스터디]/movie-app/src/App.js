import Movie from "./components/Movie";
import styles from "./App.module.css";
import { movies } from "./data/movieDummy.js";

function App() {
  return (
    <div className={styles.container}>
      <h1>Movie App</h1>
      <div className={styles.movies}>
        {movies.results.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
