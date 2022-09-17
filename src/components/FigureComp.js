import React from "react";
import Figure from "react-bootstrap/Figure";

const FigureComp = (props) => {
  return (
    <Figure>
      <Figure.Image width={props.width} height={props.height} alt={props.alt} src={props.src} />
      <Figure.Caption>{props.text}</Figure.Caption>
    </Figure>
  );
};

export default FigureComp;
