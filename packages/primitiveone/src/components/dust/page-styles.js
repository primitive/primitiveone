import { css } from "frontity";



const discoListStyle = css`

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
    padding: 1rem;
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    column-count: 1;
  }

  .thinglist li {
    margin: 3px;
    padding: .2rem .3rem .6rem;
    display: block;
    font-size: 1.3rem;
    font-family: 'Pacifico', Georgia, cursive; 
    text-align: center;

    min-height: 100px;
    background-color: #fff;
    border: solid 2px #fff;
    box-shadow:
        inset 60px 0 120px #f0f,  /* left magenta */
        inset -60px 0 120px #0ff; /* right cyan */
  }

  .thinglist li:nth-of-type(odd) {

      height: 100px;
      background-color: #fff;
      border: solid 2px #fff;
      box-shadow:
          inset 60px 0 120px #f0f,  /* left magenta */
          inset -60px 0 120px #0ff; /* right cyan */

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

    .post figure.wp-block-image {
      width: 40%;
      display: inline-block;
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