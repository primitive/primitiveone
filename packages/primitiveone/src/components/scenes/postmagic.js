// @cpt-postmagic
import React from 'react';
import { connect, styled } from "frontity";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Item from "../timeline/cpt-item";

const TweenComponent = ({ state, items }) => {

  return (
    <TweenStyled>
      <Controller>
        <Scene
          triggerHook="onLeave"
          duration="300%"
          pin={true}
          stagger={false}
          offset={-6}
        >
          <Timeline
            wrapper={<div id="postmagic" />}
          >

            {/* Iterate over the items of the list. */}
            {items.map(({ type, id, index}) => {
              const item = state.source[type][id];

              // Render one Item component for each one.
              return (
                <Tween
                  staggerFrom={{
                    css: {
                      left: '100%',
                      opacity: '1.0'
                    }
                  }}
                  staggerTo={{
                    css: {
                      left: '-120%'
                    }
                  }}
                  
                  //stagger={0}
                  //duration={1}
                  ease="Expo.ScaleEase"
                  key={item.id}
                >
                  <div className="a-post">
                    <Item key={item.id} item={item} />
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