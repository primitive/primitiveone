import { css } from "frontity";

// sk-dev: review resets and base styling use in bootstrap, frontity2020 
// https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap-reboot.css

const cssReset = css`

*,
*::before,
*::after {
  box-sizing: border-box;
}
html
  margin: 0;
  padding: 0;
  border: none;
}
body {
  margin: 0;
  padding: 0;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: white;
  border: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
address,
big,
cite,
code,
em,
font,
img,
small,
strike,
sub,
sup,
li,
ol,
ul,
fieldset,
form,
label,
legend,
button,
table,
caption,
tr,
th,
td {
  border: none;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  text-align: inherit;
}

blockquote::before,
blockquote::after {
  content: "";
}

a,
path {
  transition: all 0.15s linear;
}

`;


export default cssReset;