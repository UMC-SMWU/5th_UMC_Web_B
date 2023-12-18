import { useNavigate } from "react-router-dom";

const URL = "https://image.tmdb.org/t/p/w500";
export default function Tv({ tv }) {
  const navigate = useNavigate();
  const onClickImg = () => {
    navigate(`/tv/${tv.name}`, {
      state: tv,
    });
  };

  return (
    <div className="Container">
      <div className="containerContent">
        <img src={URL + tv.poster_path} alt={tv.name} onClick={onClickImg} />
        <div className="Info">
          <span>{tv.name}</span>
          <span>{tv.vote_average}</span>
        </div>
      </div>
    </div>
  );
}
