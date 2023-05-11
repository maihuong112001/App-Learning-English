import DefaultLayout from "@/components/layout/defaultLayout";
import React from "react";
import { Card, Progress } from "antd";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
type Props = {};
import images from "@/assets/images";

const Home = (props: Props) => {
  return (
    <DefaultLayout>
      <div className="w-[100%] text-center px-14 py-10 bg-gray-50">
        <h1 className="font-semibold text-2xl">
          Làm bài thi TOEIC Full như đề thi thật
        </h1>
        <div className="flex justify-between w-[100%] mt-6">
          <div className="w-[60%]">
            <h1 className="font-semibold text-lg">FULL TEST</h1>
            <div className="w-[100%] pt-4">
              <Card title="" className="w-[100%]">
                <Card.Grid className="w-[25%]">
                  <Image className="h-[150px]" src={images.fulTest1} alt="kkkk" />
                  <p className="mt-4 font-semibold text-xl">Test 1</p>
                  <div className="w-[100%] flex justify-between mt-2">
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">0/200</p>
                      <p className="font-semibold ">Attempted</p>
                    </div>
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">6713</p>
                      <p className="font-semibold ">Participants</p>
                    </div>
                  </div>
                </Card.Grid>
                <Card.Grid className="w-[25%]">
                  <Image className="h-[150px]" src={images.fulTest2} alt="kkkk" />
                  <p className="mt-4 font-semibold text-xl">Test 2</p>
                  <div className="w-[100%] flex justify-between mt-2">
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">0/200</p>
                      <p className="font-semibold ">Attempted</p>
                    </div>
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">6713</p>
                      <p className="font-semibold ">Participants</p>
                    </div>
                  </div>
                </Card.Grid>
                <Card.Grid className="w-[25%]">
                  <Image className="h-[150px]" src={images.fulTest3} alt="kkkk" />
                  <p className="mt-4 font-semibold text-xl">Test 3</p>
                  <div className="w-[100%] flex justify-between mt-2">
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">0/200</p>
                      <p className="font-semibold ">Attempted</p>
                    </div>
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">6713</p>
                      <p className="font-semibold ">Participants</p>
                    </div>
                  </div>
                </Card.Grid>
                <Card.Grid className="w-[25%]">
                  <Image className="h-[150px]" src={images.fulTest4} alt="kkkk" />
                  <p className="mt-4 font-semibold text-xl">Test 4</p>
                  <div className="w-[100%] flex justify-between mt-2">
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">0/200</p>
                      <p className="font-semibold ">Attempted</p>
                    </div>
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">6713</p>
                      <p className="font-semibold ">Participants</p>
                    </div>
                  </div>
                </Card.Grid>
                <Card.Grid className="w-[25%]">
                  <Image className="h-[150px]" src={images.fulTest5} alt="kkkk" />
                  <p className="mt-4 font-semibold text-xl">Test 5</p>
                  <div className="w-[100%] flex justify-between mt-2">
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">0/200</p>
                      <p className="font-semibold ">Attempted</p>
                    </div>
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">6713</p>
                      <p className="font-semibold ">Participants</p>
                    </div>
                  </div>
                </Card.Grid>
                <Card.Grid className="w-[25%]">
                  <Image className="h-[150px]" src={images.fulTest6} alt="kkkk" />
                  <p className="mt-4 font-semibold text-xl">Test 6</p>
                  <div className="w-[100%] flex justify-between mt-2">
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">0/200</p>
                      <p className="font-semibold ">Attempted</p>
                    </div>
                    <div className="w-[45%]">
                      <p className="font-semibold text-gray-700 hover:text-lime-600">6713</p>
                      <p className="font-semibold ">Participants</p>
                    </div>
                  </div>
                </Card.Grid>
              </Card>
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
                <h1 className="font-semibold text-lg">Phần 1: Full Test</h1>
                <div className="text-lg mr-4">
                  <RightOutlined />
                </div>
              </div>
              <div className="w-[100%] bg-white rounded-lg text-gray-500 hover:text-lime-600 py-3 px-4 flex justify-between cursor-pointer hover:bg-indigo-300">
                <h1 className="font-semibold text-lg">Phần 2: Mini Test</h1>
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

export default Home;
