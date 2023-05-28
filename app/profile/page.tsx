"use client";
import React from "react";
import { Button, Space, DatePicker, Card, Avatar } from "antd";
import Meta from "antd/es/card/Meta";
import { useSearchParams } from "next/navigation";
import FAQ from "@/components/FAQ";
import { APP_STORE, OS } from "@/lib/constants";

export default function ProfilePage() {
  const searchParams = useSearchParams();

  const os = searchParams.get("os");
  const email = searchParams.get("email");

  return (
    <main className="flex flex-col gap-4 p-4">
      <Card type="inner" title="앱 업데이트하기">
        <div className="flex flex-col gap-3">
          {os !== OS.ANDROID && (
            <section className="flex items-center justify-between">
              <p>아이폰(iOS)</p>
              <a href={`${APP_STORE.ios}`} id="appstore-button">
                <Button type="primary" ghost>
                  앱스토어 이동
                </Button>
              </a>
            </section>
          )}
          {os !== OS.IOS && (
            <section className="flex items-center justify-between">
              <p>갤럭시(Android)</p>
              <a href={`${APP_STORE.android}`} id="playstore-button">
                <Button type="primary" ghost>
                  구글 플레이스토어 이동
                </Button>
              </a>
            </section>
          )}
        </div>
      </Card>
      <a
        id="instagram-button"
        href="https://www.instagram.com/post_black_belt/"
      >
        <Card type="inner" title="인스타그램 계정 팔로우하기">
          <Meta
            avatar={<Avatar src="/instagram-filled.png" />}
            title="인스타그램으로 이동"
            description="@post_black_belt 계정에서 새로운 업데이트 소식을 확인해보세요."
          />
        </Card>
      </a>

      <Card type="inner" title="✏️ 설문조사 참여하기">
        <section className="flex items-center justify-between">
          <p>여러분의 의견을 들려주세요! (약 2분 소요)</p>
          <a href="https://forms.gle/t3P75wMmDmh2DMzz5" id="googleform-button">
            <Button type="primary" ghost>
              설문조사 링크
            </Button>
          </a>
        </section>
      </Card>

      <FAQ />
    </main>
  );
}
