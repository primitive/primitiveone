import React from 'react';
import { styled, css } from "frontity";
import { rotateDiscoBall, rotateDiscoBallMiddle, reflect } from "./glamourmagic";

// nod to original concept by Marty: https://codepen.io/okra/pen/fDuzC

const JungleDiscoBall = () => {

  // do math
  const radius = 50;
  const squareSize = 10;
  const prec = 19.55;
  const fuzzy = 0.001;
  const inc = (Math.PI - fuzzy) / prec;

  let discoBall = <></>;
  let discoTiles = [];

  let t = 1;
  for (t = fuzzy; t < Math.PI; t += inc) {

    let z = radius * Math.cos(t);
    let currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
    let circumference = Math.abs(2 * Math.PI * currentRadius);
    let squaresThatFit = Math.floor(circumference / squareSize);
    let angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;

    //let discoTiles;
    let fkey = 1;
    for (var i = angleInc / 2 + fuzzy; i < (Math.PI * 2); i += angleInc) {

      //squareTile.style.width = squareSize + "px";
      //squareTile.style.height = squareSize + "px";
      //squareTile.style.transformOrigin = "0 0 0";
      //squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
      //square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";


      //squareTileStyles = "width:" + squareSize + "px;";
      //squareTileStyles += "width:" +  squareSize + "px;";
      //squareTileStyles += "transform:rotate(" + i + "rad) rotateY(" + t + "rad);";
      //squareTileStyles += "transform-origin:0 0 0;";
      //squareTile.style.animation = "reflect 2s linear infinite";
      //squareTile.style.animationDelay = String(randomNumber(0,20)/10) + "s";
      //squareTile.style.backfaceVisibility = "hidden";

      let tilebg;
      if((t>1.3 && t<1.9) || (t<-1.3 && t>-1.9)) {
        tilebg = randomColor("bright");
      }
      else {
        tilebg = randomColor("any");
      }
      
      let x = radius * Math.cos(i) * Math.sin(t);
      let y = radius * Math.sin(i) * Math.sin(t);

      let square = <Square
          className="square"
          key={t+'-1-'+fkey}
          width={squareSize + 'px'}
          height={squareSize + 'px'} 
          transformorigin="0 0 0"
          transform={"rotate(" + i + "rad) rotateY(" + t + "rad) translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)"}
        >

        <Tile
            className="squareTile"
            key={t+'-2-'+fkey}
            width={squareSize + 'px'}
            height={squareSize + 'px'} 
            transformorigin="0 0 0"
            transform={"rotate(" + i + "rad) rotateY(" + t + "rad)"}
            bgcolor={tilebg}
            animationdelay={String(randomNumber(0,20)/10) + "s"}
            backface="hidden"
          >
        </Tile>
      </Square>;

      discoTiles.push(square);
      fkey++;
    }

    //discoBall = <>{discoTiles}</>
    //console.log(discoBall);
  }

  function randomColor(type) {
    let r;
    if (type == "bright") { r = randomNumber(130, 255); }
    else { r = randomNumber(110, 190); }

    return "rgb(" + r + "," + r + "," + r + ")";
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <StyledDiscoBall>

      <DiscoBallLight></DiscoBallLight>
      <DiscoBall>

        <DiscoBallMiddle></DiscoBallMiddle>
        <>
          {discoTiles}
        </>

      </DiscoBall>

    </StyledDiscoBall>
  )
};

export default JungleDiscoBall;

const background = (top, bottom) => css`
  background: linear-gradient( to bottom,${top} 0%,${bottom} 100% );  
`

const Square = styled('div')`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  transform-origin: ${props => props.transformorigin || "0 0 0"};
  transform: ${props => props.transform || "none"};
`
const Tile = styled('div')`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  transform-origin: ${props => props.transformorigin || "0 0 0"};
  transform: ${props => props.transform || "none"};
  background-color: ${props => props.bgcolor || "#ccc"};
  animation: ${reflect} 2s linear infinite;
  animation-delay: ${props => props.animationdelay || "none"};
  backface-visibility: ${props => props.backface || "hidden"};
`

const StyledDiscoBall = styled.div`
  height: 300px;
  position: relative;

  .square {
    transform-style: preserve-3d;	
    position: absolute;
    top: 50px;
    left: 50px;
  }
`;

const DiscoBallLight = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -50px; 
  border-radius: 100%;
  background-color: white; 
  opacity: 0.2;
  -webkit-filter: blur(20px);
`;

const DiscoBallMiddle = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  background-color: #111;
  position: absolute;
  ${background("#333", "#111")};
  animation: ${rotateDiscoBallMiddle} 18s linear infinite;
`;

const DiscoBall = styled.div`
  transform-style: preserve-3d;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -50px;
  animation: ${rotateDiscoBall} 18s linear infinite;
`;
