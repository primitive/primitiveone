import { css } from "frontity";

// p1: hello world

// do i need the .post to not overide global a?
const postall = css`
    .post a {
      color: #87af4e;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        color: plum;
        text-decoration: underline;
      }
    }
    
    .has-text-align-left {
      width: 50%;
    }
`;

// target wp classes
const wpclasses = css`    
    .has-text-align-left {
      width: 50%;
    }
`;

const postStyles = colors =>
  css([
    postall(colors),
    wpclasses
  ]);

export default postStyles;