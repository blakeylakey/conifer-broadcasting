import React from "react";

import { Modal, Form, Button } from "react-bootstrap";

function HeroModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Form onSubmit={props.handleRedirect}>
        <Modal.Header closeButton>
          <Modal.Title>Join a public conference room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Room ID</Form.Label>
          <Form.Control
            id="go-to-room-id"
            type="text"
            placeholder="Unique room ID"
          />
          <Form.Text>
            Enter in the room ID given to you by the broadcaster
          </Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>

          <Button variant="primary" type="submit">
            Join room
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default HeroModal;
