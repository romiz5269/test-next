import React, { FC, useEffect, useState } from "react";
import Clock from "../clock/Clock";

interface TimerProps {
  duration: number;
}

const Timer: FC<TimerProps> = ({ duration }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
      if (duration === count) {
        console.log("its equal");
        clearInterval(timer);
      }
    }, 1000);
  }, []);
  return <Clock count={count} duration={duration} />;
};

export default Timer;
