import React from "react";
import Card from "react-bootstrap/Card";

import "./ShowcaseComp.css";

const ShowcaseComp = (props) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.src} height={props.height} alt={props.alt} />
        <Card.ImgOverlay>
          <Card.Title className="bto">{props.title}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default ShowcaseComp;
