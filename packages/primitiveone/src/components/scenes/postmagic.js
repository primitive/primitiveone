// @cpt-postmagic
import React from 'react';
import { connect, styled } from "frontity";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Item from "../timeline/cpt-item";

/*
  import 'react-gsap/CustomEase'; 
  let CustomEase:null;
*/

const TweenComponent = ({ state, items }) => {

  const delorean = {
    fuel: `${items.length * 100}%`,

    seatbelt: true,
    fluxCapacitor: true
  };

  return (
    <TweenStyled>
      <Controller>
        <Scene
          pin={delorean.seatbelt}
          triggerHook="onLeave"
          duration={delorean.fuel}
          indicators={true}
          //offset={-6}
        >
          <Timeline
            wrapper={<div id="postmagic" />}
            target={
              <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
            }
          >
            <Tween from={{ x: '-100px', opacity: 0 }} to={{ x: '20vw', opacity: 1 }} duration={.2} />

            {/* Iterate over the items of a list. */}
            {items.map(({ type, id, index}) => {
              const item = state.source[type][id];

              // Render one Item component for each one.
              return (
                <Tween
                  staggerFrom={{
                    css: {
                      left: '90%',
                      opacity: '1.0',
                      height: '50%',
                      width: '10%',
                      borderWidth: '10px',
                      borderColor: 'blue',
                      borderStyle: 'solid'
                    }
                  }}
                  staggerTo={{
                    css: {
                      left: '-120%',
                      //opacity: '1.0',
                      height: '100%',
                      width: '100%',
                      borderWidth: '1px',
                    }
                  }}


                  
                  ease="Expo.easeOut" // sk-dev: https://greensock.com/docs/v2/Easing
                  //ease={CustomEase.create("custom", "M0,0,C0,0,-0.05,0.571,0.074,0.752,0.119,0.818,0.383,0.569,0.435,0.631,0.481,0.687,0.509,0.719,0.56,0.77,0.603,0.814,0.631,0.839,0.68,0.876,0.717,0.905,0.743,0.921,0.785,0.943,0.822,0.963,0.849,0.974,0.89,0.985,0.929,0.995,1,1,1,1")}
                  key={item.id}
                >
                  <div className="a-post">
                    <Item key={item.id} item={item} z={`-${index}`}/>
                  </div>
                </Tween>
              )

            })}

          </Timeline>
        </Scene>

      </Controller>
      <div />
    </TweenStyled>
  );
};

export default connect(TweenComponent);

const TweenStyled = styled.div`
  min-height: 300vh;
  position: relative;
  overflow: hidden;

  #postmagic {

    height: 60vw;
    position: relative;
  }
  .a-post {
      height: 60vw;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      margin: 0 !important;
      opacity: 0;
  }
  
`;