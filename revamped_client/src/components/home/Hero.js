import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as initialLoadedActions from "../../redux/actions/initialLoadedActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Hero = ({ initialLoaded, actions }) => {
  useEffect(() => {
    // sets initial loaded to decide whether to play the hero bg animation
    // on first render of hero, it'll play and set the initial load
    // all subsequent renders wont play, and instead just load regular style
    if (!initialLoaded) {
      const bg = document.getElementsByClassName(
        "main-home-hero-bg-img-play-icon"
      )[0];
      bg.classList.add("loaded");
      actions.setInitialLoaded();
    }
  });
  return (
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
              <img src="/emoji.png" />
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
        <img
          className={`main-home-hero-bg-img-play-icon ${
            initialLoaded ? "loaded" : ""
          }`}
          src="./hero-play-icon.svg"
        />
      </div>
    </>
  );
};

Hero.propTypes = {
  initialLoaded: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { initialLoaded: state.initialLoaded };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(initialLoadedActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
