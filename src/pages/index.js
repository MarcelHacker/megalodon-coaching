import React from "react";
import ShowcaseComp from "../components/showcaseComp/ShowcaseComp";

import {useSpring, animated} from "react-spring";

export default () => {
  const width = "410rem";
  const height = "410rem";

  return (
    <div style={{textAlign: "center"}}>
      <ShowcaseComp />
      <h1>Website in Arbeit...</h1>
    </div>
  );
};
