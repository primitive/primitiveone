import React, { useEffect } from "react";
import { connect, styled, Global } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

import pageStyles from "../dust/page-styles";

import DiscoPreload from "../scenes/preload-disco"
//import DiscoBall from "../scenes/discoball"

const Page = ({ state, actions, libraries }) => {

  // get skeletal data model
  const data = state.source.get(state.router.link);

  // get full skeleton data
  const page = state.source[data.type][data.id];
  const pageId = data.id;

  // 
  useEffect(() => {
    actions.source.fetch(state.router.link);
    
    if (state.theme.config.devMode) {
      console.log("@page: data", data);
    }
    
  }, []);

  if (!data.isReady) return <Loading><DiscoPreload message="loading page..." /></Loading>;

  return (
    <>
      <Global styles={pageStyles(state.theme.colors)} />

      <main className="page" id={"page-" + pageId}>

        <Container>

          <header className="row">
            <Col>
              <PageTitle dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
            </Col>
          </header>

          { /* data.id && 8===data.id && <DiscoBall /> */ }
          
          <Row>
            <PageBody className="content">
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
  padding-bottom: 2rem;
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;
`;
