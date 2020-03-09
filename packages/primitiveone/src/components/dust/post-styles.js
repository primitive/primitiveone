import { css } from "frontity";

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


const pageStyles = colors =>
  css([
    //elementBase(colors),
    discoListStyle
  ]);

export default pageStyles;