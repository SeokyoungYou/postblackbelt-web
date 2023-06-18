"use client";
import { Typography } from "antd";
import React from "react";

const { Text, Title } = Typography;

type TipProp = {
  title: string;
  description: string;
};

const Tip: React.FC<TipProp> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg bg-slate-100">
      <Title style={{ margin: 0 }} level={5}>
        💡 Tip! {title}
      </Title>
      <Text>{description}</Text>
    </div>
  );
};

export default Tip;
