import React from "react";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FigureComp = (props) => {
  return (
    <Card style={{width: "18rem"}}>
      <Figure>
        <Figure.Image width={props.width} height={props.height} alt={props.alt} src={props.src} />
        <Figure.Caption>{props.text}</Figure.Caption>
      </Figure>
      <Button variant="primary" href="/contact">
        Anfragen
      </Button>
    </Card>
  );
};

export default FigureComp;
