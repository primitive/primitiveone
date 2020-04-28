import { css } from "frontity";
import convert from 'color-convert';

// p1: hello world

// do i need the .post to not overide global a?
const postall = colors => css`

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
    }
  }

  .blurb {
    padding: 1rem 1.2rem;
    font-family: 'Hepta Slab', Georgia, 'Times New Roman', Times, serif;
    font-size: 2rem;
    color: ${colors.bs.primary};

    a {
      color: ${colors.bs.secondary};
    }
  }

  .panache {
    font-family: Baskerville, Georgia, serif; 
    padding: .5rem 5% .1rem;
    font-size: 1.6rem;
    color:  rgba(${ convert.hex.rgb(colors.coal).join()}, .7);

    strong, a {
      color: ${colors.bs.primary};
    }
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
      opacity: .8;

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

    &:hover {
      background-color: ${colors.bs.primary};
      border: 1px solid ${colors.bs.primary};
      max-width: 360px;
    }
    &:active {
      text-shadow: 1px 1px 0px rgba(${ convert.hex.rgb(colors.coal).join()}, .3);
      max-width: 360px;
    }
  }
    

`;

// target wp classes
const wpclasses = css`    
    .has-text-align-left {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .has-text-align-center {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }
`;

const postStyles = colors =>
  css([
    postall(colors),
    wpclasses
  ]);

export default postStyles;