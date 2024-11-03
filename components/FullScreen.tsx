"use client";

import React from "react";
import { MdFullscreen } from "react-icons/md";

export default function FullScreen() {
  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`전체 화면 모드로 전환할 수 없습니다: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error(`전체 화면 모드를 종료할 수 없습니다: ${err.message}`);
      });
    }
  };

  return (
    <div className="absolute top-3 right-3">
      <MdFullscreen
        size={20}
        className="cursor-pointer hover:bg-gray-300 rounded-sm transition-all duration-500"
        onClick={handleFullScreen}
      />
    </div>
  );
}
