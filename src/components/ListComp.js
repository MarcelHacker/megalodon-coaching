import React from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

//import "./ListComp.css";

function ListComp({
  href,
  src,
  height,
  width,
  alt,
  title,
  secondLine,
  thirdLine,
  fourthLine,
  fifthLine,
  badge = false,
  badgeColor = "success",
  badgeText = "Beliebt",
  ...props
}) {
  return (
    <ListGroup className="listing">
      <ListGroup.Item>
        <img className="photo" src={src} width={width} height={height}></img>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="texture">
          {title} {badge && <Badge bg={badgeColor}>{badgeText}</Badge>}
        </div>
      </ListGroup.Item>

      <ListGroup.Item>{secondLine}</ListGroup.Item>
      <ListGroup.Item>{thirdLine}</ListGroup.Item>
      <ListGroup.Item>{fourthLine}</ListGroup.Item>
      <ListGroup.Item>{fifthLine}</ListGroup.Item>
      <ListGroup.Item>
        <Button className="btn" variant="primary" href={href}>
          Anfragen
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ListComp;
