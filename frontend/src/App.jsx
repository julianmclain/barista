import { render } from "react-dom";
import React from "react";

const App = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
};

render(<App />, document.getElementById("root"));
