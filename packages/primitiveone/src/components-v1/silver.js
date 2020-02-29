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

const Section = styled.section`

.footer-promo1 h5, .footer-promo2 h5 {
  font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 4rem;
}

.fancy-frame {
  padding: 12px;
  display: inline-block;
  position: relative;
  -webkit-transition: 1s ease-in-out;
  transition:         1s ease-in-out;
}
.frame {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.frame ul {
  margin: 0;
  padding: 0;
}

.footer-promo1 .fancy-frame { background: #fff; }
.footer-promo1 h5 { color: #fff;}
.footer-promo2 h5 { color: #7A9E47; }
.footer-promo2 .fancy-frame { background: #87af4e; }
.footer-promo1:hover .fancy-frame,
.footer-promo2:hover .fancy-frame {
  -webkit-transition: 1s ease-in-out;
  transition:         1s ease-in-out;
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  -webkit-animation: animatedgradient 3s ease alternate infinite;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}


.footer-promo1 {
  height: 100%;
  margin-top: 4rem;
  padding: 3rem 1rem;
  background-color: #7A9E47;
  text-align: center;
}

.footer-promo2 {
  height: 100%;
  padding: 4rem 1rem;
  background-color: ivory;
  text-align: center;
}
.footer-promo1 li {
  font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
  font-size: 1.5rem;
  line-height: 1.5;
  list-style: none;
}
.footer-promo2 li {
  font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
  font-size: 2rem;
  line-height: 2;
  list-style: none;
}

`;