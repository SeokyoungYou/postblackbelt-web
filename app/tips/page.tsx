"use client";
import React from "react";
import {
  Avatar,
  FloatButton,
  Menu,
  MenuProps,
  Segmented,
  Typography,
} from "antd";
import Image from "next/image";
import {
  AppstoreOutlined,
  HomeFilled,
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import HomeIntroduction from "./_components/HomeIntroduction";
import { navigationKey } from "./constants";
const { Text, Title, Paragraph } = Typography;

// 하단 네비게이션 기준 3개로 나눠짐 -> 상단에 똑같은 모양으로 그려주자...
// 1. 홈화면
// 월간 달력, 월간 메모장, 주간 리포트ㅡ 오운완 이미지 - 시간도 입력 가능
// 일기 작성 잘 하는 방법: 일기 카테고리, 기술 카테고리 등....
// 2. 마에페이지
// 내 주짓수 정보 입력 - 사진도~, 파이차트, 푸시 알림
// 3. 기술 트리

export default function TipsPage() {
  const [currMenuKey, setMenuKey] = React.useState<navigationKey>(
    navigationKey.home
  );

  const onClick: MenuProps["onClick"] = (e) => {
    setMenuKey(e.key as navigationKey);
  };

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
      <Title style={{ margin: 0 }} level={4}>
        앱 사용법을 쉽게 알려드려요!
      </Title>
      <Paragraph>
        <Text>
          Post Black Belt는 주짓수 수련자를 위한 <Text strong>개인 일기장</Text>{" "}
          앱이에요. 오늘의 운동을 기록하고 나의 주짓수를 다양한 방법으로
          확인하고 분석하는 방법을 알려드릴게요.
        </Text>
      </Paragraph>
      <Menu
        onClick={onClick}
        selectedKeys={[currMenuKey]}
        mode="horizontal"
        items={items}
      />
      {currMenuKey === navigationKey.home && (
        <HomeIntroduction menuKey={currMenuKey} />
      )}
      <FloatButton.BackTop />
    </main>
  );
}

const items: MenuProps["items"] = [
  {
    label: navigationKey.home,
    key: navigationKey.home,
    icon: <HomeOutlined />,
  },
  {
    label: navigationKey.myPage,
    key: navigationKey.myPage,
    icon: <UserOutlined />,
  },
  {
    label: navigationKey.techTree,
    key: navigationKey.techTree,
    icon: <AppstoreOutlined />,
  },
];
