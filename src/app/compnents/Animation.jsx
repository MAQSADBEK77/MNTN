"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Animation = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-right flex text-end gap-6 items-center fixed top-1/2 right-5">
      <div className="locator-left flex flex-col gap-4">
        <Link href="#">Start</Link>
        <Link href="#">01</Link>
        <Link href="#">02</Link>
        <Link href="#">03</Link>
      </div>
      <div className="locator-right rotate-180">
        <div className="progress h-36 w-1 bg-white relative">
          <div
            className="bg-slate-700 absolute top-0 left-0 w-full"
            style={{ height: `${100 - scrollPercent}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
