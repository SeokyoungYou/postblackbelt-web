import React from "react";
// These styles apply to every route in the application
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";

export const metadata = {
  title: "Post Black Belt 주짓수 앱",
  description: "주짓수 일기 작성을 위한 모바일 앱입니다.",
  // openGraph: {
  //   title: "Post Black Belt 주짓수 앱",
  //   description: "주짓수 일기 작성을 위한 모바일 앱입니다.",
  // },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
        <meta
          property="og:description"
          content="주짓수 일기 작성을 위한 모바일 앱입니다."
        ></meta>
        <meta property="og:title" content="Post Black Belt 주짓수 앱"></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
