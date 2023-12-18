import Movie from './Movie.jsx';
import { movies } from '../movieDummy.js';

//무비 컨테이너 담을 component 구성하기
function Add() {
  return (
    <div>
      <div className="add">
        {movies.results.map((item) => {
          return <Movie overview={item.overview} />;
        })}
      </div>
    </div>
  );
}

export default Add;
