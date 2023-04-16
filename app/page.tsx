"use client";
import useInterval from "@/hooks/useInterval";
import React from "react";

export default function Page() {
  const [bannerIndex, setBannerIndex] = React.useState<number>(0);
  console.log(bannerIndex);
  useInterval(() => {
    setBannerIndex((prev) => {
      console.log("prev", prev);
      // return prev + 1;
      return prev < banner.length - 1 ? prev + 1 : 0;
    });
  }, 5000);
  return (
    <main id="banner">
      <a href={banner[bannerIndex].url}>
        <div className="flex justify-center w-full p-4">
          <h1 className="">{banner[bannerIndex].message}</h1>
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
  {
    message: "dd",
    url: "ddd",
  },
  {
    message: "cc",
    url: "ddd",
  },
];
