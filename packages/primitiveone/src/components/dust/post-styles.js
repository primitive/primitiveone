import { css } from "frontity";
import convert from 'color-convert';

// p1: hello world

// do i need the .post to not overide global a?
const postall = colors => css`

  .post {

    /* sk-dev: nested overrides */
  
    /* sk-dev: issue - adjacent a tags have no padding */
    /* sk-dev: test direct selectors */

    h2 { margin-top: 2rem; }

    p > a, strong > a {
      margin-left: .25rem;
      margin-right: .25rem;
      color: inherit;
      border-bottom: 2px solid ${colors.bs.warning};
      background-image: linear-gradient(120deg, ${colors.bs.warning} 0%, ${colors.bs.warning} 100%);
      background-repeat: no-repeat;
      background-size: 100% 0.0em;
      background-position: 0 100%;
      transition: background-size 0.125s ease-in;

      &:hover {
        text-decoration: none;
        background-size: 100% 100%;
        color: black;
      }
    }


    .intro {
      font-family: 'Comfortaa', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
      text-align: center;
      padding: 3px 5%;
      font-size: 1.3rem;
    }

    .hello {
      padding: 1rem 1.2rem;
      font-family: 'Hepta Slab', Georgia, 'Times New Roman', Times, serif;
      font-size: 2rem;
      color: ${colors.coal};

      a {
        color: ${colors.bs.secondary}; 
        border-bottom: none;
        background: none;
        transition: all 0.125s ease-in;

        &:hover {
          text-decoration: none;
          background: none;
          color: ${colors.bs.danger}; 
        }
      }
    }

    .blurb {
      padding: 1rem 1.2rem;
      font-size: 2rem;
      font-family: 'Hepta Slab', Georgia, 'Times New Roman', Times, serif;
      color: ${colors.bs.primary};
  
      a {
        color: ${colors.bs.primary}; 
        border-bottom: none;
        background: none;
        transition: all 0.125s ease-in;

        &:hover {
          text-decoration: none;
          background: none;
          color: ${colors.bs.info}; 
        }
      }
    }

    .panache {
      padding: .5rem 5% .1rem;
      font-size: 1.6rem;
      font-family: Baskerville, Georgia, serif; 
      color:  rgba(${ convert.hex.rgb(colors.coal).join()}, .7);
          
      strong, a {
        color: ${colors.bs.primary}; 
        border-bottom: none;
        background: none;
        transition: all 0.125s ease-in;

        &:hover {
          text-decoration: none;
          background: none;
          color: ${colors.bs.warning}; 
        }
      }
    }

    .heading {
      padding-top: 2rem;
      padding-bottom: 2rem;
      text-align: center;
      font-size: 2.5rem;
    }

    .news {
      font-size: 1.5rem;
    }
    
    /* end .post wrap - increased css specificity */
  }




  

  .circle-primary {
    padding: 2rem 1rem 2rem 1rem;;
    position: relative;
    left: -2rem;
    font-family: 'Hepta Slab';
    font-size: 1.3rem;
    text-shadow: 1px 1px 0 rgba(${ convert.hex.rgb(colors.disco.neongreen).join()}, .3);

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -0.3rem;
      left: -1rem;
      width: 6rem;
      height: 6rem;
      border-radius: 50px;
      background-color: rgba(${ convert.hex.rgb(colors.bs.primary).join()}, .2);
    }
  }

  
  .circle-secondary {
    padding: 2rem 1rem 2rem 1rem;;
    position: relative;
    left: -2rem;
    font-family: 'Hepta Slab';
    font-size: 1.3rem;
    text-shadow: 1px 1px 0 rgba(${ convert.hex.rgb(colors.disco.neongreen).join()}, .3);

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -0.3rem;
      left: -1rem;
      width: 6rem;
      height: 6rem;
      border-radius: 50px;
      background-color: rgba(${ convert.hex.rgb(colors.bs.secondary).join()}, .2);
    }
  }

  .circle-danger {
    padding: 2rem 1rem 2rem 1rem;;
    position: relative;
    left: -2rem;
    font-family: 'Hepta Slab';
    font-size: 1.3rem;
    text-shadow: 1px 1px 0 rgba(${ convert.hex.rgb(colors.bs.warning).join()}, .3);

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -0.3rem;
      left: -1rem;
      width: 6rem;
      height: 6rem;
      border-radius: 50px;
      background-color: rgba(${ convert.hex.rgb(colors.bs.danger).join()}, .2);
    }
  }

  .circle-warning {
    padding: 2rem 1rem 2rem 1rem;;
    position: relative;
    left: -2rem;
    font-family: 'Hepta Slab';
    font-size: 1.3rem;
    text-shadow: 1px 1px 0 rgba(${ convert.hex.rgb(colors.bs.danger).join()}, .3);

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -0.3rem;
      left: -1rem;
      width: 6rem;
      height: 6rem;
      border-radius: 50px;
      background-color: rgba(${ convert.hex.rgb(colors.bs.warning).join()}, .2);
    }
  }
  

  .btn {
    display: block;
    max-width: 300px;
    margin: 2rem auto;

    a {
      display: block;
      padding: .5rem;
      color: ${colors.white};
      font-size: 1.2rem;
      text-align: center;
      text-decoration: none;
      border: none;
      background: transparent;
      opacity: .9;

      &:hover {
        color: ${colors.white};
        opacity: 1;
      }

    }

    &:hover a {
      color: ${colors.white};
      opacity: 1;
    }
  }

  .btn-primary {
    text-shadow: 2px 2px 2px rgba(${ convert.hex.rgb(colors.coal).join()}, .2);
    background-color: ${colors.bs.primary};
    border: 1px solid ${colors.bs.primary};
    border-left: 5px solid ${colors.bs.primary};
    transition: all .5s ease-in-out;

    &:hover, &:active, &:focus {
      background-color: ${colors.bs.primary};
      border: 1px solid ${colors.bs.primary};
      max-width: 360px;
    }

  }
    

`;

