import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Hero from './animation/jungle';
import Work from './widgets/widget';
import DataMap from './animation/datamap';

const PageHome = ({ state }) => {
  // Get the data of the current link?
  const data = state.source.get(state.router.link);
  //console.log("home", state);

  return (
    <Section className="home">
      <div>
        <Hero />
      </div>

      <Container>
        <Row className="intro">
          <Col lg="12">
            <h1><span>Integrated </span>Digital Design, Development <span>&amp;</span> Marketing</h1>
            <p>
              <span>- </span> Pretty, Sexy, Webby, Tecchie Stuff <span> -</span>
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid="true" className="services">

            <Tabs defaultActiveKey="hp-design" id="hp-tabs" role="tablist" aria-label="Tabs">
              <Tab eventKey="hp-design" className="hp-design" title="Design">
                <Row>
                  <Col lg="12" className="txt-area">
                    <div className="txt-wrap">
                      <h3>Web Design</h3>
                      <p>Helps you find your audience</p>
                    </div>
                    <div className="txt-wrap">
                      <h3>App &amp; UI Design</h3>
                      <p>Lets you connect with your users</p>
                    </div>
                    <div className="txt-wrap">
                      <h3>Brand &amp; Logo Design</h3>
                      <p>Done in creative, beautiful and consistent ways</p>
                    </div>
                    <div className="txt-wrap">
                      <h3>Print Design</h3>
                      <p>Across all platforms</p>
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="hp-dev" className="hp-dev" title="Development">
                <Row>
                  <Col lg="12" className="txt-area">
                    <div className="txt-wrap">
                      <h3>Rapid Web Development</h3>
                      <p>Get online fast</p>
                    </div>

                    <div className="txt-wrap">
                      <h3>Application Development</h3>
                      <p>Meet the needs of your users</p>
                    </div>

                    <div className="txt-wrap">
                      <h3>WordPress</h3>
                      <p>Built on the most popular core</p>
                    </div>

                    <div className="txt-wrap">
                      <h3>REST API + CPT</h3>
                      <p>The possibilities are endless</p>
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="hp-data" className="hp-data" title="Data">
                <Row>
                  <Col lg="12" className="txt-area">
                    <div className="txt-wrap">
                      <h3>Analytics and Reporting</h3>
                      <p>Infomation is beautiful</p>
                    </div>
                    <div className="txt-wrap">
                      <h3>Search Engine Optimisation</h3>
                      <p>Especially climbing the ranks</p>
                    </div>
                    <div className="txt-wrap">
                      <h3>Data Visualisation</h3>
                      <p>Make communication a simple joy</p>
                    </div>
                    <div className="txt-wrap">
                      <h3>A/B Testing/Research</h3>
                      <p>You can always A/B better</p>
                    </div>

                    <DataMap />
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="hp-marketing" className="hp-marketing" title="Marketing">
              <Row>
                  <Col lg="12" className="txt-area">
                  <div className="txt-wrap">
                    <h3>Social Media</h3>
                    <p>Graphics, Banners and Promos</p>
                  </div>
                  <div className="txt-wrap">
                    <h3>eMail &amp; eCommerce</h3>
                    <p>Sell, sell, sell</p>
                  </div>
                  <div className="txt-wrap">
                    <h3>Strategy &amp; Campaigns</h3>
                    <p>And do it well, well, well</p>
                  </div>
                  <div className="txt-wrap">
                    <h3>Triggers &amp; Automation</h3>
                    <p>Systems intergration and magic buttons</p>
                  </div>
                </Col>
                </Row>
              </Tab>

            </Tabs>


      </Container>

      <Work />

    </Section>
  );
};

export default connect(PageHome);

const Section = styled.main`

`;
