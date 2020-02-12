import React from "react";
import ViewMetricsButton from "./ViewMetricsButton";
import TrackCoffeeButton from "./TrackCoffeeButton";

const ButtonControl = user => {
  let contents;
  if (user) {
    contents = (
      <div className="main-button-wrapper">
        <TrackCoffeeButton />
        <ViewMetricsButton />
      </div>
    );
  } else {
    contents = <button className="signinWithGoogle">Sign in with G</button>;
  }
  return (
    <div>
      <section className="inner-section">
        <div className="inner-section-wrapper">
          <div className="layout-twothirds-center">{contents}</div>
        </div>
      </section>
    </div>
  );
};

export default ButtonControl;
