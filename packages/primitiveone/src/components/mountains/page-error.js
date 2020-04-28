import React from "react";
import { styled, connect } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

// The Error page component
const ErrorPage = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "Oops, something bad happened";
  const title404 = "Oops! 404";

  const description404 = (
    <>
      <p>Oh. We can't find a page where you a looking.</p>
      <span role="img" aria-label="confused face">
        😕
        </span>
      <p>It may have been removed, renamed, or did not exist in the first place.</p>
    </>
  );

  const description = (
    <p>
      Don&apos;t panic! Seems like you encountered an error. If this persists,
      <a href="https://community.frontity.org"> let us know </a> or try refreshing
        your browser.
    </p>
  );

  return (
    <StyledContainer className="post">
      <Row>
        <Col>
          <Title>{data.is404 ? title404 : title}</Title>
          <Description>
            {data.is404 ? description404 : description}
          </Description>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default connect(ErrorPage);

const StyledContainer = styled(Container)`
  padding: 4rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;