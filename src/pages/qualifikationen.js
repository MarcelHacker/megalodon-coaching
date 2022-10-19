import { Container } from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";
import urkunde from "../../public/urkunde.jpg";

export default () => {
  const width = 120;
  const height = 150;

  return (
    <div>
      <Container>
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={urkunde} />
          <Card.Body>
            <Card.Title>Powerlifting Academy</Card.Title>
            <Card.Text>Trainerausbildung Kraftdreikampf 2022</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
