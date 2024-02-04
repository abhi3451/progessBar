import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime, onTimerEnd }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let interval;

    if (time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      onTimerEnd();
    }

    // Clean up the interval on component unmount or when time reaches 0
    return () => clearInterval(interval);
  }, [time, onTimerEnd]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time Remaining: {formatTime()}</p>
    </div>
  );
};

export default CountdownTimer;
