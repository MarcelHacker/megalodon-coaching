import React from "react";
import Card from "react-bootstrap/Card";

import "./ShowcaseComp.css";

const ShowcaseComp = (props) => {
  return (
    <div>
      <Card>
        <Card.Img src={props.src} height={props.height} alt={props.alt}></Card.Img>
        {props.title}
      </Card>
    </div>
  );
};

export default ShowcaseComp;
