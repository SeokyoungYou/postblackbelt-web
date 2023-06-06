"use client";
import React from "react";
import { Anchor, Avatar, FloatButton, Segmented, Typography } from "antd";
import Image from "next/image";
import { whiteWrapper } from "../styles";
import PhoneImage from "./PhoneImage";
import Tip from "@/components/Tip";
const { Text, Title, Paragraph } = Typography;

// 2. 마에페이지
// 내 주짓수 정보 입력 - 사진도~, 파이차트, 푸시 알림

const homeItems = [
  {
    key: "part-1",
    href: "#part-1",
    title: "내 정보",
  },
  {
    key: "part-2",
    href: "#part-2",
    title: "푸시 알림",
  },
];

const MyPageIntroduction = () => {
  return (
    <section>
      <Anchor
        direction="horizontal"
        items={homeItems}
        className="px-2 bg-white"
      />
      <div id="part-1" className={whiteWrapper}>
        <PhoneImage src="/tips/mypage/mypage.png" alt="홈 스크린" />
        <Title style={{ margin: 0 }} level={4}>
          나의 주짓수 정보를 확인해요
        </Title>
        <Paragraph>
          <Text>
            오늘의 운동을 일기로 작성하여 <Text strong>나만의 주짓수 달력</Text>
            을 만들어보세요. 달력을 좌우로 스와이프하여 변경할 수 있고, 특정
            날짜를 선택하면 하단에서 작성한 일기들을 확인할 수 있어요. 이번 달
            주짓수 기록을 한 눈에 체크해보세요.
          </Text>
        </Paragraph>
        <PhoneImage src="/tips/mypage/edit-mypage.png" alt="홈 스크린" />
        <Title style={{ margin: 0 }} level={4}>
          나의 주짓수 정보를 작성해요
        </Title>
        <Paragraph>
          <Text>
            오늘의 운동을 일기로 작성하여 <Text strong>나만의 주짓수 달력</Text>
            을 만들어보세요. 달력을 좌우로 스와이프하여 변경할 수 있고, 특정
            날짜를 선택하면 하단에서 작성한 일기들을 확인할 수 있어요. 이번 달
            주짓수 기록을 한 눈에 체크해보세요.
          </Text>
        </Paragraph>
      </div>
      <div id="part-2" className={whiteWrapper}>
        <PhoneImage src="/tips/mypage/edit-mypage.png" alt="홈 스크린" />
        <Title style={{ margin: 0 }} level={4}>
          달력 형식으로 운동 기록을 확인해요
        </Title>
        <Paragraph>
          <Text>
            오늘의 운동을 일기로 작성하여 <Text strong>나만의 주짓수 달력</Text>
            을 만들어보세요. 달력을 좌우로 스와이프하여 변경할 수 있고, 특정
            날짜를 선택하면 하단에서 작성한 일기들을 확인할 수 있어요. 이번 달
            주짓수 기록을 한 눈에 체크해보세요.
          </Text>
        </Paragraph>
        <Tip
          title="메모장 활용하기"
          description="배우고 싶은 기술이 생겼다면 메모장 카테고리를 사용하여 일기를 작성하고, Youtube나 Instagram 링크도 추가해보세요. 도장에서 해당 일기를 열어서 바로 연습하기 편할거예요."
        />
      </div>
    </section>
  );
};

export default MyPageIntroduction;
