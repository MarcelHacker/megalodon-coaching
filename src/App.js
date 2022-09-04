import React from "react";
import {Root, Routes, addPrefetchExcludes} from "react-static";
//
import {Link, Router} from "components/Router";
import Dynamic from "containers/Dynamic";

// comps
import NavbarComp from "../src/components/NavbarComp";
import FooterComp from "./components/FooterComp";

import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <NavbarComp />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <FooterComp />
    </Root>
  );
}

export default App;
