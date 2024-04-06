"use client";

import React, { useState, useEffect } from "react";

interface PropsType {
  number: number;
  label: string;
}
function StatisticsCard({ number, label }: PropsType) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < number) {
        setCount(
          (prevCount) => prevCount + Math.ceil((number - prevCount) / 5),
        ); // Increment count
      } else {
        setCount(number); // Set count to the final number
        clearInterval(interval); // Stop the interval when count reaches the final number
      }
    }, 200); // Adjust the interval speed as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [count, number]);

  return (
    <div className="flex flex-col items-center text-white">
      <div className="text-3xl font-bold ">{count}</div>
      <div className="font-bold text-md text-white">{label}</div>
    </div>
  );
}

export default StatisticsCard;
