import React, { useState, useEffect } from "react";

export const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // time format
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="row center">
      <div className="col s12">
        <div className="card blue">
          <div className="card-content white-text">
            <span className="card-title">DATE & TIME DISPLAY</span>
            <hr />
            <h4>{`Today is ${currentTime.toLocaleDateString(
              "en-GB",
              options,
            )}`}</h4>
            <h4>{`The current time is ${currentTime.toLocaleTimeString()}`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
