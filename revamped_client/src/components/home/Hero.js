import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <>
    <div className="main-home-hero-text">
      <div className="main-home-hero-text-element">
        <h1>Fast,</h1>
      </div>
      <div className="main-home-hero-text-element">
        <h1>Simple</h1>
      </div>
      <div className="main-home-hero-text-element">
        <h1>
          ScreenSharing
          <span className="main-home-hero-text-element-happy-face">
            <img src="/emoji.png" height="30px" />
          </span>
        </h1>
      </div>
      <div className="main-home-hero-buttons">
        <span className="main-home-hero-button-start">
          <Link to="/start">Start a Cast</Link>
        </span>
        <span className="main-home-hero-button-join">
          <Link to="/join">Join a Cast</Link>
        </span>
      </div>
    </div>
    <div className="main-home-hero-bg">
      <img className="main-home-hero-bg-img" src="./hero.svg" height="100%" />
    </div>
  </>
);

export default Hero;
