import { Detail, Title, Overview } from './MovieDetail.style';

export default function MovieDetail({ title, overview }) {
  return (
    <Detail>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </Detail>
  );
}
