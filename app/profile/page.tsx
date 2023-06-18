"use client";
import React from "react";
import { Button, Space, DatePicker, Card, Avatar, FloatButton } from "antd";
import Meta from "antd/es/card/Meta";
import { useRouter, useSearchParams } from "next/navigation";
import FAQ from "@/components/FAQ";
import { APP_STORE, LATEST_VERSION, OS } from "@/lib/constants";
import ReleaseNotes from "@/components/ReleaseNotes";
import MyFooter from "@/components/MyFooter";

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const os = searchParams.get("os");
  const email = searchParams.get("email");
  const version = searchParams.get("version");

  return (
    <>
      <main className="flex flex-col gap-4 p-4">
        {version !== LATEST_VERSION && (
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
        )}

        <Card type="inner" title="앱 업데이트 소식">
          <a
            id="instagram-button"
            href="https://www.instagram.com/post_black_belt/"
          >
            <Meta
              avatar={<Avatar src="/instagram-filled.png" />}
              title="인스타그램으로 이동"
              description="@post_black_belt 에서 새로운 소식을 확인하세요."
              className="pb-4 "
            />
          </a>
          <ReleaseNotes />
        </Card>

        <Card type="inner" title="앱 사용 방법">
          <section className="flex items-center justify-between">
            <p>다양한 기능들을 구경해보세요!</p>
            <Button type="primary" ghost onClick={() => router.push("/tips")}>
              매뉴얼로 이동
            </Button>
          </section>
        </Card>

        <Card type="inner" title="✏️ 설문조사 참여하기">
          <section className="flex items-center justify-between">
            <p>여러분의 의견을 들려주세요! (약 2분 소요)</p>
            <a
              href="https://forms.gle/t3P75wMmDmh2DMzz5"
              id="googleform-button"
            >
              <Button type="primary" ghost>
                설문조사 링크
              </Button>
            </a>
          </section>
        </Card>

        <FAQ />
        <FloatButton.BackTop />
      </main>
      <MyFooter />
    </>
  );
}
