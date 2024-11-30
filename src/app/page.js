import Carts from "./compnents/Carts";
import Hero from "./compnents/Hero";
import NavBar from "./compnents/NavBar";

export default function Home() {
  return (
    <div className="parent-container">
      <div className="container2">
        <div className="container container-bg">
          <NavBar />
          <div className="parent-hero w-full min-h-[1500px]">
            <Hero />
          </div>
            <Carts/>
        </div>
      </div>
    </div>
  );
}
