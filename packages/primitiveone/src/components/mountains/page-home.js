import React from "react";
import { connect, styled, loadable } from "frontity";

import Hero from '../scenes/jungle';
import Intro from '../rocks/page-home-intro';
import Page from "./page";
import Gold from '../rocks/page-home-tabs';
import Silver from '../rocks/cpt-poststrip/post-strip';
import Bronze from "../rocks/page-home-bronze";


// sk-dev: need to look further into conditional imports, slots/fills and loadable
// const Gold = loadable(() => import('./rocks/page-home-tabs'));
// const Silver = loadable(() => import('./rocks/'));
// const Bronze = loadable(() => import('./rocks/'));

const PageHome = ({ state }) => {

  // get the theme config from state
  const display = state.theme.config.homepage;

  if (state.theme.config.devMode) {
    console.log("@page-home: display", display );
  }

  return (
    <HomePage className="page-home">

      {display.showHero && (
        <Hero props={display.heroConfig} />
      )}

      {display.showIntro && (
        <Intro props={display.introConfig}/>
      )}

      {display.showGold && (
        <Gold />
      )}

      {display.showSilver && (
        <Silver props={display.silverConfig} />
      )}

      <Page />

      {display.showBronze && (
        <Bronze />
      )}

    </HomePage>
  );
};

export default connect(PageHome);

const HomePage = styled.div`

`;
