import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Image from "@frontity/components/image";
import ImgLogo from "../img/footer/primitive.svg";
import ImgHeart from "../img/footer/heart.svg";
import ImgFrontity from "../img/footer/frontity.svg";
import ImgWordpress from "../img/footer/wordpress.svg";
import { heartbeat } from "./scenes/glamourmagic";

import SectionContainer from "./styles/section-container";

import BackToTop from "./pebbles/backtotop";
import Credits from "./pebbles/credits";

const Footer = ({ state }) => {

  const { footerBg } = state.theme.colors;
  const display = state.theme.config.global.footer;
  if (!display) { return null }

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
      <FooterColophon>
        <Container>
          <Row>
            <Col className="text-center">
              <Credits />
            </Col>
          </Row>
          <Row>
            <Col>
              <BackToTop />
            </Col>
          </Row>
        </Container>
      </FooterColophon>
    </SiteFooter>
  );
};

export default connect(Footer);



const SiteFooter = styled.footer`
  background-color: ${(props) => props.bg};
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



