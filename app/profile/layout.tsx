import React from "react";
import "../globals.css";

import { openGraphImage } from "../shared-metadata";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: "Post Black Belt 주짓수 앱",
  description: "주짓수 일기 작성을 위한 모바일 앱입니다.",
  openGraph: {
    ...openGraphImage,
    title: "Post Black Belt 주짓수 앱",
    description: "주짓수 일기 작성을 위한 모바일 앱입니다.",
  },
};

type ProfileLayoutProps = {
  children: React.ReactNode;
};

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
