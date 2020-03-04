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
              <div className="txt-wrap">
                <Title>Web Design</Title>
                <p>Find your audience</p>
              </div>
              <div className="txt-wrap">
                <Title>App &amp; UI Design</Title>
                <p>And connect with your users</p>
              </div>
              <div className="txt-wrap">
                <Title>Brand &amp; Logo Design</Title>
                <p>In creative, beautiful and consistent ways</p>
              </div>
              <div className="txt-wrap">
                <Title>Print Design</Title>
                <p>Across all platforms</p>
              </div>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="hp-dev" className="hp-dev" title="Development">
          <Row>
            
            <Col lg="12" className="txt-area">

              <div className="txt-wrap">
                <Title>Rapid Web Development</Title>
                <p>Get online fast</p>
              </div>

              <div className="txt-wrap">
                <Title>Application Development</Title>
                <p>Meet the needs of your users</p>
              </div>

              <div className="txt-wrap">
                <Title>WordPress</Title>
                <p>Built on the most popular core</p>
              </div>

              <div className="txt-wrap">
                <Title>REST API + CPT</Title>
                <p>The possibilities are endless</p>
              </div>

            </Col>

          </Row>
        </Tab>

        <Tab eventKey="hp-data" className="hp-data" title="Data">
          <Row>
            <Col lg="12" className="txt-area">
              <div className="txt-wrap">
                <Title>Analytics and Reporting</Title>
                <p>Infomation is beautiful</p>
              </div>
              <div className="txt-wrap">
                <Title>Search Engine Optimisation</Title>
                <p>Especially climbing the ranks</p>
              </div>
              <div className="txt-wrap">
                <Title>Data Visualisation</Title>
                <p>So make communication a simple joy</p>
              </div>
              <div className="txt-wrap">
                <Title>Testing and Research</Title>
                <p>But you can always A/B better</p>
              </div>

              <DataMap />

            </Col>
          </Row>
        </Tab>

        <Tab eventKey="hp-marketing" className="hp-marketing" title="Marketing">
          <Row>
            <Col lg="12" className="txt-area">
              <div className="txt-wrap">
                <Title>Social Media</Title>
                <p>Graphics, Banners and Promos</p>
              </div>
              <div className="txt-wrap">
                <Title>eMail &amp; eCommerce</Title>
                <p>To Sell, sell, sell</p>
              </div>
              <div className="txt-wrap">
                <Title>Strategy &amp; Campaigns</Title>
                <p>And do it well, well, well</p>
              </div>
              <div className="txt-wrap">
                <Title>Triggers &amp; Automation</Title>
                <p>With robots and magic buttons</p>
              </div>
            </Col>
          </Row>
        </Tab>

      </StyledTabs>

    </Container>
  </StyledSection>
);

export default TabBlock;

const StyledSection = styled.section`

  .services { margin-bottom: 2rem; }

  .nav-tabs {
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }


  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active { 
    border-bottom: 0; color: #111; background-color: #87af4e; }
  .tab-content { border-top: 6px solid #87af4e; background-color: black; }

  .tab-content .tab-pane {
    padding: 2rem 1rem;
    width: 100%;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .txt-wrap {
    display: block;
    position: relative;
    z-index: 20;
    overflow: hidden;
  }

  p { color: ivory; }

  .tab-pane:hover h3:after {
    transition: 1s;
    width: 400%;
    height: 4px;
    animation: ${underlinewoosh} 6s linear infinite;
    background-image: linear-gradient(90deg, rgba(122, 95, 255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
  }

  .tab-pane { max-height: 700px; background-color: black; }
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
  font-family: 'Hepta Slab', Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  letter-spacing: 1px;

  a {
    color: #87af4e;
  }
  a:hover {
    color: #111;
  }

`;

const Title = styled.h3`
  color: ivory;
  margin-bottom: .3rem;
  font-size: 3rem;
  font-weight: normal;
  display: inline-block;
  overflow: hidden;

  span { color: #87af4e; }

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