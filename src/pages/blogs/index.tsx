import DefaultLayout from "@/components/layout/defaultLayout";
import React from "react";
import { RightOutlined, EyeOutlined, FormOutlined } from "@ant-design/icons";
import Image from "next/image";
import images from "@/assets/images";
type Props = {};
const products = [
  {
    id: 1,
    name: "“Diệt gọn” các loại bẫy TOEIC Part 1 thường gặp nhanh chóng",
    href: "#",
    imageSrc: images.fulTest1,
    imageAlt: "Front of men's Basic Tee in black.",
    date:"February 21, 2023",
    views: "355",
    color:
      "TOEIC Listening part 1 là phần thi tương đối dễ so với các phần thi còn lại trong bài thi TOEIC. Tuy nhiên, đừng thấy dễ mà chủ quan nhé! Có rất nhiều bẫy được giăng sẵn trong bài chỉ chờ bạn sụp hố thôi đó nha! Cùng TOEIC Test Pro tìm hiểu ngay các …",
  },
  {
    id: 2,
    name: "“Diệt gọn” các loại bẫy TOEIC Part 1 thường gặp nhanh chóng",
    href: "#",
    imageSrc: images.fulTest1,
    imageAlt: "Front of men's Basic Tee in black.",
    date:"February 21, 2023",
    views: "355",
    color:
      "TOEIC Listening part 1 là phần thi tương đối dễ so với các phần thi còn lại trong bài thi TOEIC. Tuy nhiên, đừng thấy dễ mà chủ quan nhé! Có rất nhiều bẫy được giăng sẵn trong bài chỉ chờ bạn sụp hố thôi đó nha! Cùng TOEIC Test Pro tìm hiểu ngay các …",
  },
  {
    id: 3,
    name: "“Diệt gọn” các loại bẫy TOEIC Part 1 thường gặp nhanh chóng",
    href: "#",
    imageSrc: images.fulTest1,
    imageAlt: "Front of men's Basic Tee in black.",
    date:"February 21, 2023",
    views: "355",
    color:
      "TOEIC Listening part 1 là phần thi tương đối dễ so với các phần thi còn lại trong bài thi TOEIC. Tuy nhiên, đừng thấy dễ mà chủ quan nhé! Có rất nhiều bẫy được giăng sẵn trong bài chỉ chờ bạn sụp hố thôi đó nha! Cùng TOEIC Test Pro tìm hiểu ngay các …",
  },
  {
    id: 4,
    name: "“Diệt gọn” các loại bẫy TOEIC Part 1 thường gặp nhanh chóng",
    href: "#",
    imageSrc: images.fulTest1,
    imageAlt: "Front of men's Basic Tee in black.",
    date:"February 21, 2023",
    views: "355",
    color:
      "TOEIC Listening part 1 là phần thi tương đối dễ so với các phần thi còn lại trong bài thi TOEIC. Tuy nhiên, đừng thấy dễ mà chủ quan nhé! Có rất nhiều bẫy được giăng sẵn trong bài chỉ chờ bạn sụp hố thôi đó nha! Cùng TOEIC Test Pro tìm hiểu ngay các …",
  },
  {
    id: 5,
    name: "“Diệt gọn” các loại bẫy TOEIC Part 1 thường gặp nhanh chóng",
    href: "#",
    imageSrc: images.fulTest1,
    imageAlt: "Front of men's Basic Tee in black.",
    date:"February 21, 2023",
    views: "355",
    color:
      "TOEIC Listening part 1 là phần thi tương đối dễ so với các phần thi còn lại trong bài thi TOEIC. Tuy nhiên, đừng thấy dễ mà chủ quan nhé! Có rất nhiều bẫy được giăng sẵn trong bài chỉ chờ bạn sụp hố thôi đó nha! Cùng TOEIC Test Pro tìm hiểu ngay các …",
  },
];
const Blog = (props: Props) => {
  return (
    <DefaultLayout>
      <div className="w-[100%] px-14 py-10 bg-gray-50">
        <div className="text-center">
          <h1 className="font-semibold text-2xl">Học TOEIC Online</h1>
        </div>
        <div className="flex justify-between w-[100%] mt-6">
          <div className="w-[72%] space-y-6">
            <h1 className="text-2xl text-center font-bold tracking-tight text-gray-900">
              Bài viết
            </h1>
            <div className="bg-lime-100 rounded-lg">
              <div className="mx-auto max-w-2xl px-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-4">
                <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
                  {products.map((product) => (
                    <div key={product.id} className="group relative">
                      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4">
                        <div>
                          <h3 className="text-gray-700 font-bold text-xl">
                            <a href={product.href}>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-xl text-lime-600 flex space-x-2">
                            <FormOutlined className="mt-1" />
                            <p>{product.date}</p>
                            <EyeOutlined className="mt-1" />
                            <p>{product.views}</p>
                          </p>
                        </div>
                        <p className="text-xl font-medium text-gray-900">
                          {product.color}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%]">
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

export default Blog;
