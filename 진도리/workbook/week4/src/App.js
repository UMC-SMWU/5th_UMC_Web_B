import Movie from "./components/Movie/Movie";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import movies from './components/movieDummy';

import styled from 'styled-components';

const AppContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    background-color: rgb(28, 28, 110);
    padding: 20px 40px 20px 40px;

    .movie_pair_movie{
      position: relative;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 20px;
    }
    
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #d6dee1;
      border-radius: 20px;
      border: 6px solid transparent;
      background-clip: content-box;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background-color: #a8bbbf;
    }
`;

function App() {
  return (
    <div className="App">
     <AppContainer>
        {
          movies.results.map((item)=> {
            return ( 
              <div className="movie_pair_movie">
                <Movie
                  poster_path={item.poster_path}
                  title={item.title}
                  vote_average={item.vote_average}
                />
                <MovieInfo
                  title={item.title}
                  overview={item.overview}
                />
              </div>
            )
          })
        }
      </AppContainer>
    </div>
  );
}

export default App;
