import { css } from "frontity";
import cssReset from "./_reset";
import themeClasses from "./_theme";
//import bootstrapCSS from 'bootstrap/dist/css/bootstrap.min.css';

// sk-dev: this causes a warning: https://github.com/emotion-js/emotion/issues/1105
//const bootstrapStyles = css`${bootstrapCSS}`;

// sk-dev: x-browser scroll is a pain in the donkey, needs work. Fails on mobile
// https://css-tricks.com/the-current-state-of-styling-scrollbars/

// sk-dev: min-with causes overflow on mobile
// https://stackoverflow.com/questions/22946264/setting-a-minimum-width-to-fit-on-responsive-website

const documentSetup = colors => css`
  html {
    font-size: 13px;
    width: 100vw;
  }

  body {
    box-sizing: border-box;
    width: auto;
    min-width: 360px;

    background: ${colors.ivory};
    color: ${colors.coal};
    
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 1rem;
    text-align: left;

    /* overflow-y: overlay; */
    overflow-y: overlay;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width:1.2rem; /* scrollbar width */
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(12,17,43,.3);
    }	
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    word-break: break-word;
    word-wrap: break-word;
  }

  #root {
    overflow: hidden;
    width: auto;
  }

  .container {
    max-width: 1140px;
  }
  
  /* --- RESPONSIVE --- */
  /* Small devices (landscape phones, 576px and up) */
  @media screen and (min-width: 576px) {

    html { font-size: 14px; }
    .container { max-width: 540px; }
  }
  
  /* Medium devices (tablets, 768px and up)  */
  @media screen and (min-width: 768px) {
    
    html { font-size: 15px; }
    .container { max-width: 720px; }
  }
  
  /* Large devices (desktops, 992px and up) */
  @media screen and (min-width: 992px) {

    html { font-size: 15px; }

    body {
      &::-webkit-scrollbar {
        width:1.5rem;
      }
    }
    .container { max-width: 960px; }
  }
  
  /* Extra large devices (large desktops, 1200px and up) */
  @media screen and (min-width: 1200px) {
    html { font-size: 16px; }
    .container { max-width: 1140px; }
  }

`;

const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;

const elementBase = colors => css`

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  
  h1, .slab {  font-family: 'Hepta Slab', Georgia, 'Times New Roman', Times, serif; font-size: 3.3rem; }
  h2, .heading { font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 3rem; }
  h3, .news { font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif; font-size: 3rem; }
  h4, .display { font-family: 'Comfortaa', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 1.6rem;}
  h5, .subslab { font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif; font-size: 1.3rem; }
  h6 { font-family: 'Pacifico', Georgia, cursive; font-size: 1.3rem; }

.scribe { font-family: 'Pacifico', Georgia, cursive;}

  p {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  a,
  a:visited {
    text-decoration: none;
  }
  a {
    color: ${colors.green};
    text-decoration: none;
    transition: all .5s ease-in-out;
  }
  a:hover {
    color: ${colors.purple};
    text-decoration: underline;
  }
  a:focus {
    text-decoration: none;
  }
  a:not([href]), a:not([href]):hover {
    color: inherit;
    text-decoration: none;
  }

  em,
  i,
  q,
  dfn {
    font-style: italic;
  }

  em em,
  em i,
  i em,
  i i,
  cite em,
  cite i {
    font-weight: bolder;
  }

  big {
    font-size: 1.2em;
  }

  small {
    font-size: 0.75em;
  }

  b,
  strong {
    font-weight: 700;
  }

  ins {
    text-decoration: underline;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  abbr,
  acronym {
    cursor: help;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    text-decoration-skip-ink: none;
  }

  address {
    margin: 0 0 1rem 0;
    font-style: normal;
    line-height: 1.5;
  }

  hr {
    display: block;
    margin: 2.5rem 0;
    color: inherit;
    clear:both;
    border-style: solid;
    border-width: 0.1rem 0 0 0;
    opacity: 0.25;
  }
  
  hr:not([size]) {
    height: 1px;
  }



  button:focus {
    outline: none;
  }

  main, section {
    display: block;
  }


`;

