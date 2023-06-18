"use client";

import MyFooter from "@/components/MyFooter";
import Image from "next/image";

import { Noto_Serif_Display } from "next/font/google";
import { Merriweather } from "next/font/google";
import {
  AppleFilled,
  GoogleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { APP_STORE } from "@/lib/constants";
import Link from "next/link";

const notoSefrifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["900"],
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

// TODO: head 잘 작성해서 SEO 들어가게 만들기

export default function Page() {
  return (
    <>
      <main className={merriweather.className}>
        <section className="flex flex-col items-center justify-center px-2 py-20">
          <h1
            style={{ fontSize: "11vw", fontWeight: "900" }}
            className={notoSefrifDisplay.className}
          >
            Post Black Belt
          </h1>
          <h3
            style={{
              fontSize: "4vw",
              fontWeight: "700",
              whiteSpace: "pre-line",
              textAlign: "center",
            }}
          >
            {"Your Companion\nfrom White Belt to Black, and Beyond."}
          </h3>
        </section>
        <section className="flex flex-col items-center justify-center gap-6 p-10">
          <div className="flex gap-6 overflow-x-auto ">
            <Image
              src="/tips/home/home.png"
              width={170}
              height={320}
              alt="앱 메인 이미지"
            />
            <Image
              src="/tips/home/edit-diary-tech.png"
              width={170}
              height={320}
              alt="앱 일기 작성 페이지 이미지"
            />
            <Image
              src="/tips/techtree/tech-tree.png"
              width={170}
              height={320}
              alt="앱 메인 이미지"
            />
          </div>
          <h2
            style={{
              fontSize: "3vw",
              fontWeight: "700",
              whiteSpace: "pre-line",
              textAlign: "center",
            }}
          >
            Mobile Diary App for Jiu-Jiitsu
          </h2>
        </section>

        <Image
          src="/home/quote.png"
          alt="주짓수 명언 이미지"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />

        <Image
          src="/home/dictionaryPost.png"
          alt="post 어원 이미지"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
        <section className="flex flex-col items-center justify-center gap-10 p-20 bg-black">
          <span
            style={{
              fontSize: "4vw",
              fontWeight: "700",
              whiteSpace: "pre-line",
              textAlign: "center",
              color: "white",
            }}
          >
            Supporting All Paths to Black Belt and Every Step Thereafter
          </span>
          <div className="flex flex-col gap-5">
            <Link
              href="/profile"
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-slate-200"
            >
              <InfoCircleOutlined /> 한국어 매뉴얼 확인하기
            </Link>

            <a
              href={APP_STORE.ios}
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-slate-200"
            >
              <AppleFilled /> App Store Download
            </a>
            <a
              href={APP_STORE.android}
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-slate-200"
            >
              <GoogleOutlined /> Play Store Download
            </a>
          </div>
        </section>
      </main>
      <MyFooter />
    </>
  );
}
