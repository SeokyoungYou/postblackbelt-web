import React from "react";
import "./globals.css";

import { openGraphImage } from "./shared-metadata";
import Script from "next/script";

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
        <Script
          id={process.env.GTM_ID}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GTM_ID}');`,
          }}
        ></Script>
        <meta
          name="naver-site-verification"
          content="27756d6d2f57d44f54709b1ec3f4782a5f2ab9a2"
        />
        <meta
          name="google-site-verification"
          content="lmDv_wExGfiD_OrydJeq5n2dP32irRjQUH3ZwwoK-1Y"
        />
      </head>
      <body>
        <noscript
          id={process.env.GTM_ID}
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        {children}
      </body>
    </html>
  );
}
