import React from "react";
import Card from "react-bootstrap/Card";
import urkunde from "../assets/urkunde.jpg";

export default () => {
  const width = 320;
  const height = 150;

  return (
    <div>
      <h1>Qualifikationen</h1>
      <Card style={{width: "18rem"}}>
        <Card.Img variant="top" src={urkunde} />
        <Card.Body>
          <Card.Title>Powerlifting Academy Trainerausbildung</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
