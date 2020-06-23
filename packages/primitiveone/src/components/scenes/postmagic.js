// @cpt-postmagic
import React from 'react';
import { connect, styled } from "frontity";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Item from "../timeline/cpt-item";
import { gsap } from 'gsap';
import { CSSPlugin } from "gsap/CSSPlugin.js";
import { auto } from '@popperjs/core';
gsap.registerPlugin(CSSPlugin);


const PostMagic = ({ state, items }) => {

  const delorean = {
    fuel: `${items.length * 100}%`,
    seatbelt: true,
    fluxCapacitor: true
  };

  return (
    <TweenStyled>
      <Controller>
        <Scene
          pin={delorean.seatbelt} // sticky
          triggerHook='0.0' // .1 = 10%
          duration={delorean.fuel}
          indicators={true}
          //offset={-100}
        >
          <Timeline
            wrapper={<div id="postmagic" />}
          >
            <Tween
              from={{ scale: '2', x: '-150px', y: '0px', opacity: 0, duration: 2 }}
              to={{ scale: '1', x: '38vw', y: '0px', opacity: 1 }}
            >
              <Delorean />
            </Tween>


                {/* iterate over items */}
                {items.map(({ type, id }, i) => {
                  const item = state.source[type][id];

                  // render one [xyz] component for each one.
                  return (
                    <Tween
                    
                    from={{
                      left: '100vw',
                      //opacity: '0.0',
                      //width: '10%',
                      //height: '10%',
                      ease: "slow(0.7, 0.7, false)"
                    }}
                    to={{
                      left: '-100vw',
                      //opacity: '1.0',
                      //height: '80vh',
                      //width: '100%'
                      ease: "slow(0.7, 0.7, false)"
                    }}
                      key={item.id}
                    >
                      <Post>
                        <Item
                          item={item}
                          layer={i}
                          key={item.id} 
                          color='blue'
                          headerBg={state.theme.colors.coal}
                          headerColor={state.theme.colors.white}
                        />
                      </Post>
                    </Tween>
                  )

                })}


          </Timeline>
        </Scene>

      </Controller>

    </TweenStyled>
  );
};

export default connect(PostMagic);

const TweenStyled = styled.div`
  height: 90vh;
  position: relative;
  overflow: hidden;

  #postmagic {
    height: 60vw;
    position: relative;
  }
`;

const Delorean = styled.div`
  margin: .3rem;
  height: 20vh;
  width: 30vw;
  max-height: 120px;
  max-width: 240px;
  background: url(https://primitive.press/wp-content/uploads/2020/05/pd-delorean.png);
  background-repeat: no-repeat;
  background-size: contain;
`;

const Post = styled.div`
  height: 60vw;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  margin: 0;
`;