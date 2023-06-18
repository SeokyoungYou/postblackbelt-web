"use client";
import React from "react";
import { Anchor, Typography } from "antd";
import { whiteSection, whiteWrapper } from "../styles";
import PhoneImage from "./PhoneImage";
import Tip from "@/components/Tip";
const { Text, Title, Paragraph } = Typography;
const homeItems = [
  {
    key: "part-1",
    href: "#part-1",
    title: "월간 달력",
  },
  {
    key: "part-2",
    href: "#part-2",
    title: "일기 작성",
  },
  {
    key: "part-3",
    href: "#part-3",
    title: "오늘의 운동 이미지",
  },
  {
    key: "part-4",
    href: "#part-4",
    title: "월간 메모장",
  },
  {
    key: "part-5",
    href: "#part-5",
    title: "주간 리포트",
  },
];

const HomeIntroduction = () => {
  return (
    <section>
      <Anchor
        direction="horizontal"
        items={homeItems}
        className="px-2 bg-white"
      />
      <div id="part-1" className={whiteWrapper}>
        <section className={whiteSection}>
          <PhoneImage src="/tips/home/home.png" alt="홈 스크린" />
          <Title style={{ margin: 0 }} level={4}>
            달력 형식으로 운동 기록을 확인해요
          </Title>
          <Paragraph>
            <Text>
              오늘의 운동을 일기로 작성하여{" "}
              <Text strong>나만의 주짓수 달력</Text>을 만들어보세요. 달력을
              좌우로 스와이프하여 변경할 수 있고, 특정 날짜를 선택하면 하단에서
              작성한 일기들을 확인할 수 있어요. 이번 달 주짓수 기록을 한 눈에
              체크해보세요.
            </Text>
          </Paragraph>
        </section>
      </div>
      <div id="part-2" className={whiteWrapper}>
        <section className={whiteSection}>
          <PhoneImage src="/tips/home/edit-diary.png" alt="일기 작성창" />
          <Title style={{ margin: 0 }} level={4}>
            오늘의 주짓수를 월간 달력에 스탬핑해요
          </Title>
          <Paragraph>
            <Text>
              월간 달력에서 <Text strong>검은색 플러스 버튼</Text>을 누르면 해당
              날짜의 일기를 작성할 수 있어요. 기술연습, 스파링데이, 노기 등 일기
              카테고리를 선정하여 오늘의 운동을 스탬핑하여 월간 달력에서 확인할
              수 있어요. <Text strong>메모장</Text>은 운동 횟수에 기록되지
              않으므로 기술 강의 기록, 대회 준비 등 자유로운 주제로 일기를
              작성해보세요!
            </Text>
          </Paragraph>
        </section>
        <section className={whiteSection}>
          <PhoneImage
            src="/tips/home/edit-diary-tech.png"
            alt="기술 카테고리가 열린 일기 작성창"
          />
          <Title style={{ margin: 0 }} level={4}>
            작성한 일기를 기술 별로 분류해요
          </Title>
          <Paragraph>
            <Text>
              오늘의 운동에 대해 여러 정보들을 함께 작성할 수 있어요. 먼저
              기술트리 토글 버튼을 켜면 스탠딩, 가드, 가드패스 등 기술을
              선택하여 일기를 작성하면 기술트리 탭에서 일기를 분류하여 확인할 수
              있어요. 기술 다중 선택은 아직 지원되지 않으니 여러 기술에 대해서는
              각각의 일기를 작성하면 되어요.
            </Text>
          </Paragraph>
        </section>
        <section className={whiteSection}>
          <PhoneImage
            src="/tips/home/edit-diary-content.png"
            alt="작성창이 열린 일기 작성창"
          />
          <Title style={{ margin: 0 }} level={4}>
            수련 내용을 일기로 작성해요
          </Title>
          <Paragraph>
            <Text>
              일기 토글 버튼을 켜면 오늘의 운동에 대해 자세히 작성할 수 있어요.
              최대 1000 자까지 길게 작성할 수 있으니 오늘 수련한 내용이나 후기를
              자세히 작성해보세요!
            </Text>
          </Paragraph>
        </section>
        <section className={whiteSection}>
          <PhoneImage
            src="/tips/home/edit-diary-rounds.png"
            alt="스파링 정보, 링크 작성창이 열린 일기 작성창"
          />
          <Title style={{ margin: 0 }} level={4}>
            스파링, 링크 정보를 추가해요
          </Title>
          <Paragraph>
            <Text>
              더 다양한 정보를 담고 싶으면 스파링 횟수 및 라운드 그리고 링크를
              기록할 수 있어요.
            </Text>
          </Paragraph>
          <Tip
            title="메모장 활용하기"
            description="배우고 싶은 기술이 생겼다면 메모장 카테고리를 사용하여 일기를 작성하고, Youtube나 Instagram 링크도 추가해보세요. 도장에서 해당 일기를 열어서 바로 연습하기 편할거예요."
          />
        </section>
      </div>
      <div id="part-3" className={whiteWrapper}>
        <section className={whiteSection}>
          <PhoneImage
            src="/tips/home/today.png"
            alt="오늘의 주짓수 이미지 스크린"
          />
          <Title style={{ margin: 0 }} level={4}>
            오늘의 운동을 이미지로 만들어서 기억해요
          </Title>
          <Paragraph>
            <Text>
              운동한 사진에 날짜, 일기 카테고리, 나의 벨트 정보가 추가된
              이미지를 만들 수 있어요. 벨트 정보는 마이페이지에서 수정할 수
              있어요.
            </Text>
          </Paragraph>
        </section>
        <section className={whiteSection}>
          <PhoneImage
            src="/tips/home/today-detail.png"
            alt="시간 지정창이 열린 오늘의 주짓수 이미지 스크린"
          />
          <Paragraph>
            <Text>
              운동 시간을 추가로 기록하거나 일기 카테고리를 임시로 변경하는 것도
              가능해요. 이 기능은 월간 달력에서 일기가 작성되는 날짜에{" "}
              <Text strong>하늘색 버튼</Text>으로 활성화되어요.
            </Text>
          </Paragraph>
        </section>
      </div>
      <div id="part-4" className={whiteWrapper}>
        <section className={whiteSection}>
          <PhoneImage src="/tips/home/memo.png" alt="월간 메모 스크린" />
          <Title style={{ margin: 0 }} level={4}>
            메모를 월별로 확인해요
          </Title>
          <Paragraph>
            <Text>
              상단의 메뉴 버튼 중 <Text strong>메모장</Text>을 클릭하면 월별로
              작성한 메모장 카테고리의 일기들을 한 눈에 확인할 수 있어요.
            </Text>
          </Paragraph>
        </section>
      </div>
      <div id="part-5" className={whiteWrapper}>
        <section className={whiteSection}>
          <PhoneImage src="/tips/home/weekly.png" alt="주간 리포트 스크린" />
          <Title style={{ margin: 0 }} level={4}>
            나만의 주간 주짓수 리포트를 발행해요
          </Title>
          <Paragraph>
            <Text>
              Post Black Belt에서는 작성된 일기를 출석 횟수, 기술트리, 대회,
              승급 등 다양한 이벤트를 분석하고 있어요. 이번 주 주짓수를
              되돌아보는 시간을 가져보세요!
            </Text>
          </Paragraph>
        </section>
      </div>
    </section>
  );
};

export default HomeIntroduction;
