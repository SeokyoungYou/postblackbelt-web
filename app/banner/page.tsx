"use client";
import Image from "next/image";
import React from "react";

import { Carousel } from "antd";

export default function BannerPage() {
  return (
    <Carousel
      dotPosition="bottom"
      // autoplay autoplaySpeed={5000}
    >
      <section>
        <div style={contentStyle}>
          <div className="flex justify-center gap-2 adivgn-center">
            <Image
              src="/instagram.png"
              alt="Instagram logo"
              width={20}
              height={20}
            />
            인스타그램에서 새소식 받기
          </div>
        </div>
      </section>
      <section>
        <div style={contentStyle}>2</div>
      </section>
      <section>
        <div style={contentStyle}>3</div>
      </section>
      <section>
        <div style={contentStyle}>4</div>
      </section>
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
  height: "60px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#364d79",
  paddingTop: "15px",
};
