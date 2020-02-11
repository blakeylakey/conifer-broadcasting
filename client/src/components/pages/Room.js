import React from "react";

import NavMenu from "../NavMenu/NavMenu";
import Disclaimer from "../Disclaimer";
import RoomContent from "../RoomContent";
import "../../css/Room.css";

import p2pHandler from "../Handlers/p2pHandler";

class Room extends React.Component {
  componentDidMount() {
    let endpoint = window.location.origin;
    let init = this.props.location.hash ? true : false;
    let roomId = this.props.match.params.id;
    p2pHandler(endpoint, init, roomId);
  }

  render() {
    return (
      <div id="room-content">
        <NavMenu room />
        <RoomContent roomId={this.props.match.params.id} location={this.props.location} />
        <Disclaimer relative/>
      </div>
    );
  }
}

export default Room;
