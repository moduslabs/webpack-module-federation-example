import * as React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

function App() {
  return (
    <Layout title="Hello World!">Lorem ipsum... You know the drill..</Layout>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
