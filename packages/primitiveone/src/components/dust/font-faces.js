  
import React from "react";
import { Global, css, connect } from "frontity";

// sk-dev: WEBFONTS REFINE/STANDARD
// https://community.frontity.org/t/frontity-release-4-november-2019/795
/* only include latin for now */
/* Kudos to: Google Fonts & http://google-webfonts-helper.herokuapp.com/ */
/* 500/600/900 = normal/bold/heavy - theses are headers so not used 400 for normal */

// CDN URL: https://fonts.googleapis.com/css?family=
// Abril+Fatface|
// Amatic+SC|
// Comfortaa|
// Hepta+Slab|
// Pacifico|
// Playfair+Display:700|Slabo+27px

// 'Playfair Display', Georgia, cursive;


// Import your own font files.
import heptaSlab from "../../fonts/hepta-slab/hepta-slab-v7-latin-500.woff2";
import heptaSlabBold from "../../fonts/hepta-slab/hepta-slab-v7-latin-700.woff2";
import heptaSlabBlack from "../../fonts/hepta-slab/hepta-slab-v7-latin-900.woff2";

import heptaSlabSVG from "../../fonts/hepta-slab/hepta-slab-v7-latin-500.svg";

import amatic from "../../fonts/amatic-sc/amatic-sc-v13-latin-regular.woff2";
import amaticBold from "../../fonts/amatic-sc/amatic-sc-v13-latin-700.woff2";

import playfair from "../../fonts/playfair-display/playfair-display-v20-latin-500.woff2";
import playfairBold from "../../fonts/playfair-display/playfair-display-v20-latin-700.woff2";
import playfairBlack from "../../fonts/playfair-display/playfair-display-v20-latin-900.woff2";

import comfortaa from "../../fonts/comfortaa/comfortaa-v28-latin-500.woff2";
import slabo from "../../fonts/slabo27px/slabo-27px-v6-latin-regular.woff2";
import abrilFatface from "../../fonts/abril-fatface/abril-fatface-v11-latin-regular.woff2";

const FontFace = ({ state }) => {
  let fonts = null;
  let fontDisplay = "swap";
  switch (state.theme.fontSets) {
    //case "us-ascii":
    //  fonts = [ /*InterMediumUS, InterSemiBoldUS, InterBoldUS */ heptaSlab ];
    //  fontDisplay = "block";
    //  break;
    case "latin":
      fonts = [ heptaSlab, heptaSlabBold, heptaSlabBlack, amatic, amaticBold, playfair, playfairBold, playfairBlack, comfortaa, slabo, abrilFatface ];
      break;
    default:
      fonts = [ heptaSlab, heptaSlabBold, heptaSlabBlack, amatic, amaticBold, playfair, playfairBold, playfairBlack, comfortaa, slabo, abrilFatface ];
  }

  /* 
  untested / issues with webfont display 

          @media screen and (-webkit-min-device-pixel-ratio:0) {
          @font-face {
            font-family: "Hepta Slab";
            font-style: normal;
            font-weight: 500;
            src: url(${fonts[0]+"SVG"}) format("svg");
            font-display: ${fontDisplay};
          }}

  */

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Hepta Slab";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[0]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Hepta Slab";
          font-style: normal;
          font-weight: 700;
          src: url(${fonts[1]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Hepta Slab";
          font-style: normal;
          font-weight: 900;
          src: url(${fonts[2]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Amatic SC";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[3]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Amatic SC";
          font-style: normal;
          font-weight: 700;
          src: url(${fonts[4]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Playfair Display";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[5]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Playfair Display";
          font-style: normal;
          font-weight: 700;
          src: url(${fonts[6]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Playfair Display";
          font-style: normal;
          font-weight: 900;
          src: url(${fonts[7]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Comfortaa";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[8]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Slabo 27px";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[9]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Pacifico";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[10]}) format("woff2");
          font-display: ${fontDisplay};
        }

      `}
    />
  );
};

export default connect(FontFace);