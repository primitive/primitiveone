import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col, Tabs, Tab} from "react-bootstrap";
import Link from "./link";

const Header = ({ state }) => (
    <Ele>
      <Container>
      <StyledLink link="/web-design/">
        <Title>{state.frontity.title}</Title>
        <p className="subslab"><span className="slab">We Make </span>Fast and Efficient</p>
        <Description>{state.frontity.description}</Description>
      </StyledLink>
      </Container>
    </Ele>
);

export default connect(Header);

const Ele = styled.header``;
const Title = styled.h2``;
const Description = styled.h4``;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
