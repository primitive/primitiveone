import { css } from "frontity";

// sk-dev: review resets used when assesing emotion/bootrap use

//cssReset = https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap-reboot.css

const cssReset = css`

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}

hr:not([size]) {
  height: 1px;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.75rem;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.25rem;
}

h6 {
  font-size: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 0.875em;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

a {
  color: #0d6efd;
  text-decoration: none;
}

a:hover {
  color: #024dbc;
  text-decoration: underline;
}

a:not([href]), a:not([href]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}

pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}

a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}

kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

select {
  word-wrap: normal;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: textfield;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

progress {
  vertical-align: baseline;
}

::-webkit-datetime-edit {
  overflow: visible;
  line-height: 0;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

main {
  display: block;
}

[hidden] {
  display: none !important;
}
`;

const documentSetup = colors => css`
  html {
    font-size: 14px;
  }

  body {
    box-sizing: border-box;
    color: #000;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      Helvetica, sans-serif;
    font-size: 1.8rem;
    text-align: left;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    word-wrap: break-word;
  }

  #site-content {
    overflow: hidden;
  }

  .container {
    max-width: 1140px;
  }
  
  /* --- RESPONSIVE --- */
  /* Small devices (landscape phones, 576px and up) */
  @media screen and (min-width: 576px) {
    html { font-size: 15px; }
    .container { max-width: 540px; }
  }
  
  /* Medium devices (tablets, 768px and up)  */
  @media screen and (min-width: 768px) {
    html { font-size: 14px; }
    .container { max-width: 720px; }
  }
  
  /* Large devices (desktops, 992px and up) */
  @media screen and (min-width: 992px) {
    html { font-size: 15px; }
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

  h1, .slab {  font-family: 'Hepta Slab', Georgia, 'Times New Roman', Times, serif; font-size: 3.3rem; }
  h2, .heading { font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 3rem; }
  h3, .news { font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif; font-size: 3rem; }
  h4, .display { font-family: 'Comfortaa', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; }
  h5, .subslab { font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif; }
  h6, .scribe { font-family: 'Pacifico', Georgia, cursive; }

  p {
    margin: 0 0 1em 0;
    font-size: 1rem;
    line-height: 1.5;
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

  address {
    line-height: 1.5;
    margin: 0 0 2rem 0;
  }

  hr {
    border-style: solid;
    border-width: 0.1rem 0 0 0;
    margin: 4rem 0;
  }

  a,
  a:visited {
    text-decoration: none;
  }
  a {
    color:              pink;
    -webkit-transition: all .5s ease-in-out;
    -moz-transition:    all .5s ease-in-out;
    -ms-transition:     all .5s ease-in-out;
    -o-transition:      all .5s ease-in-out;
    transition:         all .5s ease-in-out;
  }
  a:hover,
  a:focus {
    text-decoration: underline;
  }

  button:focus {
    outline: none;
  }

  main, section {
    display: block;
  }
  main article a:hover {
    color: plum;
  }

`;

const listStyle = css`
  ul,
  ol {
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
    color: ${colors.gray.base};
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
    border: 0.1rem solid ${colors.gray.light};
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
    border: 0.1rem solid ${colors.gray.light};
    line-height: 1.4;
    margin: 0;
    overflow: visible;
    padding: 0.5em;
  }

  caption {
    background: ${colors.gray.light};
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

const themeClasses = colors => css`
  .intro {
    font-family: 'Comfortaa', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    padding: 3px 5%;
    font-size: 1.3rem;
  }
  .motto {
    font-family: 'Hepta Slab', Georgia, 'Times New Roman', Times, serif;
    padding: 1.5rem 5% 3rem;
    font-size: 2.3rem;
    color: #87af4e;
  }
  .panache {
    font-family : Baskerville, Georgia, serif; 
    padding: .5rem 5% .1rem;
    font-size: 1.6rem;
    color:  rgba(12,17,43, .7);
  }
  .panache strong,
  .panache a {
    font-style: italic;
    color: #87af4e;
    text-decoration: none;
  }
`;

const globalStyle = colors =>
  css([
    cssReset,
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