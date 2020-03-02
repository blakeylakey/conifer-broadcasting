import React from "react";
import Hero from "./Hero";
import SignUpEmail from "./SignUpEmail";
import SocialButtons from "./SocialButtons";

const Home = () => (
  <main className="main-home-page">
    <SocialButtons />
    <Hero />
    <SignUpEmail />
  </main>
);

export default Home;
