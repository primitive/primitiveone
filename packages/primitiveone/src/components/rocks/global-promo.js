import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

const Promo = ({ state }) => (
  <section>
    <Container>
      <Row>
        <Content>
          <PreText>{state.theme.config.global.promo.pretext}</PreText>
          <Text>{state.theme.config.global.promo.text}</Text>
        </Content>
      </Row>
    </Container>
  </section>
);

export default connect(Promo);

const Content = styled(Col)`
 text-align: center;
`;

const PreText = styled.h6`
  padding: 2rem;
`;
const Text = styled.h6`
  padding: 0 2rem 2rem;
`;
