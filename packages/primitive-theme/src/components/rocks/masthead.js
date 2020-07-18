import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Link from "../pebbles/link";
import { randomWord } from "../sand/utils";

import facepaint from 'facepaint'

const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 720px)'
])

// sk-dev: random content: Warning: Text content did not match. Server: "Fruity" Client: "Fast"
//import RandomWord from "../pebbles/random-word";

const MastHead = ({ state }) => (
      <Container className="mast">
        <Row className="justify-content-end">
          <Col className="col-11 col-md-7">
            <StyledLink link="/web-design/">
              <Title className="mb-1">{state.frontity.title}</Title>
              <Intro className="subslab"><span className="slab">We Make </span>{ randomWord() }</Intro>
              <Description>{state.frontity.description}</Description>
            </StyledLink>
          </Col>
        </Row>
      </Container>
);

export default connect(MastHead);


const Title = styled.h2`
  color: #fff;
  font-size: 5rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px #477C16;
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