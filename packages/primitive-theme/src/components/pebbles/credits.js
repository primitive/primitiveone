
import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";

const Credits = ({ state }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Colophon>

     <p>Created by <a title="Website design and build by Primitive Digital" href="https://primitivedigital.uk/">Primitive Digital</a> &copy; 2020.</p>
     <p>Web Hosting by <a title="Web Hosting and Domains from Primitive Hosting" href="https://primitivehosting.uk/">Primitive Hosting</a>.</p>
     <Copyright>
        &copy; {currentYear}{" "}
        <Link link={state.frontity.url}>{state.frontity.title}</Link>
      </Copyright>
    </Colophon>
  );
};

const Colophon = styled.div`
  @media (min-width: 700px) {
    display: flex;
  }
`;

const Copyright = styled.p`
  font-weight: 600;
  margin: 0;

  @media (min-width: 700px) {
    font-weight: 700;
  }
`;


export default connect(Credits);
