import React from "react";
import { styled } from "frontity";
import Card from 'react-bootstrap/Card';
import Link from "../pebbles/link";

const CustomTaxonomyItem = ({ item }) => {
  return (
    <StyledBlock className="card">

      <Card.Body>
        {item.link && (
          <Link link={item.link}>
            <div>
              <span className='scribe'>Evolution of... </span><Title dangerouslySetInnerHTML={{ __html: item.name }} />
            </div>
            <Description dangerouslySetInnerHTML={{ __html: item.description }} />
          </Link>
        )}
      </Card.Body>

    </StyledBlock>
  );
};

export default CustomTaxonomyItem;

const StyledBlock = styled.article`
  margin: 1rem;
  text-align: center;

  a {
    text-decoration: none;

    .scribe {
      font-size: 1.5rem;
      text-shadow: 2px 1px 1px plum;
      letter-spacing: 1px;
      color: pink;  
    }
  }

  a:hover h2 {
    text-decoration: underline;
    text-decoration-color: plum;
    transition: all .5s ease-in-out;
  }

`;
const Title = styled.h2`
  color: rgba(12, 17, 43);
  font-size: 5rem;
  margin: 0;
  padding-top: 6px;
`;
const Description = styled.h4`
  color: rgba(12, 17, 43, .5);
  margin: 0 20%;
  padding-top: 3px;
  padding-bottom: 16px;
`;
