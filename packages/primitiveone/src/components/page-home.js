import React from "react";
import { connect, styled } from "frontity";
import Item from "./list/list-item";
import Hero from './animation/timeline';
import Post from './post';
import { Tabs, Tab, Image } from "react-bootstrap";
import Work from './widgets/widget';
import DataMap from './animation/datamap';

const PageHome = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  console.log("home", state);

  return (
    <Container className="home">

      <div className="row">
        <div className="col-lg-12">
          <Hero />
        </div>
      </div>

      <div className="container">
        <div className="row intro">
          <div className="col-lg-12">
            <h1><span>Integrated </span>Digital Design, Development <span>&amp;</span> Marketing</h1>
            <p>
              - Pretty, Sexy, Webby, Tecchie Stuff -
            </p>
          </div>
        </div>
      </div>

      <div className="services container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Tabs defaultActiveKey="hp-design">
              <Tab eventKey="hp-design" className="hp-design" title="Design">
                <div className="row">
                  <div className="col-lg-10">
                    <div className="txt-wrap">
                      <h3>Web Design</h3>
                      <p>We want to help you connect with your audience and...</p>
                    </div>
                    <div className="txt-wrap">
                      <h3>App &amp; UI Design</h3>
                      <p>to speak to your users...</p>
                    </div>
                    <div className="txt-wrap">
                      <h3>Brand &amp; Logo Design</h3>
                      <p>creatively, beautifully and consistently...</p>
                    </div>
                    <div className="txt-wrap">
                      <h3>Print Design</h3>
                      <p>across all platforms.</p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="hp-dev" className="hp-dev" title="Development">
                <div className="row">
                  <div className="col-lg-10 img-wrap">

                    <div className="txt-wrap">
                      <h3>Rapid Web Development</h3>
                      <p>Want to get online or...</p>
                    </div>

                    <div className="txt-wrap">
                      <h3>Application Development</h3>
                      <p>to get in their hands?</p>
                    </div>

                    <div className="txt-wrap">
                      <h3>WordPress Development</h3>
                      <p>Why not do it in style...</p>
                    </div>

                    <div className="txt-wrap">
                      <h3>Integration &amp; Automation</h3>
                      <p>and, get more done by doing less.</p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="hp-data" className="hp-data" title="Data">
              <div className="txt-area">
                <div className="txt-wrap">
                  <h3>Analytics and Reporting</h3>
                  <p>Infomation is beautiful so...</p>
                </div>
                <div className="txt-wrap">
                  <h3>Search Engine Optimisation</h3>
                  <p>have a good Goole and...</p>
                </div>
                <div className="txt-wrap">
                  <h3>Data Visualisation &amp; Dashboards</h3>
                  <p>make communication a joy...</p>
                </div>
                <div className="txt-wrap">
                  <h3>A/B Testing and Research</h3>
                  <p>and improve with qualitative insights.</p>
                </div>
                </div>
                <DataMap />
              </Tab>

              <Tab eventKey="hp-marketing" className="hp-marketing" title="Marketing">
              <div className="txt-wrap">
                  <h3>Social Media &amp; PPC Banners</h3>
                  <p>Some content in menu 2.</p>
                </div>
                <div className="txt-wrap">
                  <h3>eMail Design &amp; Marketing</h3>
                  <p>Some content in menu 2.</p>
                </div>
                <div className="txt-wrap">
                  <h3>Strategy &amp; Campaigns</h3>
                  <p>Some content.</p>
                </div>
                <div className="txt-wrap">
                  <h3>Triggers &amp; Automation</h3>
                  <p>Some content.</p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div >

      <div className="container">
        <Work />
      </div>

    </Container >
  );
};

export default connect(PageHome);

const Container = styled.div``;
