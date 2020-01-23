import React from "react";
import { connect, styled } from "frontity";
import Item from "./cpt-timeline-item";
import Pagination from "../pagination";

// In a React component that uses "connect":
const Timeline = ({ state, actions }) => {

  // 1. fetch data related to a path
  actions.source.fetch("/temporal_events/");

  // 2. get data from frontity state
  const data = state.source.get("/temporal_events/");

  console.log("Timeline", data);

  // 3. get entities from frontity state
  //if (data.isPostTypeArchive) {
  if (data.isTemporalEventsArchive) {

    // the category entity ???
    // const category = state.source.category[data.id];

    // posts from that category ???
    // const posts = data.items.map(
    //  ({ type, id }) => state.source[type][id]
    // );

    // 4. render!
    return (
      <Container className="container">

        <main>

          {/* If the list is a taxonomy, we render a title. */}
          {data.isTaxonomy && (
            <Header>
              {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
            </Header>
          )}

          {/* Iterate over the items of the list. */}
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            //console.log(item);

            //arr.sort((a,b) => a.updated_at - b.updated_at);


            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}

        </main>

        <Pagination />

      </Container>
    );

  }

};

export default connect(Timeline);

const Container = styled.main`
  padding-top: 1rem;
  margin: 0 10%;
  background-color: transparent;
  max-width: 80%;
`;