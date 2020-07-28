import { connect, Global, Head, styled } from "frontity";
import Switch from "@frontity/components/switch";
import React from "react";
import SkipLink from "./styles/skip-link";
import Loading from "./loading";
//import Loading from "./pebbles/loading";

//import MetaTitle from "./page-meta-title";
import MetaTitle from "./pebbles/meta-title";

import KnobblyKnees from "./rocks/footer-kudos";
import FurryBoots from "./rocks/footer-cta";
import Feet from "./footer";

//import globalStyles from "./styles/global-styles";
import globalStyles from './dust/global-styles';

//import FontFaces from "./styles/font-faces";
//import FontFaces from "./dust/_font-faces";

//import Header from "./header";
import Header from "./rocks/header";

//import Archive from "./archive";

import Home from './mountains/page-home';
import Page from "./mountains/page";

import Posts from "./mountains/post-list";
import Post from "./mountains/post";

//import Post from "./post";
import SearchResults from "./search/search-results";


import PageError from "./page-error";
//import PageError from "./mountains/page-error";

// sk-dev:TESTING think these should be Slots i think...
import GlobalPromo from "./rocks/global-promo";
import GlobalSocial from "./rocks/social/social-section";

// custom post types / tax layouts
import Timelines from "./timeline/ct-timelines";
import Timeline from "./timeline/cpt-timeline";
import SubTimeline from "./timeline/cpt-subtimeline";


/*

import Nav from "../rocks/nav";



import globalStyles from '../dust/global-styles';
//import FontFaces from "../dust/font-faces";

*/

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {

  // get skeletal data model / information about the current URL.
  const data = state.source.get(state.router.link);

  // get the theme config from state
  const display = state.theme.config;

  // sk-dev: to improve
  if (state.theme.config.devMode) {
    console.log("@index: data", data);
    console.log("@index: display", display);
  }

  return (
    <>
      {
        /*
          Add global styles for the whole site, like body or a's or font-faces. 
          Not classes here because we use CSS-in-JS. Only global HTML tags.

          sk-dev:TESTING. I'm also adding some classes as I want the wp user to be able to apply a pre-defined set of styles to content.
          - may split this to be post/page specific. that may cause duplicates - not sure of lesser evil.
          - these will be made availble via the wysiwyg ui by the wp theme
        */
      }
      <Global styles={globalStyles(state.theme.colors)} />

      { /* sk-dev: try downloand + convert fonts again <FontFaces /> */}

      {/* Add some metatags to the <head> of the HTML. */}
      <MetaTitle />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
          integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
          crossorigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC|Comfortaa|Hepta+Slab|Pacifico|Playfair+Display:700|Slabo+27px&display=swap" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

        <link rel="canonical" href="https://primitivedigital.uk" />

        <link rel="dns-prefetch" SameSite="None" Secure href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" SameSite="None" Secure href="http://doubleclick.net" />
      </Head>

      {/* Accessibility: Provides ability to skip to main content */}
      <SkipLink as="a" href="#main">
        Skip to main content
      </SkipLink>

      <div style={{ minHeight: "calc(100vh - 190px)" }}>

        {/* Add the header of the site. */}
        <Header />

        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main id="main" className="wrap-body">
          <Switch>
            <Loading when={data.isFetching} />
            <SearchResults when={data.isSearch} />

            <Home when={data.isHome} />
            { /* <Posts when={data.isArchive} /> */}
            <Posts when={data.isPostArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />

            <Timeline when={data.isTemporalEventsArchive} />
            <SubTimeline when={data.isTimelineType} />
            <Timelines when={data.isTimelines} />

            <PageError when={data.isError} />
          </Switch>
        </Main>
      </div>

      {display.global.showPromo && <GlobalPromo />}

      {display.global.showSocial && <GlobalSocial />}

      { /* ??? global sections promo + social stuff - conditional slots/fills ??? data.isHome && <Promo /> */}
      { /* display.showPromo && <Slot name="slot-1" /> */}

      <KnobblyKnees />
      <FurryBoots />
      <Feet />
    </>
  );
};

export default connect(Theme);

const Main = styled.main`
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;