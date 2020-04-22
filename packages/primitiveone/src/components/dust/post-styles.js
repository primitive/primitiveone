import { css } from "frontity";

// p1: hello world


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
`;

const posthello = css`
    #post-1 a {
      color: #87af4e;
      font-weight: bold;
      text-decoration: none;
    }
    #post-1 a:hover {
      color: plum;
      text-decoration: underline;
    }
`;


const postStyles = colors =>
  css([
    //elementBase(colors),
    postall,
    posthello
  ]);

export default postStyles;