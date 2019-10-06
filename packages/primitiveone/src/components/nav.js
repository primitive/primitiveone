import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { Container, Nav, Navbar, Image } from "react-bootstrap";

const MainNav = ({ state }) => (

  <Container>
    <Styled>
      <Navbar bg="dark" expand="lg" aria-label="Main">

        <Navbar.Brand href="/">
          <Image src={"https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317125/img/punky_logo_smgreen_o5eehj.png"} alt="Primitive Digital - Web Design &amp; Development" />
        </Navbar.Brand>

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
    </Styled>
  </Container>
);

export default connect(MainNav);

const Styled = styled.div`
  nav.navbar {
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }
  nav a:hover {
    color: plum;
    text-decoration: none;
    border-bottom: 2px solid plum;
  }
  nav a.navbar-brand {
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 5px;
    padding-top: 5px;
    display: block;
    color:transparent;
    border: none;
    flex: 2;
  }
  nav a.navbar-brand img {
      max-height: 60px;
  }
  nav .navbar-toggler {
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,.2);
    background-color: #87af4e;
  }
`;

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

