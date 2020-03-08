import React, { useEffect } from "react";
import { connect, styled, Global } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

import pageStyles from "../dust/page-styles";

import Link from "../pebbles/link";
//import FeaturedMedia from "../pebbles/featured-media";
import DiscoPreload from "../scenes/disco-preload"

const Page = ({ state, actions, libraries }) => {

  // Get info of current page.
  const data = state.source.get(state.router.link);

  // Get the the full data.
  const page = state.source[data.type][data.id];

  // Get the the full data.
  const pageId = data.id;

  console.log("@page: data", data);

  // Prefetch page
  useEffect(() => {
    actions.source.fetch(state.router.link);
  }, []);

  if (!data.isReady) return <Loading><DiscoPreload message="loading page..." /></Loading>;

  return (
    <>
      <Global styles={pageStyles} />

      <main className="page" id={"page-" + pageId}>

        <Container>

          <header className="row">
            <Col>
              <PageTitle dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
            </Col>
          </header>

          <Row>
            <PageBody>
              <libraries.html2react.Component html={page.content.rendered} />
            </PageBody>
          </Row>

        </Container>

      </main>
    </>
  );
};

export default connect(Page);

const Loading = styled.div`
  padding: 3rem;
  font-size: 1rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  color: rgba(12, 17, 43);
`;

const PageBody = styled(Col)`
  padding-top: 2rem;
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;
  



  
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
