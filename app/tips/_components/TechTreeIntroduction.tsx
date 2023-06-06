"use client";
import React from "react";
import { Typography } from "antd";
import { whiteWrapper } from "../styles";
import PhoneImage from "./PhoneImage";

const { Text, Title, Paragraph } = Typography;

const TechTreeIntroduction = () => {
  return (
    <section>
      <div id="part-2" className={whiteWrapper}>
        <PhoneImage src="/tips/techtree/tech-tree.png" alt="기술 트리 스크린" />
        <Title style={{ margin: 0 }} level={4}>
          작성한 일기를 기술 별로 확인하세요
        </Title>
        <Paragraph>
          <Text>
            기술 카테고리를 지정하여 일기를 작성하면 나만의 기술 트리에서 확인할
            수 있어요.
          </Text>
        </Paragraph>
        <PhoneImage
          src="/tips/techtree/tech-detail.png"
          alt="기술 상세 스크린"
        />
        <Paragraph>
          <Text>기술을 선택하여 관련된 일기들을 한 눈에 확인하세요.</Text>
        </Paragraph>
      </div>
    </section>
  );
};

export default TechTreeIntroduction;
