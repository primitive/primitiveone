import { keyframes } from "frontity";

const colour = {
  bounce: "blue"
}

// animation: jump 1s infinite;
//<ul css={css`&:hover {animation: ${jump} 1s ease-in-out infinite;}`}>
const jump = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -10px, 0);
  }
  70% {
    transform: translate3d(0, -5px, 0);
  }
  90% {
    transform: translate3d(0,-2px,0);
  }
`;

// animation: heartbeat 1.2s infinite;
const heartbeat = keyframes`
  0% {
    transform: scale( .75 );
  }
  20% {
    transform: scale( 1 );
  }
  40% {
    transform: scale( .75 );
  }
  60% {
    transform: scale( 1 );
  }
  80% {
    transform: scale( .75 );
  }
  100% {
    transform: scale( .75 );
  }
`;

// animation: sonar 1.5s infinite;
const sonar = keyframes`
  0% {
    transform(scale(.9));
  }
  70% {
    transform(scale(1));
    box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
  }
  100% {
    transform(scale(.9));
    box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
  }
`;

// animation: flash linear 1s infinite;
const flash = keyframes`
	0% { opacity: 1; } 
	50% { opacity: .1; } 
	100% { opacity: 1; }
`;

const pop = keyframes`
  0% {
    box-shadow: 0 0 0 4px ${colour.bounce};
    opacity: 1;
    transform: scale(1);
  }
  25% {
    box-shadow: 0 0 0 1px ${colour.bounce};
    opacity: 1;
    transform: scale(0.97);
  }
  50% {
    box-shadow: 0 0 0 7px ${colour.bounce};
    opacity: 1;
    transform: scale(1.01);
  }
  75% {
    box-shadow: 0 0 0 4px ${colour.bounce};
    opacity: 1;
    transform: scale(1);
  }
  100% {
    box-shadow: 0 0 0 5px ${colour.bounce};
    opacity: 1;
  }
`;

const animatedgradient = keyframes`
  0% {
    background-size: 100%;
    background-position: 0% 50%;
  }
  50% {
    background-size: 200%;
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
    background-size: 300%;
  }
`;

// animation: ${underlinewoosh} 6s linear infinite;
const underlinewoosh = keyframes`
  0% {
    transform: translate3d(0%, 0%, 0);
  }
  100% {
    transform: translate3d(-75%, 0%, 0);
  }
`;

// animation: ${grow} 1.6s ease-in-out infinite;
const grow = keyframes`
  0% , 40% , 100% {
    transform:scale(0.2);
  }
  20%{
    transform:scale(1);
  }
`;

// Disco
const rotateDiscoBall = keyframes`
  0% {
    transform: rotateX(90deg) rotateZ(0deg) rotate(0deg);
  }
  100% {
    transform: rotateX(90deg) rotateZ(360deg) rotate(0deg);
  }
`;

const rotateDiscoBallMiddle = keyframes`
  0% {
    transform: rotateX(90deg) rotateY(0deg) rotate(0deg);
  }
  100% {
    transform: rotateX(90deg) rotateY(-360deg) rotate(0deg);
  }
`;

const reflect = keyframes`
  0% {opacity: 1;}
  50% {opacity: 0.4;}  
  100% {opacity: 1;}  
`;

const glowball = keyframes`
	0% {
		box-shadow: 0 0 15px 8px rgba(231, 250, 140, 1);
	}
	100% {
		box-shadow: 0 0 15px 8px rgba(231, 250, 140, 0);
	}
`;



/* 348413 magenta, #702904 green, */

const rainbow = {
  green: '#348413',
  yellow: '#f5e527',
  pink: '#ed22a5',
  blue: '#06b6f1'
};

const iCanSingA = function(obj) {
  const keys = Object.keys(obj);
  let rand = obj[keys[ keys.length * Math.random() << 0]];
  return [rand, rand, rand]
};
//const singA = iCanSingA(rainbow);

function hexToRGB(h,a) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return "rgba("+ +r + "," + +g + "," + +b + "," + a + ")";
}


const discolight = keyframes`
{
  0% {
      background: ${ hexToRGB(iCanSingA(rainbow)[0], '.1') };
      box-shadow:
      inset 0 0 130px ${iCanSingA(rainbow)[0]},
      inset 0 0 70px ${iCanSingA(rainbow)[0]}; 
    }

  25%  {
    background: ${ hexToRGB(iCanSingA(rainbow)[1], '.6') };
    box-shadow:
    inset 0 0 140px ${iCanSingA(rainbow)[1]},
    inset 0 0 100px ${iCanSingA(rainbow)[1]}; 
   }
  50%  {
    box-shadow:
    inset 0 0 140px ${iCanSingA(rainbow)[1]},
    inset 0 0 90px ${iCanSingA(rainbow)[1]};
  }
  50%  {
    box-shadow:
    inset 0 0 130px ${iCanSingA(rainbow)[1]},
    inset 0 0 70px ${iCanSingA(rainbow)[1]};
  }
  100% {
    background: ${ hexToRGB(iCanSingA(rainbow)[2], '.5') };

    box-shadow:
    inset 0 0 130px ${iCanSingA(rainbow)[2]},
    inset 0 0 90px ${iCanSingA(rainbow)[2]}; 
  }
}
`;

const stripedbg = keyframes`
	100% { 
		background-position: 20px 0, 20px 0, 20px 0;
	}
`;


// DataMap 

const africa = keyframes`
  0% {
    background-color: #eaf803;
  }
  100% {
    background-color: #222;
  }
`;

const asia = keyframes`
  0% {
    background-color: orange;
  }
  100% {
    background-color: #222;
  }
`;

const australia = keyframes`
  0% {
    background-color: rgb(122, 95, 255);
  }
  100% {
    background-color: #222;
  }
`;

const europe = keyframes`
  0% {
    background-color: pink;
  }
  100% {
    background-color: #222;
  }
`;

const northamerica = keyframes`
  0% {
    background-color: #87af4e;
  }
  100% {
    background-color: #222;
  }
`;

const southamerica = keyframes`
  0% {
    background-color: rgb(1, 255, 137);
  }
  100% {
    background-color: #222;
  }
`;

export { jump, heartbeat, sonar, flash, pop, animatedgradient, underlinewoosh, grow, rotateDiscoBall, rotateDiscoBallMiddle, reflect, glowball, discolight, stripedbg, africa, asia, australia, europe, northamerica, southamerica };
