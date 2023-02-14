import logo from './logo.svg';
import './App.css';
import './Card.js'
import { ReactDOM } from 'react';
import { Card, HelloWorld } from './Card.js';
import { Deck } from './Card.js';
import aos from './Cards/aos.png';
import kos from './Cards/kos.png';
import qos from './Cards/qos.png';
import jos from './Cards/jos.png';
import tos from './Cards/tos.png';
import nines from './Cards/9os.png';
import eights from './Cards/8os.png';
import sevens from './Cards/7os.png';
import sixs from './Cards/6os.png';
import fives from './Cards/5os.png';
import fours from './Cards/4os.png';
import threes from './Cards/3os.png';
import twos from './Cards/2os.png';
import aod from './Cards/aod.png';
import kod from './Cards/kod.png';
import qod from './Cards/qod.png';
import jod from './Cards/jod.png';
import tod from './Cards/tod.png';
import nined from './Cards/9od.png';
import eightd from './Cards/8od.png';
import sevend from './Cards/7od.png';
import sixd from './Cards/6od.png';
import fived from './Cards/5od.png';
import fourd from './Cards/4od.png';
import threed from './Cards/3od.png';
import twod from './Cards/2od.png';
import aoh from './Cards/aoh.png';
import koh from './Cards/koh.png';
import qoh from './Cards/qoh.png';
import joh from './Cards/joh.png';
import toh from './Cards/toh.png';
import nineh from './Cards/9oh.png';
import eighth from './Cards/8oh.png';
import sevenh from './Cards/7oh.png';
import sixh from './Cards/6oh.png';
import fiveh from './Cards/5oh.png';
import fourh from './Cards/4oh.png';
import threeh from './Cards/3oh.png';
import twoh from './Cards/2oh.png';
import aoc from './Cards/aoc.png';
import koc from './Cards/koc.png';
import qoc from './Cards/qoc.png';
import joc from './Cards/joc.png';
import toc from './Cards/toc.png';
import ninec from './Cards/9oc.png';
import eightc from './Cards/8oc.png';
import sevenc from './Cards/7oc.png';
import sixc from './Cards/6oc.png';
import fivec from './Cards/5oc.png';
import fourc from './Cards/4oc.png';
import threec from './Cards/3oc.png';
import twoc from './Cards/2oc.png';
import React, { useState } from "react";
import { wait } from '@testing-library/user-event/dist/utils';

var a = [aos, twos, threes, fours, fives, sixs, sevens, eights, nines, tos, jos, qos, kos, aod, twod, threed, fourd, fived, sixd, sevend, eightd, nined, tod, jod, qod, kod, aoh, twoh, threeh, fourh, fiveh, sixh, sevenh, eighth, nineh, toh, joh, qoh, koh, aoc, twoc, threec, fourc, fivec, sixc, sevenc, eightc, ninec, toc, joc, qoc, koc];

var z = new Deck();
var b = z.drawCard();
var c = z.drawCard();
var d = z.drawCard();
var e = z.drawCard();
var f = z.drawCard();
var g = z.drawCard();
var h = z.drawCard();
var i = z.drawCard();
var j = z.drawCard();
console.log(b.getImageIndex());

function App() {
  function openingThing(img){
    if(isOpening){
      return <img src={img} class = "image"/>
    }
    return null;
  }
  function flopThing(img){
    if(isFlop){
      return <img src={img} class = "image"/>
    }
    return null;
  }
  function turnThing(img){
    if(isTurn){
      return <img src={img} class = "image"/>
    }
    return null;
  }
  function riverThing(img){
    if(isRiver){
      return <img src={img} class = "image"/>
    }
    return null;
  }
  let [isOpening, isOpeningTwo] = useState(false);
  let [isFlop, isFlopTwo] = useState(false);
  let [isTurn, isTurnTwo] = useState(false);
  let [isRiver, isRiverTwo] = useState(false);
  const handleChange=(a, b)=>{
    wait(500);
    return b(!a);
  }
  function reset(){
    
  }
    return(
    <body class="background">
      <button class = "button" onClick={() => handleChange(isOpening, isOpeningTwo)}>Opening</button>
      <button onClick={() => handleChange(isFlop, isFlopTwo)}>Flop</button>
      <button onClick={() => handleChange(isTurn, isTurnTwo)}>Turn</button>
      <button onClick={() => handleChange(isRiver, isRiverTwo)}>River</button>
        <div class="div1">
          {openingThing(a[b.getImageIndex()])}
        </div>
        <div class="div2">
          {openingThing(a[c.getImageIndex()])}
        </div>
        <div class="div3">
          {flopThing(a[d.getImageIndex()])}
        </div>
        <div class="div4">
          {flopThing(a[e.getImageIndex()])}
        </div>
        <div class="div5">
          {flopThing(a[f.getImageIndex()])}
        </div>
        <div class="div6">
          {turnThing(a[g.getImageIndex()])}
        </div>
        <div class="div7">
          {riverThing(a[h.getImageIndex()])}
        </div>
        <div class="div8">
          {openingThing(a[i.getImageIndex()])}
        </div>
        <div class="div9">
          {openingThing(a[j.getImageIndex()])}    
        </div>
    </body>
  );
}
export default App;
