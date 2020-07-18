import { styled } from "frontity";
import facepaint from 'facepaint'

// insp:
// https://codesandbox.io/s/emotion-31vwj?file=/src/index.js:132-216
// https://codesandbox.io/s/j706lzywp9?file=/Emotion.js

/*
const Button = styled.button`
  background-color: ${(props) => props.bg};
  font-size: 1.7rem;
  border: none;
  border-radius: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  letter-spacing: 0.0333em;
  line-height: 1.25;
  padding: 1.1em 1.44em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`;
*/

const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 720px)'
])

const Button = styled.button(props =>
  mq({
    display: 'block',
    margin: 18,
    padding: 24,
    color: props.blue
      ? ['powderblue', 'blue', 'midnightblue']
      : ['lightgray', 'gray', 'slategray'],
    backgroundColor: 'currentColor'
  })
)

export default Button;
