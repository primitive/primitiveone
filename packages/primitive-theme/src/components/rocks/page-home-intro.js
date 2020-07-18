import React from "react";
import { styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

const Intro = (props) => {

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <Title><span>Integrated </span>Digital Design, Development <span>&amp;</span> Marketing</Title>
            <SubTitle>
              <span>- </span> Pretty, Sexy, Webby, Tecchie Stuff <span> -</span>
            </SubTitle>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;

const Title = styled.h1`
  margin: 3.5rem 0 8px;
  font-size: 2rem;
  letter-spacing: 0;
  text-align: center;
  color: rgba(12, 17, 43);

  span {
    display: block;
    font-size: 2rem;
    color: #87af4e;
  }
  span:nth-of-type(2) {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
    font-size: 3rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 4rem;
    span { font-size: 3rem; }
    span:nth-of-type(2) { font-size: 5rem; }
  }
  @media screen and (min-width: 992px) {
    font-size: 5rem;
    span { font-size: 3.5rem; }
    span:nth-of-type(2) { font-size: 6rem; }
  }

`;

const SubTitle = styled.p`
  padding: 3rem;
  font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 3rem;
  text-align: center;

  span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 3rem;
    span {display: inline-block;}
  }
  @media screen and (min-width: 992px) {
    font-size: 3.5rem;
  }
`;
