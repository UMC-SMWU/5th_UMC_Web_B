import { tvs } from '../../tvDummy';
import Videos from '../../components/Videos/Videos';

export default function TV() {
  return <Videos videos={tvs.results} />;
}
