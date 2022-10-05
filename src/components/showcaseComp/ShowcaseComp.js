import React from "react";
import {Container, Row, Col} from "react-bootstrap";

// comps
import CaseCard from "../caseCard/CaseCard.js";

// logos
import bodybuilding from "../../assets/bodybuilding.jpg";
import powerlifting from "../../assets/powerlifting.jpg";
import specialforce from "../../assets/spezialeinheiten.jpg";

const ShowcaseComp = () => {
  const width = "410rem";
  const height = "410rem";
  return (
    <Container style={{textAlign: "center"}}>
      <Row>
        <Col>
          <CaseCard
            src={bodybuilding}
            width={width}
            height={height}
            alt={"alt"}
            title={"Bodybuilding"}
            href="/bodybuilding"
          />
        </Col>
        <Col>
          <CaseCard
            src={powerlifting}
            width={width}
            height={height}
            alt={"alt"}
            title={"Powerlifting"}
            href="/online-coaching"
          />
        </Col>
        <Col>
          <CaseCard
            src={specialforce}
            width={width}
            height={height}
            alt={"alt"}
            title={"Spezialeinheiten"}
            href="/specialforce"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ShowcaseComp;
