import React from "react";
import { styled } from "frontity";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import DataMap from '../scenes/datamap';
import { underlinewoosh } from "../scenes/glamourmagic";

const TabBlock = ({ state }) => (
  <StyledSection>
    <Container fluid="true" className="mx-0 px-0 services">

      <StyledTabs defaultActiveKey="hp-design" id="hp-tabs" role="tablist" aria-label="Tabs">

        <Tab eventKey="hp-design" className="hp-design" title="Design">
          <Row>

            <Col className="txt-area">

              <TextWrap>
                <Title>Web Design</Title>
                <Blurb>Find your audience</Blurb>
              </TextWrap>
              <TextWrap>
                <Title>App &amp; UI Design</Title>
                <Blurb>And connect with your users</Blurb>
              </TextWrap>
              <TextWrap>
                <Title>Brand &amp; Logo Design</Title>
                <Blurb>In creative, beautiful and consistent ways</Blurb>
              </TextWrap>
              <TextWrap>
                <Title>Print Design</Title>
                <Blurb>Across all platforms</Blurb>
              </TextWrap>

            </Col>

          </Row>
        </Tab>

        <Tab eventKey="hp-dev" className="hp-dev" title="Development">
          <Row>

            <Col className="txt-area">

              <TextWrap>
                <Title>Rapid Web Development</Title>
                <Blurb>Get online fast</Blurb>
              </TextWrap>

              <TextWrap>
                <Title>Application Development</Title>
                <Blurb>Meet the needs of your users</Blurb>
              </TextWrap>

              <TextWrap>
                <Title>WordPress</Title>
                <Blurb>Built on the most popular core</Blurb>
              </TextWrap>

              <TextWrap>
                <Title>REST API + CPT</Title>
                <Blurb>The possibilities are endless</Blurb>
              </TextWrap>

            </Col>

          </Row>
        </Tab>

        <Tab eventKey="hp-data" className="hp-data" title="Data">
          <Row>

            <Col className="txt-area">

              <TextWrap>
                <Title>Analytics and Reporting</Title>
                <Blurb>Infomation is beautiful</Blurb>
              </TextWrap>
              <TextWrap>
                <Title>Search Engine Optimisation</Title>
                <Blurb>Especially climbing the ranks</Blurb>
              </TextWrap>
              <TextWrap>
                <Title>Data Visualisation</Title>
                <Blurb>So make communication a simple joy</Blurb>
              </TextWrap>
              <TextWrap>
                <Title>Testing and Research</Title>
                <Blurb>But you can always A/B better</Blurb>
              </TextWrap>

              <DataMap />

            </Col>

          </Row>
        </Tab>

        <Tab eventKey="hp-marketing" className="hp-marketing" title="Marketing">
          <Row>

            <Col className="txt-area">
              <TextWrap>
                <Title>Social Media</Title>
                <Blurb>Graphics, Banners and Promos</Blurb>
              </TextWrap>
              <TextWrap>
                <Title>eMail &amp; eCommerce</Title>
                <Blurb>To Sell, sell, sell</Blurb>
              </TextWrap>
              <TextWrap>
                <Title>Strategy &amp; Campaigns</Title>
                <Blurb>And do it well, well, well</Blurb>
              </TextWrap>
              <TextWrap>
                <Title>Triggers &amp; Automation</Title>
                <Blurb>With robots and magic buttons</Blurb>
              </TextWrap>
            </Col>

          </Row>
        </Tab>

      </StyledTabs>

    </Container>
  </StyledSection>
);

export default TabBlock;

const StyledSection = styled.section`

  margin-top: .5rem;
  margin-bottom: 2rem;

  /* sk-dev: styled Tab didn't work */

  .tab-content {
    border-top: 6px solid #87af4e;
    background-color: black;
  }

  .tab-pane {
    margin-right: auto;
    margin-left: auto;
    padding: 2rem;
    width: 100%;
    max-height: 700px;
    max-width: 1140px;
    background-color: black;
  }

  .tab-pane:hover h3:after {
    transition: 1s;
    width: 400%;
    height: 4px;
    animation: ${underlinewoosh} 6s linear infinite;
    background-image: linear-gradient(90deg, rgba(122, 95, 255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
  }

  .hp-design {
    background-size: contain;
    background-image: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317718/m/monkey-happy_hiofsx.jpg);
    background-position: bottom right;
    background-repeat: no-repeat;
  }
  .hp-dev {
    background-size: contain;
    background-image: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317716/m/monkey-eh_sqeten.jpg);
    background-position: bottom right;
    background-repeat: no-repeat;
  }

  .hp-data { position: relative; }
  .hp-data .txt-area { position: relative; z-index: 10; }

  .hp-marketing {
    background-size: contain;
    background-image: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317718/m/monkey-smile_aagvmp.jpg);
    background-position: bottom right;
    background-repeat: no-repeat;
  }

`;

const StyledTabs = styled(Tabs)`
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;

  font-family: 'Hepta Slab', Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  letter-spacing: 1px;
  justify-content: center;

  .nav-item {
    font-size: 1.2rem;
    color: #87af4e;

    &:hover {
      color: #111;
      background-color: rgba(135,175,78,.1);
      border-bottom-color: rgb(135,175,78);
    }
  }

  .nav-item.show.nav-link,
  .nav-link.active { 
    border-bottom: 0;
    color: #111;
    background-color: #87af4e;
  }

  @media screen and (max-width: 576px) {

    .nav-item {
      margin-bottom: .9rem;
      width: 49%;
      border-radius: .25rem;
      text-align: center;
  
      &:hover {
        border-bottom-color: rgb(135,175,78);
        border-right-color: rgb(135,175,78);
      }
    }

    .nav-item:nth-of-type(odd) {
      margin-right: 2%;
    }

  }

`;

const TextWrap = styled.div`
  display: block;
  position: relative;
  z-index: 20;
  overflow: hidden;
  text-shadow: 1px 1px 1px #000;
`;

const Title = styled.h3`
  margin-bottom: .3rem;
  display: inline-block;
  overflow: hidden;

  color: ivory;
  font-size: 3rem;
  font-weight: normal;

  span {
    color: #87af4e;
  }

  &:after {
    content: " ";
    margin-top: .6rem;
    width: 33%;
    height: 9px;
    display: block;
    will-change: transform;
    transition: 1.5s;
    background:#87af4e;
  }

`;

const Blurb = styled.p`
    color: ivory;
`;