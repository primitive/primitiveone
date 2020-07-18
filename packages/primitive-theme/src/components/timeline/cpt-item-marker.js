import React from "react";
import { connect, styled } from "frontity";
//import Link from "../pebbles/link";

//import Image from "@frontity/components/image";
//import { Row, Col, Card } from 'react-bootstrap';
//import convert from 'color-convert';


const TemporalEventMarker = ({ state, item }) => {
  return (
    <StyledMarker>

      <EventDate
        highlight={state.theme.colors.warning}
      >
        {item.acf.year}
      </EventDate>

      <Title
        color={state.theme.colors.coal}
        dangerouslySetInnerHTML={{ __html: item.title.rendered }}
      />

    </StyledMarker>
  );
};

export default connect(TemporalEventMarker);

const StyledMarker = styled.div`
  position: relative;
  height: 100vh;
  z-index: -10;
`;

const EventDate = styled.div`
  z-index: -1;
  position: relative;
  font-family: 'Slabo 27px';
  font-size: 6rem;
  color: ${ props => props.highlight };
  opacity: .5;

  &:before {
    content: '☞';
    display: block;
    position: absolute;
    width: 10rem;
    height:10rem;
    z-index: -3;
    top: 1rem;
    left: -10rem;
    opacity: .5;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 15rem;
    height:8rem;
    z-index: -2;
    top: .6rem;
    left: -2.5rem;
    background: white;
    opacity: .8;
    border-radius: 15rem / 8rem;
    box-shadow: -2px -4px 3px #efefef, 1px 1px 4px ${ props => props.highlight };
  }


`;

const Title = styled.h3`
  font-size: 6rem;
  color: ${ props => props.color };
  opacity: .1;
`;
