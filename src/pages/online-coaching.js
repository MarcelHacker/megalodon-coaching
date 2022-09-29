import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import FigureComp from "../components/FigureComp";
import plan from "../assets/plan.jpg";
import coaching from "../assets/coaching.jpg";

export default () => {
  const width = 350;
  const height = 150;
  return (
    <div>
      <h1>Dienstleistungen</h1>
      <Container>
        <Row>
          <Col>
            <Card style={{width: "19rem"}}>
              <FigureComp
                width={width}
                height={height}
                alt={"Hallo"}
                src={plan}
                text={
                  "Du erhältst ein auf deine Ziele und Bedürfnisse individualisiertes Trainingsprogramm"
                }
              />
              <Button variant="primary" href="megalodoncoaching@gmail.com?subject = Trainingsplan&body = Message">
Anfragen
            
              </Button>
            </Card>
          </Col>
          <Col>
            <Card style={{width: "25rem"}}>
              <FigureComp
                width={555}
                height={height}
                alt={"Hallo"}
                src={coaching}
                text={
                  "Online Coaching inkludiert ein wöchentliches Check-In, unlimitierte Textkommunikation via Messenger und Technikanalyse deiner Übungsausführung per Video oder Text."
                }
              />
              <Button variant="primary" href="mailto:megalodoncoaching@gmail.com?subject = Online Coaching&body = Message">
Anfragen
            
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
