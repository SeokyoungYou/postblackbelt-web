"use client";
import Image from "next/image";
import React from "react";
import { Button, Space, DatePicker, Card, Avatar } from "antd";
import Meta from "antd/es/card/Meta";
import { useSearchParams } from "next/navigation";

// const;

// ios
// android
export default function ProfilePage() {
  const searchParams = useSearchParams();

  const os = searchParams.get("os");
  const email = searchParams.get("email");
  // console.log(os);
  // console.log(email);
  return (
    <main className="flex flex-col gap-2 p-4">
      <span>{os}</span>
      <span>{email}</span>
      {/* <Space direction="vertical"> */}
      {/* <Button type="primary">Primary Button</Button> */}

      <a href="https://www.instagram.com/post_black_belt/">
        <Card>
          <Meta
            avatar={<Avatar src="/instagram-filled.png" />}
            title="인스타그램으로 이동하기"
            description="@post_black_belt 계정에서 새로운 업데이트 소식을 확인해보세요."
          />
        </Card>
      </a>
      <Card size="small">
        <p>Card content</p>
      </Card>
      {/* </Space> */}
    </main>
  );
}
