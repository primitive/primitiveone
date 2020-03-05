// based on codepen by Dave Quah
// https://codepen.io/Milleus/pen/pozRbKa

// this creates a massive amount of DIVs
// to be used for some of the pre/post optimisation benchmarking

import React from 'react';
import { styled, css } from "frontity";
import { africa, asia, australia, europe, northamerica, southamerica } from "../scenes/glamourmagic";

const DataMap = () => {

  const noOfCells = 1925; // 35x55 grid
  const grid = [...Array(noOfCells)].map((e, i) => <div className="cell" key={i}></div>)

  return (
    <StyledDataMap>
      <div className="mapgrid">
        {grid}
      </div>
    </StyledDataMap>
  )
};

export default DataMap;

const StyledDataMap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin: 0;
  display: grid;
  height: 100%;
  place-items: center;
  background-color: #000;
  font-size: 12px;
  
  .mapgrid {
    display: grid;
    grid-template-columns: repeat(55, 1fr);
    grid-template-rows: repeat(35, 1fr);
  }
  .cell {
  width: 1em;
  height: 1em;
  }
  .cell:nth-of-type(19) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2475ms;
  }
  .cell:nth-of-type(20) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1004ms;
  }
  .cell:nth-of-type(21) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1562ms;
  }
  .cell:nth-of-type(73) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2488ms;
  }
  .cell:nth-of-type(74) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2724ms;
  }
  .cell:nth-of-type(75) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3084ms;
  }
  .cell:nth-of-type(76) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1988ms;
  }
  .cell:nth-of-type(77) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2113ms;
  }
  .cell:nth-of-type(123) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1204ms;
  }
  .cell:nth-of-type(124) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2238ms;
  }
  .cell:nth-of-type(127) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3086ms;
  }
  .cell:nth-of-type(128) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1516ms;
  }
  .cell:nth-of-type(129) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -50ms;
  }
  .cell:nth-of-type(130) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3950ms;
  }
  .cell:nth-of-type(131) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3697ms;
  }
  .cell:nth-of-type(132) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3423ms;
  }
  .cell:nth-of-type(177) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -187ms;
  }
  .cell:nth-of-type(178) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1779ms;
  }
  .cell:nth-of-type(179) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -166ms;
  }
  .cell:nth-of-type(181) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3378ms;
  }
  .cell:nth-of-type(182) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3686ms;
  }
  .cell:nth-of-type(183) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2623ms;
  }
  .cell:nth-of-type(184) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3070ms;
  }
  .cell:nth-of-type(185) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2858ms;
  }
  .cell:nth-of-type(186) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -320ms;
  }
  .cell:nth-of-type(187) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1556ms;
  }
  .cell:nth-of-type(188) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3772ms;
  }
  .cell:nth-of-type(228) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3857ms;
  }
  .cell:nth-of-type(229) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -261ms;
  }
  .cell:nth-of-type(230) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2332ms;
  }
  .cell:nth-of-type(231) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3962ms;
  }
  .cell:nth-of-type(232) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2222ms;
  }
  .cell:nth-of-type(233) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1512ms;
  }
  .cell:nth-of-type(234) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1786ms;
  }
  .cell:nth-of-type(237) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2153ms;
  }
  .cell:nth-of-type(238) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -8ms;
  }
  .cell:nth-of-type(239) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1854ms;
  }
  .cell:nth-of-type(240) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -414ms;
  }
  .cell:nth-of-type(241) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2882ms;
  }
  .cell:nth-of-type(242) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1033ms;
  }
  .cell:nth-of-type(243) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3436ms;
  }
  .cell:nth-of-type(283) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3386ms;
  }
  .cell:nth-of-type(284) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3887ms;
  }
  .cell:nth-of-type(285) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3579ms;
  }
  .cell:nth-of-type(286) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2972ms;
  }
  .cell:nth-of-type(287) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2916ms;
  }
  .cell:nth-of-type(288) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3038ms;
  }
  .cell:nth-of-type(289) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3616ms;
  }
  .cell:nth-of-type(293) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3387ms;
  }
  .cell:nth-of-type(294) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3431ms;
  }
  .cell:nth-of-type(295) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2779ms;
  }
  .cell:nth-of-type(296) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2438ms;
  }
  .cell:nth-of-type(297) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2349ms;
  }
  .cell:nth-of-type(332) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -547ms;
  }
  .cell:nth-of-type(333) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1327ms;
  }
  .cell:nth-of-type(334) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -513ms;
  }
  .cell:nth-of-type(337) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3593ms;
  }
  .cell:nth-of-type(339) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -176ms;
  }
  .cell:nth-of-type(340) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3783ms;
  }
  .cell:nth-of-type(341) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2608ms;
  }
  .cell:nth-of-type(342) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2170ms;
  }
  .cell:nth-of-type(343) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3701ms;
  }
  .cell:nth-of-type(348) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2726ms;
  }
  .cell:nth-of-type(349) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -593ms;
  }
  .cell:nth-of-type(350) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2081ms;
  }
  .cell:nth-of-type(351) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1077ms;
  }
  .cell:nth-of-type(352) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2586ms;
  }
  .cell:nth-of-type(387) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3701ms;
  }
  .cell:nth-of-type(388) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -612ms;
  }
  .cell:nth-of-type(389) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2388ms;
  }
  .cell:nth-of-type(390) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1053ms;
  }
  .cell:nth-of-type(391) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1030ms;
  }
  .cell:nth-of-type(392) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -942ms;
  }
  .cell:nth-of-type(393) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -275ms;
  }
  .cell:nth-of-type(394) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2832ms;
  }
  .cell:nth-of-type(395) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3520ms;
  }
  .cell:nth-of-type(396) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -29ms;
  }
  .cell:nth-of-type(397) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1558ms;
  }
  .cell:nth-of-type(398) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2876ms;
  }
  .cell:nth-of-type(399) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -302ms;
  }
  .cell:nth-of-type(404) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3720ms;
  }
  .cell:nth-of-type(405) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -989ms;
  }
  .cell:nth-of-type(406) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1500ms;
  }
  .cell:nth-of-type(407) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -444ms;
  }
  .cell:nth-of-type(441) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -49ms;
  }
  .cell:nth-of-type(442) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3323ms;
  }
  .cell:nth-of-type(443) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3373ms;
  }
  .cell:nth-of-type(444) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2565ms;
  }
  .cell:nth-of-type(445) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3948ms;
  }
  .cell:nth-of-type(446) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -715ms;
  }
  .cell:nth-of-type(447) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -536ms;
  }
  .cell:nth-of-type(448) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -180ms;
  }
  .cell:nth-of-type(449) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1014ms;
  }
  .cell:nth-of-type(450) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3378ms;
  }
  .cell:nth-of-type(451) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2820ms;
  }
  .cell:nth-of-type(452) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -848ms;
  }
  .cell:nth-of-type(453) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1064ms;
  }
  .cell:nth-of-type(454) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2553ms;
  }
  .cell:nth-of-type(455) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1538ms;
  }
  .cell:nth-of-type(459) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -150ms;
  }
  .cell:nth-of-type(460) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -276ms;
  }
  .cell:nth-of-type(497) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1148ms;
  }
  .cell:nth-of-type(498) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2070ms;
  }
  .cell:nth-of-type(499) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1614ms;
  }
  .cell:nth-of-type(500) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2909ms;
  }
  .cell:nth-of-type(501) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1384ms;
  }
  .cell:nth-of-type(502) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1458ms;
  }
  .cell:nth-of-type(503) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -312ms;
  }
  .cell:nth-of-type(504) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1128ms;
  }
  .cell:nth-of-type(505) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2020ms;
  }
  .cell:nth-of-type(506) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3748ms;
  }
  .cell:nth-of-type(507) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2719ms;
  }
  .cell:nth-of-type(509) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2868ms;
  }
  .cell:nth-of-type(510) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1691ms;
  }
  .cell:nth-of-type(511) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2205ms;
  }
  .cell:nth-of-type(514) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -301ms;
  }
  .cell:nth-of-type(552) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3567ms;
  }
  .cell:nth-of-type(553) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3072ms;
  }
  .cell:nth-of-type(554) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3325ms;
  }
  .cell:nth-of-type(555) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2793ms;
  }
  .cell:nth-of-type(556) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1575ms;
  }
  .cell:nth-of-type(557) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -784ms;
  }
  .cell:nth-of-type(558) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -233ms;
  }
  .cell:nth-of-type(559) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3469ms;
  }
  .cell:nth-of-type(560) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3341ms;
  }
  .cell:nth-of-type(561) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1681ms;
  }
  .cell:nth-of-type(562) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2229ms;
  }
  .cell:nth-of-type(564) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2059ms;
  }
  .cell:nth-of-type(565) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1156ms;
  }
  .cell:nth-of-type(566) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3241ms;
  }
  .cell:nth-of-type(607) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -517ms;
  }
  .cell:nth-of-type(610) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2960ms;
  }
  .cell:nth-of-type(611) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -956ms;
  }
  .cell:nth-of-type(612) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2017ms;
  }
  .cell:nth-of-type(613) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2852ms;
  }
  .cell:nth-of-type(614) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -354ms;
  }
  .cell:nth-of-type(615) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3220ms;
  }
  .cell:nth-of-type(616) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1291ms;
  }
  .cell:nth-of-type(619) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3382ms;
  }
  .cell:nth-of-type(620) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2635ms;
  }
  .cell:nth-of-type(621) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3502ms;
  }
  .cell:nth-of-type(622) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1298ms;
  }
  .cell:nth-of-type(666) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2344ms;
  }
  .cell:nth-of-type(667) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1599ms;
  }
  .cell:nth-of-type(668) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -156ms;
  }
  .cell:nth-of-type(669) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3866ms;
  }
  .cell:nth-of-type(670) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2501ms;
  }
  .cell:nth-of-type(671) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -802ms;
  }
  .cell:nth-of-type(672) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1108ms;
  }
  .cell:nth-of-type(674) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2736ms;
  }
  .cell:nth-of-type(675) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2693ms;
  }
  .cell:nth-of-type(676) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2320ms;
  }
  .cell:nth-of-type(722) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3946ms;
  }
  .cell:nth-of-type(723) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -835ms;
  }
  .cell:nth-of-type(724) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -883ms;
  }
  .cell:nth-of-type(725) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -476ms;
  }
  .cell:nth-of-type(726) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -460ms;
  }
  .cell:nth-of-type(727) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2208ms;
  }
  .cell:nth-of-type(728) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3550ms;
  }
  .cell:nth-of-type(729) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2017ms;
  }
  .cell:nth-of-type(730) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -742ms;
  }
  .cell:nth-of-type(731) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3174ms;
  }
  .cell:nth-of-type(778) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3889ms;
  }
  .cell:nth-of-type(779) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -587ms;
  }
  .cell:nth-of-type(780) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2443ms;
  }
  .cell:nth-of-type(781) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3725ms;
  }
  .cell:nth-of-type(782) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3714ms;
  }
  .cell:nth-of-type(783) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1915ms;
  }
  .cell:nth-of-type(784) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -306ms;
  }
  .cell:nth-of-type(785) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2766ms;
  }
  .cell:nth-of-type(786) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -276ms;
  }
  .cell:nth-of-type(834) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3271ms;
  }
  .cell:nth-of-type(835) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -112ms;
  }
  .cell:nth-of-type(836) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3967ms;
  }
  .cell:nth-of-type(837) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1025ms;
  }
  .cell:nth-of-type(838) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3377ms;
  }
  .cell:nth-of-type(839) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1422ms;
  }
  .cell:nth-of-type(889) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -99ms;
  }
  .cell:nth-of-type(890) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2182ms;
  }
  .cell:nth-of-type(891) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2481ms;
  }
  .cell:nth-of-type(892) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2085ms;
  }
  .cell:nth-of-type(893) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2238ms;
  }
  .cell:nth-of-type(894) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1750ms;
  }
  .cell:nth-of-type(944) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2990ms;
  }
  .cell:nth-of-type(945) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3607ms;
  }
  .cell:nth-of-type(946) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -507ms;
  }
  .cell:nth-of-type(947) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3798ms;
  }
  .cell:nth-of-type(948) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -29ms;
  }
  .cell:nth-of-type(949) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2778ms;
  }
  .cell:nth-of-type(1000) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3463ms;
  }
  .cell:nth-of-type(1001) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3926ms;
  }
  .cell:nth-of-type(1002) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3679ms;
  }
  .cell:nth-of-type(1005) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2327ms;
  }
  .cell:nth-of-type(1056) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3784ms;
  }
  .cell:nth-of-type(1057) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -2415ms;
  }
  .cell:nth-of-type(1112) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -507ms;
  }
  .cell:nth-of-type(1113) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3247ms;
  }
  .cell:nth-of-type(1114) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -1305ms;
  }
  .cell:nth-of-type(1169) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${northamerica} 4s linear infinite;
    animation-delay: -3314ms;
  }
  .cell:nth-of-type(1225) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -852ms;
  }
  .cell:nth-of-type(1226) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -966ms;
  }
  .cell:nth-of-type(1227) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1676ms;
  }
  .cell:nth-of-type(1228) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2560ms;
  }
  .cell:nth-of-type(1229) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1128ms;
  }
  .cell:nth-of-type(1281) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2522ms;
  }
  .cell:nth-of-type(1282) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1142ms;
  }
  .cell:nth-of-type(1283) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -636ms;
  }
  .cell:nth-of-type(1284) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1569ms;
  }
  .cell:nth-of-type(1285) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2912ms;
  }
  .cell:nth-of-type(1335) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2021ms;
  }
  .cell:nth-of-type(1336) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -77ms;
  }
  .cell:nth-of-type(1337) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2740ms;
  }
  .cell:nth-of-type(1338) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2466ms;
  }
  .cell:nth-of-type(1339) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -938ms;
  }
  .cell:nth-of-type(1340) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2365ms;
  }
  .cell:nth-of-type(1341) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2243ms;
  }
  .cell:nth-of-type(1342) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -638ms;
  }
  .cell:nth-of-type(1390) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1917ms;
  }
  .cell:nth-of-type(1391) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -925ms;
  }
  .cell:nth-of-type(1392) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -765ms;
  }
  .cell:nth-of-type(1393) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2289ms;
  }
  .cell:nth-of-type(1394) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2197ms;
  }
  .cell:nth-of-type(1395) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1529ms;
  }
  .cell:nth-of-type(1396) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2555ms;
  }
  .cell:nth-of-type(1397) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1333ms;
  }
  .cell:nth-of-type(1446) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2915ms;
  }
  .cell:nth-of-type(1447) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2065ms;
  }
  .cell:nth-of-type(1448) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1218ms;
  }
  .cell:nth-of-type(1449) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2202ms;
  }
  .cell:nth-of-type(1450) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2932ms;
  }
  .cell:nth-of-type(1451) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2184ms;
  }
  .cell:nth-of-type(1502) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -93ms;
  }
  .cell:nth-of-type(1503) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2535ms;
  }
  .cell:nth-of-type(1504) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -933ms;
  }
  .cell:nth-of-type(1505) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2720ms;
  }
  .cell:nth-of-type(1506) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2686ms;
  }
  .cell:nth-of-type(1557) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1977ms;
  }
  .cell:nth-of-type(1558) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -237ms;
  }
  .cell:nth-of-type(1559) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1787ms;
  }
  .cell:nth-of-type(1560) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -989ms;
  }
  .cell:nth-of-type(1612) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1818ms;
  }
  .cell:nth-of-type(1613) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -968ms;
  }
  .cell:nth-of-type(1614) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1406ms;
  }
  .cell:nth-of-type(1666) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1239ms;
  }
  .cell:nth-of-type(1667) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -1445ms;
  }
  .cell:nth-of-type(1668) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2806ms;
  }
  .cell:nth-of-type(1721) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -167ms;
  }
  .cell:nth-of-type(1722) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -881ms;
  }
  .cell:nth-of-type(1776) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -658ms;
  }
  .cell:nth-of-type(1777) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2709ms;
  }
  .cell:nth-of-type(1831) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2460ms;
  }
  .cell:nth-of-type(1832) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -2234ms;
  }
  .cell:nth-of-type(1887) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${southamerica} 3s linear infinite;
    animation-delay: -479ms;
  }
  .cell:nth-of-type(361) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2506ms;
  }
  .cell:nth-of-type(362) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -268ms;
  }
  .cell:nth-of-type(415) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -169ms;
  }
  .cell:nth-of-type(416) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1395ms;
  }
  .cell:nth-of-type(417) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -880ms;
  }
  .cell:nth-of-type(469) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1298ms;
  }
  .cell:nth-of-type(470) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1860ms;
  }
  .cell:nth-of-type(471) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -842ms;
  }
  .cell:nth-of-type(472) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2159ms;
  }
  .cell:nth-of-type(523) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -922ms;
  }
  .cell:nth-of-type(524) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1342ms;
  }
  .cell:nth-of-type(525) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2539ms;
  }
  .cell:nth-of-type(527) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -494ms;
  }
  .cell:nth-of-type(582) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -187ms;
  }
  .cell:nth-of-type(580) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2483ms;
  }
  .cell:nth-of-type(579) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1671ms;
  }
  .cell:nth-of-type(578) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2714ms;
  }
  .cell:nth-of-type(632) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2971ms;
  }
  .cell:nth-of-type(634) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -657ms;
  }
  .cell:nth-of-type(636) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -244ms;
  }
  .cell:nth-of-type(631) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1560ms;
  }
  .cell:nth-of-type(311) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2457ms;
  }
  .cell:nth-of-type(312) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2046ms;
  }
  .cell:nth-of-type(251) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1994ms;
  }
  .cell:nth-of-type(519) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -82ms;
  }
  .cell:nth-of-type(520) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1820ms;
  }
  .cell:nth-of-type(686) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2073ms;
  }
  .cell:nth-of-type(687) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -111ms;
  }
  .cell:nth-of-type(689) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -75ms;
  }
  .cell:nth-of-type(688) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1283ms;
  }
  .cell:nth-of-type(690) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2782ms;
  }
  .cell:nth-of-type(691) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1969ms;
  }
  .cell:nth-of-type(692) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -456ms;
  }
  .cell:nth-of-type(637) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -618ms;
  }
  .cell:nth-of-type(638) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2086ms;
  }
  .cell:nth-of-type(583) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1257ms;
  }
  .cell:nth-of-type(528) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1325ms;
  }
  .cell:nth-of-type(473) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1185ms;
  }
  .cell:nth-of-type(418) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2057ms;
  }
  .cell:nth-of-type(474) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1002ms;
  }
  .cell:nth-of-type(475) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1991ms;
  }
  .cell:nth-of-type(365) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2170ms;
  }
  .cell:nth-of-type(421) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1585ms;
  }
  .cell:nth-of-type(476) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -715ms;
  }
  .cell:nth-of-type(477) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -937ms;
  }
  .cell:nth-of-type(531) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1401ms;
  }
  .cell:nth-of-type(530) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1455ms;
  }
  .cell:nth-of-type(529) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -228ms;
  }
  .cell:nth-of-type(584) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2756ms;
  }
  .cell:nth-of-type(585) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -171ms;
  }
  .cell:nth-of-type(586) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2039ms;
  }
  .cell:nth-of-type(639) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2445ms;
  }
  .cell:nth-of-type(640) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1927ms;
  }
  .cell:nth-of-type(641) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -425ms;
  }
  .cell:nth-of-type(693) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1235ms;
  }
  .cell:nth-of-type(694) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -747ms;
  }
  .cell:nth-of-type(695) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2823ms;
  }
  .cell:nth-of-type(696) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2652ms;
  }
  .cell:nth-of-type(795) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -73ms;
  }
  .cell:nth-of-type(796) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1727ms;
  }
  .cell:nth-of-type(850) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1784ms;
  }
  .cell:nth-of-type(851) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -507ms;
  }
  .cell:nth-of-type(797) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -555ms;
  }
  .cell:nth-of-type(742) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -253ms;
  }
  .cell:nth-of-type(743) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2045ms;
  }
  .cell:nth-of-type(744) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -277ms;
  }
  .cell:nth-of-type(745) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2194ms;
  }
  .cell:nth-of-type(746) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -317ms;
  }
  .cell:nth-of-type(747) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2570ms;
  }
  .cell:nth-of-type(748) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2360ms;
  }
  .cell:nth-of-type(749) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2971ms;
  }
  .cell:nth-of-type(750) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1704ms;
  }
  .cell:nth-of-type(751) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2602ms;
  }
  .cell:nth-of-type(805) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1460ms;
  }
  .cell:nth-of-type(804) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1033ms;
  }
  .cell:nth-of-type(803) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -415ms;
  }
  .cell:nth-of-type(802) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1405ms;
  }
  .cell:nth-of-type(801) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2230ms;
  }
  .cell:nth-of-type(799) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2975ms;
  }
  .cell:nth-of-type(798) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -294ms;
  }
  .cell:nth-of-type(800) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2525ms;
  }
  .cell:nth-of-type(854) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2991ms;
  }
  .cell:nth-of-type(856) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -1826ms;
  }
  .cell:nth-of-type(857) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -623ms;
  }
  .cell:nth-of-type(911) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${europe} 3s linear infinite;
    animation-delay: -2118ms;
  }
  .cell:nth-of-type(961) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1577ms;
  }
  .cell:nth-of-type(962) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1886ms;
  }
  .cell:nth-of-type(963) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3714ms;
  }
  .cell:nth-of-type(965) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2907ms;
  }
  .cell:nth-of-type(1020) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2237ms;
  }
  .cell:nth-of-type(1021) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3792ms;
  }
  .cell:nth-of-type(1019) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3734ms;
  }
  .cell:nth-of-type(1018) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1195ms;
  }
  .cell:nth-of-type(1017) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2027ms;
  }
  .cell:nth-of-type(1016) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3528ms;
  }
  .cell:nth-of-type(1015) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2951ms;
  }
  .cell:nth-of-type(1069) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -833ms;
  }
  .cell:nth-of-type(1070) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2379ms;
  }
  .cell:nth-of-type(1071) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1813ms;
  }
  .cell:nth-of-type(1072) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3101ms;
  }
  .cell:nth-of-type(1073) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1846ms;
  }
  .cell:nth-of-type(1074) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -348ms;
  }
  .cell:nth-of-type(1075) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3173ms;
  }
  .cell:nth-of-type(1076) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2764ms;
  }
  .cell:nth-of-type(1077) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1295ms;
  }
  .cell:nth-of-type(1124) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -242ms;
  }
  .cell:nth-of-type(1125) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2350ms;
  }
  .cell:nth-of-type(1126) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -474ms;
  }
  .cell:nth-of-type(1127) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1510ms;
  }
  .cell:nth-of-type(1128) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3007ms;
  }
  .cell:nth-of-type(1129) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1417ms;
  }
  .cell:nth-of-type(1130) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -356ms;
  }
  .cell:nth-of-type(1131) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1373ms;
  }
  .cell:nth-of-type(1132) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3136ms;
  }
  .cell:nth-of-type(1133) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2281ms;
  }
  .cell:nth-of-type(1179) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -222ms;
  }
  .cell:nth-of-type(1180) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -514ms;
  }
  .cell:nth-of-type(1181) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -903ms;
  }
  .cell:nth-of-type(1182) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1600ms;
  }
  .cell:nth-of-type(1183) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2743ms;
  }
  .cell:nth-of-type(1184) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1610ms;
  }
  .cell:nth-of-type(1185) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -182ms;
  }
  .cell:nth-of-type(1186) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2888ms;
  }
  .cell:nth-of-type(1187) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3025ms;
  }
  .cell:nth-of-type(1188) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2851ms;
  }
  .cell:nth-of-type(1189) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3969ms;
  }
  .cell:nth-of-type(1235) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -314ms;
  }
  .cell:nth-of-type(1236) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -249ms;
  }
  .cell:nth-of-type(1237) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2555ms;
  }
  .cell:nth-of-type(1238) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2632ms;
  }
  .cell:nth-of-type(1239) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3338ms;
  }
  .cell:nth-of-type(1240) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2471ms;
  }
  .cell:nth-of-type(1241) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3144ms;
  }
  .cell:nth-of-type(1242) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -121ms;
  }
  .cell:nth-of-type(1243) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -532ms;
  }
  .cell:nth-of-type(1244) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -283ms;
  }
  .cell:nth-of-type(1293) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2039ms;
  }
  .cell:nth-of-type(1294) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1853ms;
  }
  .cell:nth-of-type(1295) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -436ms;
  }
  .cell:nth-of-type(1296) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1596ms;
  }
  .cell:nth-of-type(1297) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1136ms;
  }
  .cell:nth-of-type(1298) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1581ms;
  }
  .cell:nth-of-type(1348) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1631ms;
  }
  .cell:nth-of-type(1349) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -900ms;
  }
  .cell:nth-of-type(1350) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2031ms;
  }
  .cell:nth-of-type(1351) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -582ms;
  }
  .cell:nth-of-type(1352) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2423ms;
  }
  .cell:nth-of-type(1404) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -325ms;
  }
  .cell:nth-of-type(1405) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1549ms;
  }
  .cell:nth-of-type(1406) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1775ms;
  }
  .cell:nth-of-type(1407) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2921ms;
  }
  .cell:nth-of-type(1459) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1303ms;
  }
  .cell:nth-of-type(1460) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1396ms;
  }
  .cell:nth-of-type(1461) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3566ms;
  }
  .cell:nth-of-type(1462) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1727ms;
  }
  .cell:nth-of-type(1514) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1446ms;
  }
  .cell:nth-of-type(1515) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2022ms;
  }
  .cell:nth-of-type(1516) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1717ms;
  }
  .cell:nth-of-type(1518) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1371ms;
  }
  .cell:nth-of-type(1573) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -1796ms;
  }
  .cell:nth-of-type(1569) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3016ms;
  }
  .cell:nth-of-type(1570) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3913ms;
  }
  .cell:nth-of-type(1571) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -790ms;
  }
  .cell:nth-of-type(1624) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -3281ms;
  }
  .cell:nth-of-type(1625) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${africa} 4s linear infinite;
    animation-delay: -2073ms;
  }
  .cell:nth-of-type(154) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -646ms;
  }
  .cell:nth-of-type(208) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2063ms;
  }
  .cell:nth-of-type(209) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1838ms;
  }
  .cell:nth-of-type(210) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4341ms;
  }
  .cell:nth-of-type(262) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4536ms;
  }
  .cell:nth-of-type(263) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3976ms;
  }
  .cell:nth-of-type(264) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4015ms;
  }
  .cell:nth-of-type(265) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2756ms;
  }
  .cell:nth-of-type(314) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1821ms;
  }
  .cell:nth-of-type(315) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -865ms;
  }
  .cell:nth-of-type(316) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2031ms;
  }
  .cell:nth-of-type(317) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -91ms;
  }
  .cell:nth-of-type(318) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1880ms;
  }
  .cell:nth-of-type(319) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -823ms;
  }
  .cell:nth-of-type(320) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1522ms;
  }
  .cell:nth-of-type(321) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4242ms;
  }
  .cell:nth-of-type(322) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1338ms;
  }
  .cell:nth-of-type(323) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3876ms;
  }
  .cell:nth-of-type(325) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1640ms;
  }
  .cell:nth-of-type(326) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4409ms;
  }
  .cell:nth-of-type(369) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2143ms;
  }
  .cell:nth-of-type(370) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3356ms;
  }
  .cell:nth-of-type(371) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -571ms;
  }
  .cell:nth-of-type(372) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1080ms;
  }
  .cell:nth-of-type(373) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2166ms;
  }
  .cell:nth-of-type(374) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -843ms;
  }
  .cell:nth-of-type(375) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -486ms;
  }
  .cell:nth-of-type(376) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4604ms;
  }
  .cell:nth-of-type(377) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4461ms;
  }
  .cell:nth-of-type(378) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1638ms;
  }
  .cell:nth-of-type(379) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -933ms;
  }
  .cell:nth-of-type(380) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1780ms;
  }
  .cell:nth-of-type(381) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4083ms;
  }
  .cell:nth-of-type(382) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1317ms;
  }
  .cell:nth-of-type(423) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3625ms;
  }
  .cell:nth-of-type(424) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2359ms;
  }
  .cell:nth-of-type(425) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1800ms;
  }
  .cell:nth-of-type(426) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2244ms;
  }
  .cell:nth-of-type(427) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -172ms;
  }
  .cell:nth-of-type(428) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1799ms;
  }
  .cell:nth-of-type(429) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3928ms;
  }
  .cell:nth-of-type(430) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1855ms;
  }
  .cell:nth-of-type(431) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -845ms;
  }
  .cell:nth-of-type(432) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2837ms;
  }
  .cell:nth-of-type(433) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2059ms;
  }
  .cell:nth-of-type(434) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4081ms;
  }
  .cell:nth-of-type(435) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2789ms;
  }
  .cell:nth-of-type(436) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -239ms;
  }
  .cell:nth-of-type(437) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3336ms;
  }
  .cell:nth-of-type(438) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1163ms;
  }
  .cell:nth-of-type(439) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1287ms;
  }
  .cell:nth-of-type(440) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -986ms;
  }
  .cell:nth-of-type(478) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -898ms;
  }
  .cell:nth-of-type(479) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3916ms;
  }
  .cell:nth-of-type(480) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3783ms;
  }
  .cell:nth-of-type(481) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3281ms;
  }
  .cell:nth-of-type(482) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -39ms;
  }
  .cell:nth-of-type(483) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2411ms;
  }
  .cell:nth-of-type(484) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3538ms;
  }
  .cell:nth-of-type(485) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1288ms;
  }
  .cell:nth-of-type(486) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3889ms;
  }
  .cell:nth-of-type(487) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2188ms;
  }
  .cell:nth-of-type(488) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2676ms;
  }
  .cell:nth-of-type(489) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3629ms;
  }
  .cell:nth-of-type(490) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -195ms;
  }
  .cell:nth-of-type(491) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3188ms;
  }
  .cell:nth-of-type(492) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -962ms;
  }
  .cell:nth-of-type(493) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4480ms;
  }
  .cell:nth-of-type(494) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1535ms;
  }
  .cell:nth-of-type(495) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1149ms;
  }
  .cell:nth-of-type(532) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3661ms;
  }
  .cell:nth-of-type(533) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1572ms;
  }
  .cell:nth-of-type(534) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4933ms;
  }
  .cell:nth-of-type(535) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1347ms;
  }
  .cell:nth-of-type(536) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3335ms;
  }
  .cell:nth-of-type(537) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -772ms;
  }
  .cell:nth-of-type(538) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4242ms;
  }
  .cell:nth-of-type(539) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1705ms;
  }
  .cell:nth-of-type(540) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4165ms;
  }
  .cell:nth-of-type(541) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1016ms;
  }
  .cell:nth-of-type(542) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2853ms;
  }
  .cell:nth-of-type(543) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3707ms;
  }
  .cell:nth-of-type(544) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1679ms;
  }
  .cell:nth-of-type(545) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -645ms;
  }
  .cell:nth-of-type(546) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4250ms;
  }
  .cell:nth-of-type(547) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1888ms;
  }
  .cell:nth-of-type(548) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1412ms;
  }
  .cell:nth-of-type(549) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2749ms;
  }
  .cell:nth-of-type(550) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3377ms;
  }
  .cell:nth-of-type(587) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3957ms;
  }
  .cell:nth-of-type(588) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4164ms;
  }
  .cell:nth-of-type(589) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -512ms;
  }
  .cell:nth-of-type(590) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3230ms;
  }
  .cell:nth-of-type(591) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -719ms;
  }
  .cell:nth-of-type(592) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2607ms;
  }
  .cell:nth-of-type(593) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -815ms;
  }
  .cell:nth-of-type(594) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2887ms;
  }
  .cell:nth-of-type(595) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2703ms;
  }
  .cell:nth-of-type(596) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2059ms;
  }
  .cell:nth-of-type(597) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2339ms;
  }
  .cell:nth-of-type(598) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3068ms;
  }
  .cell:nth-of-type(599) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4819ms;
  }
  .cell:nth-of-type(600) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1395ms;
  }
  .cell:nth-of-type(601) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -32ms;
  }
  .cell:nth-of-type(603) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3996ms;
  }
  .cell:nth-of-type(642) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -632ms;
  }
  .cell:nth-of-type(643) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1296ms;
  }
  .cell:nth-of-type(644) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1923ms;
  }
  .cell:nth-of-type(645) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -71ms;
  }
  .cell:nth-of-type(646) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3073ms;
  }
  .cell:nth-of-type(647) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2947ms;
  }
  .cell:nth-of-type(648) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2237ms;
  }
  .cell:nth-of-type(649) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4412ms;
  }
  .cell:nth-of-type(650) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2094ms;
  }
  .cell:nth-of-type(651) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3185ms;
  }
  .cell:nth-of-type(652) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2600ms;
  }
  .cell:nth-of-type(653) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2958ms;
  }
  .cell:nth-of-type(654) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3526ms;
  }
  .cell:nth-of-type(657) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2132ms;
  }
  .cell:nth-of-type(658) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1698ms;
  }
  .cell:nth-of-type(697) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1578ms;
  }
  .cell:nth-of-type(698) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1278ms;
  }
  .cell:nth-of-type(699) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2237ms;
  }
  .cell:nth-of-type(700) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3118ms;
  }
  .cell:nth-of-type(701) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2030ms;
  }
  .cell:nth-of-type(702) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1086ms;
  }
  .cell:nth-of-type(703) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4115ms;
  }
  .cell:nth-of-type(704) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4366ms;
  }
  .cell:nth-of-type(705) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4229ms;
  }
  .cell:nth-of-type(706) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -399ms;
  }
  .cell:nth-of-type(707) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4280ms;
  }
  .cell:nth-of-type(708) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1571ms;
  }
  .cell:nth-of-type(709) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4422ms;
  }
  .cell:nth-of-type(712) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -293ms;
  }
  .cell:nth-of-type(752) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2541ms;
  }
  .cell:nth-of-type(753) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1729ms;
  }
  .cell:nth-of-type(754) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1398ms;
  }
  .cell:nth-of-type(755) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2449ms;
  }
  .cell:nth-of-type(756) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2617ms;
  }
  .cell:nth-of-type(757) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2556ms;
  }
  .cell:nth-of-type(758) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2923ms;
  }
  .cell:nth-of-type(759) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2167ms;
  }
  .cell:nth-of-type(760) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3348ms;
  }
  .cell:nth-of-type(761) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -859ms;
  }
  .cell:nth-of-type(762) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -724ms;
  }
  .cell:nth-of-type(763) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1864ms;
  }
  .cell:nth-of-type(764) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3557ms;
  }
  .cell:nth-of-type(807) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2576ms;
  }
  .cell:nth-of-type(808) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3826ms;
  }
  .cell:nth-of-type(809) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2971ms;
  }
  .cell:nth-of-type(810) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2857ms;
  }
  .cell:nth-of-type(811) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4923ms;
  }
  .cell:nth-of-type(812) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -902ms;
  }
  .cell:nth-of-type(813) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4419ms;
  }
  .cell:nth-of-type(814) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1283ms;
  }
  .cell:nth-of-type(815) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2746ms;
  }
  .cell:nth-of-type(816) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3092ms;
  }
  .cell:nth-of-type(817) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1769ms;
  }
  .cell:nth-of-type(818) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4110ms;
  }
  .cell:nth-of-type(819) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4461ms;
  }
  .cell:nth-of-type(821) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3293ms;
  }
  .cell:nth-of-type(859) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -83ms;
  }
  .cell:nth-of-type(860) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3684ms;
  }
  .cell:nth-of-type(861) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -603ms;
  }
  .cell:nth-of-type(862) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -224ms;
  }
  .cell:nth-of-type(863) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2657ms;
  }
  .cell:nth-of-type(864) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -284ms;
  }
  .cell:nth-of-type(865) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1204ms;
  }
  .cell:nth-of-type(866) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4741ms;
  }
  .cell:nth-of-type(867) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4095ms;
  }
  .cell:nth-of-type(868) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -699ms;
  }
  .cell:nth-of-type(869) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2868ms;
  }
  .cell:nth-of-type(870) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1825ms;
  }
  .cell:nth-of-type(871) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3777ms;
  }
  .cell:nth-of-type(872) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2232ms;
  }
  .cell:nth-of-type(873) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1587ms;
  }
  .cell:nth-of-type(876) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2851ms;
  }
  .cell:nth-of-type(913) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3559ms;
  }
  .cell:nth-of-type(914) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4018ms;
  }
  .cell:nth-of-type(916) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3916ms;
  }
  .cell:nth-of-type(917) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2162ms;
  }
  .cell:nth-of-type(918) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2120ms;
  }
  .cell:nth-of-type(919) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1304ms;
  }
  .cell:nth-of-type(920) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3609ms;
  }
  .cell:nth-of-type(921) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3587ms;
  }
  .cell:nth-of-type(922) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -98ms;
  }
  .cell:nth-of-type(923) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -300ms;
  }
  .cell:nth-of-type(924) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -116ms;
  }
  .cell:nth-of-type(925) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1628ms;
  }
  .cell:nth-of-type(926) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1580ms;
  }
  .cell:nth-of-type(928) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2469ms;
  }
  .cell:nth-of-type(930) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1304ms;
  }
  .cell:nth-of-type(967) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1995ms;
  }
  .cell:nth-of-type(968) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -790ms;
  }
  .cell:nth-of-type(969) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3059ms;
  }
  .cell:nth-of-type(970) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4980ms;
  }
  .cell:nth-of-type(972) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3306ms;
  }
  .cell:nth-of-type(973) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3579ms;
  }
  .cell:nth-of-type(974) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2311ms;
  }
  .cell:nth-of-type(975) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -183ms;
  }
  .cell:nth-of-type(976) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2480ms;
  }
  .cell:nth-of-type(977) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -843ms;
  }
  .cell:nth-of-type(978) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1181ms;
  }
  .cell:nth-of-type(979) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1421ms;
  }
  .cell:nth-of-type(980) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4570ms;
  }
  .cell:nth-of-type(981) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2826ms;
  }
  .cell:nth-of-type(982) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1848ms;
  }
  .cell:nth-of-type(1022) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2584ms;
  }
  .cell:nth-of-type(1023) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2680ms;
  }
  .cell:nth-of-type(1024) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4122ms;
  }
  .cell:nth-of-type(1025) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3198ms;
  }
  .cell:nth-of-type(1026) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2132ms;
  }
  .cell:nth-of-type(1027) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2461ms;
  }
  .cell:nth-of-type(1029) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1609ms;
  }
  .cell:nth-of-type(1030) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -920ms;
  }
  .cell:nth-of-type(1031) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3621ms;
  }
  .cell:nth-of-type(1034) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2209ms;
  }
  .cell:nth-of-type(1035) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4640ms;
  }
  .cell:nth-of-type(1036) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1777ms;
  }
  .cell:nth-of-type(1037) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1289ms;
  }
  .cell:nth-of-type(1079) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -925ms;
  }
  .cell:nth-of-type(1080) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2875ms;
  }
  .cell:nth-of-type(1081) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2187ms;
  }
  .cell:nth-of-type(1085) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3479ms;
  }
  .cell:nth-of-type(1089) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -704ms;
  }
  .cell:nth-of-type(1090) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -2821ms;
  }
  .cell:nth-of-type(1135) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -27ms;
  }
  .cell:nth-of-type(1144) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1312ms;
  }
  .cell:nth-of-type(1145) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3275ms;
  }
  .cell:nth-of-type(1200) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4802ms;
  }
  .cell:nth-of-type(1202) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -912ms;
  }
  .cell:nth-of-type(1203) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -4984ms;
  }
  .cell:nth-of-type(1255) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1001ms;
  }
  .cell:nth-of-type(1256) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -583ms;
  }
  .cell:nth-of-type(1257) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -1262ms;
  }
  .cell:nth-of-type(1311) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${asia} 5s linear infinite;
    animation-delay: -3133ms;
  }
  .cell:nth-of-type(1206) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -405ms;
  }
  .cell:nth-of-type(1262) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -940ms;
  }
  .cell:nth-of-type(1263) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -669ms;
  }
  .cell:nth-of-type(1317) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -420ms;
  }
  .cell:nth-of-type(1369) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1535ms;
  }
  .cell:nth-of-type(1370) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -990ms;
  }
  .cell:nth-of-type(1372) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1541ms;
  }
  .cell:nth-of-type(1422) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1907ms;
  }
  .cell:nth-of-type(1423) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -137ms;
  }
  .cell:nth-of-type(1424) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1112ms;
  }
  .cell:nth-of-type(1425) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -34ms;
  }
  .cell:nth-of-type(1426) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1222ms;
  }
  .cell:nth-of-type(1427) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -546ms;
  }
  .cell:nth-of-type(1428) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1135ms;
  }
  .cell:nth-of-type(1476) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1079ms;
  }
  .cell:nth-of-type(1477) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -410ms;
  }
  .cell:nth-of-type(1478) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -103ms;
  }
  .cell:nth-of-type(1479) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -207ms;
  }
  .cell:nth-of-type(1480) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1450ms;
  }
  .cell:nth-of-type(1481) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -186ms;
  }
  .cell:nth-of-type(1482) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -337ms;
  }
  .cell:nth-of-type(1483) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -983ms;
  }
  .cell:nth-of-type(1531) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -212ms;
  }
  .cell:nth-of-type(1532) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1110ms;
  }
  .cell:nth-of-type(1533) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -486ms;
  }
  .cell:nth-of-type(1534) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -439ms;
  }
  .cell:nth-of-type(1535) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -925ms;
  }
  .cell:nth-of-type(1536) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -723ms;
  }
  .cell:nth-of-type(1537) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1525ms;
  }
  .cell:nth-of-type(1538) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1120ms;
  }
  .cell:nth-of-type(1586) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -57ms;
  }
  .cell:nth-of-type(1587) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -715ms;
  }
  .cell:nth-of-type(1590) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1663ms;
  }
  .cell:nth-of-type(1591) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -659ms;
  }
  .cell:nth-of-type(1592) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -267ms;
  }
  .cell:nth-of-type(1645) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -669ms;
  }
  .cell:nth-of-type(1646) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -189ms;
  }
  .cell:nth-of-type(1650) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -1804ms;
  }
  .cell:nth-of-type(1705) {
    background-color: #222;
    font-size: 0.5em;
    border-radius: 50%;
    animation: ${australia} 2s linear infinite;
    animation-delay: -295ms;
  }
  `;
