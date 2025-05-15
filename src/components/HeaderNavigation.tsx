"use client";
import { CardMovie } from "@/components/CardMovie";
import LoginModal from "@/components/LoginModal";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GetMoviesService } from "@/services/Movies/GetAllMovies";

export const HeaderNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  // const handleLogin = () => {
  //   setIsLogin(true);
  // }

  const { data } = useQuery({
    queryKey: ["Movies"],
    queryFn: ({ signal }) => GetMoviesService({ signal }),

  });

   console.log("data",data);
  const movies = data?.movies || [];
  console.log(movies);

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
                          {movies?.slice(0, 6).map((movie) => (
                            <CardMovie
                              key={movie._id}
                              title={movie.title}
                              imageUrl={movie.posterUrl}
                              // ageType={movie. || "T13"} // fallback nếu thiếu
                              // rating={movie. || 8.5}
                              slug={movie._id}
                            />
                          ))}
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
                          {/* <CardMovie />
                          <CardMovie />
                          <CardMovie /> */}
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
            {isLogin ? (
              <div className="md:px-2 py-4 relative items-center text-left md:cursor-pointer group transition-all duration-500 ease-in-out md:flex hidden">
                <div className="w-[40px] h-[40px] flex items-center justify-center text-center rounded-full bg-[#D0D0D0] border-4 border-solid border-[#E9E9E2] flex-none mr-4">
                  <Image
                    src="https://www.galaxycine.vn/_next/static/media/user_default.b1a2ce07.png"
                    alt=""
                    height={40}
                    width={40}
                    className="ease-in-out duration-500 blur-0 filter object-cover rounded-full transform scale-105 w-full h-full max-w-full block align-middle"
                  />
                </div>
                <div className="flex flex-col flex-auto">
                  <div className="flex items-center justify-center gap-[6px]">
                    <Image
                      src="https://cdn.galaxycine.vn/media/2020/5/15/s_1589511977688.png"
                      width={20}
                      height={30}
                      alt=""
                      className="inline-block w-[20px] h-[30px] align-middle"
                    />
                    <p className="flex-auto md:flex hidden flex-col text-sm font-bold not-italic justify-start items-start md:pr-0 group-hover:text-orange-500 transition-all duration-500 ease-in-out capitalize">
                      Ha thuc Minh
                      <span className="block text-xs font-light not-italic">
                        Star
                      </span>
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 w-full min-w-[150px] max-w-[220px] top-15 hidden md:group-hover:block z-[500] transition-all duration-300 ease-in-out">
                  <div className="shadow-xl text-center bg-white border-white border-solid border rounded-lg py-2">
                    <ul className="flex flex-col">
                      <li>
                        <Link
                          href="#"
                          className="flex items-center gap-2 text-sm text-black py-2 px-4 hover:text-[#f26b38] hover:bg-[#fb770b1a] transition-all duration-200 capitalize"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 21v-2a4.5 4.5 0 00-4.5-4.5h-6A4.5 4.5 0 004.5 19v2"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3C8.134 3 5 6.134 5 10c0 1.654.666 3.154 1.75 4.25"
                            />
                          </svg>
                          Tài Khoản
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex items-center gap-2 text-sm text-black py-2 px-4 hover:text-[#f26b38] hover:bg-[#fb770b1a] transition-all duration-200 capitalize"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          Lịch Sử
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => console.log("Đăng xuất")}
                          className="w-full text-left flex items-center gap-2 text-sm text-black py-2 px-4 hover:text-[#f26b38] hover:bg-[#fb770b1a] transition-all duration-200 capitalize"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                            />
                          </svg>
                          Đăng Xuất
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                onClick={handleOpen}
                href={"#"}
                className="duration-300 transition-all text-[#777] capitalize text-sm cursor-pointer ml-2"
              >
                Đăng nhập
              </Link>
            )}
          </div>
        </nav>
      </div>
      {isOpen && (
        <LoginModal setIsLogin={setIsLogin} onClose={() => setIsOpen(false)} />
      )}
    </header>
  );
};
