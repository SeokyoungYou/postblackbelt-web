import React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Post Black Belt</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
