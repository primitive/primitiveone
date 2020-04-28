import { css } from "frontity";
import facepaint from 'facepaint'

/* ®ead > */

// https://emotion.sh/docs/media-queries
// https://github.com/janczizikow/emotion-flex
// https://github.com/emotion-js/emotion/issues/287

/*
export interface Grid {
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  maxWidths: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  gutters: number;
}
*/

const Grid = {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  maxWidths: {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
  },
  gutters: 15,
  rootEm: "62.5%",
  minWidth: "320"
};

const mq = facepaint([
  `@media(min-width: ${Grid.breakpoints.sm}px)`,
  `@media(min-width: ${Grid.breakpoints.md}px)`,
  `@media(min-width: ${Grid.breakpoints.lg}px)`,
  `@media(min-width: ${Grid.breakpoints.xl}px)`
])
const mq2col = facepaint([
  `@media(min-width: ${Grid.breakpoints.lg}px)`,
])

const demoClassName = css(mq({
  color: ['red', 'green', 'blue', 'darkorchid'],
}))

export {mq2col};