import Movie from "./components/Movie";
import MovieInfo from "./components/MovieInfo";
import movies from './components/movieDummy';
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item)=> {
            return ( 
              /*컴포넌트 태그를 연이어 쓰기 위해서는 반드시 div로 묶어주어야 함!
              ->안 그럼 root요소로 2개 이상의 태그가 들어가기 때문*/
              /*div 클래스명을 바꾸면 에러남... 왜..?*/
              <div className="movie_pair_movie">
                <Movie className="movie_pair_movie"
                  poster_path={item.poster_path}
                  title={item.title}
                  vote_average={item.vote_average}
                />
                <MovieInfo className="movie_pair_info"
                  title={item.title}
                  overview={item.overview}
                />
                {/* <div className="box1">
                  box1dfadfasdnafiomsdfoausifdos
                </div> */}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
