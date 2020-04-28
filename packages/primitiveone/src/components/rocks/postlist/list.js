import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./list-item";
import Pagination from "./pagination";

const PostList = ({ state }) => {

  // Get the data of the current url
  const data = state.source.get(state.router.link);

  // console.log("@postlist/list: data", data);

  return (
    <StyledMain className="container">

      <Container>

        <Row>
          <Col>
            <PageHead>Cavetalk</PageHead>
          </Col>
        </Row>

        {/* If the list is a taxonomy, render a title. */}
        {data.isTaxonomy && (
          <Header>
            {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
          </Header>
        )}

        {/* If the list is an author, render a title. */}
        {data.isAuthor && (
          <Header>Posts by: {state.source.author[data.id].name}</Header>
        )}

        {/* Iterate over the array of objects. */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          return <Item key={item.id} item={item} />;
        })}

      </Container>

      <Pagination />

    </StyledMain>

  );
};

export default connect(PostList);

const StyledMain = styled.main`
  background-color: transparent;
  padding: 2rem 0 3rem;

  h2 {
    font-family: "Playfair Display";
  }
`;

const PageHead = styled.h1`
  margin-bottom: 1rem;
  color: rgba(12, 17, 43, 0.7);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.2rem;
  font-size: 1.5rem;
  line-height: 1.6;
  text-shadow: 1px 1px rgba(173,216,230,.5)
`;

const Header = styled.h2`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
