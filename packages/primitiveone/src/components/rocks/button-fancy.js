import React from "react";
import { styled } from "frontity";
import Link from "../pebbles/link";

const ButtonFancy = (props) => {

  const _text = props.text ? props.text : "Find out More";
  const _link = props.link ? props.link : "/";
  const _color = props.color ? props.color : "#f6f6f6";

  return (
    <StyledButton>
      <StyledLink link={_link}>
          {_text}
        <Layer className="one"></Layer>
        <Layer className="two"></Layer>
        <Layer className="three"></Layer>
        <Layer className="four"></Layer>
      </StyledLink>
    </StyledButton>
  );
};

export default ButtonFancy;


const color = {
  coal: "#212529",
  white: "#ffffff",
  ivory: "#fffff0",
  palewhite: "#f6f6f6",
  brightlime: "#d7f36d"
};

const StyledButton = styled.div`
  padding: 30px;
  width: 260px;
  height: 120px;
  position: relative;
  top: 50%;
  left: 50%;
  background: transparent;
  transform: translate(-50%, -50%);
  transition: all 0.6s cubic-bezier(.55,0,.1,1);
  box-shadow: 0px 0px 0px ${color.white};
  cursor: pointer;
  z-index: 0;

  &:hover .one{
    transform: perspective(500px) translate3d(-90px, -50px,200px);
    opacity: 1;
  }
  &:hover .two{
    background: ${color.brightlime};
    transform: perspective(800px) translate3d(-130px, 50px,180px);
    opacity: 0.6;
 }
  &:hover .three {
    transform: perspective(800px) translate3d(130px, 50px,30px);
    opacity: 0.2;
 }
 &:hover .four{
    background: ${color.brightlime};
    transform: perspective(800px) translate3d(80px, -90px,80px);
    opacity: 0.9;
 }

  &::before{
    content: " ";
    position: absolute;
    top: -40px;
    left: -12px;
    width: 160px;
    height: 160px;
    background:transparent;
    border: solid 1px ${color.white};
    transform: perspective(800px) scale(0.4) rotate(0deg);
    transition: all 2s cubic-bezier(.55,0,.1,1);
    z-index: -1;
  }
  &::after{
    content: " ";
    position: absolute;
    top: -35px;
    left:0;
    width: 150px;
    height: 150px;
    background: ${color.white};
    transform: perspective(800px) scale(0.0) rotate(0deg);
    transition: all 2s cubic-bezier(.55,0,.1,1);
    z-index: -1;
  }
  
  &:hover::after{
    transform:perspective(800px) scale(1.0) rotate(600deg);
  }
  &:hover::before{
      transform:perspective(800px) scale(1.0) rotate(-100deg);
  }
`;

const Layer = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 40%;
  left: 45%;
  border-radius: 50px;
  transition: all 1s cubic-bezier(.55,0,.1,1);
  transform: perspective(500px), translate3d(0px, 0px,0px);
  opacity: 0.0;
  background: ${color.white};
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  word-wrap: none;
  white-space: nowrap;

  color: ${color.coal};
  font-family: 'Comfortaa', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 1px;
  text-align: center;
  text-shadow: 1px 1px 0 rgba(${color.brightlime}, 0.2);

  &:hover {
    color: ${color.coal};
    text-decoration: none;
    text-shadow: 2px 1px 0 rgba(215, 243, 109, 0.6);
  }
`;