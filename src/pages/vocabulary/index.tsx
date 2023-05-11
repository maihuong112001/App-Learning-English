import DefaultLayout from "@/components/layout/defaultLayout";
import React from "react";
import { Col, Row } from "antd";
import { ReadFilled, RightOutlined } from "@ant-design/icons";
type Props = {};
const Vocabulary = (props: Props) => {
  return (
    <DefaultLayout>
      <div className="w-[100%] text-center px-14 py-10 bg-gray-50">
        <h1 className="font-semibold text-2xl">
          Học từ vựng TOEIC online theo chủ đề
        </h1>
        <div className="flex justify-between w-[100%] mt-6">
          <div className="w-[60%] space-y-10">
            <div>
              <h1 className="font-semibold text-lg">
                TOEIC VOCABULARY (BY TOPIC)
              </h1>
              <div className="w-[100%] bg-lime-100 rounded-lg px-4 py-6">
                <Row className="font-semibold text-3xl space-y-2 space-x-2">
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 mt-[8px] ml-2 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>NOUNS</p>
                  </Col>
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>FUTURE CONTINUOUS TENSE</p>
                  </Col>
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>ADJECTIVES</p>
                  </Col>
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>FUTURE PERFECT TENSE</p>
                  </Col>
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>ADVERBS</p>
                  </Col>
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>NOUN, ADJECTIVE, ADVERB EXCERCISES</p>
                  </Col>
                </Row>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-lg">
                TOEIC VOCABULARY (BY PART)
              </h1>
              <div className="w-[100%] bg-lime-100 rounded-lg px-4 py-6">
                <Row className="font-semibold text-3xl space-y-2 space-x-2">
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 mt-[8px] ml-2 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>NOUNS</p>
                  </Col>
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>FUTURE CONTINUOUS TENSE</p>
                  </Col>
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>ADJECTIVES</p>
                  </Col>
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>FUTURE PERFECT TENSE</p>
                  </Col>
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>ADVERBS</p>
                  </Col>
                  <Col
                    className="flex cursor-pointer bg-white p-3 rounded-lg space-x-4 hover:text-lime-600"
                    span={11}
                  >
                    <ReadFilled className="mt-3" />
                    <p>NOUN, ADJECTIVE, ADVERB EXCERCISES</p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="w-[100%] pt-4 text-left space-y-3">
              <h1 className="font-semibold text-lg">
                1. Cách luyện thi TOEIC part 1 online trên website TOEIC TEST
                PRO
              </h1>
              <p className="ml-2 text-lg">
                - Khi làm bài luyện nghe TOEIC part 1 trên TOEIC TEST PRO, bạn
                có thể chọn những bài test trên danh sách của chúng tôi.
              </p>
              <p className="ml-2 text-lg">
                - Mỗi bài luyện thi Listening part 1 gồm 6 câu hỏi. Mỗi câu hỏi
                có một bức ảnh. Bạn sẽ nghe bốn đáp án (được đánh dấu A, B, C,
                D) và sau đó chọn một câu mô tả tốt nhất bức ảnh.
              </p>
              <p className="ml-2 text-lg">
                - Sau khi hoàn thành tất cả sáu câu hỏi, bạn cần nhấn nút gửi để
                nộp các câu trả lời của bạn.
              </p>
              <p className="ml-2 text-lg">
                - Có thể xem lại bài thi đã làm, xem đáp án đúng và lời giải chi
                tiết. Đây là một trong những điểm cộng của TOEIC TEST PRO, giúp
                bạn có thể xác định được điểm mạnh và yếu của mình.{" "}
              </p>
              <p className="ml-2 text-lg">
                Bài thi Toeic Listening part 1 được coi là phần dễ nhất trong đề
                thi TOEIC vì nó có số lượng câu hỏi ít nhất. Tuy nhiên, part 1 ở
                format mới khó hơn ở format cũ vì nó có nhiều bẫy hơn. Vì vậy,
                không có cách nào khác ngoài việc luyện thi TOEIC part 1 càng
                nhiều càng tốt.
              </p>
            </div>
          </div>
          <div className="w-[35%]">
            <h1 className="font-semibold text-lg">Other Practices</h1>
            <div className="w-[100%] space-y-3 text-left mt-3">
              <div className="w-[100%] bg-white rounded-lg text-gray-500 hover:text-lime-600 py-3 px-4 flex justify-between cursor-pointer hover:bg-indigo-300">
                <h1 className="font-semibold text-lg">Phần 1: Mô Tra Tranh</h1>
                <div className="text-lg mr-4">
                  <RightOutlined />
                </div>
              </div>
              <div className="w-[100%] bg-white rounded-lg text-gray-500 hover:text-lime-600 py-3 px-4 flex justify-between cursor-pointer hover:bg-indigo-300">
                <h1 className="font-semibold text-lg">Phần 2: Hổi - Đáp</h1>
                <div className="text-lg mr-4">
                  <RightOutlined />
                </div>
              </div>
              <div className="w-[100%] bg-white rounded-lg text-gray-500 hover:text-lime-600 py-3 px-4 flex justify-between cursor-pointer hover:bg-indigo-300">
                <h1 className="font-semibold text-lg">
                  Phần 3: Đoạn Hội Thoại
                </h1>
                <div className="text-lg mr-4">
                  <RightOutlined />
                </div>
              </div>
              <div className="w-[100%] bg-white rounded-lg text-gray-500 hover:text-lime-600 py-3 px-4 flex justify-between cursor-pointer hover:bg-indigo-300">
                <h1 className="font-semibold text-lg">Phần 4: Hổi - Đáp</h1>
                <div className="text-lg mr-4">
                  <RightOutlined />
                </div>
              </div>
              <div className="w-[100%] bg-white rounded-lg text-gray-500 hover:text-lime-600 py-3 px-4 flex justify-between cursor-pointer hover:bg-indigo-300">
                <h1 className="font-semibold text-lg">Phần 5: Bài Nói Ngắn</h1>
                <div className="text-lg mr-4">
                  <RightOutlined />
                </div>
              </div>
              <div className="w-[100%] bg-white rounded-lg text-gray-500 hover:text-lime-600 py-3 px-4 flex justify-between cursor-pointer hover:bg-indigo-300">
                <h1 className="font-semibold text-lg">
                  Phần 6: Hoàn Thành Câu
                </h1>
                <div className="text-lg mr-4">
                  <RightOutlined />
                </div>
              </div>
              <div className="w-[100%] bg-white rounded-lg text-gray-500 hover:text-lime-600 py-3 px-4 flex justify-between cursor-pointer hover:bg-indigo-300">
                <h1 className="font-semibold text-lg">
                  Phần 7: Đọc Hiểu Đoạn Đơn
                </h1>
                <div className="text-lg mr-4">
                  <RightOutlined />
                </div>
              </div>
              <div className="w-[100%] bg-white rounded-lg text-gray-500 hover:text-lime-600 py-3 px-4 flex justify-between cursor-pointer hover:bg-indigo-300">
                <h1 className="font-semibold text-lg">
                  Phần 8: Đọc Hiểu - Đoạn Kép
                </h1>
                <div className="text-lg mr-4">
                  <RightOutlined />
                </div>
              </div>
              <div className="w-[100%] bg-white rounded-lg text-gray-500 hover:text-lime-600 py-3 px-4 flex justify-between cursor-pointer hover:bg-indigo-300">
                <h1 className="font-semibold text-lg">
                  Phần 9: Đọc Hiểu - Đoạn Ba
                </h1>
                <div className="text-lg mr-4">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Vocabulary;
