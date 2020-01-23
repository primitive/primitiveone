import React from "react";
import { Global, connect, styled, Head, loadable } from "frontity";
import ReactGA from 'react-ga';

import Loading from "./loading";

import Header from "./header";
import Nav from "./nav";
import Silver from "./silver";
import Footer from "./footer";

import Home from './page-home';
import List from "./list";
import Post from "./post";
import Timeline from "./timeline";
import Page404 from "./page404";


import 'bootstrap/dist/css/bootstrap.min.css';
import globalStyles from '../style.css';

// Thanks to loadable we prevent comments from loading until it's needed.
//const Silver = loadable(() => import('./silver'));

const Theme = ({ state }) => {

  const data = state.source.get(state.router.link);
  
  function initializeReactGA() {
    ReactGA.initialize('UA-61815763-1');
    ReactGA.pageview(state.router.link);
  }
  initializeReactGA();

  console.log("INDEX", data)

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
            {data.isArchive && data.type === "post" && <List />}
            {data.isArchive && data.isTemporalEventsArchive && <Timeline />}
            {data.isPostType && <Post />}
            {data.is404 && <Page404 />}

            { /* data.isPostTypeArchive && <Page404/> */ }
            
          </Body>
      </BodyWrapper>

      
      {data.isHome && <Silver />}
      
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
