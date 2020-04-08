import React from "react";
import { connect, styled, css} from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import InstagramPost from "./instgram-post";
import FacebookPage from "./facebook-page";
import FacebookLike from "./facebook-like";

const SocialSection = ({ state }) => {

  // Get the social config from state
  const display = state.theme.config.global.social;
  const instagram = display.instagram;
  const facebook = display.facebook;
  const twitter = display.twitter;
  const pinterest = display.pinterest;

  // sk-dev: workaround for duplicate array items
  //const unique = (value, index, self) => {
  //  return self.indexOf(value) === index
  //}
  
  // const postidsfix = instagram.postids.filter(unique);
  // const postidsfix = new Set(instagram.postids);
  const postidsfix = instagram.postids;

  return (
    <section css={css`
      background-color: ivory;
      margin: 0;
      padding-top: 3rem;
      padding-bottom: 2rem;
    `}>

      <Container>
        <Row>

          {/* If instagram has data */}
          {(instagram && "none" !== instagram.type) && (
            instagram.postids.map(( item ) => {
              //postidsfix.map((item) => {
              return (<Col key={item}><InstagramPost id={item} maxwidth={instagram.maxwidth} /></Col>);
            })
          )}

        </Row>

        <Row>
          {/* If facebook has data  */}
          {(facebook && "none" !== facebook.type) && (
            "page" === facebook.type && <Col><FacebookPage /></Col> ||
            "like" === facebook.type && <Col><FacebookLike props={facebook.settings} /></Col>
          )}
        </Row>

      </Container>
    </section>
  );
};

export default connect(SocialSection);