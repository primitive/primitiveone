import React, { useEffect } from "react";
import { connect, styled, Global } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

import postStyles from "../dust/post-styles";

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

    console.log("@post: state", state );
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
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

`;
