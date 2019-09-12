import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import Home from './page-home';
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";
import Nav from "./main-nav";
import Footer from "./footer";
import globalStyles from '../style.css';

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  console.log("index", data);

  return (
    <>
      <Head>
        <title>{state.frontity.title} - Primitive Digital</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Comfortaa|Hepta+Slab|Pacifico|Playfair+Display:700|Slabo+27px&display=swap" rel="stylesheet" />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </Head>
      <Global styles={globalStyles} />
      <HeadWrapper className="wrap-header">
        <div className={"container"}>
          <Header />
        </div>
        <div className={"container"}>
          <Nav />
        </div>
      </HeadWrapper>
      <BodyWrapper>
        <Content className={"container-fluid"}>
          <Body>
            {data.isFetching && <Loading />}
            {data.isHome && <Home />}
            {data.isArchive && <List />}
            {data.isPostType && <Post />}
            {data.is404 && <Page404 />}
          </Body>
        </Content>
      </BodyWrapper>
      <Footer />
    </>
  );
};

export default connect(Theme);

const HeadWrapper = styled.div``;
const BodyWrapper = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
const Content = styled.div``;
const Body = styled.div``;
