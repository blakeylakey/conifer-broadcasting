import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "../../css/bootstrap.min.css";

import { Link } from "react-router-dom";

function HomeNavMenu() {
  const navStyle = { textDecoration: "none" };
  return (
    <Navbar id="home-navbar" expand="lg" bg="dark" fixed="top">
      <Container>
        <Link
          to="/"
          style={navStyle}
          className="navbar-brand"
          id="home-navbar-brand"
        >
          <img src="/coniferlogo.svg" height="100" alt="conifer logo" />
        </Link>
      </Container>
    </Navbar>
  );
}

export default HomeNavMenu;
