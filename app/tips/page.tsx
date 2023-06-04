"use client";
import React from "react";
import { Button, Space, DatePicker, Card, Avatar, FloatButton } from "antd";
import Meta from "antd/es/card/Meta";
import { useSearchParams } from "next/navigation";
import FAQ from "@/components/FAQ";
import { APP_STORE, LATEST_VERSION, OS } from "@/lib/constants";
import ReleaseNotes from "@/components/ReleaseNotes";
import Image from "next/image";

export default function TipsPage() {
  const searchParams = useSearchParams();

  const os = searchParams.get("os");
  const email = searchParams.get("email");
  const version = searchParams.get("version");

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
      {/* <FloatButton.BackTop /> */}
    </main>
  );
}
