"use client";

import { Card, Collapse, Image } from "antd";
import Meta from "antd/es/card/Meta";
import Title from "antd/es/typography/Title";

const { Panel } = Collapse;

function FAQ() {
  return (
    <>
      <Title level={5} style={{ marginTop: "20px", marginBottom: "-5px" }}>
        FAQ (자주 묻는 질문들)
      </Title>
      <Collapse accordion>
        <Panel header="비밀번호를 잃어버렸어요. 어떻게 찾을 수 있나요?" key="1">
          <p>
            보안상의 이유로 비밀번호 찾기는 제공하지 않고 있습니다. 대신 로그인
            창에서 [비밀번호 초기화하기]를 눌러 가입하신 이메일에서 비밀번호
            변경이 가능합니다.
          </p>
        </Panel>
        <Panel header="앱을 사용하다 버그를 발견했어요." key="2">
          <p>
            인스타그램 DM이나 skyu.dev@gmail.com 으로 연락주시면
            답변해드리겠습니다.
          </p>
        </Panel>
        <Panel header="앱 내 광고 마케팅이 가능한가요?" key="3">
          <p>
            주짓수 관련 광고를 [3가지 방법]으로 게시할 수 있으며 하단 붉은색
            박스 영역에 탑재됩니다. 물품 후원으로만 광고가 가능하며 인스타그램
            DM이나 skyu.dev@gmail.com 으로 연락주세요.
          </p>
          <section className="flex flex-col items-center justify-center gap-3 mt-5">
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <Image width={200} alt="앱 광고 예시" src="/ads/ad_app.png" />
              }
            >
              <Meta title="앱 배너" description="1 개월 게시" />
            </Card>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <Image width={200} alt="웹 광고 예시" src="/ads/ad_web.png" />
              }
            >
              <Meta title="웹 배너" description="1 개월 게시" />
            </Card>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <Image
                  width={200}
                  alt="인스타 광고 예시"
                  src="/ads/ad_insta.png"
                />
              }
            >
              <Meta title="인스타그램 피드" description="영구 게시" />
            </Card>
          </section>
          <p></p>
        </Panel>
      </Collapse>
    </>
    // </Card>
  );
}

export default FAQ;
