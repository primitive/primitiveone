import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Link from "../pebbles/link";
import { randomWord } from "../sand/utils";
import Nav from "./nav";
//import Nav from "../navigation/navigation";

// sk-dev: random content: Warning: Text content did not match. Server: "Fruity" Client: "Fast"
//import RandomWord from "../pebbles/random-word";

const Header = ({ state }) => (
    <HeadWrapper>

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

   

      <Nav />

    </HeadWrapper>

);

export default connect(Header);


const HeadWrapper = styled.header`
color: #fff;
a {
  text-decoration: none;
  padding: 15px;
  display: block;

  &:hover {
    text-decoration: none;
  }
}

  background-color: #87af4e;
  background: url(https://primitive.press/wp-content/uploads/header/website_header@2x.jpg) #87af4e;

  background-position-x: 10%;
  background-position-x: top;
  background-repeat: no-repeat;
  background-size: cover;


  @media screen and (min-width: 576px) {
    background: none;
    background-color: #87af4e;

    header a { margin-left: 1rem; }

    .container { background-position-x: 0; }
    
    .mast {
      background: url(https://primitive.press/wp-content/uploads/header/website_header.jpg) #87af4e;
      background-position-x: 10%;
      background-position-y: top;
      background-repeat: no-repeat;
      background-size: auto;
    }
  }

@media screen and (min-width: 768px) {
  header a { margin-left: 20%; }
  h4 { font-size: 2rem; }
  .container { background-position-x: 5%; }
}

@media screen and (min-width: 992px) {
  header a { margin-left: 30%; }
  .container { background-position-x: 10%; }
}

@media screen and (min-width: 1200px) {
  header a { margin-left: 35%; }
  .container { background-position-x: 20%; }
}

`;

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