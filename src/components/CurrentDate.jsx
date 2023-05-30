import React from "react";
import { useState, useEffect } from "react";

const CurrentDate = () => {
  const [time, setTime] = useState();

  const updateTime = () => {
    setInterval(() => {
      setTime(now);
    }, 1000);
  };

  const today = new Date();
  const now = today.toLocaleString();

  useEffect(() => {
    setTime(now);
  }, [today]);

  updateTime();

  return <div className="current__date">{time}</div>;
};

export default CurrentDate;
