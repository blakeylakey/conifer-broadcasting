import React from "react";

import HeroCard from "./HeroCard";
import HeroModal from "./HeroModal";
import HeroJumbo from "./HeroJumbo";

import "../../css/Hero.css";

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      modalShow: false
    };

    this.handleModalChange = this.handleModalChange.bind(this);
  }

  handleModalChange() {
    this.setState(state => ({
      modalShow: !state.modalShow
    }));
  }

  handleRedirect(e) {
    e.preventDefault();
    let roomId = document.getElementById("go-to-room-id").value;
    let baseURL = window.location.origin + "/room/";
    window.location.href = baseURL + roomId;
  }

  render() {
    const openCardTitle = "Open Conference Room";
    const openCardText =
      "Open a public conference room. Anyone with the conference room URL or conference room ID can join.";
    const openCardBtnText = "Open Conference";

    const joinCardTitle = "Join Conference Room";
    const joinCardText =
      "Join either a private or public conference room. You need the conference room ID (and password if private) to join.";
    const joinCardBtnTxt = "Join Conference";

    return (
      <HeroJumbo
        cardLeft={
          <HeroCard
            title={openCardTitle}
            text={openCardText}
            btnText={openCardBtnText}
          />
        }
        cardRight={
          <HeroCard
            title={joinCardTitle}
            text={joinCardText}
            btnText={joinCardBtnTxt}
            handleClick={this.handleModalChange}
          />
        }
        modal={
          <HeroModal
            show={this.state.modalShow}
            handleClose={this.handleModalChange}
            handleRedirect={this.handleRedirect}
          />
        }
      />
    );
  }
}

export default Hero;