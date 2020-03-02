import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

const Promo = ({ state }) => {

  const display = state.theme.config.global.promo;
  if (!display) {return null}

  return (
    <section>
      <Container>
        <Row>
          <Content>
            <PreText>{display.pretext}</PreText>
            <Text>{display.text}</Text>
          </Content>
        </Row>
      </Container>
    </section>
  )
};

export default connect(Promo);

const Content = styled(Col)`
 text-align: center;
`;

const PreText = styled.h6`
  padding: 2rem;
`;
const Text = styled.p`
  padding: 0 2rem 2rem;
`;
