import Image from "next/image";
import React from "react";
import Link from "next/link";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import Title from "./Title";
import scroll from "../images/croll-bottom.svg";
import Animation from "./Animation";
function Hero() {
  return (
    <div className="hero mx-auto pt-28">
      <div className="hero-left flex flex-col gap-6 items-center fixed top-1/2 left-5">
        <Link href="#" className="rotate-90 mb-6">
          {" "}
          Follow us
        </Link>{" "}
        <Link href="#">
          <Image src={instagram} />
        </Link>{" "}
        <Link href="#">
          <Image src={twitter} />
        </Link>{" "}
      </div>
      <div className="hero-center-text mx-auto max-w-[950px] flex flex-col gap-8">
        <Title Text="A Hiking guide" />
        <h1>Be prepared for the Mountains and beyond!</h1>
        <div className="scroll flex gap-2 cursor-pointer">
          <span>scroll down</span>
          <Image src={scroll} />
        </div>
      </div>
      <Animation />
    </div>
  );
}

export default Hero;
