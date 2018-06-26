import * as React from "react";
import { render } from "react-dom";

const s = preval.require("./prevaled.js");

function App() {
  return (
    <div>
      {s}
      hello world
    </div>
  );
}

render(<App />, document.getElementById("app"));
