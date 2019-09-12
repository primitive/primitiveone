import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Header = ({ state }) => (
    <Container>
      <StyledLink link="/">
        <Title>{state.frontity.title}</Title>
      </StyledLink>
      <Description>{state.frontity.description}</Description>
    </Container>
);

export default connect(Header);

const Container = styled.header``;

const Title = styled.h2`
  margin: 0 0 0 30%;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0 0 0 30%;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
