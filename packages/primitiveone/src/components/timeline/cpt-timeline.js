import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

import Item from "./cpt-item";
import PostMagic from "../scenes/postmagic";
import Pagination from "../pebbles/pagination";
import {sortBy} from "../sand/utils"

// a connected Frontity component to display custom post types:
const Timeline = ({ state, actions }) => {

  // 1.a fetch the data related to a path ( this path should be set in frontity.settings.js ??? )
  // actions.source.fetch("/temporal_events/");

  // 2. get the data from frontity state
  const data = state.source.get("/evolution-of-digital-stuff/");

  useEffect(() => {
    // 1.b fetch data related to a path using side effects (like calling on ComponentDidMount / ComponentDidMount)
    actions.source.fetch("/evolution-of-digital-stuff/");
    //List.preload();
  }, []);

  console.log("@cpt-timeline: data", data);

  // the category entity ???
  // const category = state.source.category[data.id];

  // posts from that category ???
  // const posts = data.items.map(
  //  ({ type, id }) => state.source[type][id]
  // );

  //console.log("@cpt-timeline: actions", actions);
  //console.log("@cpt-timeline: actions", JSON.stringify(actions));
  //console.log(data.input_data['price-row_122']); 

  //console.log("@cpt-timeline: data.items", data.items);
  
  data.items.sort(sortBy("year"));

  // render your content
  return (
    <StyledList className="container-fluid">

      <PageHeader>
        <Container>
          <Row>
            <Col>
              <h1><span className="scribe">The Evolution of </span>Digital Stuff and Other Things</h1>
            </Col>
          </Row>
        </Container>
      </PageHeader>

      <PageBody>
        <Container>

          {/* If the list is a taxonomy, we render a title. */}
          {data.isTaxonomy && (
            <TimelineHeader>
              {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
            </TimelineHeader>
          )}

          {/* Sort available data items */}
          

          {/* Regular display - iterate over the items of the list. */}
          <PostMagic items={data.items} />

          {/* Regular display - iterate over the items of the list. */}
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            //console.log(item);

            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}

        </Container>

      </PageBody>

      <Pagination />

    </StyledList>
  );

  //}

};

export default connect(Timeline);

const StyledList = styled.main`
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

const PageBody = styled.section`
  max-width: 80%;
  margin: auto;
`;