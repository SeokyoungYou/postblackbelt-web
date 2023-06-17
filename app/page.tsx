"use client";

import MyFooter from "@/components/MyFooter";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <main className="bg-black">
        <Image
          src="/home/main.png"
          alt="인용구 메인 이미지"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
        <section className="p-4">
          <span>support</span>
        </section>
        <Image
          src="/home/dictionaryPost.png"
          alt="post 어원 이미지"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
        <section className="p-4">
          <span>support</span>
        </section>
      </main>
      <MyFooter />
    </>
  );
}
