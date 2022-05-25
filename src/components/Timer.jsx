import React, { useEffect, useState } from "react";

const Timer = ({ start, end }) => {
  const [timer, setTimer] = useState(start);
  const [timerId, setTimerId] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => prev + 1);
      setTimerId(id);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  const cleanup = () => {
    setTimer(0);
  };
  const TimerShow = () => {
    return <h1>{timer}</h1>;
  };
  if (timer == end) {
    clearInterval(timerId);
    setTimeout(() => {
      cleanup();
    }, 5000);
  }

  return (
    <div>
      <TimerShow />
    </div>
  );
};

export default Timer;