const listStyle = css`
  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin: 0 0 3rem 3rem;
  }

  ul {
    list-style: disc;
  }

  ul ul {
    list-style: circle;
  }

  ul ul ul {
    list-style: square;
  }

  ol {
    list-style: decimal;
  }

  ol ol {
    list-style: lower-alpha;
  }

  ol ol ol {
    list-style: lower-roman;
  }

  li {
    line-height: 1.5;
    margin: 0.5rem 0 0 2rem;
  }

  li > ul,
  li > ol {
    margin: 1rem 0 0 2rem;
  }

  .reset-list-style,
  .reset-list-style ul,
  .reset-list-style ol {
    list-style: none;
    margin: 0;
  }

  .reset-list-style li {
    margin: 0;
  }

  dt,
  dd {
    line-height: 1.5;
  }

  dt {
    font-weight: 700;
  }

  dt + dd {
    margin-top: 0.5rem;
  }

  dd + dt {
    margin-top: 1.5rem;
  }
`;

const quoteStyle = colors => css`
  blockquote {
    border-color: ${colors.primary};
    border-style: solid;

    /*rtl:ignore*/
    border-width: 0 0 0 0.2rem;
    color: inherit;
    font-size: 1em;
    margin: 4rem 0;

    /*rtl:ignore*/
    padding: 0.5rem 0 0.5rem 2rem;
  }

  cite {
    color: gray;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25;
  }

  blockquote cite {
    display: block;
    margin: 2rem 0 0 0;
  }

  blockquote p:last-child {
    margin: 0;
  }
`;

const codeStyle = colors => css`
  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 0.9em;
    padding: 0.4rem 0.6rem;
  }

  code,
  kbd,
  samp {
    background: rgba(0, 0, 0, 0.075);
    border-radius: 0.2rem;
  }

  pre {
    border: 0.1rem solid gray;
    line-height: 1.5;
    margin: 4rem 0;
    overflow: auto;
    padding: 3rem 2rem;
    text-align: left;
  }

  pre code {
    background: transparent;
    padding: 0;
  }
`;

const mediaStyle = colors => css`
  figure {
    display: block;
    margin: 0;
  }

  iframe {
    display: block;
    max-width: 100%;
  }

  video {
    display: block;
  }

  svg,
  img,
  embed,
  object {
    display: block;
    height: auto;
    max-width: 100%;
  }

  figcaption,
  .wp-caption-text {
    color: ${colors.grays.base};
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1.5rem;
  }

  figcaption a,
  .wp-caption-text a {
    color: inherit;
  }
`;

const tableStyles = colors => css`
  table {
    border: 0.1rem solid ${colors.grays.light};
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    font-size: 1.6rem;
    margin: 4rem 0;
    max-width: 100%;
    overflow: hidden;
    width: 100%;
  }

  .alignleft > table {
    margin: 0;
  }

  .alignright > table {
    margin: 0;
  }

  th,
  td {
    border: 0.1rem solid ${colors.grays.light};
    line-height: 1.4;
    margin: 0;
    overflow: visible;
    padding: 0.5em;
  }

  caption {
    background: ${colors.grays.light};
    font-weight: 600;
    padding: 0.5em;
    text-align: center;
  }

  thead {
    vertical-align: bottom;
    white-space: nowrap;
  }

  th {
    font-weight: 700;
  }
`;


const globalStyle = colors =>
  css([
    cssReset,
    //bootstrapStyles,
    documentSetup(colors),
    accessibilitySettings,
    elementBase(colors),
    listStyle,
    quoteStyle(colors),
    codeStyle(colors),
    mediaStyle(colors),
    tableStyles(colors),
    themeClasses(colors)
  ]);

export default globalStyle;