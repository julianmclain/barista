import React, { useEffect, useState } from "react";

function simulateNetworkRequest() {
  // This will be repalced with getCoffeeMetrics()
  return new Promise(resolve => setTimeout(resolve, 2000));
}

const ViewMetricsButton = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => setLoading(false));
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <button
      className="main-button"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading..." : "View consumption"}
    </button>
  );
};

export default ViewMetricsButton;
