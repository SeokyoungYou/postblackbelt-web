"use client";

import { Collapse, Image, Row, Typography } from "antd";

const { Panel } = Collapse;

const { Text } = Typography;

const VERSION = {
  [174]: {
    NAME: "v1.7.4 (✨New!)",
    IMAGES: [
      "/release-notes/174-1.png",
      "/release-notes/174-2.png",
      "/release-notes/174-3.png",
      "/release-notes/174-4.png",
      "/release-notes/174-5.png",
      "/release-notes/174-6.png",
    ],
  },
};

function ReleaseNotes() {
  return (
    <Collapse accordion>
      <Panel header={VERSION[174].NAME} key="1">
        <div className="flex flex-col pb-4 ">
          <Text>- 홈 화면이 업데이트되었어요: 월간 메모장, 주간 리포트</Text>
          <Text>- 오늘의 운동을 이미지로 기록하세요</Text>
          <Text>- 프로필 사진을 추가해보세요</Text>
          <Text>- 노기 카테고리가 추가되었어요</Text>
        </div>
        <Row justify="center">
          <Image.PreviewGroup>
            {VERSION[174].IMAGES.map((image) => (
              <Image
                key={image}
                width={200}
                src={image}
                alt={VERSION[174].NAME}
              />
            ))}
          </Image.PreviewGroup>
        </Row>
      </Panel>
    </Collapse>
  );
}

export default ReleaseNotes;
