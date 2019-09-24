import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = ({ state }) => (
  <Section>

    <Container fluid="true" className="footer-cta">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="subslab"><span>- Top Banana -</span> Web Design <strong>&amp;</strong> Development</h2>
          </Col>
          <Col lg="12">
            <Image src={"https://res.cloudinary.com/primitivedigital/image/upload/v1569317885/promo/topbanana1_zhjui2.png"} className="img-fluid" alt="Top Banana Web Design and Development" />
          </Col>
        </Row>
        <Row id="contact">
          <Col>
            <h3 className="subslab"><strong>Call 0113 314 8880</strong> for an informal no obligation chat about your project.</h3>
          </Col>
        </Row>
      </Container>
    </Container>

    <Container fluid="true" id="colophon">
      <Container>
        <Row>
        <Col lg="12">
            <p>Website design and build by <a href="https://primitivedigital.uk/">Primitive Digital</a> &copy; 2019.</p>
            <p>Web Hosting and Domains provided by <a href="https://primitivehosting.uk/">Primitive Hosting</a>.</p>
          </Col>
          </Row>
          <Row>
          <Col lg="12">
            <Image src={"https://res.cloudinary.com/primitivedigital/image/upload/v1569317124/img/ph-logo-footer_thxexg.png"} alt="Primitive Digital - Web Design &amp; Development" />
          </Col>
        </Row>
      </Container>
    </Container>

  </Section>
);

export default connect(Footer);

const Section = styled.footer``;