import Movie from './Components/Movie';
import {movies} from './movieDummy.js';
import './index.css'

//무비 컨테이너 담을 component 구성하기 
function App() {
  return (
    <div>
      <div className="app">
        {
          movies.results.map((item) =>{
            return(
              <Movie 
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              />
            )

          })
        }
      </div>
    </div>
  );
}

export default App;
