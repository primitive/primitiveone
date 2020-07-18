import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Frame from "../pebbles/frame";
import Image from "@frontity/components/image";
import CTA from "./button-fancy";
import { jump, animatedgradient, stripedbg } from "../scenes/glamourmagic";

const Bronze = ({ state }) => {

  const display = state.theme.config.homepage.bronzeConfig;
  //console.log("@page-home-bronze: state.theme", state.theme.colors);

  return (
    <StyledSection>

      <PromoOne className="footer-promo1">

        <Container>
          <Row>

            <Col lg="6" className="nip">
              <StyledFrame className={display.imageFrame1} link="/">

                <Image
                  alt={display.title1}
                  src={display.imagesrc1}
                  className={"img-fluid"}
                //srcSet={srcset}
                />

              </StyledFrame>
            </Col>

            <Col lg={6}>
              <StyledFrame className={display.listFrame1} link="/">
                <TitleOne>{display.title1}</TitleOne>
                <ul>
                  {
                    display.list1.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))
                  }
                </ul>
              </StyledFrame>
            </Col>

          </Row>
          <Row>
            <Col className="align-content-center pt-5 pb-0">
              <CTA
                text="Find out More"
                link="/web-design/"
                colors={[state.theme.colors.coal, state.theme.colors.white, state.theme.colors.brightlime]}
              />
            </Col>
          </Row>
        </Container>

      </PromoOne>

      <PromoTwo className="footer-promo2">

        <Container>
          <Row>

            <Col lg={6} className="nip">
              <StyledFrame className={display.imageFrame2} link="/">

                <Image
                  alt={display.title2}
                  src={display.imagesrc2}
                  className={"img-fluid"}
                //srcSet={srcset}
                />

              </StyledFrame>
            </Col>

            <Col lg={6}>

              <StyledFrame className={display.listFrame2} link={display.link2}>
                <TitleTwo>{display.title2}</TitleTwo>
                <ul>
                  {
                    display.list2.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))
                  }
                </ul>
              </StyledFrame>

            </Col>

          </Row>
          <Row>
            <Col className="align-content-center pt-5 pb-3">
              <CTA
                text="Find out More"
                link={display.link2}
                colors={[state.theme.colors.coal, state.theme.colors.white, state.theme.colors.brightlime]}
              />
            </Col>
          </Row>
        </Container>

      </PromoTwo>

    </StyledSection>
  )
};

export default connect(Bronze);

// refine
// https://stackoverflow.com/questions/48713421/target-child-element-styled-components

const StyledSection = styled.section`

  border: none;
  background-color: #7a9e47;

  .nip {
    text-align: center;
  }
  
  .fancy-frame {
    margin: 2rem auto;
    padding: 12px;
    display: inline-block;
    position: relative;
    transition: 1s ease-in-out;
  }

  .frame {
    padding-top: 2rem;
    padding-bottom: 2.5rem;
    text-align: center;

    ul {
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (min-width: 992px) {
    .nip {
      text-align: right;
    }
    .fancy-frame { 
      margin-top: 4rem; 
    }
    .frame { 
      margin-top: 1rem; 
      text-align: left;
    }
  }

`;

const TitleOne = styled.h5`
  font-size: 4.5rem;
  font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: ivory;
`;

const TitleTwo = styled.h5`
  font-size: 3rem;
  font-family: 'Playfair Display';
  color: #7A9E47;
  letter-spacing: -1px;
`;

const StyledFrame = styled(Frame)`
  a { &:hover { text-decoration: none; } }
`;

const PromoOne = styled.div`
  margin-top: 3rem;
  padding: 4rem 1rem;
  background-color: #7a9e47;
  background: linear-gradient(to bottom,  #7a9e47 52%,#5e822c 100%); 
  border: none;

  .fancy-frame { 
    background: linear-gradient(
      -45deg, 
      #9bc85a 25%, 
      rgb(0, 165, 70) 25%, 
      rgb(0, 165, 70) 50%, 
      #9bc85a 50%, 
      #9bc85a 75%, 
      rgb(0, 165, 70) 75%, 
      rgb(0, 165, 70));
    background-size: 20px 20px;
    background-position: 0 0;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

    /* end fancy-frame */
  }

  .frame {
  
    h5 { 
      margin-bottom: 1.8rem;
      padding: 5px;
      display: inline-block;
      position: relative;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

      &::after {
        content: " ";
        height: .3rem;
        width: 100%;
        position: absolute;
        top: 5.5rem;
        left: 0;
        
        background: linear-gradient(
          -45deg, 
          #9bc85a 25%, 
          rgb(0, 165, 70) 25%, 
          rgb(0, 165, 70) 50%, 
          #9bc85a 50%, 
          #9bc85a 75%, 
          rgb(0, 165, 70) 75%, 
          rgb(0, 165, 70)
          );
        background-size: 20px 20px;
        background-position: 0 0;
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      }
    }

    li {
      margin: 0;
      padding: .1rem .3rem;
      font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
      font-size: 1.5rem;
      line-height: 1.5;
      list-style: none;
      color: #212529;
      text-shadow: 1px 1px 0 rgba(171,207,117, 0.6);
    }

    /* end frame */
  }


  &:hover {
    .fancy-frame {
      transition: 2s ease-out;
      animation: ${stripedbg} 1s linear infinite;
    }
    .frame h5::after {
      transition: 2s ease-out;
      animation: ${stripedbg} 1s linear infinite reverse;
    }

    /* end animation triggers */
  }

`;

const PromoTwo = styled.div`
  padding: 4rem 1rem;
  background-color: ivory;
  background: linear-gradient(to top,  #7a9e47 42%,#5e822c 100%); 
  border: none;

  .fancy-frame { 
    background: linear-gradient(45deg, #abcf75, #4b6f1a);
    background-size: 300% 300%;
    background-position: 0 0;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

    /* end fancy-frame */
  }

  .frame {
  
    h5 { 
      margin-bottom: 1.8rem;
      padding: 5px;
      display: inline-block;
      position: relative;
      color: ivory;
      text-shadow: 1px 1px 0 rgba(24,30,14, 0.3);

      &::after {
        content: " ";
        height: .3rem;
        width: 100%;
        position: absolute;
        top: 4.5rem;
        left: 0;
        
        background: linear-gradient(45deg, #abcf75, #4b6f1a);

        background-position: 0 0;
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      }
    }

    li {
      margin: 0;
      padding: .1rem .3rem;
      font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
      font-size: 1.8rem;
      line-height: 1.6;
      list-style: none;
      color: #212529;
      text-shadow: 1px 1px 0 rgba(171,207,117, 0.6);

      &:hover {
        animation: ${jump} .6s 1;
      }
    }

    /* end frame */
  }


  &:hover {
    .fancy-frame {
      transition: 10s ease-in-out;
      animation: ${animatedgradient} 4s ease alternate infinite;
      background-size: 300% 300%;
    }
    .frame h5::after {
      transition: 2s ease-out;
      animation: ${animatedgradient} 4s ease alternate infinite;
      background-size: 300% 300%;
    }

    /* end animation triggers */
  }

`;