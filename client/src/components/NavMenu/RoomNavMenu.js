import React from "react";
import { Navbar } from "react-bootstrap";

import "../../css/bootstrap.min.css";
import "../../css/RoomNavMenu.css";

function RoomNavMenu(props) {
  let fixed = props.fixed ? "top" : "";

  return (
    <Navbar
      className="shadow-lg"
      id="room-navbar"
      bg="dark"
      variant="dark"
      fixed={fixed}
    >
      <Navbar.Brand href="/">
        <img
          src="/coniferlogo_simple.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="conifer logo room"
        />
        conifer
      </Navbar.Brand>
    </Navbar>
  );
}

export default RoomNavMenu;