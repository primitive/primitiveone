import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Link from "./link";

const Header = ({ state }) => (
  <Ele>
    <Container>
      <StyledLink link="/web-design/">
        <Title>{state.frontity.title}</Title>
        <Intro className="subslab SPANKS"><span className="slab">We Make </span>Fast and Efficient</Intro>
        <Description>{state.frontity.description}</Description>
      </StyledLink>
    </Container>
  </Ele>
);

export default connect(Header);

const Ele = styled.header`
  padding: 0 1rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a {
    text-decoration: none;
    padding: 15px;
    display: block;
}
`;
const Title = styled.h2`
  color: #fff;
  font-size: 5rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px #477C16;
  margin-bottom: .5rem;
`;
const Intro = styled.p`
  color: #fff;
  font-size: 1.8rem;
  font-style: italic;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px #477C16;
  margin-bottom: .5rem;

  span {
    color: #fff;
    font-size: 1.5rem;
    font-style: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
 }
`;
const Description = styled.h4`
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px #477C16;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
