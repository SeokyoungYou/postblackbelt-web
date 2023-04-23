"use client";

import { gtmId, pageview } from "../lib/gtm";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return null;
  }

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${gtmId}');
  `,
        }}
      />
    </>
  );
}
// import Script from "next/script";

// function GoogleAnalytics() {
//   return (
//     <>
//       <Script
//         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
//         strategy="afterInteractive"
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//         window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());

//           gtag('config','${process.env.GTM_ID}');
//         `}
//       </Script>
//     </>
//   );
// }

// export default GoogleAnalytics;
