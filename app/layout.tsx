import React from "react";
// These styles apply to every route in the application
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";

export const metadata = {
  title: "Post Black Belt",
  description: "주짓수 일기를 위한 웹사이트",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
