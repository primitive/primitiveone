import React from "react";
import { connect, styled } from "frontity";
import Link from "../pebbles/link";
import { Container, Row, Col } from "react-bootstrap";

const ButtonFancy = ({ state }) => {



  return (
    <StyledButton>
      <StyledLink link="/web-design/">
        See More
        <div className="ring one"></div>
        <div className="ring two"></div>
        <div className="ring three"></div>
        <div className="ring four"></div>
      </StyledLink>
    </StyledButton>
  );
};

export default connect(ButtonFancy);



const color = {
  palewhite: "#f6f6f6"
};

const StyledButton = styled.div`
  display: block;
  padding: 30px;
  width: 6rem;
  height: 6rem;
  color: ${color.palewhite};

  font-family: 'Montserrat', sans-serif;
  font-size: 1em;

  position: relative;
  top: 50%;
  left: 50%;
  background: transparent;

  transform: translate(-50%, -50%);
  transition: all 0.6s cubic-bezier(.55,0,.1,1);
  cursor: pointer;
  box-shadow: 0px 0px 0px #fff;

  z-index: 0;

  .ring{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 40%;
    left: 45%;
    background: #fff;
    border-radius: 50px;
    transition: all 1s cubic-bezier(.55,0,.1,1);
    transform: perspective(500px), translate3d(0px, 0px,0px);
    opacity: 0.0;
  }

  &:hover .one{
    transform: perspective(500px) translate3d(-90px, -50px,150px);
    opacity: 1;
  }
  &:hover .two{
    transform: perspective(800px) translate3d(-130px, 50px,180px);
    opacity: 0.6;
 }
  &:hover .three{
    transform: perspective(800px) translate3d(130px, 50px,30px);
    opacity: 0.2;
 }
 &:hover .four{
    transform: perspective(800px) translate3d(130px, -120px,80px);
    opacity: 0.9;
 }

  &::before{
    position: absolute;
    top: -40px;
    left:-6px;
    width: 160px;
    height: 160px;
    border: solid 1px #fff;
    content: "";
    background:transparent;
    z-index: -1;
    transform: perspective(800px) scale(0.4) rotate(0deg);
    transition: all 2s cubic-bezier(.55,0,.1,1);
  }
  &::after{
    position: absolute;
    top: -35px;
    left:0;
    width: 150px;
    height: 150px;
    content: "";
    background: #fff;
    z-index: -1;
    transform: perspective(800px) scale(0.0) rotate(0deg);
    transition: all 2s cubic-bezier(.55,0,.1,1);
  }
  
  &:hover::after{
    transform:perspective(800px) scale(1.0) rotate(600deg);
  }
  &:hover::before{
      transform:perspective(800px) scale(1.0) rotate(-100deg);
  }
  &:hover{
    color: #505050;
  }

`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-wrap: none;
`;