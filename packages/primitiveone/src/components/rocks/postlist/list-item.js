import React from "react";
import { connect, styled } from "frontity";

import Link from "../../pebbles/link";
import FeaturedMedia from "../../pebbles/featured-media";
import CTA from "../../rocks/button-fancy";


const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article className="col">

      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <Meta>
        <PostDate>
          <b>{date.toDateString()}</b>
        </PostDate>
        <StyledLink link={author.link}>
          <Author>
            Pretty Post By <b>{author.name}</b>
          </Author>
        </StyledLink>
      </Meta>

      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}

      <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />

      <CTA
        text="Read More"
        link={item.link}
        colors={[state.theme.colors.coal, state.theme.colors.green, state.theme.colors.brightlime]}
      />

    </article>
  );
};

export default connect(Item);

const Title = styled.h2`
  margin: 0;
  padding: 2rem 1rem;
  text-align: center;
`;

const Meta = styled.span`
  text-align: center;
`;

const Author = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-family: "Amatic SC";
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  display: block;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const PostDate = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  text-align: center;
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  font-family: Courier;
`;

const Excerpt = styled.div`
  padding: 2rem 1.5rem;
  margin-bottom: 6rem;

  p {
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-family: Baskerville,Georgia,serif;
    color: rgba(12,17,43,.7);
  }
`;