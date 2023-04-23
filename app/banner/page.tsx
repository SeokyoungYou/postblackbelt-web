"use client";
import Image from "next/image";
import React from "react";

import { Carousel } from "antd";

// 상단에 배너
// 하단에 클릭하여 앱스토어/구글플스 보내기

export default function BannerPage() {
  return (
    <Carousel dotPosition="bottom" autoplay autoplaySpeed={5000}>
      <section>
        <div style={contentStyle}>
          <div className="flex justify-center gap-1 adivgn-center">
            <Image
              src="/instagram-filled.png"
              alt="Instagram logo"
              width={24}
              height={24}
            />
            인스타그램에서 새소식 받기
          </div>
        </div>
      </section>
      <section>
        <div style={contentStyle}>🔨 앱 업데이트하여 더 많은 기능 사용하기</div>
      </section>
      <section>
        <div style={contentStyle}>✏️ 설문조사 참여하여 의견을 남겨주세요!</div>
      </section>
    </Carousel>
  );
}

const contentStyle: React.CSSProperties = {
  height: "60px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#5E4B9C",
  paddingTop: "15px",
};
