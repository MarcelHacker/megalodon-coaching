import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router } from "components/Router";

// animation

// comps
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Root>
      <Navbar />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <Footer />
    </Root>
  );
}

export default App;
