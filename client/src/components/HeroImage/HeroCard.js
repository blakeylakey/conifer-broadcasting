import React from "react";
import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

function HeroCard(props) {
  let cardBtn;
  const linkStyles = { textDecoration: "none" };

  if (props.handleClick) {
    cardBtn = (
      <Button variant="primary" onClick={props.handleClick}>
        {props.btnText}
      </Button>
    );
  } else {
    cardBtn = (
      <Link
        to={"room/" + (+new Date()).toString(36) + "/#init"}
        style={linkStyles}
      >
        <Button variant="primary">{props.btnText}</Button>
      </Link>
    );
  }

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <Card.Footer>{cardBtn}</Card.Footer>
    </Card>
  );
}

export default HeroCard;
