import { render } from "react-dom";
import React from "react";
import Home from "./components/Home";
import { Router } from "@reach/router";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Signup path="/signup" />
      <About path="/about" />
    </Router>
  );
};

render(<App />, document.getElementById("root"));
