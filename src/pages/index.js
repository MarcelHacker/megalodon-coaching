import React from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShowcaseComp from "../components/ShowcaseComp";


import { useSpring, animated } from 'react-spring';

import plan from "../assets/plan.jpg";

export default () => {
  const width = "300";
  const height = "400";
  
   /*  const styles = useSpring({
      loop: {reverse: true},
      from: {x:0},
      to:{x:100}
    }) */
  return (
    <div style={{textAlign: "center"}}>
   
      
      <h1>Website in Arbeit...</h1>

      <Container>
        <Row>
          <Col>
            <ShowcaseComp src={plan} width={width} height={height} alt={"alt"} title={"Coaching"} />
          </Col>
          <Col>
            <ShowcaseComp src={plan} width={width} height={height} alt={"alt"} title={"Coaching"} />
          </Col>
          <Col>
            <ShowcaseComp src={plan} width={width} height={height} alt={"alt"} title={"Coaching"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
