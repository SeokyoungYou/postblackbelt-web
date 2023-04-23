"use client";
import useInterval from "@/hooks/useInterval";
import { Avatar, Button, Card, Carousel } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import React from "react";

const APP_STORE = {
  ios: "https://apps.apple.com/us/app/post-black-belt-%EC%A3%BC%EC%A7%93%EC%88%98-%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC-%EC%9D%BC%EC%A7%80/id1673061463",
  android:
    "https://play.google.com/store/apps/details?id=com.quartz.postblackbelt",
};

export default function Page() {
  return (
    <div>
      <Carousel dotPosition="bottom" autoplay autoplaySpeed={5000}>
        <section>
          <div style={contentStyle}>
            🔨 앱 업데이트하여 더 많은 기능 사용하기
          </div>
        </section>
        <section>
          <div style={contentStyle}>인스타그램에서 새소식 받기</div>
        </section>
        <section>
          <div style={contentStyle}>✏️ 설문조사 참여하여 의견 남기기</div>
        </section>
      </Carousel>
      <main className="flex flex-col gap-2 p-4 mt-10">
        <a href="https://www.instagram.com/post_black_belt/">
          <Card>
            <Meta
              avatar={<Avatar src="/instagram-filled.png" />}
              title="인스타그램으로 이동하기"
              description="@post_black_belt 계정에서 새로운 업데이트 소식을 확인해보세요."
            />
          </Card>
        </a>
        <Card size="small" title="앱 업데이트하기">
          <div className="flex flex-col gap-3">
            <section className="flex items-center justify-between">
              <p>아이폰(iOS)</p>
              <a href={`${APP_STORE.ios}`}>
                <Button type="primary" ghost>
                  앱스토어로 이동하기
                </Button>
              </a>
            </section>
            <section className="flex items-center justify-between">
              <p>갤럭시(Android)</p>
              <a href={`${APP_STORE.android}`}>
                <Button type="primary" ghost>
                  구글 플레이스토어로 이동하기
                </Button>
              </a>
            </section>
          </div>
        </Card>
        <a href="https://forms.gle/t3P75wMmDmh2DMzz5">
          <Card>✏️ 설문조사 참여하여 의견 남기기</Card>
        </a>
      </main>
    </div>
  );
}

const contentStyle: React.CSSProperties = {
  height: "60px",
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // background: "#5E4B9C",
  paddingTop: "15px",
};
