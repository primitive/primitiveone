import React, { useEffect } from "react";
import { connect, styled, Global } from "frontity";
import { Container, Row, Col } from "react-bootstrap";

import postStyles from "../dust/post-styles";

import List from "../rocks/postlist";
import Link from "../pebbles/link";
import FeaturedMedia from "../pebbles/featured-media";

import DiscoPreload from "../scenes/preload-disco";

const Post = ({ state, actions, libraries }) => {

  // get skeletal data model for current post.
  const data = state.source.get(state.router.link);

  // get the the post.
  const post = state.source[data.type][data.id];

  // get date in human friendly format
  const date = new Date(post.date);

  // get the post type, id, author.
  const postType = data.type,
  postId = data.id,
  author = state.source.author[post.author];

  // Prefetch home posts and the list component.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();

    if (state.theme.config.devMode) {
      console.log("@post: state", state );
    }

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
      <Global styles={postStyles(state.theme.colors)} />

      <StyledMain className={"post " + postType} id={postType + "-" + postId}>

        <Container>

          <PostHead className="row">
            <Col>
              <PostTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Col>
          </PostHead>

          {data.isPost && (
            <Row>
              <Col>
                <StyledLink link={author.link}>
                  <PostAuthor> <b>{author.name}</b> wrote this!</PostAuthor>
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
  font-size: 1.5rem;
  text-align: center;
`;

const StyledMain = styled.main`
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  
    padding: 15px 0;
    color: #87af4e;
    text-decoration: none;

    &:hover {
      color: plum;
      text-decoration: underline;
    }

`;

const PostHead = styled.header`
  text-align: center;
`;

const PostTitle = styled.h1`
  padding: 2rem 0 1.5rem;
  margin: 0 15% 1rem;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1rem;
  line-height: 1.6;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.7);
`;

const PostAuthor = styled.p`
  margin-bottom: .5rem;
  color: rgba(12, 17, 43, 0.9);
  font-size: 1.2rem;
  font-family: "Amatic SC";
  text-align: center;
`;

const PostDate = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  color: rgba(12, 17, 43, 0.7);
  font-size: 1.2rem;
  font-family: Courier;
  text-align: center;
  line-height: 1.3rem;
`;

const PostBody = styled(Col)`
  padding-top: 3rem;
  padding-bottom: 2rem;
  font-size: 1.1rem;
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  background: transparent;

`;
