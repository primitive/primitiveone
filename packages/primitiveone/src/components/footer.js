import React from "react";
import { connect, styled } from "frontity";
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
            <Image src={"https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317885/promo/topbanana1_zhjui2.png"} className="img-fluid" alt="Top Banana Web Design and Development" />
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
            <Image src={"https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1570374477/img/foot-primitive_xzfpum.svg"} alt="Primitive Digital - Web Design &amp; Development" />
          </Col>
        </Row>
        <Row className="kissesto">
          <Col lg="12" className="loveit">
            <Image src={"https://res.cloudinary.com/primitivedigital/image/upload/w_103,h_90,c_scale/f_auto/v1570609982/img/foot-heart_kpx4kb.svg"} alt="Highly Recommends" />
          </Col>
          <Col lg="12">
            <Image src={"https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1570379780/img/foot-wordpress_hnwztw.svg"} alt="WordPress Open source software used to create a beautiful websites, blogs and apps." title="WordPress Open source software used to create a beautiful websites, blogs and apps." />
            <span className="slab">+</span>
            <a href="https://frontity.org/">
              <Image src={"https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1570374477/img/foot-frontity_xmxm30.svg"} alt="Frontity is a free and open source framework to build super fast WordPress themes using React." title="Frontity is a free and open source framework to build super fast WordPress themes using React." />
            </a>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <p>Website design and build by <a title="Website design and build by Primitive Digital" href="https://primitivedigital.uk/">Primitive Digital</a> &copy; 2019.</p>
            <p>Web Hosting and Domains provided by <a title="Web Hosting and Domains from Primitive Hosting" href="https://primitivehosting.uk/">Primitive Hosting</a>.</p>
          </Col>
        </Row>
      </Container>

    </Container>
  </Section>
);

export default connect(Footer);

const Section = styled.footer`

  margin: 0;
  padding: 1rem 0 0;
  color: #2d2d2d;
  background: #fff;

  h5 {
    font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 4rem;
  }


  .footer-cta {

    padding: 2rem 1rem;
    background-color: #D4AEA6;
    text-align: center;

    h2 {
      padding: 2rem 0 1rem;;
      text-align: center;
      line-height: 5rem;
      color: #765751;
      font-size: 3rem;
    }
    h2 span {
      display: block;
      font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      color:  #765751;
      font-size: 5rem;
    }
    h2 strong {
      display: block;
      padding-bottom: 0;
      font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
      color: #E5D7B7;
      font-size: 4rem;
      line-height: 4rem;
    }
    h3 {
      padding: 1rem 0;
      color: #765751;
    }
    strong, h3 a {
      display: block;
      padding-bottom: 1.5rem;
      font-size: 4rem;
      color: #3B2622;
    }
    img {
      max-height: 100%;
      max-width: 100%;
      margin: 0 auto;
      border-radius: 50%;
      -webkit-transition: -webkit-transform .8s ease-in-out;
      transition:         transform .8s ease-in-out;
    }
    img:hover {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }

  }

  #colophon {

    margin-top: 0;
    padding: 1.5rem 0 1rem;
    color: #ededed;
    font-family: 'Comfortaa', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    text-align: center;
    letter-spacing: 1px;
    /* background-color: #019573; */
    background-color: #87635C;

    p {
      margin-bottom:.2rem;
      letter-spacing:1px;
    }
    a {
      color: #ededed;
    }
    a:hover {
      text-decoration: none;
      color: pink;
    }
    img {
      padding-top: 1rem;
    }

    .kissesto {
      padding: 1rem 1rem 3rem;;

      span {
        padding: 0 2rem;
        height: 90px;
        vertical-align: middle;
        color: #D4AEA6;
        font-weight: bold;
      }
      img {
        padding-top: 0;
        max-height: 90px;
        vertical-align: middle;
      }
    }
  }

  @media screen and (min-width: 576px) {
    .footer-cta h2 { font-size: 5rem; }
    .footer-cta h2 span { font-size: 4rem; line-height: 1.4;}
    .footer-cta h2 strong {font-size: 6rem; line-height: .7;}
    .footer-cta h3 strong, .footer-cta h3 a { font-size: 3rem; }
  }
  @media screen and (min-width: 768px) {

    .footer-cta h2 { font-size: 6rem; }
    .footer-cta h2 span { font-size: 5rem; line-height: 1.6;}
    .footer-cta h2 strong {font-size: 7rem; line-height: .8;}
    .footer-cta h3 strong, .footer-cta h3 a { font-size: 4rem; }

  }
  @media screen and (min-width: 992px) {

    .footer-cta h2 { font-size: 7rem; }
    .footer-cta h2 span { font-size: 6rem; line-height: 1.9;}
    .footer-cta h2 strong {font-size: 7rem; line-height: .9;}
    .footer-cta h3 strong, .footer-cta h3 a { font-size: 5rem; }
      
  }


`;