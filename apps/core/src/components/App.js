import * as React from "react";
import ImportFrontend from "./ImportFrontend";

// import Layout from 'layout/Layout';
import Home from "./Home";

function App() {
  return (
    <ImportFrontend
      src="http://localhost:3002/layout.js"
      lib="layout"
      mod="./Layout"
    >
      <Home />
    </ImportFrontend>
  );
}

export default App;
