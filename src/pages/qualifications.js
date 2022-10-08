import React from "react";
import Card from "react-bootstrap/Card";
import urkunde from "../../public/urkunde.jpg";

export default () => {
  const width = 320;
  const height = 150;

  return (
    <div>
      <h1>Qualifikationen</h1>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={urkunde} />
        <Card.Body>
          <Card.Title>Powerlifting Academy</Card.Title>
          <Card.Text>Trainerausbildung Kraftdreikampf 2022</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
