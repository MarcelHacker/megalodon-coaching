import React from "react";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";

export default () => {
  return (
    <div>
      <h1>KONTAKT</h1>
      <Card style={{width: "25rem", height: "10rem"}}>
        <Card.Body>
          <Card.Title className="pb-2">
            Wenn du Interesse hast, mit mir zu arbeiten, kontaktiere mich unter folgender Mail oder
            klick den Button:
          </Card.Title>
          <Button
            className="buttinger"
            variant="success"
            href="mailto:megalodoncoaching@gmail.com?subject = Trainingsplan&body = Message"
          >
            megalodoncoaching@gmail.com
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
