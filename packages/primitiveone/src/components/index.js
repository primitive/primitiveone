import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import Home from './page-home';
import List from "./list";
import Post from "./post";
import Page404 from "./page404";
import Loading from "./loading";
import Nav from "./nav";
import Silver from "./silver";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import globalStyles from '../style.css';
import ReactGA from 'react-ga';

const Theme = ({ state }) => {

  const data = state.source.get(state.router.link);
  
  function initializeReactGA() {
    ReactGA.initialize('UA-61815763-1');
    ReactGA.pageview(state.router.link);
  }
  initializeReactGA();

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
        <link rel="canonical" href="https://primitivedigital.co.uk" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" />
      </Head>
      <Global styles={globalStyles} />
      <HeadWrapper className="wrap-header">
        <Header />
        <Nav />
      </HeadWrapper>
      <BodyWrapper className="wrap-body">
          <Body>
          {data.isFetching && <Loading />}
            {data.isHome && <Home />}
            {data.isArchive && <List />}
            {data.isPostType && <Post />}
            {data.is404 && <Page404 />}
          </Body>
      </BodyWrapper>
      <Silver />
      <Footer />
    </>
  );
};

export default connect(Theme);

const HeadWrapper = styled.div`
margin:0;
padding: 0;
`;
const BodyWrapper = styled.div`
margin:0;
padding: 0;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
const Body = styled.div``;
