// @cpt-postmagic
import React from 'react';
import { connect, styled } from "frontity";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Item from "../timeline/cpt-item";
import { gsap } from 'gsap';
import { CSSPlugin } from "gsap/CSSPlugin.js";
gsap.registerPlugin(CSSPlugin);


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
              <div style={{ width: '100px', height: '90px', background: '#ccc' }} />
            }
          >
            <Tween from={{ x: '-100px', opacity: 0 }} to={{ x: '50vw', opacity: 1 }} duration={.5} />

            {/* Iterate over the items of a list. */}
            {items.map(({ type, id, index}) => {
              const item = state.source[type][id];

              // Render one Item component for each one.
              return (
                <Tween
                  from={{
                      left: '90%',
                      opacity: '1.0',
                      
                      width: '12%',
                  }}
                  to={{
                      left: '-120%',
                      //opacity: '1.0',
                      height: '100%',
                      width: '100%',
                      borderWidth: '1px',
                  }}

                  ease="ease.out"
                  key={item.id}
                >
                  <Post>
                    <Item key={item.id} item={item} z={`-${index}`}/>
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

export default connect(TweenComponent);

const TweenStyled = styled.div`
  min-height: 300vh;
  position: relative;
  overflow: hidden;

  #postmagic {
    height: 60vw;
    position: relative;
  }
`;

const Post = styled.div`
  height: 60vw;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  margin: 0;
  opacity: 0;
`;