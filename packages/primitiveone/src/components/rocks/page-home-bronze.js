import React from "react";
import { connect, styled, css } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Frame from "../pebbles/frame";
import Image from "@frontity/components/image";
import { jump, animatedgradient } from "../scenes/glamourmagic";

const Bronze = ({ state }) => {

  const display = state.theme.config.homepage.bronzeConfig;
  //console.log("@page-home-bronze: display", display);

  // sk-dev: workaround for duplicate array items
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const list1fix = display.list1.filter(unique);
  const list2fix = display.list2.filter(unique);

  return (
    <StyledSection>

      <PromoOne className="footer-promo1">

        <Container>
          <Row>

            <Col lg="6">
              <StyledFrame className={display.imageFrame1} link="/">

                <Image
                  alt={display.title1}
                  src={display.imagesrc1}
                  //srcSet={srcset}
                />

              </StyledFrame>
            </Col>

            <Col lg={6}>
              <StyledFrame className={display.listFrame1} link="/">
                <TitleOne>{display.title1}</TitleOne>
                <ul>
                  {
                    list1fix.map((item, i) => (
                      // display.list1.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))
                  }
                </ul>
              </StyledFrame>
            </Col>

          </Row>
        </Container>

      </PromoOne>

      <PromoTwo className="footer-promo2">

        <Container>
          <Row>

            <Col lg={6}>
              <StyledFrame className="fancy-frame" link="/">

                <Image
                  alt={display.title2}
                  src={display.imagesrc2}
                //srcSet={srcset}
                />

              </StyledFrame>
            </Col>

            <Col lg={6}>

              <StyledFrame className={display.listFrame2} link="/">
                <TitleTwo>{display.title2}</TitleTwo>
                <ul css={css`&:hover {animation: ${jump} 1s ease infinite;}`}>
                  {
                    list2fix.map((item, i) => (
                      // display.list2.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))
                  }
                </ul>
              </StyledFrame>

            </Col>

          </Row>
        </Container>

      </PromoTwo>

    </StyledSection>)
};

export default connect(Bronze);

// refine
// https://stackoverflow.com/questions/48713421/target-child-element-styled-components

const StyledSection = styled.section`

  .frame {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .frame ul {
    margin: 0;
    padding: 0;
  }

  .fancy-frame {
    padding: 12px;
    display: inline-block;
    position: relative;
    transition: 1s ease-in-out;
  }

  @media screen and (min-width: 992px) {
    .frame { 
      padding-top: 2rem; 
      padding-bottom: 2.5rem;
    }
  }

`;

const TitleOne = styled.h5`
  font-size: 4rem;
  font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: ivory;
`;

const TitleTwo = styled.h5`
  font-size: 4rem;
  font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #7A9E47;
`;

const StyledFrame = styled(Frame)`
  a:hover {
    text-decoration: none;
  }
`;

const PromoOne = styled.div`
  margin-top: 4rem;
  padding: 3rem 1rem;
  height: 100%;
  background-color: #7A9E47;
  text-align: center;

  .fancy-frame { background: #fff; }
  
  &:hover .fancy-frame {
    transition: 1s ease-in-out;
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    animation: ${animatedgradient} 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  li {
    font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
    font-size: 1.5rem;
    line-height: 1.5;
    list-style: none;
    color: #212529;
  }

`;

const PromoTwo = styled.div`
  padding: 4rem 1rem;
  height: 100%;
  background-color: ivory;
  text-align: center;

  .fancy-frame { background: #87af4e; }

  &:hover .fancy-frame {
    transition: 1s ease-in-out;
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    animation: ${animatedgradient} 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  li {
    font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
    font-size: 2rem;
    line-height: 2;
    list-style: none;
    color: #212529;
  }

`;