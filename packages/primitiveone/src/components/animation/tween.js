// @hero
import React from 'react';
import { connect, styled } from "frontity";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Image } from "react-bootstrap";



const TweenComponent = () => (
  <TweenStyled id="hero">
    <Controller>
      
      <Scene
        triggerElement="#hero"
        duration={2000}
        pin={true}
      >
        {(progress) => (
          <Tween
            //to={{
            // left: '200px',
            //rotation: -360,
            //  width: '200px',
            //  height: '200px',
            //}}    
            from={{
              css: {
                left: '-350px',
                top: '-150px',
                //rotation: -360,
                width: '200%',
                height: '200%',
              },
              ease: 'Strong.easeOut',
            }}
            to={{
              css: {
                left: '0px',
                top: '0px',
                width: '100%',
                height: '100%',
              },
              ease: 'Strong.easeOut',
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <div className="jungle-left">
              <Image src={"https://primitivedigital.uk/img/jungle/1x/PD_JungleLeft_2560x1440px.png"} alt="Jungle Scene Left" />
            </div>
          </Tween>
        )}
      </Scene>

      <Scene
        triggerElement="#hero"
        duration={600}
        pin={true}
      >
        {(progress) => (
          <Tween
            from={{
              css: {
                right: '-350px',
                top: '-350px',
                width: '140%',
                height: '140%',
              },
              ease: 'Strong.easeOut',
            }}
            to={{
              css: {
                right: '0px',
                top: '0px',
                width: '100%',
                height: '100%',
              },
              ease: 'Strong.easeOut',
            }}
            totalProgress={progress}
            paused
          >
            <div className="jungle-right">
              <image className="img-responsive" src={"https://primitivedigital.uk/img/jungle/1x/PD_JungleRight_2560x1440px.png"} alt="Jungle Scene Left" />
            </div>
          </Tween>
        )}
      </Scene>

      <Scene
        triggerElement="#hero"
        duration={1000}
        pin={false}
      >
        {(progress) => (
          <Tween
            from={{
              css: {
                bottom: '-350px',
                width: '110%',
                height: '110%',
              },
              ease: 'Strong.easeOut',
            }}
            to={{
              css: {
                bottom: '-350px',
                width: '100%',
                height: '100%',
              },
              ease: 'Strong.easeOut',
            }}
            totalProgress={progress}
            paused
          >
            <div className="jungle-bottom">
              <image className="img-responsive" src={"https://primitivedigital.uk/img/jungle/1x/PD_JungleBottom_2560x1440px.png"} alt="Jungle Scene Left" />
            </div>
          </Tween>
        )}
      </Scene>








    </Controller>
    <div />
  </TweenStyled>
);

export default TweenComponent;
//export default connect(TweenComponent);

const TweenStyled = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: url(https://primitivedigital.uk/img/jungle/1x/PD_BGDay_2560x1440px.png);
  background-size: cover;
  
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .jungle-left {
    width: 800px;
    height: 300px
    margin: 0 !important;
    position: absolute;
  }
  .jungle-right {
	  width: 800px;
    height: 300px
    margin: 0 !important;
    position: absolute;
  }
  .jungle-bottom {
	  width: 800px;
    height: 300px
    margin: 0 !important;
    position: absolute;
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