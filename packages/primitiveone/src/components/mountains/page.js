import React, { useEffect } from "react";
import { connect, styled, Global } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

import postStyles from "../dust/page-styles";

import List from "../rocks/postlist";
import Link from "../pebbles/link";
import FeaturedMedia from "../pebbles/featured-media";

import DiscoPreload from "../scenes/disco-preload"

const Post = ({ state, actions, libraries }) => {

  // Get info of current post.
  const data = state.source.get(state.router.link);
  // Get the the post.
  const post = state.source[data.type][data.id];
  // Get the author.
  const author = state.source.author[post.author];
  // Get a date for humans.
  const date = new Date(post.date);

  const postType = data.type;
  const postId = data.id;

  // Prefetch home posts and the list component.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // not sure this will work here?
  if (!data.isReady) return <Loading><DiscoPreload /></Loading>;

  /*
  let titleTag = ['h1','h2','h3'];
  let titleTagClose = ['</h1>','</h2>','</h3>'];
  console.log(state.source);
  */

  return data.isReady ? (
    <>
      <Global styles={postStyles} />
      <StyledMain className={"post " + postType} id={postType + "-" + postId}>

        <Container>

          <PostHead className="row">
            <Col>
              <PostTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Col>
          </PostHead>

          {data.isPost && (
            <Row className="postMeta">
              <Col>
                <StyledLink link={author.link}>
                  <PostAuthor> By <b>{author.name}</b></PostAuthor>
                </StyledLink>

                <PostDate> {" "} on <b>{date.toDateString()}</b></PostDate>
              </Col>
            </Row>
          )}

          <Row>
            <Col>

              {state.theme.featured.showOnPost && (<FeaturedMedia id={post.featured_media} />)}

            </Col>
          </Row>

          <Row>
            <PostBody>
              <libraries.html2react.Component html={post.content.rendered} />
            </PostBody>
          </Row>

        </Container>

      </StyledMain>
    </>
  ) : null;
};

export default connect(Post);

const Loading = styled.div`
  padding: 3rem;
  font-size: 1rem;
  text-align: center;
`;

const StyledMain = styled.main`
  padding: 5px;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PostHead = styled.header`

`;

const PostTitle = styled.h1`
  color: rgba(12, 17, 43);
`;

const PostAuthor = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const PostDate = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const PostBody = styled(Col)`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;
  padding-top: 2rem;

  p {
    line-height: 1.6em;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. 
    width: 100% !important;
    */
    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }








  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
