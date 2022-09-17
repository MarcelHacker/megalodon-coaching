import React from "react";
import FigureComp from "../components/FigureComp";
import plan from "../assets/plan.jpg";
import coaching from "../assets/coaching.jpg";
import platform from "../assets/platform.jpg";

export default () => {
  const width = 320;
  const height = 150;
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
      <h1>Dienstleistungen</h1>
      <div>
        <row>
          <colum className="mx-2">
            <FigureComp
              width={width}
              height={height}
              alt={"Hallo"}
              src={plan}
              text={"Trainingsplan"}
            />
          </colum>
          <colum className="mx-2">
            <FigureComp
              width={455}
              height={height}
              alt={"Hallo"}
              src={coaching}
              text={"Online Coaching"}
            />
          </colum>
          <colum className="mx-2">
            <FigureComp
              width={width}
              height={height}
              alt={"Hallo"}
              src={platform}
              text={"Plattformcoaching"}
            />
          </colum>
        </row>
      </div>
    </div>
  );
};
