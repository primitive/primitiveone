import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Image from "@frontity/components/image";




//import SectionContainer from "./styles/section-container";

const FurryBoots = ({ state }) => {

  const { footerBg } = state.theme.colors;
  const display = state.theme.config.global.footer;
  if (!display) { return null }

  return (

      <FooterCTA bg={footerBg} role="contentinfo">
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
  );
};

export default connect(FurryBoots);

const FooterCTA = styled.section`
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