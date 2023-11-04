import { movies } from '../../movieDummy';
import Movie from '../../components/Movie/Movie';
import styles from './Movies.module.css';

export default function Movies() {
  return (
    <section className={styles.movies}>
      {movies.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
