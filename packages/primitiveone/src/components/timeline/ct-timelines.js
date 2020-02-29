import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

import { setTitle } from "../sand/utils";
import CustomTaxonomyItem from "./ct-item";

// In a React component that uses "connect":
const Timelines = ({ state, actions }) => {

  // 1.a fetch data related to a path
  // actions.source.fetch("/timelines/");

  // 2. get data from frontity state
  const data = state.source.get("/timelines/");

  useEffect(() => {
    // 1.b fetch data related to a path using side effects (like calling on ComponentDidMount)
    actions.source.fetch("/timelines/");
    //List.preload();
  }, []);

  //console.log("@ct-timelines: data", state.source[data.taxonomy]);
  //console.log("@ct-timelines: state.source", state.source);
  //console.log("@ct-timelines: data", data.items);

  return (
    <StyledTimelines className="container-fluid">

      <PageHeader>
        <Container>
          <Row>
            <Col>
              {setTitle(data.taxonomy)}
            </Col>
          </Row>
        </Container>
      </PageHeader>

      <PageBody>
        <Container>

          <Row>
            <Col>
              {data.items.map(({ type, id }) => {
                const item = state.source.timelines[id];

                return <CustomTaxonomyItem key={item.id} item={item} type={type} />
              })}
            </Col>
          </Row>

        </Container>
      </PageBody>

    </StyledTimelines>
  );
};

export default connect(Timelines);

const StyledTimelines = styled.main`
  background-color: transparent;
  border-top: 3px solid rgba(12,17,43,0.9);
`;

const PageHeader = styled.header`
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  
    div {
      margin-top: 1rem;
      padding: 1rem;
      
      text-align: center;
      color: ivory;

      background: rgba(12,17,43,0.9);
      border-radius: 5rem;

      h1 {
        font-weight: 400;
      }
  
      h1 span {
        display: block;
        color: #f79862;
        font-weight: 300;
        text-shadow: 2px 1px 1px rgba(123,76,49,0.9);
      }

      .col {
        margin-top: 0;
        padding-top: 1rem;
        margin-left: 1.2rem;
        margin-right: 1.2rem;
        border-radius: 3rem;
        border: none;
        box-shadow: 1px 2px 6px #000;
      }

    }
  }
`;

const PageBody = styled.main`
  max-width: 80%;
  margin: 0 auto 5rem;

  .card {
    margin-top: 2rem;
    padding: .5rem;
    border-radius: 50%;
    box-shadow: 1px 2px 6px rgba(12,17,43,0.3);
  }
`;