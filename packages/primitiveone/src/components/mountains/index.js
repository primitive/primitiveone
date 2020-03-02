import React from "react";
import { connect, Global, Head, styled, Slot } from "frontity";

import ReactGA from 'react-ga';

//import MetaTitle from "../pebbles/meta-title";
import Loading from "../pebbles/loading";

import Header from "../rocks/header";
import Nav from "../rocks/nav";
import Footer from "../rocks/footer";
import Posts from "../rocks/postlist";
import GlobalPromo from "../rocks/global-promo";
import GlobalSocial from "../rocks/social/social-section";

import Home from './page-home';
import Post from "./post";
//import Page from "./page";
import Page404 from "./page404";
//import PageError from "./page-error";

import Timelines from "../timeline/ct-timelines";
import Timeline from "../timeline";
import SubTimeline from "../timeline/cpt-subtimeline";


// sk-dev: cannot use local bs css??? all attempts to replace cdn breaks layout???
// Do I really need all this???
// import 'bootstrap/dist/css/bootstrap.min.css';
// import bsCSS from 'bootstrap/dist/css/bootstrap.css';
// console.log(bsCSS);

import globalStyles from '../dust/style.css';
//import FontFaces from "../dust/font-faces";


const Theme = ({ state }) => {

  const data = state.source.get(state.router.link);
  const display = state.theme.config;

  console.log("@index: data", data);
  //console.log("@index: display", display);

  // sk-dev: basic tracking snippet to be replaced with frontity package once released
  function initializeReactGA() {
    ReactGA.initialize('UA-61815763-1');
    ReactGA.pageview(state.router.link);
  }
  initializeReactGA();

  return (
    <>
      {
        /*
          Add global styles for the whole site, like body or a's or font-faces. 
          Not classes here because we use CSS-in-JS. Only global HTML tags.
        */
      }
      <Global styles={[globalStyles]} />

      {/* sk-dev: To TEST <FontFaces /> */}

      {/* sk-dev: To TEST Add some metatags to the <head> of the HTML. 
      <MetaTitle />*/}

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

        { /* <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Comfortaa|Pacifico|Playfair+Display:700|Slabo+27px&display=swap" rel="stylesheet" />  */}
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Comfortaa|Hepta+Slab|Pacifico|Playfair+Display:700|Slabo+27px&display=swap" rel="stylesheet" />

        <link rel="canonical" href="https://primitivedigital.co.uk" />

        <link rel="dns-prefetch" SameSite="None" Secure href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" SameSite="None" Secure href="http://doubleclick.net" />

      </Head>

      <HeadWrapper className="wrap-header">
        <Header />
        <Nav />
      </HeadWrapper>

      <BodyWrapper className="wrap-body">

          {(data.isFetching && <Loading />) ||
            (data.isHome && <Home />) ||
            (data.isPostArchive && <Posts />) ||
            (data.isPostType && <Post />) ||
            (data.is404 && <Page404 />) ||
            (data.isError && <PageError />) ||
            (data.isTemporalEventsArchive && <Timeline />) ||
            (data.isTimelineType && <SubTimeline />) ||
            (data.isTimelines && <Timelines />)}

      </BodyWrapper>

      {display.global.showPromo && <GlobalPromo />}

      {display.global.showSocial && <GlobalSocial />}

      { /* ??? global sections promo + social stuff - implement conditional slots/fills ??? data.isHome && <Promo /> */}
      { /* display.showPromo && <Slot name="slot-1" /> */}

      <Footer />
    </>
  );
};

export default connect(Theme);

const HeadWrapper = styled.div`

  display: block;
  background-color: #87af4e;
  background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569316857/header/website_header_n1jxds.jpg) #87af4e;
  background-position-x: 10%;
  background-position-x: top;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    background: none;
  }

  @media screen and (min-width: 576px) {
    background: none;
    background-color: #87af4e;

    header a { margin-left: 1rem; }

    .container { background-position-x: 0; }
    
    .mast {
      background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569316857/header/website_header_n1jxds.jpg) #87af4e;
      background-position-x: 10%;
      background-position-y: top;
      background-repeat: no-repeat;
      background-size: auto;
    }
  }

@media screen and (min-width: 768px) {
  header a { margin-left: 20%; }
  h4 { font-size: 2rem; }
  .container { background-position-x: 5%; }
}

@media screen and (min-width: 992px) {
  header a { margin-left: 30%; }
  .container { background-position-x: 10%; }
}

@media screen and (min-width: 1200px) {
  header a { margin-left: 35%; }
  .container { background-position-x: 20%; }
}

`;

const BodyWrapper = styled.div`
  margin:0;
  padding: 0;
  display: block;

  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );

`;