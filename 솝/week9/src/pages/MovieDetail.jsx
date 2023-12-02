import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function MovieDetail() {
  // URL로 넘겨 받은 title
  const { title } = useParams();

  // 네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
  // 이미지, 별점 등의 모든 정보들
  const { state } = useLocation();
  console.log(title);
  console.log(state);

  return (
    <div>
      
      {state && (
        <div>
          {state.movie.poster_path ? (
            <img style={{width: 100, height: 200}}
              src={`https://image.tmdb.org/t/p/w1280/${state.movie.poster_path}`}
              alt={state.movie.title}
            />
          ) : (
            <p>No Image Available</p>
          )}
          <p>Vote Average: {state.movie.vote_average}</p>
          
        </div>
      )}
      <h2>{title}</h2>
    </div>
  );
}
