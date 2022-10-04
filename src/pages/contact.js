import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export default () => {
  const width = 320;
  const height = 150;

  return (
    <div>
      <h1>KONTAKT</h1>
      <Card style={{ width: "25rem", height: "15rem" }}>
        <Card.Body>
          <Card.Title className="pb-2">
            Wenn du Interesse hast, mit mir zu arbeiten, kontaktiere mich unter
            folgender Mail:
          </Card.Title>
          <Button
            variant="success"
            size="lg"
            href="mailto:megalodoncoaching@gmail.com?subject = Trainingsplan&body = Message"
          >
            megalodoncoaching@gmail.com
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
