import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { Nav, Navbar, Image, NavDropdown, Form, FormControl, Button} from "react-bootstrap";

const MainNav = ({ state }) => (

<Navbar bg="dark" expand="lg">
  <Navbar.Brand href="/"><Image src={"https://primitivedigital.uk/img/punky_logo_smgreen.png"} alt="Primitive Digital - Web Design &amp; Development" /></Navbar.Brand>

  <Navbar.Toggle aria-controls="site-nav" />

  <Navbar.Collapse id="site-nav">
    <Nav className="mr-auto">


      <ul className="navbar-nav mr-auto">
        {state.theme.menu.map(([name, link]) => (
          <Item className="nav-item" key={name} isSelected={state.router.link === link}>
            <Link link={link}>{name}</Link>
          </Item>
        ))}
      </ul>
    </Nav>

  </Navbar.Collapse>
</Navbar>
);

export default connect(MainNav);

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

