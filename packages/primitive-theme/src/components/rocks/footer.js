import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Image from "@frontity/components/image";
import ImgLogo from "../../img/footer/primitive.svg";
import ImgHeart from "../../img/footer/heart.svg";
import ImgFrontity from "../../img/footer/frontity.svg";
import ImgWordpress from "../../img/footer/wordpress.svg";
import { heartbeat } from "../scenes/glamourmagic";

const Footer = ({ state }) => {

  const display = state.theme.config.global.footer;
  if (!display) { return null }

  return (
    <StyledFooter>

      <FooterCTA>
        <Container>

          <Row>
            <Col>
              <h2 className={display.fontfamily}>
                <span>{display.text1}</span>
                {display.text2}
                <strong>{display.text3}</strong>
                {display.text4}
              </h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <Image
                src={"https://primitive.press/wp-content/uploads/promo/topbanana1.png"}
                alt="Top Banana Web Design and Development"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className={display.fontfamily}>
                <strong>{display.contact.info}</strong>
                {display.contact.prompt}
              </h3>
            </Col>
          </Row>

        </Container>
      </FooterCTA>


      <FooterKudos>
        <Container>

          <Row>
            <Col>
              <Image
                src={ImgLogo}
                alt="Primitive Digital - Web Design &amp; Development" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Image
                className="loveit"
                src={ImgHeart}
                alt="Primitive Digital Highly Recommends "
              />
            </Col>
          </Row>

          <KissesTo>

            <Col>
              <Image
                src={ImgWordpress}
                alt="WordPress Open source software used to create a beautiful websites, blogs and apps."
                title="WordPress Open source software used to create a beautiful websites, blogs and apps."
              />

              <span className="slab">+</span>

              <a href="https://frontity.org/">
                <Image
                  src={ImgFrontity}
                  alt="Frontity is a free and open source framework to build super fast WordPress themes using React."
                  title="Frontity is a free and open source framework to build super fast WordPress themes using React."
                />
              </a>
            </Col>

          </KissesTo>

        </Container>
      </FooterKudos>

      <FooterColophon>
        <Container>
          <Row>
            <Col>
              <p>Website design and build by <a title="Website design and build by Primitive Digital" href="https://primitivedigital.uk/">Primitive Digital</a> &copy; 2020.</p>
              <p>Web Hosting and Domains provided by <a title="Web Hosting and Domains from Primitive Hosting" href="https://primitivehosting.uk/">Primitive Hosting</a>.</p>
            </Col>
          </Row>
        </Container>
      </FooterColophon>

    </StyledFooter>
  )
};

export default connect(Footer);

const StyledFooter = styled.footer`
  h5 {
    font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 4rem;
  }
`;

const FooterCTA = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #D4AEA6;
  text-align: center;

  h2 {
    padding: 2rem 0 1rem;;
    text-align: center;
    line-height: 5rem;
    color: #765751;
    font-size: 3rem;

    span {
      display: block;
      font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      color:  #765751;
      font-size: 5rem;
    }

    strong {
      display: block;
      padding-bottom: 0;
      font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
      color: #E5D7B7;
      font-size: 4rem;
      line-height: 4rem;
    }

  }

  h3 {
    padding: 1rem 0;
    color: #765751;
  }

  strong,
  h3 a {
    display: block;
    padding-bottom: 1.5rem;
    font-size: 4rem;
    color: #3B2622;
  }

  img {
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
    border-radius: 50%;

    transition: transform .8s ease-in-out;

    &:hover {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 576px) {
    h2 { font-size: 5rem; }
    h2 span { font-size: 4rem; line-height: 1.4;}
    h2 strong {font-size: 6rem; line-height: .7;}
    h3 strong, h3 a { font-size: 3rem; }
  }

  @media screen and (min-width: 768px) {
    h2 { font-size: 6rem; }
    h2 span { font-size: 5rem; line-height: 1.6;}
    h2 strong {font-size: 7rem; line-height: .8;}
    h3 strong, h3 a { font-size: 4rem; }
  }

  @media screen and (min-width: 992px) {
    h2 { font-size: 7rem; }
    h2 span { font-size: 6rem; line-height: 1.9;}
    h2 strong {font-size: 7rem; line-height: .9;}
    h3 strong, h3 a { font-size: 5rem; }
  }
`;

const FooterKudos = styled.div`
  padding-top: 3.5rem;
  padding-bottom: 2rem;
  background-color: #87635C;
  text-align: center;

  img {
    margin: 10px auto;
    max-width: 30%;
    max-height: 140px;
  }

  &:hover .loveit {
    animation: ${heartbeat} 1s infinite;
  }
`;

const KissesTo = styled(Row)`
  padding-top: 2rem;
  
  span {
    padding: 0 2rem;
    height: 90px;
    vertical-align: middle;
    color: #D4AEA6;
    font-weight: bold;
  }

  img {
    display: inline-block;
    margin: 0;
    max-height: 90px;
    justify-content: center;
    justify-items: center;

    &:first-of-type {
      height: 90px;
    }

    &:last-of-type {
      height: 80px;
    }
  }

`;

const FooterColophon = styled.div`
  margin-top: 0;
  padding: 3rem 0 1rem;
  background-color: #87635C;
  background: linear-gradient(to bottom,  #87635c 60%,#7b5a54 100%);

  color: #D4AEA6;
  font-family: 'Comfortaa', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
  text-align: center;
  letter-spacing: 1px;
  
  p {
    margin-bottom: .2rem;
    letter-spacing:1px;
  }

  a { color: #ededed; }
  a:hover { color: pink; text-decoration: none; }



`;
