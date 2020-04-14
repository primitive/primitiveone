import React from "react";
import { connect, styled, css } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import InstagramPost from "./instgram-post";
import FacebookPage from "./facebook-page";
import FacebookLike from "./facebook-like";
import Icon from 'react-fontawesome';

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
    <StyledSection>

      <Container>

        <Row>
          <SocialIcons>
            <h3 className="heading">let'z b friends 4eva</h3>
            <ul>
              <li> <Icon name="instagram" /> Instagram </li>
            <li> <Icon name="facebook" /> Facebook </li>
            <li> <Icon name="twitter" /> Twitter </li>
            </ul>
          </SocialIcons>
        </Row>

        <Row>

          {/* If instagram has data */}
          {(instagram && "none" !== instagram.type) && (
            instagram.postids.map((item) => {
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
    </StyledSection>
  );
};

export default connect(SocialSection);

const StyledSection = styled.section`
  margin: 0;
  padding: 3rem 0 4rem;
  background-color: ivory;
  border-top: 6px solid #e8e6cf;
  border-bottom: 6px solid #e8e6cf;

  .container {
    margin-top: 2rem;
    border: solid 3px rgba(0,44,44,.3);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  }

`;
const SocialIcons = styled(Col)`
  margin: 0;
  padding-top: 3rem;
  padding-bottom: 2rem;
  font-family: "Hepta Slab";
  text-shadow: 1px 1px rgba(173,216,230,.5);
  text-align: center;
  justify-content: center;

  h3 {
    font-size: 4rem;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    justify-items: center;
    justify-content: center;
    list-style: none;
  }
`;