import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col, Image } from "react-bootstrap";

const Silver = ({ state }) => (
  <Section>
    <Container fluid="true" className="footer-promo1">
      <Container>
        <Row>
          <Col>
            <div className="fancy-frame">
              <Image src={"https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317886/promo/wantawebsite_square_q9szc7.jpg"} className="img-fluid" alt="Want a Website? We make Websites." />
            </div>
          </Col>
          <Col lg="6">
            <div className="frame">
              <a link="/">
                <h5>We Make Websites</h5>
                <ul>
                  <li>Web Sites, CMS, CRM and Blogs.</li>
                  <li>Fully Editable Content.</li>
                  <li>Online shops and Progressive Web Apps.</li>
                  <li>API's and application integration</li>
                  <li>Mobile friendly and responsive</li>
                  <li>Google Analytics</li>
                  <li>High tech, low cost, no hassle</li>
                  <li>Excellence as standard &amp; satisfaction guaranteed</li>
                </ul>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>

    <Container fluid="true" className="footer-promo2">
      <Container>
        <Row>
          <Col lg="6">
            <div className="fancy-frame">
              <Image src={"https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317885/promo/selfiemonkey_square_b6ivxg.jpg"} className="img-fluid" alt="Want a Website? We make Websites." />
            </div>
          </Col>
          <Col lg="6">
            <div className="frame">
              <a link="/">
                <h5>We Help Startups</h5>
                <ul>
                  <li>Get a custom built Website</li>
                  <li>Plus Logo design</li>
                  <li>And business card design</li>
                  <li>Easy, peasy chimpanzizi!</li>
                </ul>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </Section>
);

export default connect(Silver);

const Section = styled.section``;