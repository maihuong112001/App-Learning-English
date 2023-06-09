import Image from "next/image";
import images from "@/assets/images";
import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Link from "next/link";
const items: MenuProps["items"] = [
  {
    label: <Link href={"/practice"}>Phần 1: Mô Tra Tranh</Link>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <Link href={"/practice"}>Phần 2: Hổi - Đáp</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <Link href={"/practice"}>Phần 3: Đoạn Hội Thoại</Link>,
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: <Link href={"/practice"}>Phần 4: Hổi - Đáp</Link>,
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: <Link href={"/practice"}>Phần 5: Bài Nói Ngắn</Link>,
    key: "4",
  },
  {
    type: "divider",
  },
  {
    label: <Link href={"/practice"}>Phần 6: Hoàn Thành Câu</Link>,
    key: "5",
  },
  {
    type: "divider",
  },
  {
    label: <Link href={"/practice"}>Phần 7: Đọc Hiểu Đoạn Đơn</Link>,
    key: "6",
  },
  {
    type: "divider",
  },
  {
    label: <Link href={"/practice"}>Phần 8: Đọc Hiểu - Đoạn Kép</Link>,
    key: "7",
  },
  {
    type: "divider",
  },
  {
    label: <Link href={"/practice"}>Phần 9: Đọc Hiểu - Đoạn Ba</Link>,
    key: "8",
  },
];
const items2: MenuProps["items"] = [
  {
    label: <Link href={"/"}>Phần 1: Full Test</Link>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <Link href={"/"}>Phần 2: Mini Test</Link>,
    key: "1",
  },
];
const items3: MenuProps["items"] = [
  {
    label: <Link href={"/"}>Phần 1: TOEIC Listening - Tips </Link>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <Link href={"/"}>Phần 2: TOEIC Reading - Tips</Link>,
    key: "1",
  },
];

function Header() {
  return (
    <div className="z-50 relative">
      <nav className="bg-transparent border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <Image src={images.logo} className="mr-3 w-28" alt="Logo"></Image>

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TOEIC
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className="w-8 h-8 rounded-full"
                src={images.logo}
                alt="user photo"
              ></Image>
            </button>

            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  href={"/"}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Link
                    href={"/"}
                    onClick={(e) => e.preventDefault()}
                    className="text-gray-900 cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Luyện tập
                  </Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown menu={{ items: items2 }} trigger={["click"]}>
                  <Link
                    href={"/"}
                    onClick={(e) => e.preventDefault()}
                    className="text-gray-900 cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Đề thi thử
                  </Link>
                </Dropdown>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Ngữ pháp
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Từ vựng
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Dropdown menu={{ items: items3 }} trigger={["click"]}>
                  <Link
                    href={"/"}
                    onClick={(e) => e.preventDefault()}
                    className="text-gray-900 cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    TOEIC Tips
                  </Link>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
