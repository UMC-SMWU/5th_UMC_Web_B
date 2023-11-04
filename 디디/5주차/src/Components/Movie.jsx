import Add from './Add.jsx';

const MOVIEURL = 'https://image.tmdb.org/t/p/w500';
export default function Movie({ title, poster_path, vote_average, overview }) {
  return (
    <div className="movieContainer">
      <div className="containerContent">
        <img src={MOVIEURL + poster_path} alt="포스터" />
        <div className="Info">
          <span>{title}</span>
          <span>{vote_average}</span>
          <Add overview={overview} title={title} />
        </div>
      </div>
    </div>
  );
}
