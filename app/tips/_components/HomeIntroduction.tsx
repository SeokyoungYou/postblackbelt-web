"use client";
import React from "react";
import { Anchor, Avatar, FloatButton, Segmented, Typography } from "antd";
import Image from "next/image";
import { whiteWrapper } from "../styles";
import PhoneImage from "./PhoneImage";
const { Text, Title, Paragraph } = Typography;

// 1. 홈화면
// 월간 달력, 월간 메모장, 주간 리포트ㅡ 오운완 이미지 - 시간도 입력 가능
// 일기 작성 잘 하는 방법: 일기 카테고리, 기술 카테고리 등....

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

const HomeIntroduction = () => {
  return (
    <section>
      <Anchor direction="horizontal" items={homeItems} className="px-2" />
      <div id="part-1" className={whiteWrapper}>
        <Title style={{ margin: 0 }} level={4}>
          달력 형식으로 나의 주짓수를 기록해요
        </Title>
        <PhoneImage src="/tips/home/home.png" alt="홈 스크린" />
      </div>
      <div id="part-2" className={whiteWrapper}>
        <Title style={{ margin: 0 }} level={4}>
          오늘 운동한 내용을 일기로 작성해요
        </Title>
        <PhoneImage src="/tips/home/edit-diary.png" alt="홈 스크린" />
        <PhoneImage src="/tips/home/edit-diary-tech.png" alt="홈 스크린" />
        <PhoneImage src="/tips/home/edit-diary-content.png" alt="홈 스크린" />
        <PhoneImage src="/tips/home/edit-diary-rounds.png" alt="홈 스크린" />
      </div>
      <div id="part-3" className={whiteWrapper}>
        <Title style={{ margin: 0 }} level={4}>
          오늘의 운동을 이미지로 만들어서 기억해요
        </Title>
        <PhoneImage src="/tips/home/today.png" alt="홈 스크린" />
        <PhoneImage src="/tips/home/today-detail.png" alt="홈 스크린" />
      </div>
      <div id="part-4" className={whiteWrapper}>
        <Title style={{ margin: 0 }} level={4}>
          메모를 확인해요
        </Title>
        <PhoneImage src="/tips/home/memo.png" alt="홈 스크린" />
      </div>
      <div id="part-5" className={whiteWrapper}>
        <Title style={{ margin: 0 }} level={4}>
          이번 주 기록한 일기를 정리해요
        </Title>
        <PhoneImage src="/tips/home/weekly.png" alt="홈 스크린" />
      </div>
    </section>
  );
};

export default HomeIntroduction;
