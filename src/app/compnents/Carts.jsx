import React from "react";
import Cart from "./Cart";
import image1 from "../images/01.png";
import image2 from "../images/02.png";
import image3 from "../images/03.png";

function Carts() {
  return (
    <div className="carts">
      <Cart
        title="GEt Started"
        h2="What level of  hiker are you?"
        num="01"
        param="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
        img={image1}
        type="inright"
      />{" "}
      <Cart
        title="Hiking Essentials"
        h2="Picking the right Hiking Gear!"
        num="02"
        param="Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        img={image2}
      />{" "}
      <Cart
        title="where you go is the key"
        h2="Understand Your Map & Timing"
        num="03"
        param="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
        img={image3}
        type="inright"
      />
    </div>
  );
}

export default Carts;
