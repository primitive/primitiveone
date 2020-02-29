import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Button from 'react-bootstrap/Button';

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      <div>
        <StyledLink link={author.link}>
          <Author>
            By <b>{author.name}</b>
          </Author>
        </StyledLink>
        <Fecha>
          {" "}
          on <b>{date.toDateString()}</b>
        </Fecha>
      </div>
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      <Link link={item.link}>
        <Button variant="success" size="xl">
          Read it!
        </Button>
      </Link>
    </article>
  );
};

export default connect(Item);

const Title = styled.h1`
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const Author = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Fecha = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  padding: 2rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-family: Baskerville,Georgia,serif;
  color: rgba(12,17,43,.7);
`;
