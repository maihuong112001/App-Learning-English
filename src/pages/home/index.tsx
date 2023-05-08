import DefaultLayout from "@/components/layout/defaultLayout";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import images from "@/assets/images";
import { CheckOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
type Props = {};
const contentStyle: React.CSSProperties = {
  height: "650px",
  width: "100%",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};
const includedFeatures = [
  "Mô Tả Tranh",
  "Hỏi - Đáp Án",
  "Đoạn Hội Thoại",
  "Bài Nói Ngắn",
];
const includedFeatures2 = ["Hoàn Thành Câu", "Hoàn Thành Đoạn Văn", "Đọc Hiểu"];
const Home = (props: Props) => {
  return (
    <DefaultLayout>
      <div className="relative z-50 mt-[6%] pl-10 text-4xl tracking-wider space-y-10">
        <h1 className="text-6xl">Bạn có muốn biết</h1>
        <h1 className="text-6xl font-semibold">điểm IELTS của mình?</h1>
        <p className="pb-12 text-transparent font-semibold text-5xl">
          Thi thử miễn phí và biết điểm ngay tức thì, không cần đi lại,
          <br /> tất cả đều trực tuyến.
        </p>
        <Link
          href={"/"}
          className="w-[50px] bg-red-400 p-6 text-white rounded-full"
        >
          BẮT ĐẦU THÔI
        </Link>
      </div>
      <div className="w-100 -mt-[600px] pb-96">
        <div>
          <Carousel autoplay>
            <div>
              <Image style={contentStyle} src={images.sl1} alt=""></Image>
            </div>
            <div>
              <Image style={contentStyle} src={images.sl1} alt=""></Image>
            </div>
            <div>
              <Image style={contentStyle} src={images.sl1} alt=""></Image>
            </div>
            <div>
              <Image style={contentStyle} src={images.sl1} alt=""></Image>
            </div>
          </Carousel>
        </div>
        <div className="w-[100%] text-center text-4xl text-lime-600 px-32 py-16 tracking-wider space-y-4">
          <h1 className="font-semibold text-5xl text-black">
            Luyện thi thử TOEIC online 2023
          </h1>
          <p className="text-3xl">
            Chào mừng đến với TOEIC Test Pro, trang web/ ứng dụng TOEIC cung cấp
            cho người học các bài luyện tập theo từng part, đề thi thử cũng như
            các bài tập về từ vựng và ngữ pháp. Bắt đầu hành trình chinh phục
            chứng chỉ TOEIC với các bài luyện tập trên trang web/ứng dụng của
            chúng tôi ngay hôm nay!
          </p>
        </div>
        <div className="flex justify-between w-100 px-2 mt-12 py-6">
          <div className="w-[32%] relative">
            <Image
              className="absolute top-0 left-0 right-0 bottom-0 transform hover:scale-105 transform-all duration-200"
              src={images.listen}
              alt=""
            ></Image>
          </div>
          <div className="w-[32%] relative">
            <Image
              src={images.read}
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 transform hover:scale-105 transform-all duration-200"
            ></Image>
          </div>
          <div className="w-[32%] relative">
            <Image
              src={images.write}
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 transform hover:scale-105 transform-all duration-200"
            ></Image>
          </div>
        </div>
      </div>

      <div className="w-[100%] py-10">
        <div className="bg-white">
          <div className="mx-auto px-6 lg:px-8">
            <div className="mx-auto px-32 sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                PHẦN NGHE
              </h2>
              <p className="mt-6 text-3xl text-lime-600">
                Phần nghe trong TOEIC là một trong những phần quan trọng nhất
                của bài kiểm tra, và nó được thiết kế để đánh giá khả năng nghe
                và hiểu các câu nói tiếng Anh trong các tình huống giao tiếp
                khác nhau. Việc luyện tập và cải thiện kỹ năng nghe trong phần
                nghe của TOEIC sẽ giúp bạn đạt được điểm số cao hơn trong bài
                kiểm tra và cải thiện khả năng sử dụng tiếng Anh của bạn trong
                cuộc sống hàng ngày.
              </p>
            </div>
            <div className="mx-auto mt-10 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto text-2xl">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Cải thiện khả năng nghe và hiểu tiếng Anh
                </h3>
                <p className="mt-6 text-2xl leading-7 text-gray-600">
                  Luyện nghe trong phần nghe của TOEIC giúp bạn phát triển khả
                  năng nghe và hiểu tiếng Anh của mình, từ đó cải thiện khả năng
                  giao tiếp của bạn trong nhiều tình huống khác nhau.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none font-semibold leading-6 text-indigo-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-2xl leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckOutlined
                        className="h-6 w-5 flex-none text-indigo-600 pr-10"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 text-2xl">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="font-semibold">THAM GIA NÀO</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="tracking-tight text-gray-900">
                        950+ đã tham gia
                      </span>
                    </p>
                    <Link
                      href="/"
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get access
                    </Link>
                    <p className="mt-6 leading-5 text-gray-600">
                      luyện tập và cải thiện kỹ năng nghe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] py-10">
        <div className="bg-white">
          <div className="mx-auto px-6 lg:px-8">
            <div className="mx-auto px-32 sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                PHẦN ĐỌC
              </h2>
              <p className="mt-6 text-3xl text-lime-600">
                Việc đọc và hiểu các bài đọc trong phần đọc của TOEIC là rất
                quan trọng để cải thiện khả năng nghe của bạn. Kỹ năng đọc tiếng
                Anh của bạn sẽ được nâng cao, từ đó giúp bạn cải thiện khả năng
                nghe và hiểu tiếng Anh của mình.
              </p>
            </div>
            <div className="mx-auto mt-10 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto text-2xl">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Nâng cao kỹ năng đọc và hiểu các câu tiếng Anh
                </h3>
                <p className="mt-6 text-2xl leading-7 text-gray-600">
                  Việc đọc các bài đọc trong phần đọc của TOEIC giúp bạn nâng
                  cao kỹ năng đọc và hiểu các câu tiếng Anh, từ đó cải thiện khả
                  năng nghe của bạn.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none font-semibold leading-6 text-indigo-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-2xl leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures2.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckOutlined
                        className="h-6 w-5 flex-none text-indigo-600 pr-10"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 text-2xl">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="font-semibold">THAM GIA NÀO</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="tracking-tight text-gray-900">
                        950+ đã tham gia
                      </span>
                    </p>
                    <Link
                      href="/"
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get access
                    </Link>
                    <p className="mt-6 leading-5 text-gray-600">
                      luyện tập và cải thiện kỹ năng nghe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 py-10 px-20">
        <h1 className="text-3xl font-semibold tracking-wider p-4">
          Mô phỏng bài thi TOEIC
        </h1>
        <div className="w-100 flex justify-between ">
          <div className="w-[46%] flex items-center">
            <Image src={images.test1} alt="" className="w-1/2 mr-4"></Image>
            <div className="text-lg">
              <h1>MINI TEST</h1>
              <p>
                Làm bài mini test với số lượng câu hỏi và <br />
                thời gian giảm một nửa so với bài thi thật
              </p>
              <Link href={"/"}>Luyện Tập</Link>
            </div>
          </div>
          <div className="w-[46%]">
            <Image src={images.test2} alt=""></Image>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
