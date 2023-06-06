"use client";
import React from "react";
import { Anchor, Avatar, FloatButton, Segmented, Typography } from "antd";
import Image from "next/image";
import { navigationKey } from "../constants";
const { Text, Title, Paragraph } = Typography;

// 1. 홈화면
// 월간 달력, 월간 메모장, 주간 리포트ㅡ 오운완 이미지 - 시간도 입력 가능
// 일기 작성 잘 하는 방법: 일기 카테고리, 기술 카테고리 등....

type HomeIntroductionProps = {
  menuKey: navigationKey;
};

const homeItems = [
  {
    key: "part-1",
    href: "#part-1",
    title: "월간 달력",
  },
  {
    key: "part-2",
    href: "#part-2",
    title: "일기 작성",
  },
  {
    key: "part-3",
    href: "#part-3",
    title: "오늘의 운동 이미지",
  },
  {
    key: "part-4",
    href: "#part-4",
    title: "월간 메모장",
  },
  {
    key: "part-5",
    href: "#part-5",
    title: "주간 리포트",
  },
];

const HomeIntroduction: React.FC<HomeIntroductionProps> = ({ menuKey }) => {
  return (
    <section>
      <>
        <div>
          <Anchor direction="horizontal" items={homeItems} />
        </div>
        <div>
          <div
            id="part-1"
            style={{
              width: "100%",
              height: "100vh",
              background: "rgba(0,255,0,0.02)",
            }}
          />
          <div
            id="part-2"
            style={{
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,255,0.02)",
            }}
          />
          <div
            id="part-3"
            style={{
              width: "100%",
              height: "50vh",
              background: "#FFFBE9",
            }}
          ></div>
          <div
            id="part-4"
            style={{
              width: "100%",
              height: "40vh",
              background: "#F4EAD5",
            }}
          />
          <div
            id="part-5"
            style={{
              width: "100%",
              height: "100vh",
              background: "#DAE2B6",
            }}
          />
          <div
            id="part-6"
            style={{
              width: "100%",
              height: "100vh",
              background: "#CCD6A6",
            }}
          />
        </div>
      </>
    </section>
  );
};

export default HomeIntroduction;
