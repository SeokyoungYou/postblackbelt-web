"use client";
import Image from "next/image";
import React from "react";
import { Button, Space, DatePicker, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function ProfilePage() {
  const onChange = () => {};
  return (
    <main>
      <div style={{ padding: 100 }}>
        <Space direction="vertical">
          <Button type="primary">Primary Button</Button>
          <Button type="ghost">Ghost Button</Button>
          <DatePicker onChange={onChange} />
          <SearchOutlined style={{ fontSize: 60, color: "green" }} />
          <Card>
            <p>Card content</p>
          </Card>
        </Space>
      </div>
    </main>
  );
}
