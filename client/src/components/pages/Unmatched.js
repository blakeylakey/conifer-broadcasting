import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../css/Unmatched.css";

import NavMenu from "../NavMenu/NavMenu";

function Unmatched() {
  return (
    <div id="unmatched-content">
      <NavMenu unmatched />
      <div className="d-flex" style={{ height: "100vh" }}>
        <Container className="my-auto">
          <Row>
            <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
              <h1 className="text-center" id="unmatched-header">
                404
              </h1>
              <a href="/">
                <p className="text-center text-light">
                  Click to return to homepage
                </p>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Unmatched;
