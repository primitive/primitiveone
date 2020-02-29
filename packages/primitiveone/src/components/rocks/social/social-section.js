import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import InstagramPost from "./instgram-post";

const SocialSection = ({ state }) => {

  // Get the social config from state
  const display = state.theme.config.global.social;

  const instagram = display.instagram;
  const facebook = display.facebook;
  const twitter = display.twitter;
  const pinterest = display.pinterest;

  // sk-dev: workaround for duplicate array items
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const postidsfix = instagram.postids.filter(unique);

  return (
    <StyledSection>
      <Container>
        <Row>

          {/* If instagram has data */}
          {instagram && (
            //instagram.postids.map(( item ) => {
              postidsfix.map(( item ) => {
              return (<Col key={item}><InstagramPost id={item} maxwidth={instagram.maxwidth} /></Col>);
            })
          )}

        </Row>

      </Container>
    </StyledSection>
  );
};

export default connect(SocialSection);

const StyledSection = styled.section`
  background-color: transparent;
`;