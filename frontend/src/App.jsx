import { render } from "react-dom";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import CalendarHeatmap from "./components/CalendarHeatmap";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <CalendarHeatmap />
    </div>
  );
};

render(<App />, document.getElementById("root"));
