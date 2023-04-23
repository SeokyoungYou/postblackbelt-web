import React from "react";
// These styles apply to every route in the application
import "../globals.css";

type BannerLayoutProps = {
  children: React.ReactNode;
};

export default function BannerLayout({ children }: BannerLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Post Black Belt</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
