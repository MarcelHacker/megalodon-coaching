import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// comps
import CaseCard from "./CaseCard.js";

// logos
import bodybuilding from "../../public/bodybuilding.jpg";
import powerlifting from "../../public/powerlifting.jpg";
import specialforce from "../../public/specialforce.jpg";

const ShowcaseComp = () => {
  const width = "410rem";
  const height = "410rem";
  return (
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <CaseCard
            src={bodybuilding}
            width={width}
            height={height}
            alt={"Bodybuilding"}
            title={"Bodybuilding"}
            href="/online-coaching"
          />
        </Col>
        <Col>
          <CaseCard
            src={powerlifting}
            width={width}
            height={height}
            alt={"Powerlifting"}
            title={"Powerlifting"}
            href="/online-coaching"
          />
        </Col>
        <Col>
          <CaseCard
            src={specialforce}
            width={width}
            height={height}
            alt={"Spezialeinheiten"}
            title={"Spezialeinheiten"}
            href="/online-coaching"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ShowcaseComp;
