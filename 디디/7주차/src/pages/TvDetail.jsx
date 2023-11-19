import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
const URL = 'https://image.tmdb.org/t/p/w500';

export default function TvDetail() {
  const { name } = useParams();
  const { state } = useLocation();
  console.log(name);
  console.log(state);
  return (
    <div className="detailContainer">
      <img src={URL + state.poster_path} alt={name} />
      <div>{name}</div>
    </div>
  );
}
