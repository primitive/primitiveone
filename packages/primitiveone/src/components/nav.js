import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Nav = ({ state }) => (

  <Container className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Navbar</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
        {state.theme.menu.map(([name, link]) => (
          <Item className="nav-item" key={name} isSelected={state.router.link === link}>
            <Link link={link}>{name}</Link>
          </Item>
        ))}
      </ul>
    </div>
  </Container>
);

export default connect(Nav);

const Container = styled.nav``;
const Item = styled.li`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 1rem;
  font-family: 'Hepta Slab', serif;
  font-weight: 600;
  letter-spacing: 1px;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid
      ${({ isSelected }) => (isSelected ? "#fff" : "transparent")};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
