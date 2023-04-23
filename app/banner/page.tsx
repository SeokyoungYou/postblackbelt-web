"use client";
import Image from "next/image";
import React from "react";

import { Carousel } from "antd";

export default function BannerPage() {
  return (
    <Carousel dotPosition="bottom" autoplay>
      <ul>
        <li style={contentStyle}>
          <div className="flex justify-center gap-2 align-center">
            <Image
              src="/instagram.png"
              alt="Instagram logo"
              width={20}
              height={20}
            />
            인스타그램에서 새소식 받기
          </div>
        </li>
      </ul>
      <ul>
        <li style={contentStyle}>2</li>
      </ul>
      <ul>
        <li style={contentStyle}>3</li>
      </ul>
      <ul>
        <li style={contentStyle}>4</li>
      </ul>
    </Carousel>
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

const contentStyle: React.CSSProperties = {
  height: "100px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#364d79",
};
