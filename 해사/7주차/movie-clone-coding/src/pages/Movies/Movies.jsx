import { movies } from '../../movieDummy';
import Videos from '../../components/Videos/Videos';

export default function Movies() {
  return <Videos videos={movies.results} />;
}
