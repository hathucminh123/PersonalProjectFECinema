import { CardMovie } from "@/components/CardMovie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeaderNavigation: React.FC = () => {
  return (
    <header className="pt-3 pb-3 bg-white shadow-md min-h-[80px] w-full block">
      <div className="max-w-[1200px] px-0 mx-auto">
        <nav className="flex items-center">
          <Link href="/" className="mr-10 shrink-0">
            {/* Logo */}
          </Link>

          <div className="xl:flex xl:grow xl:basis-full ease-in-out duration-300 px-5 gap-8 items-center">
            <div className="flex items-center grow">
              {/* Mua vé */}
              <Link href="/" className="block mr-4">
                <Image
                  src="https://www.galaxycine.vn/_next/static/media/btn-ticket.42d72c96.webp"
                  alt="mua vé"
                  width={112}
                  height={36}
                  className="w-[112px] h-[36px] block object-cover"
                />
              </Link>

              {/* Menu Phim */}
              <div className="relative group/menu">
                <div className="cursor-pointer px-3">
                  <Link
                    href=""
                    className="
                      text-sm py-7 flex items-center justify-between 
                      group-hover/menu:text-orange-500
                    "
                  >
                    Phim
                    <span className="ml-2 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 5.646a.5.5 0 0 1 .708 0L8 11.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </Link>

                  {/* Submenu Phim */}
                  <div className="absolute z-[800] top-[65px] left-[-45px] hidden group-hover/menu:block">
                    <div className="py-4 px-6 bg-white border rounded min-w-[250px] shadow-lg">
                      {/* Phim đang chiếu */}
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          <span className="border-l-4 border-blue-800 h-5 mr-2"></span>
                          <Link
                            href=""
                            className="text-gray-800 text-base font-normal pl-1 uppercase"
                          >
                            Phim đang chiếu
                          </Link>
                        </div>
                        <ul className="flex gap-7 p-0 m-0 list-none justify-between">
                          <CardMovie />
                          <CardMovie />
                          <CardMovie />
                        </ul>
                      </div>

                      {/* Phim sắp chiếu */}
                      <div>
                        <div className="flex items-center mb-4">
                          <span className="border-l-4 border-blue-800 h-5 mr-2"></span>
                          <Link
                            href=""
                            className="text-gray-800 text-base font-normal pl-1 uppercase"
                          >
                            Phim sắp chiếu
                          </Link>
                        </div>
                        <ul className="flex gap-7 p-0 m-0 list-none justify-between">
                          <CardMovie />
                          <CardMovie />
                          <CardMovie />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Rạp */}
              <div className="relative group/menutheater">
                <div className="cursor-pointer px-3">
                  <Link
                    href=""
                    className="
                      text-sm py-7 flex items-center justify-between 
                      group-hover/menutheater:text-orange-500
                    "
                  >
                    Rạp/giá vé
                    <span className="ml-2 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 5.646a.5.5 0 0 1 .708 0L8 11.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </Link>

                  {/* Submenu Rạp */}
                  <div
                    className="
                      absolute z-[800] top-[65px] left-[-45px] opacity-0 
                      group-hover/menutheater:opacity-100 group-hover/menutheater:block 
                      transition-all duration-300 ease-in-out
                    "
                  >
                    <div className="py-4 px-6 bg-white border border-white rounded min-w-[250px] shadow-lg">
                      <ul className="overflow-auto max-h-80 scroll-smooth group/menutheaterlist">
                        <li
                          className="
                            text-black text-sm duration-300 transition-all ease-in-out
                            border border-white rounded mb-2
                            group-hover/menutheaterlist:text-orange-500
                            group-hover/menutheaterlist:border-l-4
                            group-hover/menutheaterlist:border-orange-400
                            group-hover/menutheaterlist:bg-orange-100
                          "
                        >
                          <Link href="" className="block py-2 px-3">
                            Galaxy Nguyễn Văn Quá
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:justify-end xl:basis-6/12 xl:grow xl:flex duration-300 transition-all uppercase items-center hidden relative">
            <div className="mr-[1rem]">
              <Link
                href={""}
                className="text-[rgb(119,119,119)] font-light text-[.875rem] cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm1.5 12.5h-3v-1h3v1zm0-2.5h-3V4h3v6z" />
                </svg>
              </Link>
            </div>
            <Link
              href={""}
              className="duration-300 transition-all text-[#777] capitalize text-sm cursor-pointer ml-2"
            >
              Đăng nhập
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