// target wp classes
const wpclasses = colors => css`    

    .overlay-text figure {
      position: relative;
      
      figcaption {
        padding: 1rem;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-family: "Playfair Display";
        font-size: 5rem;
        color: black;
        text-align: center;
        mix-blend-mode: screen;
        background-color: rgba(244, 220, 211, .8);
      }
    }

    .equation figure {
      overflow: hidden;
      border-radius: 150px 15px 150px 15px/15px 150px 15px 150px;
      box-shadow: 0 2px 2.2px rgba(0,0,0,0.034), 
                  0 6px 5.3px rgba(0,0,0,0.048), 
                  0 12px 10px rgba(0,0,0,0.06);

        figcaption {
          
          padding: .5rem 1.5rem 1.5rem;
          font-family: "Amatic SC";
          font-size: 2rem;
          text-align: center;
          color: black;
          text-shadow: 1px 12px 0 rgba(255,255,255,.8);
        }
    }
    .wp-block-image {
      margin-bottom: 1.5rem; 
    }

    blockquote.has-text-align-center {

      position: relative;

      cite {
        font-family: "Comfortaa";
        font-size: .7rem;
        letter-spacing: 3px;

        a {
          color: ${colors.gray};
          font-weight: bold;
          text-decoration: none;
        }
      }
      
      &::before {
        content: "";
        display: block;
        height: 135px;
        width: 240px;
        position: absolute;
        left: -243px;
        top: 0;
        background-image: url("https://media.giphy.com/media/aTGwuEFyg6d8c/giphy.gif");
        background-size: contain;
        background-repeat: no-repeat;

        opacity: .8;
      }
      
    }

`;

const postStyles = colors =>
  css([
    postall(colors),
    wpclasses(colors)
  ]);

export default postStyles;