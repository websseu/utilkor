"use client";

import React, { useEffect } from "react";

export default function Clock1() {
  useEffect(() => {
    // 현재 시간에 기반하여 각도 계산
    const now = new Date();
    const hourDeg = (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30;
    const minuteDeg =
      (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6;
    const secondDeg = (now.getSeconds() / 60) * 360;

    // 애니메이션 CSS 생성
    const stylesDeg = `
          @keyframes rotate-hour {
            from { transform: translate(-50%, -50%) rotate(${hourDeg}deg); }
            to { transform: translate(-50%, -50%) rotate(${hourDeg + 360}deg); }
          }
          @keyframes rotate-minute {
            from { transform: translate(-50%, -50%) rotate(${minuteDeg}deg); }
            to { transform: translate(-50%, -50%) rotate(${
              minuteDeg + 360
            }deg); }
          }
          @keyframes rotate-second {
            from { transform: translate(-50%, -50%) rotate(${secondDeg}deg); }
            to { transform: translate(-50%, -50%) rotate(${
              secondDeg + 360
            }deg); }
          }
        `;

    // 스타일 태그에 애니메이션 추가
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = stylesDeg;
    document.head.appendChild(styleSheet);

    // 컴포넌트 언마운트 시 스타일 태그 제거
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <main className="circle">
      <section>
        <div className="clock-wrapper">
          <div className="clock-dial">
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
            <div className="clock-indicator"></div>
          </div>
          <div className="clock-base">
            <div
              className="clock-hour"
              style={{ animation: "rotate-hour 43200s linear infinite" }}
            ></div>
            <div
              className="clock-minute"
              style={{ animation: "rotate-minute 3600s linear infinite" }}
            ></div>
            <div
              className="clock-second"
              style={{ animation: "rotate-second 60s linear infinite" }}
            ></div>
            <div className="clock-center"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
