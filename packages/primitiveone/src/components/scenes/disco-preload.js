// based on codepen by Maryam
// https://codepen.io/maryamali/pen/aQMEep

import React from 'react';
import { styled, css } from "frontity";
import { grow } from "./glamourmagic";

const DiscoLoader = ({message}) => {

  return (
    <StyledDiscoLoader>
      <div><p>{ message ? message : "loading..." }</p></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </StyledDiscoLoader>
  )
};

export default DiscoLoader;

const StyledDiscoLoader = styled.div`
  ul{
    margin:0 auto;
    padding:0;
    display:flex;
    justify-content: center;
  }
  ul li {
    list-style:none;
    width: 30px;
    height: 30px;
    background:#fff;
    border-radius:50%;
    animation: ${grow} 1.6s ease-in-out infinite;
  }

  ul li:nth-of-type(1){
    animation-delay:-1.4s;
    background:#ffff00;
    box-shadow:0 0 30px #ffff00;
  }
  ul li:nth-of-type(2){
    animation-delay:-1.2s;
    background:#76ff03;
    box-shadow:0 0 30px #76ff03;
    
  }
  ul li:nth-of-type(3){
    animation-delay:-1s;
    background:#f06292;
    box-shadow:0 0 30px #f06292;
    
  }
  ul li:nth-of-type(4){
    animation-delay:-0.8s;
    background:#4fc3f7;
    box-shadow:0 0 30px #4fc3f7;
    
  }
  ul li:nth-of-type(5){
    animation-delay:-0.6s;
    background:#ba68c8;
    box-shadow:0 0 30px #ba68c8;
    
  }
  ul li:nth-of-type(6){
    animation-delay:-0.4s;
    background:#f57c00;
    box-shadow:0 0 30px #f57c00;
    
  }

`;
