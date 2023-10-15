import { Container, Description } from "./Detail.style";

function Detail({ title, overview }) {
  return (
    <Container>
      <h5>{title}</h5>
      <Description>{overview}</Description>
    </Container>
  );
}

export default Detail;
