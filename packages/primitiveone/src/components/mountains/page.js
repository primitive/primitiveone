import React, { useEffect } from "react";
import { connect, styled, Global } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

import pageStyles from "../dust/page-styles";

import Link from "../pebbles/link";
import FeaturedMedia from "../pebbles/featured-media";

import DiscoPreload from "../scenes/disco-preload"

const Page = ({ state, actions, libraries }) => {

  // Get info of current page.
  const data = state.source.get(state.router.link);
  // Get the the page.
  const page = state.source[data.type][data.id];
  // Get the author.
  const author = state.source.author[page.author];
  // Get a date for humans.
  const date = new Date(page.date);

  //const pageType = data.type;
  const pageId = data.id;

  console.log("@page: state", state );

  // Prefetch page
  useEffect(() => {
    actions.source.fetch(state.router.link);
  }, []);

  // not sure this will work here?
  if (!data.isReady) return <Loading><DiscoPreload /></Loading>;

  return data.isReady ? (
    <>
      <Global styles={pageStyles} />
      <StyledMain className="page" id={"page-" + pageId}>

        <Container>

          <PageHead className="row">
            <Col>
              <PageTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Col>
          </PageHead>

          <Row>
            <Col>

              {state.theme.featured.showOnPost && (<FeaturedMedia id={page.featured_media} />)}

            </Col>
          </Row>

          <Row>
            <PageBody>
              <libraries.html2react.Component html={page.content.rendered} />
            </PageBody>
          </Row>

        </Container>

      </StyledMain>
    </>
  ) : null;
};

export default connect(Page);

const Loading = styled.div`
  padding: 3rem;
  font-size: 1rem;
  text-align: center;
`;

const StyledMain = styled.main`
  padding: 5px;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PageHead = styled.header`

`;

const PageTitle = styled.h1`
  color: rgba(12, 17, 43);
`;

const PageBody = styled(Col)`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;
  padding-top: 2rem;

  p {
    line-height: 1.6em;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. 
    width: 100% !important;
    */
    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }








  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
