import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

function Contents({ content }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = pathname === "/tv" ? content.name : content.title;

  const onClick = () => {
    navigate(`/contentDetail/${title}`, {
      state: content,
    });
  };

  return (
    <Container onClick={onClick}>
      <img
        key={content.id}
        src={`https://image.tmdb.org/t/p/original/${content.poster_path} `}
        height="230"
        alt={title}
      />
      <Title>
        <span>{title}</span>
        <span>{content.vote_average}</span>
      </Title>
    </Container>
  );
}

export default Contents;

const Container = styled.div`
  width: 150px;
  height: 280px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  overflow-x: hidden;
  border-radius: 5px;
  cursor: pointer;

  /* 마우스 올렸을 때 확대 모션 */
  &:hover {
    transform: scale(1.07);
    transition: transform 0.3s ease-in-out;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  box-sizing: border-box;
  font-weight: 500;
  color: #1d1d1d;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  gap: 5px;
`;
