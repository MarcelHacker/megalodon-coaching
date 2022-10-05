import React from "react";
import Card from "react-bootstrap/Card";

// css
import "./CaseCard.css";

const CaseCard = ({href, src, height, width, alt, title}) => {
  return (
    <div>
      <a href={href}>
        <Card className="case" width={width}>
          <Card.Img variant="top" src={src} height={height} alt={alt} />
          <Card.ImgOverlay>
            <Card.Title className="bto">{title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </a>
    </div>
  );
};

export default CaseCard;
