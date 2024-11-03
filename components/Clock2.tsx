import React, { useEffect } from "react";

export default function Clock2() {
  useEffect(() => {
    const hourHand = document.querySelector(
      ".clock__hour"
    ) as HTMLElement | null;
    const minuteHand = document.querySelector(
      ".clock__minute"
    ) as HTMLElement | null;
    const secondHand = document.querySelector(
      ".clock__second"
    ) as HTMLElement | null;

    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondDegrees = (seconds / 60) * 360;
      const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
      const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30;

      if (secondHand)
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
      if (minuteHand)
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
      if (hourHand) hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    };

    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="clock2">
      <div className="clock__wrap">
        <div className="clock__circle1"></div>
        <div className="clock__circle2"></div>
        <div className="clock__circle3">
          <div className="dot">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="clock__circle4">
          <div className="number font-mulgyeol">
            <span>
              <i>12</i>
              <i>6</i>
            </span>
            <span>
              <i>1</i>
              <i>7</i>
            </span>
            <span>
              <i>2</i>
              <i>8</i>
            </span>
            <span>
              <i>3</i>
              <i>9</i>
            </span>
            <span>
              <i>4</i>
              <i>10</i>
            </span>
            <span>
              <i>5</i>
              <i>11</i>
            </span>
          </div>
        </div>
        <div className="clock__circle5">
          <div className="clock__hour"></div>
          <div className="clock__minute"></div>
          <div className="clock__second"></div>
          <div className="clock__dot"></div>
        </div>
      </div>
    </main>
  );
}
