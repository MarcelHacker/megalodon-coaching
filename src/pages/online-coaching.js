import React from "react";
import FigureComp from "../components/FigureComp";
import plan from "../assets/plan.jpg";
import coaching from "../assets/coaching.jpg";

export default () => {
  const width = 100;
  const height = 100;
  const images = [
    {
      alt: "Plan",
      src: plan,
      text: "Trainingsplan",
    },
    {
      alt: "Plan",
      src: coaching,
      text: "Coaching",
    },
  ];
  return (
    <div>
      <h1>Online Coaching</h1>
      {images.map((image) => {
        <div>
          <FigureComp
            width={width}
            height={height}
            alt={image.alt}
            src={image.src}
            text={image.text}
          />
        </div>;
      })}
    </div>
  );
};
