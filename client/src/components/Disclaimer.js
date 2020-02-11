import React from "react";
import { Row, Col } from "react-bootstrap";

import "../css/Disclaimer.css";

function Disclaimer(props) {
  const disclaimerText = `
    Conifer uses peer-to-peer communication facilitated by WebRTC to
    broadcast your screen to anyone with the URL of your broadcast.
    This is a free project, and thus uses public STUN servers. If you
    have issues with your connection, please refresh your screen. ONLY
    SUPPORTED BY Chrome & Firefox.
  `;

  const relative = props.relative? {position: "relative"} : null;

  return (
    <Row id="disclaimer-content" className="mx-auto pt-3" style={relative}>
      <Col xs={12} sm={12} md={{ span: 8, offset: 2 }}>
        <p className="text-center">
          <small>{disclaimerText}</small>
        </p>
      </Col>
    </Row>
  );
}

export default Disclaimer;