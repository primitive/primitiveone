import React from "react";
import { styled } from "frontity";
import Loader from "react-spinners/ScaleLoader";

const Loading = () => (
  <Container className="post">
    <Loader
      color="rgba(12, 17, 43, 0.3)"
      radius={0}
      margin="3px"
      width={4}
      height={24}
    />
  </Container>
);

export default Loading;

const Container = styled.div`
  padding: 4rem;
  text-align: center;

  & > * {
    margin-top: 24px;
  }

`;
