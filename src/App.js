import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router } from "components/Router";

// animation

// comps
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";

import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Root>
      <NavbarComp />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <FooterComp />
    </Root>
  );
}

export default App;
