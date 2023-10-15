import MovieDetail from '../MovieDetail/MovieDetail';
import { MovieItem, Poster, Meta, Title } from './Movie.style';

export default function Movie({
  movie: {
    poster_path: posterPath,
    title,
    vote_average: voteAverage,
    overview,
  },
}) {
  return (
    <MovieItem>
      <MovieDetail title={title} overview={overview} />
      <Poster
        src={`https://image.tmdb.org/t/p/w1280/${posterPath}`}
        alt={title}
      />
      <Meta>
        <Title>{title}</Title>
        <span>{voteAverage}</span>
      </Meta>
    </MovieItem>
  );
}
