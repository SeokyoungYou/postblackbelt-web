"use client";

import { InfoCircleOutlined } from "@ant-design/icons";
import { Card, Collapse, Typography } from "antd";
import Title from "antd/es/typography/Title";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
            주짓수 관련 광고를 [앱 내 배너] [배너가 연결되는 웹] [인스타그램
            피드]에 탑재할 수 있으며, 앱 내 배너는 월단위로 게시됩니다.
          </p>
          <p>인스타그램 DM이나 skyu.dev@gmail.com로 연락주세요.</p>
        </Panel>
      </Collapse>
    </>
    // </Card>
  );
}

export default FAQ;
