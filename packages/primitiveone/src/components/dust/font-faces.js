  
import React from "react";
import { Global, css, connect } from "frontity";

/*
import InterMedium from "../../fonts/inter/Inter-Medium.woff2";
import InterBold from "../../fonts/inter/Inter-Bold.woff2";
import InterSemiBold from "../../fonts/inter/Inter-SemiBold.woff2";
import InterMediumUS from "../../fonts/inter/Inter-Medium-US-ASCII.woff2";
import InterBoldUS from "../../fonts/inter/Inter-Bold-US-ASCII.woff2";
import InterSemiBoldUS from "../../fonts/inter/Inter-SemiBold-US-ASCII.woff2";
import InterMediumLatin from "../../fonts/inter/Inter-Medium-LATIN.woff2";
import InterBoldLatin from "../../fonts/inter/Inter-Bold-LATIN.woff2";
import InterSemiBoldLatin from "../../fonts/inter/Inter-SemiBold-LATIN.woff2";
*/

// sk-dev: WEBFONTS REFINE/STANDARD
// https://community.frontity.org/t/frontity-release-4-november-2019/795
// Import your own font file.
import heptaSlab from "../../fonts/hepta-slab-v6-latin-500.woff2";

const FontFace = ({ state }) => {
  let fonts = null;
  let fontDisplay = "swap";
  switch (state.theme.fontSets) {
    case "us-ascii":
      fonts = [ /*InterMediumUS, InterSemiBoldUS, InterBoldUS */ heptaSlab ];
      fontDisplay = "block";
      break;
    case "latin":
      fonts = [ /* InterMediumLatin, InterSemiBoldLatin, InterBoldLatin */ heptaSlab];
      break;
    default:
      fonts = [ /* InterMedium, InterSemiBold, InterBold */ heptaSlab];
  }


  /* hepta-slab-500 - latin */
  /* see: http://google-webfonts-helper.herokuapp.com/fonts/hepta-slab?subsets=latin */

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
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          src: url(${fonts[1]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          src: url(${fonts[2]}) format("woff2");
          font-display: ${fontDisplay};
        }
      `}
    />
  );
};

export default connect(FontFace);