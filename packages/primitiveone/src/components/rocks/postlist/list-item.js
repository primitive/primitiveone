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
          {date.toDateString()}
        </PostDate>
        <StyledLink link={author.link}>
          <Author>
            <b>{author.name}</b> was 'ere...
          </Author>
        </StyledLink>
      </Meta>

      {state.theme.featured.showOnList && (
        <StyledLink link={item.link}>
          <FeaturedMedia id={item.featured_media} />
        </StyledLink>
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
  padding: 1rem 1rem 1.5rem;
  color: rgba(12, 17, 43, 0.9);
  text-align: center;

  &:hover {
    text-shadow: 2px 1px 0 rgba(255,192,203,.8);
    text-decoration: underline;
  }
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
  color: rgba(12, 17, 43, 0.7);
  font-size: 1rem;
  font-family: Courier;
  text-align: center;
  line-height: 1.2rem;
`;

const Excerpt = styled.div`
  padding: 3.2rem 1.5rem 2rem;
  margin-bottom: 5rem;
  text-align: center;

  p {
    color: rgba(12,17,43,.7);
    font-family: Baskerville,Georgia,serif;
    font-size: 1.5rem;
    font-weight: 550;
    line-height: 2.5rem;
    text-shadow: 1px 1px 0 rgba(255,192,203,.4);
  }
`;