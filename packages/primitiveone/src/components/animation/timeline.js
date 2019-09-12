// @hero
import React from 'react';
import { connect, styled } from "frontity";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Image } from "react-bootstrap";

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
                width: '160%',
                height: '160%',
                opacity: '0',
              },
            }}
          >
            <div className="jungle-logo a-layer">
            <Image className="img-responsive" src={"https://primitivedigital.uk/img/jungle/1x/logo-day.png"} alt="Primitive Digital - Web Design &amp; Development" />
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
              test
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
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #b7ebde;
  background: url(https://primitivedigital.uk/img/jungle/1x/PD_BGNight_2560x1440px.png);
  background-position: bottom center;
  background-size: cover;
  }
  
  .a-layer {
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    margin: 0 !important;
  }
  .a-layer img {
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    overflow:hidden;
  }

  .jungle-trees {
    width: 100%;
    bottom: 0;
    background: url(https://primitivedigital.uk/img/jungle/1x/PD_JungleTreeline_2560x1440px.png);
    background-position: bottom center;
    background-size: cover;
    z-index: 50;
  }
  .jungle-right {
    width: 100%;
    bottom: 0;
    background: url(https://primitivedigital.uk/img/jungle/1x/PD_JungleRight_2560x1440px.png);
    background-position: top right;
    background-size: cover;
    z-index: 60;
  }
  .jungle-left {
    width: 100%;
    top: 0;
    background: url(https://primitivedigital.uk/img/jungle/1x/PD_JungleLeft_2560x1440px.png);
    background-position: top left;
    background-size: cover;
    z-index: 70;
  }
  .jungle-bottom {
    width: 100%;
    bottom: 0;
    background: url(https://primitivedigital.uk/img/jungle/1x/PD_JungleBottom_2560x1440px.png);
    background-position: bottom center;
    background-size: cover;
    z-index: 80;
  }
  .jungle-logo {
    position: relative;
    padding-left: 10%;
    max-width: 60%;
    max-height: 60%;
    width: auto;
    height: auto;
    margin: auto !important;
    z-index: 90;
  }
  .jungle-scene {
    height: 100vh;
    width: 100%;
    top:0;
    z-index: 10;
    background: url(https://primitivedigital.uk/img/jungle/1x/PD_BGDay_2560x1440px.png);
    background-position: top center;
    background-size: cover;
  }


  .tween {
	  width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;
    position: relative;
    left: calc(50% - 50px);
  }
  .stagger {
    width: 50px;
    height: 50px;
    left: 100%;
    background-color: green;
    position: relative;
  }
`;