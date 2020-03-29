import { css } from "frontity";
import { discolight } from "../scenes/glamourmagic";

const discoListStyle = css`

  h1 {
    padding: 2rem;
    font-size: 4rem;
    text-align: center;
    overflow: hidden;
  }

  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: block;
    clear:both;
  }

  .glowball {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow:
        inset 0 0 50px #fff,      /* inner white */
        inset 20px 0 80px #f0f,   /* inner left magenta short */
        inset -20px 0 80px #0ff,  /* inner right cyan short */
        inset 20px 0 300px #f0f,  /* inner left magenta broad */
        inset -20px 0 300px #0ff, /* inner right cyan broad */
        0 0 50px #fff,            /* outer white */
        -10px 0 80px #f0f,        /* outer left magenta */
        10px 0 80px #0ff;         /* outer right cyan */
  }

  .thinglist {
    margin: 1rem auto;
    padding: .5rem;
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    background: #ccc;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

    li {
      margin: 0;
      padding: .2rem .3rem .6rem;
      min-height: 130px;
      display: flex;
      flex: 33%;
      font-size: 1.3rem;
      font-family: 'Abril Fatface', Georgia, cursive; 
      font-weight: 700;
      text-align: center;
      align-items: center;
      justify-content: center;
      text-shadow:
        1px 0 6px #fff,
        1px 1px 0px #fff,
        7px 4px 2px rgba(0,0,0,0.3);
  
      background-color: #232b2b;
      border: solid 1px rgb(12,17,43);

    }

    li:nth-of-type(odd) {
      animation: ${discolight} 6s ease-out infinite;
      animation-direction: alternate;
    }
    li:nth-of-type(even) {
      animation: ${discolight} 6s ease-out infinite;
      animation-direction: alternate;

    }
    li:nth-of-type(2) {
      animation-delay: .3s;
    }
    li:nth-of-type(3) {
      animation-delay: .6s;
    }
    li:nth-of-type(4) {
      animation-delay: .9s;
    }
    li:nth-of-type(5) {
      animation-delay: 1.2s;
    }
    li:nth-of-type(6) {
      animation-delay: 1.5s;
    }
    li:nth-of-type(7) {
      animation-delay: 1.8s;
    }
    li:nth-of-type(8) {
      animation-delay: 2.1s;
    }
    li:nth-of-type(9) {
      animation-delay: 2.4s;
    }




  }




  .q-wrap {
    margin : 5px 0 40px auto; 
    padding : 10px 20px 20px; 
    position : relative; 
    width : 80%; 
  } 
  .q-wrap p {
    margin : 0; 
    padding : 0; 
  }
  .q-wrap blockquote {
    margin : 0; 
    padding : 0; 
    padding-top : 150px; 
    position : relative; 
    padding-left: 1.5rem;
    background-color: transparent !important;
  } 
  .q-wrap cite {
    padding: 3px 6px 3px 20px;
    font-size : 1.5rem; 
    font-style : normal;
    font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  } 
  .q-style-1 blockquote {
    border-left: 4px solid rgba(135, 175,	78, .8) !important;
  }
  .q-style-2 blockquote {
    border-left: 4px solid rgba(235, 150, 108, 0.8) !important;
  } 
  .q-style-1 blockquote:after, .q-style-2 blockquote:after {
      background: none repeat scroll 0 0 rgba(135, 175,	78, 0.8);
      border-radius: 50% 50% 50% 50%;
      color: rgba(255, 255, 255, 0.5);
      content: "❞";
      font-family: 'icons';
      font-size: 70px;
      height: 130px;
      left: 50%;
      line-height: 130px;
      margin-left: -65px;
      position: absolute;
      text-align: center;
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);
      top: 0;
      width: 130px;
  }
  .q-style-1 blockquote:before, .q-style-2 blockquote:before {
      border-left: 5px solid rgba(135, 175,	78, .1) !important;
      border-radius: 50% 50% 50% 50%;
      content: "";
      height: 500px;
      left: -50px;
      position: absolute;
      top: 0;
      width: 500px;
      z-index: -1;
  }
  .q-style-2 blockquote:after {
    background: none repeat scroll 0 0 rgba(235, 150, 108, 0.8);
  }
  .q-style-2 blockquote:before {
    border-left: 5px solid rgba(235, 150, 108, 0.1) !important;
  }
  .q-style-1 blockquote p,
  .q-style-2 blockquote p {
    background : none repeat scroll 0 0 rgba(255, 255, 255, 0.5); 
    box-shadow : 0 -6px 0 rgba(135, 175,	78, 0.2); 
    color : rgba(135, 175,	78, 0.8); 
    display : inline; 
    font-family : Baskerville, Georgia, serif; 
    font-style : italic; 
    font-size : 28px; 
    line-height : 46px; 
    text-shadow : 0 1px 1px rgba(255, 255, 255, 0.5);  
  } 
  .q-style-2 blockquote p {
    box-shadow : 0 -6px 0 rgba(235, 150, 108, 0.2); 
    color : rgba(235, 150, 108, 0.8); 
  }

  

  @media screen and (min-width: 576px) {
    .thinglist {
      column-count: 2;
    }
  }

  @media screen and (min-width: 768px) {
    .thinglist {
      width: 80%;
      column-count: 2;
    }
    .q-wrap {
      width : 60%; 
    }
  }

  @media screen and (min-width: 992px) {
    .thinglist {
      column-count: 2;
    }
  }

`;

// p139: homepage
// p8: design
// p1904: dev
// p2102: data
// p2128: marketing
// p2136: housekeeping

/* Homepage */
const page139 = css`
  #page-139 {
    h3 {
      margin-bottom: 1.2rem;
      font-weight: bold;
      color: rgba(12, 17, 43, 0.9);

      &:after {
        content: " ";
        margin: 1.2rem auto 0 0;
        width: 5rem;
        height: 3px;
        display: block;
        background: rgba(135, 175,	78, .8) !important;
      }

      &:nth-of-type(even):after {
        background: rgba(235, 150, 108, .8) !important;
      }
    }
  }
`;


const page8 = css`

#page-1 a {
  color: #87af4e;
  font-weight: bold;
  text-decoration: none;
}
#page-1 a:hover {
  color: plum;
  text-decoration: underline;
}

#page-2 h1 {
  padding: 2rem 2rem 2rem 1rem;
  font-size: 4rem;
  text-align: left;
}

#page-8 h1,
#page-1904 h1,
#page-2102 h1,
#page-2128 h1 {
  padding: 2rem 0 2rem;
  margin: 0 15% 1.5rem;
  font-size: 4rem;
}
#page-8 h1:after,
#page-1904 h1:after,
#page-2102 h1:after,
#page-2128 h1:after {
  content: " ";
  margin-top: .6rem;
  width: 100%;
  height: 6px;
  display: block;
  /* 
  this has issues on chrome iOS
  animation: underline-gradient 6s linear infinite; */
  background-image: linear-gradient(90deg, rgba(122, 95, 255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
}

`;


const pageStyles = colors =>
  css([
    //elementBase(colors),
    discoListStyle,
    page139,
    page8
  ]);

export default pageStyles;