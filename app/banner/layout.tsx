import React from "react";
import "../globals.css";

import { openGraphImage } from "../shared-metadata";
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

type BannerLayoutProps = {
  children: React.ReactNode;
};

export default function BannerLayout({ children }: BannerLayoutProps) {
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
