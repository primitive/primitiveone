import React from "react";
import { connect, styled, fetch } from "frontity";
import { Container, Row, Image } from "react-bootstrap";

const Widget = ({ state }) => {
  // const acfRest = "https://primitivedigital.uk/wp-json/acf/v3/posts/"
  // Get the custom post data.
  // const data = state.source.get("/acf/v3/services/");
  // const data = fetch(acfRest);
  // console.log("widget", data);

  return (
    <Ele id="work-recent">
    <Container className="post-strip">

      <header>
        <h3>Some Recent Projects</h3>
        <p>We Made This.</p>
      </header>

      <Row>

        <div className="col-lg-4 col-sm-12">
          <a href="https://nice2b.me/" aria-label="Nice2B.me">
            <article className="card">
              <div className="img-holder">
                <Image className="card-img-top" src={"https://res.cloudinary.com/primitivedigital/image/upload/c_fill/c_scale,w_auto,dpr_auto/f_auto/v1569317848/work/n2b_hlwqjc.jpg"} alt="Nice2b.me React Theme for WordPress" />
              </div>
              <h4 className="card-title">
                Nice 2B
              </h4>
              <div className="card-body">
                <h5>nice2b.me</h5>
                <div className="card-meta">
                  <p>
                    Headless/React Theme for WordPress
                  </p>
                </div>
              </div>
            </article>
          </a>
        </div>

        <div className="col-lg-4 col-sm-12">
          <a href="http://bungalowcaravansite.co.uk" aria-label="The Bungalow Carvan Site">
            <article className="card">
              <div className="img-holder">
                <Image className="card-img-top" src={"https://res.cloudinary.com/primitivedigital/image/upload/c_fill/c_scale,w_auto,dpr_auto/f_auto/v1569317854/work/bungalowcs_fqbyy7.jpg"} alt="Website and Branding for The Bungalow Carvan Site York" />
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
          <a href="https://primitivehosting.uk/" aria-label="Nice2B.me">
            <article className="card">
              <div className="img-holder">
                <Image className="card-img-top" src={"https://res.cloudinary.com/primitivedigital/image/upload/c_fill/c_scale,w_auto,dpr_auto/f_auto/v1569317850/work/primitivehosting_zaheay.jpg"} alt="Nice2b.me React Theme for WordPress" />
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


      </Row>
    </Container>
    </Ele>
  );
};

export default connect(Widget);

const Ele = styled.section``;
