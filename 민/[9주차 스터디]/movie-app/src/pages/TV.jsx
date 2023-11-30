import React from "react";
import styled from "styled-components";
import { tv } from "../data/tvDummy";
import Contents from "../components/Contents";

function TV() {
  return (
    <Container>
      <Box>
        {tv.results.map((tvItem) => (
          <Contents content={tvItem} key={tvItem.id} />
        ))}
      </Box>
    </Container>
  );
}

export default TV;

const Container = styled.div`
  width: 100vw;
  padding: 70px 0px;
`;

const Box = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  justify-content: center;
  gap: 24px;
`;
