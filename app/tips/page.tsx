"use client";
import React from "react";
import { Avatar, FloatButton, Segmented, Typography } from "antd";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
const { Title } = Typography;

// 하단 네비게이션 기준 3개로 나눠짐 -> 상단에 똑같은 모양으로 그려주자...
// 1. 홈화면
// 월간 달력, 월간 메모장, 주간 리포트
// 일기 작성 잘 하는 방법: 일기 카테고리, 기술 카테고리 등....
// 2. 마에페이지
// 내 주짓수 정보 입력 - 사진도~, 파이차트
// 3. 기술 트리
// 4. 부가 기능
// 오운완 이미지 - 시간도 입력 가능, 푸시 알림

const optionss = [
  {
    label: (
      <div style={{ padding: 4 }}>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        <div>User 1</div>
      </div>
    ),
    value: "user1",
  },
  {
    label: (
      <div style={{ padding: 4 }}>
        <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
        <div>User 2</div>
      </div>
    ),
    value: "user2",
  },
  {
    label: (
      <div style={{ padding: 4 }}>
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
        <div>User 3</div>
      </div>
    ),
    value: "user3",
  },
];

export default function TipsPage() {
  const [options, setOptions] = React.useState([
    "기술트리",
    "홈",
    "마이페이지",
  ]);

  return (
    <main className="flex flex-col gap-4 p-4">
      <div className="px-24 py-10 rounded-lg bg-slate-200">
        <Image
          src="/logo/app_logo_black.png"
          width={954}
          height={195}
          alt="앱 메인로고"
          quality="100"
        />
      </div>
      <Title level={3}>앱 사용법을 쉽게 알려드려요!</Title>
      <Segmented options={options} block={true} />
      <FloatButton.BackTop />
    </main>
  );
}
