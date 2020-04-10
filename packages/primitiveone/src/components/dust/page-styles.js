import { css } from "frontity";
import { discolight } from "../scenes/glamourmagic";

const discoListStyle = css`

  h1 {
    text-align: center;
    text-shadow: .15rem .15rem rgba(173, 216, 230, .5);
  }

  hr {
    display: block;
    margin-top: 2rem;
    margin-bottom: 2rem;
    clear:both;
  }

  .thinglist {
    display: flex;
    margin: 1rem auto;
    padding: 1rem;
    width: 90%;
    flex-wrap: wrap;
    list-style-type: none;
    
    background: #ccc;
    border-radius: .3rem;
    box-shadow: 0 0 3px rgba(0,0,0,0.6),
                0 19px 38px rgba(0,0,0,0.30),
                0 15px 12px rgba(0,0,0,0.22),
                inset 0 0 6px rgba(0,0,0,0.3);

    li {
      display: flex;
      margin: 0;
      padding: .2rem .3rem .6rem;
      min-height: 130px;
      flex: 33%;

      font-size: 1.3rem;
      font-family: 'Abril Fatface', Georgia, cursive; 
      font-weight: 700;
      color: rgba(12,17,43,1);
      text-align: center;
      align-items: center;
      justify-content: center;
      text-shadow:
        1px 0 6px #fff,
        1px 1px 0px #fff,
        7px 4px 2px rgba(0,0,0,0.3);
  
      background-color: #232b2b;
      border: solid 2px rgb(12,17,43);
    }

    li:nth-of-type(20) {
      /* will-change: background, box-shadow; */
      animation: ${discolight} 5s ease-out infinite;
      animation-direction: alternate;
    }
    li:nth-of-type(21) {
      /* will-change: background, box-shadow; */
      animation: ${discolight} 5s ease-out infinite;
      animation-direction: alternate;

    }

    li:nth-of-type(2) { animation-delay: .2s; }
    li:nth-of-type(3) { animation-delay: .4s; }
    li:nth-of-type(4) { animation-delay: .6s; }
    li:nth-of-type(5) { animation-delay: .8s; }
    li:nth-of-type(6) { animation-delay: 1s; }
    li:nth-of-type(7) { animation-delay: 1.2s; }
    li:nth-of-type(8) { animation-delay: 1.4s; }
    li:nth-of-type(9) { animation-delay: 1.6s; }

  }




  .q-wrap {
    margin : 5px 0 40px auto; 
    padding : 10px 20px 20px; 
    position : relative; 
    width : 80%; 
  } 
  .q-wrap p { margin : 0; padding : 0; }

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
  .q-style-1 blockquote { border-left: 4px solid rgba(135, 175,	78, .8);}
  .q-style-2 blockquote { border-left: 4px solid rgba(235, 150, 108, 0.8) !important; } 

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
  .q-style-1 blockquote::before, .q-style-2 blockquote::before {
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
  .q-style-2 blockquote::before {
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
    .split-col {
      column-count: 2;
    }
  }

  @media screen and (min-width: 768px) {
    .thinglist {
      width: 80%;
    }
    .split-col {
      column-count: 2;
    }
    .q-wrap {
      width : 60%; 
    }
  }

  @media screen and (min-width: 992px) {
    .split-col {
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

/* Homepage: p139 */
const pagehome = css`
  #page-139 {
    h3 {
      margin-bottom: 1.2rem;
      font-weight: bold;
      color: rgba(12, 17, 43, 0.9);

      &::after {
        content: " ";
        margin: 1.2rem auto 0 0;
        width: 5rem;
        height: 3px;
        display: block;
        background: rgba(135, 175,	78, .8) !important;
      }

      &:nth-of-type(even)::after {
        background: rgba(235, 150, 108, .8) !important;
      }
    }
  }
