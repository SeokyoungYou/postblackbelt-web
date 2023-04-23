import React from "react";
// These styles apply to every route in the application
import "../globals.css";

type ProfileLayoutProps = {
  children: React.ReactNode;
};

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Post Black Belt의 배너 상세 페이지입니다.</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
