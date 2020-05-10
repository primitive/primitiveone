import { css } from "frontity";
import convert from 'color-convert';


// https://getbootstrap.com/docs/4.0/utilities/text/
// const themeClasses = colors => css``;

const themeClasses = colors => css`

  /* target wp classes */

  .has-text-align-left,
  .wp-block-image .alignleft {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .has-text-align-center,
  .wp-block-image .aligncenter {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: justify;
  }

  /* custom global classes */
  
  /* sk-dev: test !important override */

  .fleuron { 
    font-size: 3rem;
    color:  rgba(${ convert.hex.rgb(colors.bs.primary).join()}, .6) !important;

    a {
      color:  rgba(${ convert.hex.rgb(colors.bs.warning).join()}, .6) !important;
      text-decoration: none;
      background: transparent !important;
      border: none !important;

      &::hover {
        color:  rgba(${ convert.hex.rgb(colors.bs.danger).join()}, .6) !important;
        background: transparent !important;
        border: none !important;
      }
    }
  }

  .fleuron.has-text-align-center {
    margin-top: 2.5rem;
    text-align: center;
    
    a {
      vertical-align: middle;
      line-height: 3rem;
    }

    em {
      display: inline-block;
      color:  ${ colors.coal };
      font-size: .5rem;
      letter-spacing: 2px;
      vertical-align: middle;
      line-height: 3rem;
    }
  }

`;


export default themeClasses;