"use client";
import React from "react";
import { FloatButton, Menu, MenuProps, Typography } from "antd";
import Image from "next/image";
import {
  AppstoreOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import HomeIntroduction from "./_components/HomeIntroduction";
import MyPageIntroduction from "./_components/MyPageIntroduction";
import TechTreeIntroduction from "./_components/TechTreeIntroduction";
import MyFooter from "@/components/MyFooter";
import { Footer } from "antd/es/layout/layout";
const { Text, Title, Paragraph } = Typography;

export default function TipsPage() {
  const [currMenuKey, setMenuKey] = React.useState<navigationKey>(
    navigationKey.home
  );

  const onClick: MenuProps["onClick"] = (e) => {
    setMenuKey(e.key as navigationKey);
  };

  return (
    <>
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
        <section>
          <Title level={3}>앱 사용법을 쉽게 알려드려요!</Title>
          <Paragraph>
            <Text>
              Post Black Belt는 주짓수 수련자를 위한{" "}
              <Text strong>개인 일기장</Text> 앱이에요. 오늘의 운동을 기록하고
              나의 주짓수를 다양한 방법으로 확인하고 분석하는 방법을
              알려드릴게요. 세 개의 하단 네비게이션 기준으로 여러 기능들을
              사용할 수 있어요.
            </Text>
          </Paragraph>
        </section>
        <Menu
          onClick={onClick}
          selectedKeys={[currMenuKey]}
          mode="horizontal"
          items={items}
        />
        {currMenuKey === navigationKey.home && <HomeIntroduction />}
        {currMenuKey === navigationKey.myPage && <MyPageIntroduction />}
        {currMenuKey === navigationKey.techTree && <TechTreeIntroduction />}
        <FloatButton.BackTop />
      </main>
      <Footer />
      <MyFooter />
    </>
  );
}

enum navigationKey {
  home = "홈",
  myPage = "마이페이지",
  techTree = "기술트리",
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
