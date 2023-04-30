import DefaultLayout from "@/components/layout/defaultLayout";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import images from "@/assets/images";
import { Carousel } from "antd";
type Props = {};
const contentStyle: React.CSSProperties = {
  height: "750px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = (props: Props) => {
  return (
    <DefaultLayout>
      <div className="w-100 -mt-[200px] pb-96">
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
        <div className="flex justify-between w-100 px-2 mt-12">
          <div className="w-[32%] flex items-center relative">
            <Image
              className="absolute top-0 left-0 right-0 bottom-0 transform hover:scale-105 transform-all duration-200"
              src={images.listen}
              alt=""
            ></Image>
            <div className="absolute text-7xl text-lime-600 ml-5 mt-[70%] tracking-wider bg-white p-4">
              <h1>HOC NGHE</h1>
              <Link href={"/"} className="text-4xl">
                HOC NGAY
              </Link>
            </div>
          </div>
          <div className="w-[32%] flex items-center relative">
            <Image
              src={images.read}
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 transform hover:scale-105 transform-all duration-200"
            ></Image>
            <div className="absolute text-7xl text-lime-600 ml-5 mt-[70%] tracking-wider bg-white p-4">
              <h1>HOC DOC</h1>
              <Link href={"/"} className="text-4xl">
                HOC NGAY
              </Link>
            </div>
          </div>
          <div className="w-[32%] flex items-center">
            <div className="w-[100%] relative">
              <Image
                src={images.write}
                alt=""
                className="absolute top-0 left-0 right-0 bottom-0 transform hover:scale-105 transform-all duration-200"
              ></Image>
            </div>

            <div className="absolute text-7xl text-lime-600 ml-5 mt-[22%] tracking-wider bg-white p-4">
              <h1>HOC VIET</h1>
              <Link href={"/"} className="text-4xl">
                HOC NGAY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
