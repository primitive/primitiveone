import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { Image } from "react-bootstrap";

const Footer = ({ state }) => (
  <Container>

    <div className="container-fluid footer-promo1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="fancy-frame">
              <Image src={"https://primitivedigital.uk/img/promo/wantawebsite_square.jpg"} className="img-fluid" alt="Want a Website? We make Websites." />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="frame">
              <a link="/">
                <h5>We Make Websites</h5>
                <ul>
                  <li>Web Sites, CMS, CRM and Blogs.</li>
                  <li>Fully Editable Content.</li>
                  <li>Online shops and Progressive Web Apps.</li>
                  <li>API's and application integration</li>
                  <li>Mobile friendly and responsive</li>
                  <li>Google Analytics</li>
                  <li>High tech, low cost, no hassle</li>
                  <li>Excellence as standard &amp; satisfaction guaranteed</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid footer-promo2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="fancy-frame">
              <Image src={"https://primitivedigital.uk/img/promo/selfiemonkey_square.jpg"} className="img-fluid" alt="Want a Website? We make Websites." />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="frame">
              <a link="/">
                <h5>We Help Startups</h5>
                <ul>
                  <li>Get a custom built Website</li>
                  <li>Plus Logo design</li>
                  <li>And business card design</li>
                  <li>Easy, peasy chimpanzizi!</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid footer-cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="subslab"><span>- Top Banana - </span>Web Design <span>&amp;</span> Development</h2>
          </div>
          <div className="col-lg-12">
            <Image src={"https://primitivedigital.uk/img/promo/topbanana1.png"} className="img-fluid" alt="Top Banana Web Design and Development" />
          </div>
        </div>
        <div id="contact" className="row">
          <div className="col-lg-12">
            <h3 className="subslab"><strong>Call 0113 314 8880</strong> for an informal no obligation chat about your project.</h3>
          </div>
        </div>
      </div>
    </div>

    <div id="colophon">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>Website design and build by Primitive Digital &copy; 2019.</p>
            <p>Web Hosting and Domains provided by Primitive Hosting.</p>
          </div>
          <div className="col-lg-12">
            <Image src={"https://primitivehosting.uk/images/ph-logo-footer.png"} alt="Primitive Digital - Web Design &amp; Development" />
          </div>
        </div>
      </div>
    </div>

  </Container>
);

export default connect(Footer);

const Container = styled.footer``;