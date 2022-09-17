import React from "react";
import Card from "react-bootstrap/Card";

export default () => {
  const width = 320;
  const height = 150;

  return (
    <div>
      <h1>KONTAKT</h1>
      <Card style={{width: "25rem"}}>
        <Card.Body>
          <Card.Title>
            Wenn du Interesse hast, mit mir zu arbeiten, kontaktiere mich unter folgender Mail:
          </Card.Title>
          <Card.Text>megalodoncoaching@gmail.com</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
