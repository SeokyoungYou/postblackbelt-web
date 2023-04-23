import React from "react";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import { openGraphImage } from "./shared-metadata";

export const metadata = {
  title: "Post Black Belt 주짓수 앱",
  description: "주짓수 일기 작성을 위한 모바일 앱입니다.",
  openGraph: {
    ...openGraphImage,
    title: "Post Black Belt 주짓수 앱",
    description: "주짓수 일기 작성을 위한 모바일 앱입니다.",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
