"use client";
import Image from "next/image";
import React from "react";

import { Carousel } from "antd";
import { useSearchParams } from "next/navigation";
import { LATEST_VERSION } from "@/lib/constants";

export default function BannerPage() {
  const searchParams = useSearchParams();
  const version = searchParams.get("version");
  return (
    <Carousel dotPosition="bottom" autoplay autoplaySpeed={5000}>
      {version !== LATEST_VERSION && (
        <section>
          <div style={contentStyle}>✨ 앱을 업데이트해주세요!</div>
        </section>
      )}

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
  background: "#BE2A2A",
  paddingTop: "15px",
};
