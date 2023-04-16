"use client";
import React from "react";

export default function Page() {
  const [bannerIndex, setBannerIndex] = React.useState(0);
  return (
    <main id="banner">
      <a href={banner[bannerIndex].url}>
        <div className="flex items-center justify-center w-full h-40">
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
    message: "",
    url: "",
  },
];
