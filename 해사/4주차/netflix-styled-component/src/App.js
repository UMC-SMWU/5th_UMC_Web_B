import { movies } from './movieDummy';
import Movie from './components/Movie/Movie';
import './App.css';

function App() {
  return (
    <section className='App'>
      {movies.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default App;
