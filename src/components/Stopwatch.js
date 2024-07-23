import React, { useState, useRef } from "react";
import "../styles/stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startPauseHandler = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const stopHandler = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetHandler = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const ms = time / 10;
    const getMiliSeconds = `0${ms % 100}`.slice(-2);
    const seconds = Math.floor(ms / 100);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return `${getMinutes} : ${getSeconds} : ${getMiliSeconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime(time)}</div>
      <div className="buttons">
        <button className={isRunning ? "pause" : "start"} onClick={startPauseHandler}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="stop" onClick={stopHandler}>
          Stop
        </button>
        <button className="reset" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
