import React from "react";

import { Row, Col } from "react-bootstrap";
import CopyClipboard from "./CopyClipboard";

function RoomContent(props) {
  return (
    <>
      <Row id="main-content" className="mx-auto">
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          className="p-0"
        >
          <video
            className="shadow"
            width="100%"
            controls
            muted
            autoPlay={true}
          ></video>
        </Col>
      </Row>
      <Row id="extra-content" className="mt-3 mx-2">
        <Col xs={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
          <CopyClipboard
            roomId={props.roomId}
            location={props.location}
          />
        </Col>
      </Row>
    </>
  );
}

export default RoomContent;
