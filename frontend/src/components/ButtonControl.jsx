import React from "react";
import ViewMetricsButton from "./ViewMetricsButton";
import TrackCoffeeButton from "./TrackCoffeeButton";

const ButtonControl = () => {
  return (
    <div className="main-button-wrapper">
      <TrackCoffeeButton className="main-button" />
      <ViewMetricsButton className="main-button" />
    </div>
  );
};

export default ButtonControl;
