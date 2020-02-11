import React from "react";
import { Card, Button } from "react-bootstrap";

function HeroCard(props) {
  let cardBtn;

  if (props.handleClick) {
    cardBtn = (
      <Button variant="primary" onClick={props.handleClick}>
        {props.btnText}
      </Button>
    );
  } else {
    cardBtn = (
      <a href={"room/" + (+new Date()).toString(36) + "/#init"}>
        <Button variant="primary">{props.btnText}</Button>
      </a>
    );
  }

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {cardBtn}
      </Card.Footer>
    </Card>
  );
}

export default HeroCard;
