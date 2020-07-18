import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Image from "@frontity/components/image";
import ImgLogo from "../../img/footer/primitive.svg";
import ImgHeart from "../../img/footer/heart.svg";
import ImgFrontity from "../../img/footer/frontity.svg";
import ImgWordpress from "../../img/footer/wordpress.svg";
import { heartbeat } from "../scenes/glamourmagic";

///import SectionContainer from "./styles/section-container";

const KnobblyKnees = ({ state }) => {

  const { footerBg } = state.theme.colors;
  const display = state.theme.config.global.footer;
  if (!display) { return null }

  return (
    <FooterKudos bg={footerBg} role="contentinfo">
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
  );
};

export default connect(KnobblyKnees);

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
