import React from "react";

import "../../css/Home.css";

import NavMenu from "../NavMenu/NavMenu";
import Hero from "../HeroImage/Hero";

function Home() {
  return (
    <>
      <NavMenu home />
      <Hero />
    </>
  );
}

export default Home;
