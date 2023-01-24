import React, { FC } from "react";

interface ClockProps {
  count: number;
  duration: number;
}

const Clock: FC<ClockProps> = ({ count, duration }) => {
  const degress = (count / duration) * 360;

  const secondHalf = count / duration > 0.59 && "mask2";
  // console.log(count/duration > 0.59 && 'half')


  return (
    <>
      
      <div className="clock">
        <div
          className="rotator"
          style={{ transform: `rotate(${degress}deg)` }}
        ></div>
        <div className={`mask ${secondHalf}`}></div>
      </div>
    </>
  );
};

export default Clock;
