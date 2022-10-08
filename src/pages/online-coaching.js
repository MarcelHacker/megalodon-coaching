import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// comp
import ListComp from "../components/ListComp";

// logos
import allInCoaching from "../../public/all-in-coaching.jpg";
import trainingsplan from "../../public/trainingsplan.jpg";
import analyse from "../../public/analyse.jpg";

export default () => {
  const width = 390;
  const height = 190;
  return (
    <div>
      <h1>Dienstleistungen</h1>
      <Container>
        <div className="list">
          <Row>
            <Col>
              <ListComp
                src={trainingsplan}
                width={width}
                height={height}
                alt={"Trainingsplan"}
                title={"Trainingsplan"}
                secondLine={"Zielorientiert"}
                thirdLine={"Zyklisiert"}
                fourthLine={"Effizient"}
                fifthLine={`Inkludiert einen vierwöchentlichen Plan per Google Sheets.`}
                badge={true}
                badgeColor={"danger"}
                badgeText={"-20%"}
                href={
                  "mailto:megalodoncoaching@gmail.com?subject = Trainingsplan&body = Message"
                }
              />
            </Col>
            <Col>
              <ListComp
                src={allInCoaching}
                width={width}
                height={height}
                alt={"All-In Coaching"}
                title={"All-In Coaching"}
                secondLine={"Individualisierter Trainingsplan"}
                thirdLine={"Technikanalysen"}
                fourthLine={"Zielorientiert und Effektiv"}
                fifthLine={`Inkludiert ein wöchentliches Check-In, unlimitierte Textkommunikation via
                Messenger und Technikanalyse deiner Übungsausführung per Video oder Text.`}
                badge={true} // show popular badge
                href={
                  "mailto:megalodoncoaching@gmail.com?subject = All-In-Coaching&body = Message"
                }
              />
            </Col>
            <Col>
              <ListComp
                src={analyse}
                width={width}
                height={height}
                alt={"Hallo"}
                title={"Technikanalyse"}
                secondLine={"Verbesserung deiner Technik"}
                thirdLine={"Erkennen von Schwächen"}
                fourthLine={"Effizient"}
                fifthLine={`Inkludiert eine Technikanalyse deiner Übungsausführung per Video.`}
                badge={false}
                badgeColor={"danger"}
                badgeText={"-20%"}
                href={
                  "mailto:megalodoncoaching@gmail.com?subject = Technikanalyse&body = Message"
                }
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
