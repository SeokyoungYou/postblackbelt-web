"use client";
import React from "react";
import { Anchor, Typography } from "antd";
import { whiteSection, whiteWrapper } from "../styles";
import PhoneImage from "./PhoneImage";
const { Text, Title, Paragraph } = Typography;

const homeItems = [
  {
    key: "part-1",
    href: "#part-1",
    title: "내 정보",
  },
  {
    key: "part-2",
    href: "#part-2",
    title: "푸시 알림",
  },
];

const MyPageIntroduction = () => {
  return (
    <section>
      <Anchor
        direction="horizontal"
        items={homeItems}
        className="px-2 bg-white"
      />
      <div id="part-1" className={whiteWrapper}>
        <section className={whiteSection}>
          <PhoneImage src="/tips/mypage/mypage.png" alt="마이페이지 스크린" />
          <Title style={{ margin: 0 }} level={4}>
            나의 주짓수 정보를 확인해요
          </Title>
          <Paragraph>
            <Text>
              주짓수를 수련하면서 기억하고 싶은 나의 정보들을 확인하는
              공간이에요. 사용자님이 작성한 일기를 바탕으로 나의 기술 분포도도
              확인할 수 있으니 일기를 꾸준히 작성하고 나의 주짓수 스타일을
              파악해보세요!
            </Text>
          </Paragraph>
        </section>
        <section className={whiteSection}>
          <PhoneImage
            src="/tips/mypage/edit-mypage.png"
            alt="내 정보 수정 스크린"
          />
          <Title style={{ margin: 0 }} level={4}>
            나의 주짓수 정보를 작성해요
          </Title>
          <Paragraph>
            <Text>
              프로필 사진, 소속, 주짓수를 시작한 날짜, 벨트 정보부터 운동
              목표까지 다양한 정보를 입력할 수 있어요.
            </Text>
          </Paragraph>
        </section>
      </div>
      <div id="part-2" className={whiteWrapper}>
        <section className={whiteSection}>
          <PhoneImage
            src="/tips/mypage/push-noti.png"
            alt="푸시 알림 설정 스크린"
          />
          <Title style={{ margin: 0 }} level={4}>
            운동이 끝난 후 푸시 알림을 받고 일기를 작성하세요
          </Title>
          <Paragraph>
            <Text>
              마이페이지 하단의 <Text strong>푸시 알람</Text> 버튼을 누르면 나의
              운동 시간에 딱 맞는 푸시 알림을 만들 수 있어요. 요일과 시간을
              선택하여 일기 작성 알림을 받아보세요.{" "}
              <Text type="secondary">
                최초에 앱 알림 권한을 허용하지 않으면 기기 설정창에서 직접
                알림을 허용해야 해요.
              </Text>
            </Text>
          </Paragraph>
        </section>
      </div>
    </section>
  );
};

export default MyPageIntroduction;
