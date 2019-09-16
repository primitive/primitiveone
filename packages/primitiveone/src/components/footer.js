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
            <h2 className="subslab"><span>- Top Banana -</span> Web Design <span>&amp;</span> Development </h2>
          </Col>
          <Col lg="12">
            <Image src={"https://primitivedigital.uk/img/promo/topbanana1.png"} className="img-fluid" alt="Top Banana Web Design and Development" />
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
            <p>Website design and build by Primitive Digital &copy; 2019.</p>
            <p>Web Hosting and Domains provided by Primitive Hosting.</p>
          </Col>
          </Row>
          <Row>
          <Col lg="12">
            <Image src={"https://primitivehosting.uk/images/ph-logo-footer.png"} alt="Primitive Digital - Web Design &amp; Development" />
          </Col>
        </Row>
      </Container>
    </Container>

  </Section>
);

export default connect(Footer);

const Section = styled.footer``;