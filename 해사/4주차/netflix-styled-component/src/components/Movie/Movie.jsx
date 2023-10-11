import MovieDetail from '../MovieDetail/MovieDetail';
import { MovieItem, Poster, Meta, Title } from './Movie.style';

export default function Movie({
  movie: { poster_path, title, vote_average, overview },
}) {
  return (
    <MovieItem>
      <MovieDetail title={title} overview={overview} />
      <Poster
        src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
        alt={title}
      />
      <Meta>
        <Title>{title}</Title>
        <span>{vote_average}</span>
      </Meta>
    </MovieItem>
  );
}
