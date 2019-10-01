// @hero
import React from 'react';
import { connect, styled } from "frontity";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const TweenComponent = () => (
  <TweenStyled>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="hero" />}
        >
          <Tween
            staggerFrom={{
              css: {
                bottom: '-200px',
              },
              scale: 2
            }}
            //stagger={0}
            //duration={2}
            ease="Expo.ScaleEase"
          >
            <div className="jungle-trees a-layer">

            </div>
          </Tween>

          <Tween
            staggerFrom={{
              css: {
                right: '-200px',
              },
              scale: 2.3
            }}
            //stagger={0}
            //duration={2}
            ease="Expo.ScaleEase"
          >
            <div className="jungle-right a-layer">
            </div>
          </Tween>

          <Tween
            staggerFrom={{
              css: {
                bottom: '-200px',
              },
              scale: 2.3
            }}
            //stagger={0}
            //duration={2}
            ease="Expo.ScaleEase"
          >
            <div className="jungle-bottom a-layer">
            </div>
          </Tween>

          <Tween
            staggerFrom={{
              css: {
                left: '-200px',
                height: '200%',
              },
              scale: 2.6
            }}
            //stagger={0}
            //duration={2}
            ease="Expo.ScaleEase"
          >
            <div className="jungle-left a-layer">
            </div>
          </Tween>

          <Tween
            staggerFrom={{
              css: {
                opacity: '0',
              },
            }}
            staggerTo={{
              css: {
                opacity: '1',
                width: '60%',
                height: '60%'
              },
            }}
          >
            <div className="jungle-logo a-layer">

            </div>
          </Tween>

          <Tween
            staggerFrom={{
              css: {
                opacity: '0',
              },
            }}
            ease="Expo.easeInOut"
          >
            <div className="jungle-scene a-layer">
              
            </div>
          </Tween>



        </Timeline>
      </Scene>

    </Controller>
    <div />
  </TweenStyled>
);

export default TweenComponent;
//export default connect(TweenComponent);

const TweenStyled = styled.div`
  min-height: 300vh;
  overflow: hidden;
  position: relative;
  border-top: solid 3px #343a40;

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
  
  .a-layer {
    width: 100vw;
    height: 60vw;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    margin: 0 !important;
  }
  .a-layer img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow:hidden;
  }

  .jungle-trees {
    bottom: 0;
    background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317307/jungle/PD_JungleTreeline_2560x1440px_qfp9x8.png);
    background-position: bottom center;
    background-size: cover;
    z-index: 50;
  }
  .jungle-right {
    bottom: 0;
    background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317293/jungle/PD_JungleRight_2560x1440px_xp9ocs.png);
    background-position: top right;
    background-size: cover;
    z-index: 60;
  }
  .jungle-left {
    top: 0;
    background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317301/jungle/PD_JungleLeft_2560x1440px_jow9k6.png);
    background-position: top left;
    background-size: cover;
    z-index: 70;
  }
  .jungle-bottom {
    bottom: 0;
    background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317309/jungle/PD_JungleBottom_2560x1440px_geyhrc.png);
    background-position: bottom center;
    background-size: cover;
    z-index: 80;
  }
  .jungle-logo {
    position: relative;
    margin: auto !important;
    z-index: 90;
    background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317281/jungle/logo-day_j5sq08.png);
    background-position: top center;
    background-size: cover;
  }
  .jungle-scene {
    height: 60vw;
    top:0;
    z-index: 10;
    background: url(https://res.cloudinary.com/primitivedigital/image/upload/f_auto/v1569317284/jungle/PD_BGDay_2560x1440px_cvia8b.png);
    background-position: top center;
    background-size: cover;
  }
`;