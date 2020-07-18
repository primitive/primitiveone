import { styled } from "frontity";
//import facepaint from 'facepaint'

const HeadOne = styled.h1(props =>
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
  
const Title = ({ props }) => {

  const defaultTitle = 'Title';

  return <title>{title ? title : defaultTitle}</title>

  return (
      <>
          <title>{title ? title : defaultTitle}</title>
      </>
  );
};

export default Title;
