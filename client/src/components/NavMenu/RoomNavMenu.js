import React from "react";
import { Navbar } from "react-bootstrap";

import "../../css/bootstrap.min.css";
import "../../css/RoomNavMenu.css";

import { Link } from "react-router-dom";

function RoomNavMenu(props) {
  let fixed = props.fixed ? "top" : "";
  const navStyle = { textDecoration: "none" };
  return (
    <Navbar
      className="shadow-lg"
      id="room-navbar"
      bg="dark"
      variant="dark"
      fixed={fixed}
    >
      <Link to="/" style={navStyle} className="navbar-brand">
        <img
          src="/coniferlogo_simple.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="conifer logo room"
        />
        conifer
      </Link>
    </Navbar>
  );
}

export default RoomNavMenu;
