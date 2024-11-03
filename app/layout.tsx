import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "utilkor: 다양한 온라인 도구와 유틸리티",
  description:
    "utilkor는 무작위 팀 만들기, 포모도로 타이머, 룰렛 등 다양한 온라인 도구와 유틸리티를 제공합니다. 일상생활과 업무에서 생산성을 높일 수 있는 여러 기능을 확인해 보세요.",
  keywords:
    "온라인 도구, 유틸리티, 무작위 팀 생성기, 포모도로 타이머, 랜덤 룰렛, 기호 모음, 숫자 추첨기",
  openGraph: {
    title: "utilkor: 다양한 온라인 도구와 유틸리티",
    description:
      "일상과 업무에 유용한 다양한 도구를 제공하는 utilkor로 작업 효율을 높이세요.",
    url: "https://utilkor.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "utilkor: 다양한 온라인 도구와 유틸리티",
    description:
      "utilkor는 무작위 팀 생성기, 포모도로 타이머 등 유용한 온라인 도구를 제공합니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
