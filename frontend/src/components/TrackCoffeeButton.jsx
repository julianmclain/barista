import React, { useState, useEffect } from "react";

function simulateNetworkRequest() {
  // This will be repalced with getCoffeeMetrics()
  return new Promise(resolve => setTimeout(resolve, 2000));
}

const TrackCoffeeButton = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => setLoading(false));
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <button disabled={isLoading} onClick={!isLoading ? handleClick : null}>
      {isLoading ? "Loading..." : "Have a cup"}
    </button>
  );
};

export default TrackCoffeeButton;
