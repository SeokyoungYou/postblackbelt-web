"use client";
import useInterval from "@/hooks/useInterval";
import Image from "next/image";
import React from "react";

export default function Page() {
  const [bannerIndex, setBannerIndex] = React.useState<number>(0);
  // useInterval(() => {
  //   setBannerIndex((prev) => {
  //     return prev < banner.length - 1 ? prev + 1 : 0;
  //   });
  // }, 5000);
  return (
    <main id="banner">
      <a href={banner[bannerIndex].url}>
        <div className="flex justify-center w-full p-4">
          <Image
            // loader={myLoader}
            src="/instagram.png"
            alt="Instagram logo"
            width={25}
            height={25}
          />
          <span className="ml-1 ">{banner[bannerIndex].message}</span>
        </div>
      </a>
    </main>
  );
}

const banner = [
  {
    message: "인스타그램에서 새소식 받기",
    url: "https://www.instagram.com/post_black_belt/",
  },
  // {
  //   message: "dd",
  //   url: "ddd",
  // },
  // {
  //   message: "cc",
  //   url: "ddd",
  // },
];
