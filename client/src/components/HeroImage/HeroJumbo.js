import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import Disclaimer from "../Disclaimer";

function HeroJumbo(props) {
  return (
    <Jumbotron className="d-flex" id="hero-jumbotron" fluid>
      <div className="overlay" id="hero-overlay"></div>

      <Container className="my-auto" id="hero-container">
        <Row>
          <Col xs={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
            <Row>
              <Col className="text-center mt-2">{props.cardLeft}</Col>
              <Col className="text-center mt-2">{props.cardRight}</Col>
            </Row>
          </Col>
        </Row>
        <Disclaimer />
      </Container>

      {props.modal}
    </Jumbotron>
  );
}

export default HeroJumbo;
