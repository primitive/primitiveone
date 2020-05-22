// @hero
import React from 'react';
import { styled } from "frontity";
import { Container } from 'react-bootstrap';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { gsap } from 'gsap';
import { CSSPlugin } from "gsap/CSSPlugin.js";
gsap.registerPlugin(CSSPlugin);

// 1.1.3 updated gsap v2 > v3 see:
// https://greensock.com/cheatsheet/
// https://greensock.com/3-release-notes
// https://greensock.com/docs/v3/Installation#installer
// https://greensock.com/docs/v3/GSAP/CorePlugins/CSSPlugin

// sk-dev: issue with fouc / default positions
// https://greensock.com/forums/topic/17910-starting-positions-for-animated-elements/

const TweenComponent = ({ props }) => {

  const fullWidth = props.fluid ? props.fluid : false;
  const fullFlush = props.flush ? props.flush : false;

  return (
    <TweenStyled fluid={fullWidth}>
      <Controller>
        <Scene
          triggerHook="onLeave"
          duration="300%"
          pin={true}
          //indicators={true}
        >
          <Timeline
            wrapper={<div id="hero" />}
          >
            <Tween
              from={{
                //duration:1,
                //stagger:3,
                bottom: '-200px',
                scale: 2.3,
                ease: "expo.out"
              }}
            //ease="Expo.ScaleEase"
            //ease="expoScale(1, 2)"
            >
              <Midground />
            </Tween>

            <Tween
              from={{
                duration: 1,
                stagger: 1,
                right: '-200px',
                scale: 2.3,
                ease: "expo.out"
              }}
            >
              <StageRight />
            </Tween>

            <Tween
              from={{
                bottom: '-200px',
                scale: 2.3,
                ease: "expo.out"
              }}
            >
              <Stage />
            </Tween>

            <Tween
              from={{
                left: '-200px',
                height: '200%',
                scale: 2.6,
                ease: "expo.out"
              }}
            >
              <StageLeft />
            </Tween>

            <Tween
              from={{
                opacity: '0',
              }}
              to={{
                opacity: '1',
                width: '60%',
                height: '60%',
                ease: "expo.out"
              }}
            >
              <Logo />
            </Tween>

            <Tween
              from={{
                duration: 3,
                opacity: '0',
                ease: "expo.out"
              }}
            >
              <Background />
            </Tween>

          </Timeline>
        </Scene>

      </Controller>
      <div />
    </TweenStyled>
  );
};

export default TweenComponent;

const TweenStyled = styled(Container)`
  padding: 0;

  min-height: 300vh;
  overflow: hidden;
  position: relative;

  #hero {
    width: 100vw;
    height: 60vw;
  
    max-height: 1400px;
    max-height: 2600px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    background-color: #b7ebde;
    background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317290/jungle/PD_BGNight_2560x1440px_bskivq.png);
    background-position: bottom center;
    background-size: cover;
    border-bottom: solid 3px #343a40;
  }
`;


const Layer = styled.div`
  width: 100vw;
  height: 60vw;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow:hidden;
  }
`;
const Stage = styled(Layer)`
  bottom: 0;
  background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317309/jungle/PD_JungleBottom_2560x1440px_geyhrc.png);
  background-position: bottom center;
  background-size: cover;
  z-index: 80;
`;
const StageLeft = styled(Layer)`
  top: 0;
  background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317301/jungle/PD_JungleLeft_2560x1440px_jow9k6.png);
  background-position: top left;
  background-size: cover;
  z-index: 70;
`;
const StageRight = styled(Layer)`
  bottom: 0;
  background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317293/jungle/PD_JungleRight_2560x1440px_xp9ocs.png);
  background-position: top right;
  background-size: cover;
  z-index: 60;
`;
const Midground = styled(Layer)`
  bottom: 0;
  background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317307/jungle/PD_JungleTreeline_2560x1440px_qfp9x8.png);
  background-position: bottom center;
  background-size: cover;
  z-index: 50;
`;
const Background = styled(Layer)`
  height: 60vw;
  top:0;
  z-index: 10;
  background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317284/jungle/PD_BGDay_2560x1440px_cvia8b.png);
  background-position: top center;
  background-size: cover;
`;

const Logo = styled(Layer)`
  position: relative;
  margin: auto !important;
  z-index: 90;
  background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317281/jungle/logo-day_j5sq08.png);
  background-position: top center;
  background-size: cover;
`;