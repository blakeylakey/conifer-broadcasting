import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "../../css/bootstrap.min.css";

function HomeNavMenu() {
  return (
    <Navbar id="home-navbar" expand="lg" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand id="home-navbar-brand" href="/">
          <img src="/coniferlogo.svg" height="100" alt="conifer logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default HomeNavMenu;
