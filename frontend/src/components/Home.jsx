import React from "react";
import ButtonControl from "./ButtonControl";
import Header from "./Header";
import CalendarHeatmap from "./CalendarHeatmap";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <h1 className="main-title">Welcome</h1>
        <p className="main-sub-title">
          Track every cup and view your consumption over time
        </p>
        <ButtonControl user={null} />
        <CalendarHeatmap />
      </div>
    </div>
  );
};

export default Home;