`;

/* Design Page: p8 */
const pagedesign = css`
  #page-8 {

    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(12, 17, 43, 0.6)),
                url(https://wp.primitivedigital.uk/wp-content/uploads/stone/aztec.png) repeat fixed;
                background-size: 400px;
                

    .thinglist {
      background: url(https://wp.primitivedigital.uk/wp-content/uploads/stone/grayrock.png);
    }

    h1 {
      width: 90%;
      padding: 2rem 0;
      margin: 1rem auto;

      font-family: 'Abril Fatface', Georgia, cursive; 
      font-size: 4.3rem;
      color: rgba(12,17,43, .9);
      text-shadow: -8px 1px 2px rgba(0,255,255, .4),
                    8px -1px 2px rgba(255,0,255, .4);


      &::after {
        content: " ";
        margin: .9rem auto .6rem;
        width: 60%;
        height: 5px;
        display: block;
        border-top: 2px solid black;
        opacity: .8;
        box-shadow: -10px 2px 5px rgba(0,255,255, .4), 10px -2px 5px rgba(255,0,255, .4);
        background-image: linear-gradient(90deg, rgba(255,0,255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
      }
      &::before {
        content: " ";
        margin: .6rem auto .6rem;
        width: 40%;
        height: 5px;
        display: block;
        border-top: 2px solid black;
        opacity: .8;
        box-shadow: -10px 2px 5px rgba(0,255,255, .4), 10px -2px 5px rgba(255,0,255, .4);
        background-image: linear-gradient(90deg, rgba(255,0,255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
      }
    }

    .list-wrap {
      margin : 5px 0 40px; 
      padding : 10px 20px 20px; 
      position : relative; 
      width: 50%; 
      float: left;

      text-align: center;

      h2 {
        position: relative;
        font-family: 'Playfair Display'; 
        color: #000;
        font-size:  5rem;
        line-height: 4.5rem;
        letter-spacing: 2px;
        font-weight: 400;
        text-shadow: 1px 1px 0 rgba(255,255,255, 0.6), 
        0px 1px 0 rgba(255,255,255, 0.6),
        1px 0px 0 rgba(255,255,255, 0.6),
        -1px -1px 0 rgba(255,255,255, 0.6),
        -0px -1px 0 rgba(255,255,255, 0.6),
        -1px -0px 0 rgba(255,255,255, 0.6);
        
        span {
          width: 100%;
          display: block;
          font-size:  2rem;
          color: #fff;
          font-family: 'Pacifico';
          text-shadow: -2px 1px 2px rgba(0,255,255,.4), 2px -1px 2px rgba(255,0,255,.4);
        }

        &::before {
          content: " ";
          display: block;
          width: 4rem;
          height: 12rem;
          position: absolute;
          top: 2rem;
          left: 1.5rem;
          border-top: 1px solid #fff;
          border-left: 1px solid #fff;
          box-shadow: -2px -1px 2px rgba(0,255,255,.4), -1px -2px 2px rgba(255,0,255,.4);
        }
      }
      h3 {
        margin-top: 0;
        margin-bottom: 3rem;
        padding-top: 0;
        font-size:  5rem;
        line-height: 4.5rem;
        letter-spacing: 2px;
        color: #000;
        text-shadow: 1px 1px 0 rgba(255,255,255, 0.6), 
          0px 1px 0 rgba(255,255,255, 0.6),
          1px 0px 0 rgba(255,255,255, 0.6),
          -1px -1px 0 rgba(255,255,255, 0.6),
          -0px -1px 0 rgba(255,255,255, 0.6),
          -1px -0px 0 rgba(255,255,255, 0.6);

        span {
          width: 100%;
          display: block;
          font-size:  2rem;
          color: #fff;
          font-family: 'Pacifico';
          text-shadow: -2px 1px 2px rgba(0,255,255,.4), 2px -1px 2px rgba(255,0,255,.4);
        }

        &::after {
          content: " ";
          display: block;
          width: 4rem;
          height: 12rem;
          position: absolute;
          top: 6rem;
          right: 1.5rem;
          border-bottom: 1px solid #fff;
          border-right: 1px solid #fff;
          box-shadow: 2px 1px 2px rgba(0,255,255,.4), 1px 2px 2px rgba(255,0,255,.4);
        }
      }

      ul {
        margin: 2rem;
        padding: 1rem;
        background: rgba(255,255,255,0.5);
        border: 2px solid #212529;
      }

      li {
        margin: 0;
        padding: .2rem .5rem;
        font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
        font-size: 1.5rem;
        line-height: 1.5;
        list-style: none;
        color: #212529;
        text-shadow: 1px 1px 0 rgba(255,255,255, 0.6);
        
      }
      li:last-of-type {
        padding: 1rem;
        font-size: 1rem;
        font-family: "Pacifico";
      }

      /* end list-wrap */
    } 

    .q-wrap {
      margin : 9rem 0 40px; 
      padding : 10px 20px 20px; 
      position : relative; 
      width : 50%; 
      float: right;

      blockquote {
        border-left: 4px solid rgba(1, 255, 137, 0.6) !important;

        p {
          padding: .5rem 0;
          line-height: 4rem;
          background: rgba(255,255,255,0.6);
          /* box-shadow: 0 -6px 0 rgba(122, 95, 255, 0.8); */
          box-shadow: 0 -6px 0  rgba(1, 255, 137, 0.6);
          color: #212529;
          white-space: pre-wrap;
          text-shadow: 0 1px 1px rgba(255,255,255,0.5);
          border-width: 0.5rem 0;

          span {
            display: inline-block;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          &::after {
            content: "";
            position: absolute;
            top: -0.5rem;
            right: 100%;
            bottom: -0.5rem;
            width: 0.5rem;
          }


        }

        

        cite {
          font-size: 1.8rem;
          color: rgba(1, 255, 137, 0.6);
          text-shadow: 0 1px 1px rgba(0,0,0,0.5);
        }
      
        &::after {
          background: rgba(1, 255, 137, 0.6);
        }
      }

      
    } 

    
  }
`;

// https://codepen.io/hxd/pen/aLpbh

/* Development Page: p1904 */
const pagedev = css`
#page-1904 {

  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(12, 17, 43, 0.6)),
              url(https://wp.primitivedigital.uk/wp-content/uploads/stone/aztec.png) repeat fixed;
              background-size: 400px;
              
  .thinglist {
    background: url(https://wp.primitivedigital.uk/wp-content/uploads/stone/brownrock.png);
  }

  h1 {
    width: 90%;
    padding: 2rem 0;
    margin: 1rem auto;

    font-family: 'Abril Fatface', Georgia, cursive; 
    color: rgba(12,17,43, .9);
    text-shadow: -8px 1px 2px rgba(0,255,255, .4),
                  8px -1px 2px rgba(255,0,255, .4);


    &::after {
      content: " ";
      margin: .9rem auto .6rem;
      width: 60%;
      height: 5px;
      display: block;
      border-top: 2px solid black;
      opacity: .8;
      box-shadow: -10px 2px 5px rgba(0,255,255, .4), 10px -2px 5px rgba(255,0,255, .4);
      background-image: linear-gradient(90deg, rgba(255,0,255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
    }
    &::before {
      content: " ";
      margin: .6rem auto .6rem;
      width: 40%;
      height: 5px;
      display: block;
      border-top: 2px solid black;
      opacity: .8;
      box-shadow: -10px 2px 5px rgba(0,255,255, .4), 10px -2px 5px rgba(255,0,255, .4);
      background-image: linear-gradient(90deg, rgba(255,0,255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
    }
  }
}

`;

const pageall = css`

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


#page-1904 h1,
#page-2102 h1,
#page-2128 h1 {
  padding: 2rem 0 2rem;
  margin: 0 15% 1.5rem;
  font-size: 4rem;
}

#page-1904 h1::after,
#page-2102 h1::after,
#page-2128 h1::after {
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
    pagehome,
    pagedesign,
    pageall
  ]);

export default pageStyles;