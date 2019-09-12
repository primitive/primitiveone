import React from "react";
import { connect, styled, fetch } from "frontity";
import { Image } from "react-bootstrap";

const Widget = ({ state }) => {
  // const acfRest = "https://primitivedigital.uk/wp-json/acf/v3/posts/"
  // Get the custom post data.
  // const data = state.source.get("/acf/v3/services/");
  // const data = fetch(acfRest);
  // console.log("widget", data);

  return (
    <Container id="work-recent" className="post-strip">

      <header className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h3>Some Recent Projects</h3>
        <p>We Made This.</p>
      </header>

      <div className="row">

        <div className="col-lg-4 col-sm-12">
          <a href="https://nice2b.me/">
            <article className="card">
              <div className="img-holder">
                <Image className="card-img-top" src={"https://primitivedigital.uk/img/work/n2b.jpg"} alt="Nice2b.me React Theme for WordPress" />
              </div>
              <h4 className="card-title">
                Nice 2B
              </h4>
              <div className="card-body">
                <h5>nice2b.me</h5>
                <div className="card-meta">
                  <p>
                    Headless/React Blog Theme for WordPress
                  </p>
                </div>
              </div>
            </article>
          </a>
        </div>

        <div className="col-lg-4 col-sm-12">
          <a href="http://bungalowcaravansite.co.uk">
            <article className="card">
              <div className="img-holder">
                <Image className="card-img-top" src={"https://primitivedigital.uk/img/work/bungalowcs.jpg"} alt="Website and Branding for The Bungalow Carvan Site York" />
              </div>
              <h4 className="card-title">
                Bungalow Caravan Site
              </h4>
              <div className="card-body">
                <h5>bungalowcaravansite.co.uk</h5>
                <div className="card-meta">
                  <p>
                    WordPress Website &amp; Print Design
                  </p>
                </div>
              </div>
            </article>
          </a>
        </div>

        <div className="col-lg-4 col-sm-12">
          <a href="https://primitivehosting.uk/">
            <article className="card">
              <div className="img-holder">
                <Image className="card-img-top" src={"https://primitivedigital.uk/img/work/primitivehosting.jpg"} alt="Nice2b.me React Theme for WordPress" />
              </div>
              <h4 className="card-title">
                Primitive Hosting
              </h4>
              <div className="card-body">
                <h5>primitivehosting.uk</h5>
                <div className="card-meta">
                  <p>
                    WHMCS Website Design &amp; Development
                  </p>
                </div>
              </div>
            </article>
          </a>
        </div>


      </div>
    </Container>
  );
};

export default connect(Widget);

const Container = styled.section``;

const Header = styled.h3``;
