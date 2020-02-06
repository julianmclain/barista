import { render } from "react-dom";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

render(<App />, document.getElementById("root"));
