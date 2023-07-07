import React from "react";
import "../../../globals.css";
import Script from "next/script";

export const metadata = {
  title: "App | 내 벨트 정보 변경",
  description: "내 벨트 정보 변경 화면",
};

type EditMyBeltsLayoutProps = {
  children: React.ReactNode;
};

export default function EditMyBeltsLayout({
  children,
}: EditMyBeltsLayoutProps) {
  return (
    <html lang="ko">
      <head>
        <meta name="robots" content="noindex" />
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
