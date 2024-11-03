"use client";

import React, { useState, useEffect, ReactElement } from "react";
import Clock1 from "./Clock1";
import Clock2 from "./Clock2";

export default function ClockWrap() {
  const [selectedClock, setSelectedClock] = useState<number>(1);

  const clockComponents: { [key: number]: ReactElement } = {
    1: <Clock1 />,
    2: <Clock2 />,
  };

  // 컴포넌트가 마운트될 때 localStorage에서 선택된 시계를 불러오기
  useEffect(() => {
    const savedClock = localStorage.getItem("selectedClock");
    if (savedClock) {
      setSelectedClock(Number(savedClock));
    }
  }, []);

  const handleButtonClick = (clockNumber: number) => {
    setSelectedClock(clockNumber);
    localStorage.setItem("selectedClock", clockNumber.toString());
  };

  return (
    <>
      {clockComponents[selectedClock]}
      <div className="fixed left-1/2 bottom-3 transform -translate-x-1/2 flex gap-1 font-nanum text-gray-600">
        {Object.keys(clockComponents).map((key) => {
          const numKey = Number(key);
          return (
            <button
              key={numKey}
              className={`border w-7 h-7 text-xs ${
                selectedClock === numKey
                  ? "border-gray-900 text-gray-900"
                  : "border-gray-400 text-gray-500"
              }`}
              onClick={() => handleButtonClick(numKey)}
            >
              {numKey}
            </button>
          );
        })}
      </div>
    </>
  );
}
