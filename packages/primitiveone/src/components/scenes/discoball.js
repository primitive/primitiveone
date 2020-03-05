// based on codepen by Marty
// https://codepen.io/okra/pen/fDuzC


import React from 'react';
import { styled, css } from "frontity";
import { africa, asia, australia, europe, northamerica, southamerica } from "./glamourmagic";

const DataMap = () => {

  const noOfCells = 1925; // 35x55 grid
  const grid = [...Array(noOfCells)].map((e, i) => <div className="cell" key={i}></div>)

  return (
    <StyledDiscoBall>
      <div className="discoball">
        {grid}
      </div>
    </StyledDiscoBall>
  )
};

export default DataMap;

const StyledDiscoBall = styled.div`
 
`;
