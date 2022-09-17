import React from "react";
import FigureComp from "../components/FigureComp";
import plan from "../assets/plan.jpg";
import coaching from "../assets/coaching.jpg";

export default () => {
  const width = 320;
  const height = 150;
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
              text={
                "Du erhältst ein auf deine Ziele und Bedürfnisse individualisiertes Trainingsprogramm"
              }
            />
          </colum>
          <colum className="mx-2">
            <FigureComp
              width={455}
              height={height}
              alt={"Hallo"}
              src={coaching}
              text="Online Coaching inkludiert ein wöchentliches Check-In, unlimitierte Textkommunikation via 
                 Messenger und Technikanalyse deiner Übungsausführung per Video oder Text."
            />
          </colum>
          <colum className="mx-2">
            {/* <FigureComp
              width={455}
              height={height}
              alt={"Technikanalyse"}
              src={coaching}
              text={"Technikanalyse"}
            /> */}
          </colum>
        </row>
      </div>
    </div>
  );
};
