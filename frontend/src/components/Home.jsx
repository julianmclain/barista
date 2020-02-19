import React from "react";
import ButtonControl from "./ButtonControl";
import HeaderUnauthenticated from "./HeaderUnauthenticated";
import HeaderAuthenticated from "./HeaderAuthenticated";
import CalendarHeatmap from "./CalendarHeatmap";

const Home = ({ user }) => {
  return (
    <div>
      {user ? <HeaderAuthenticated /> : <HeaderUnauthenticated />}
      <div className="main">
        <h1 className="main-title">Welcome</h1>
        <p className="main-sub-title">
          Track every cup and view your consumption over time
        </p>
        <ButtonControl />
        <CalendarHeatmap />
      </div>
    </div>
  );
};

export default Home;
