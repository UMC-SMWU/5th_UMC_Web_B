import Movie from "./components/Movie/Movie";
import { movies } from "./data/movieDummy.js";
import { Container, GlobalStyle, Movies } from "./App.style";

function App() {
  return (
    <>
      <GlobalStyle /> {/* 전역 스타일 적용 */}
      <Container>
        <h1>Movie App</h1>
        <Movies>
          {movies.results.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </Movies>
      </Container>
    </>
  );
}

export default App;
