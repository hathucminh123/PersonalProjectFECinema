"use client";
import DateSlider from "@/components/DateSlider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [selectTheater, setSelectTheater] = useState<string|null>("");
  const [openDropdown, setOpenDropdown] = useState<
    null | "location" | "cinema" 
  >(null);

  return (
    <div>
      <div className="bg-[rgb(0,0,0)] justify-center w-full h-full flex relative">
        <div className="bg-[#0003] w-full h-full z-300 absolute"></div>
        <div className="h-full relative">
          <div className="z-100 top-0 left-0 absolute">
            <Image
              src={
                "https://www.galaxycine.vn/_next/static/media/blur-left.7a4f1851.png"
              }
              alt=""
              height={680}
              width={342}
              className="w-full lg:h-[500px] object-cover lg:block hidden"
            />
          </div>
          <div className="relative">
            <Image
              src={
                "https://cdn.galaxycine.vn/media/2025/4/23/thunderbolts-750_1745395912499.jpg"
              }
              alt=""
              height={440}
              width={1440}
              className='w-[860px] h-full md:h-full lg:h-[500px]  object-fill duration-500 ease-in-out group-hover:opacity-100"
      scale-100 blur-0 grayscale-0)'
            />

            <button className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 z-[600]">
              <Image
                src={
                  "https://www.galaxycine.vn/_next/static/media/button-play.2f9c0030.png"
                }
                alt=""
                height={64}
                width={64}
                className='w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] object-cover duration-500 ease-in-out group-hover:opacity-100"
      scale-100 blur-0 grayscale-0)'
              />
            </button>
          </div>
          <div className="absolute top-0 -right-[0%] z-100 lg:block hidden">
            <Image
              src={
                "https://www.galaxycine.vn/_next/static/media/blur-right.52fdcf99.png"
              }
              alt=""
              height={680}
              width={342}
              className="w-full lg:h-[500px] object-cover lg:block hidden"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 screen1200:grid-cols-7 my-0 mx-auto screen1390:max-w-screen-xl xl:max-w-screen-screen1200 lg:max-w-4xl md:max-w-4xl gap-8 py-7 md:px-4 px-4">
        <div className="lg:col-span-5 w-full">
          <div className="items-end gap-[1.25rem] grid grid-cols-3 relative">
            <div className="lg:-translate-y-20 md:-translate-y-16 -translate-y-0 col-span-1 drop-shadow-2xl z-[500]">
              <Image
                src={
                  "https://cdn.galaxycine.vn/media/2025/4/23/thunderbolts-500_1745395912649.jpg"
                }
                alt=""
                height={280}
                width={220}
                className='border-2 rounded border-white lg:w-[320px] lg:h-[400px] w-full h-full object-fill object-cover duration-500 ease-in-out group-hover:opacity-100"
      scale-100 blur-0 grayscale-0)'
              />
            </div>
            <div className="col-span-2 lg:-translate-y-20 flex flex-col justify-end md:-translate-y-16 -translate-y-0">
              <div className="flex items-center">
                <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-black-10 mr-4">
                  {"Biệt Đội Sấm Sét*"}
                </h1>
                <span className="inline-flex items-center justify-center w-[38px] h-7 bg-primary rounded text-sm text-center text-white font-bold not-italic bg-[rgb(245,128,32)]">
                  T13
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-sm flex items-center font-semibold not-italic ">
                  <svg
                    className="inline-block align-baseline mr-1 text-[rgb(245,128,32)]"
                    width={14}
                    height={14}
                  >
                    <path
                      fill="currentColor"
                      d="M7 0C3.13306 0 0 3.13306 0 7C0 10.8669 3.13306 14 7 14C10.8669 14 14 10.8669 14 7C14 3.13306 10.8669 0 7 0ZM7 12.6452C3.88105 12.6452 1.35484 10.119 1.35484 7C1.35484 3.88105 3.88105 1.35484 7 1.35484C10.119 1.35484 12.6452 3.88105 12.6452 7C12.6452 10.119 10.119 12.6452 7 12.6452ZM8.74435 9.69839L6.34798 7.95685C6.26048 7.89193 6.20968 7.79032 6.20968 7.68306V3.04839C6.20968 2.8621 6.3621 2.70968 6.54839 2.70968H7.45161C7.6379 2.70968 7.79032 2.8621 7.79032 3.04839V7.04798L9.67581 8.41976C9.82823 8.52984 9.85927 8.74153 9.74919 8.89395L9.21855 9.625C9.10847 9.7746 8.89677 9.80847 8.74435 9.69839Z"
                    ></path>
                  </svg>
                  <span>126 phút</span>
                </div>
                <div className="text-sm ml-4 flex items-center font-semibold not-italic">
                  <svg
                    width={12}
                    height={14}
                    className="inline-block align-baseline mr-1 text-[rgb(245,128,32)]"
                  >
                    <path
                      fill="currentcolor"
                      className=""
                      d="M10.7143 1.75H9.42857V0.328125C9.42857 0.147656 9.28393 0 9.10714 0H8.03571C7.85893 0 7.71429 0.147656 7.71429 0.328125V1.75H4.28571V0.328125C4.28571 0.147656 4.14107 0 3.96429 0H2.89286C2.71607 0 2.57143 0.147656 2.57143 0.328125V1.75H1.28571C0.575893 1.75 0 2.33789 0 3.0625V12.6875C0 13.4121 0.575893 14 1.28571 14H10.7143C11.4241 14 12 13.4121 12 12.6875V3.0625C12 2.33789 11.4241 1.75 10.7143 1.75ZM10.5536 12.6875H1.44643C1.35804 12.6875 1.28571 12.6137 1.28571 12.5234V4.375H10.7143V12.5234C10.7143 12.6137 10.642 12.6875 10.5536 12.6875Z"
                    ></path>
                  </svg>
                  <span className="">{"30/04/2025"}</span>
                </div>
              </div>
              <div className="mt-2">
                <Link
                  href={""}
                  className="text-[20px] hover:text-primary transition duration-500 ease-in-out cursor-pointer"
                >
                  <svg
                    className="overflow-visible box-content text-[rgb(245,128,32)] mr-[.25rem] inline-block h-[1em] align-[-.125em]"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentcolor"
                      path="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    ></path>
                  </svg>
                  <span className="inline-block mr-1">9.2</span>
                  <span className="inline-block text-sm text-grey-40 hover:text-primary transition duration-500 ease-in-out">
                    {"("} {"93 votes"} {")"}
                  </span>
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-nowrap items-center text-sm">
                  <span className="inline-block h-8 py-[6px] text-grey-40">
                    {"Quốc gia: "}
                  </span>
                  <span className="inline-block h-8 ml-4 py-[6px] capitalize not-italic">
                    Mỹ
                  </span>
                </div>
                <div className="flex flex-nowrap items-center text-sm">
                  <span className="inline-block h-8 py-[6px] text-grey-40">
                    {"Nhà sản xuất: "}
                  </span>
                  <span className="inline-block h-8 ml-4 py-[6px] capitalize not-italic">
                    Marvel Studios
                  </span>
                </div>
                <div className="flex flex-nowrap items-center text-sm">
                  <span className="inline-block h-8 py-[6px] text-grey-40">
                    {"Thể loại: "}
                  </span>
                  <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                    <li className="inline-block">
                      <Link
                        href={""}
                        className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center"
                      >
                        {"Hành động"}
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        href={""}
                        className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center"
                      >
                        {"Viễn tưởng"}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-nowrap items-center text-sm">
                  <span className="inline-block h-8 py-[6px] text-grey-40">
                    {"Đạo diễn: "}
                  </span>
                  <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                    <li className="inline-block">
                      <Link
                        href={""}
                        className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center"
                      >
                        {"Hà Thúc Minh"}
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        href={""}
                        className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center"
                      >
                        {"Hà Thúc Minh"}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-nowrap items-center text-sm">
                  <span className="inline-block h-8 py-[6px] text-grey-40">
                    {"Diễn viên: "}
                  </span>
                  <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                    <li className="inline-block">
                      <Link
                        href={""}
                        className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center"
                      >
                        {"Hà Thúc Minh"}
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        href={""}
                        className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center"
                      >
                        {"Hà Thúc Minh"}
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        href={""}
                        className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center"
                      >
                        {"Hà Thúc Minh"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-0">
            <span className="border-l-4 border-solid border-blue-10 mr-2"></span>
            <h1 className="mb-4 text-base inline-block capitalize font-bold">
              Nội dung phim
            </h1>
            <div className="text-[rgb(51,51,51)] font-normal text-[.875rem] ">
              <p className="">
                <span className="text-[14px] leading-[107%] text-justify font-[Nunito_Sans] italic font-normal overflow-hidden text-inherit ml-[8pt]">
                  <strong className="text-[#363636] font-bold">
                    Lật Mặt 8: Vòng Tay Nắng
                  </strong>
                  <span>
                    {
                      " kể về sự khác biệt quan điểm giữa ba thế hệ ông bà cha mẹ con cháu. Ai cũng đúng ở góc nhìn của mình nhưng đứng trước hoài bão của tuổi trẻ, cuối cùng thì ai sẽ là người phải nghe theo người còn lại? Và nếu ước mơ của những đứa trẻ bị cho là viển vông, thì cơ hội nào và bao giờ tuổi trẻ mới được tự quyết định tương lai của mình?"
                    }
                  </span>
                </span>
              </p>
              <p className="">
                <span className="text-[14px] leading-[107%] text-justify font-[Nunito_Sans] italic font-normal overflow-hidden text-inherit ml-[8pt]">
                  <strong className="text-[#363636] font-bold">
                    Lật Mặt 8: Vòng Tay Nắng
                  </strong>
                  <span>
                    {
                      " kể về sự khác biệt quan điểm giữa ba thế hệ ông bà cha mẹ con cháu. Ai cũng đúng ở góc nhìn của mình nhưng đứng trước hoài bão của tuổi trẻ, cuối cùng thì ai sẽ là người phải nghe theo người còn lại? Và nếu ước mơ của những đứa trẻ bị cho là viển vông, thì cơ hội nào và bao giờ tuổi trẻ mới được tự quyết định tương lai của mình?"
                    }
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="">
              <span className="border-l-4 border-solid border-blue-10 mr-2"></span>
              <h1 className="mb-4 text-base inline-block capitalize font-bold">
                {"Lịch chiếu"}
              </h1>
            </div>
            {/* <div className="grid  grid-cols-1 sm:grid-cols-6 lg:grid-cols-5 xl:grid-cols-12 items-center">
              <div className="xl:col-span-7 lg:col-span-3 md:mt-0 md:col-span-3 sm:col-span-3 sm:order-1 overflow-x-scroll px-7">
                <div className="relative block">
                  <button className="left-[-35px] z-[500] h-[60px] w-[60px] rounded-full bg-transparent absolute text-[#333333] top-[5%] cursor-pointer normal-case p-0">
                    <svg
                      className="visible box-content text-[rgb(51,51,51)] inline-block h-[1em] align-[-.125em]"
                      width={14}
                      height={14}
                    >
                      <path
                        fill="currentColor"
                        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                      ></path>
                    </svg>
                  </button>
                  <div className="[transform translate-z-0] overflow-hidden m-0 p-0 relative block">
                    <div className="w-[535px] opacity-100 [transform translate3d(0,0,0)] ml-0 relative top-0 left-0 block mr-auto before:table">
                      <div className="outline-none block float-left h-full min-h-[1px]">
                        <div className="">
                          <div className="w-full inline-block mr-[.5rem] ml-[.5rem]">
                            <Link href={""} className="bg-[#034ea2] text-white capitalize text-sm text-center py-2 rounded-[5px] items-center flex-wrap cursor-pointer w-[80px] h-[65px] flex [text-decoration:inherit]">
                            <span className="inline-block w-full">Hôm nay</span>
                            <span className="inline-block w-full">08/5</span>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <DateSlider/>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-5 xl:grid-cols-12 items-center">
              <div className="xl:col-span-7 lg:col-span-3 md:mt-0 md:col-span-3 sm:col-span-3 sm:order-1 overflow-x-scroll px-7">
                <DateSlider />
              </div>
              <div className="xl:col-span-5 lg:col-span-2 md:col-span-3 sm:col-span-3 sm:order-2 gap-1 grid-cols-2 grid ml-2">
                <div className="col-span-1" onClick={() => setOpenDropdown(prev => prev === "location" ? null : "location")}>
                  <div>
                    <div className="box-border relative flex w-full px-[5px] py-[2px] flex-row items-center cursor-pointer min-h-[36px] pointer-events-auto border border-gray-300 rounded-[4px] text-sm">
                      <div className="h-[1.3rem] overflow-hidden w-[90%] pl-[0.3rem] box-border flex-1">
                        <span className="box-content">{selectTheater || "Toàn Quốc"}</span>
                      </div>
                      <div className="text-center pointer-events-auto rotate-0 m-[0px_0px_-3px_5px] cursor-pointer">
                        <svg className="w-[16px] h-[16px] box-border block align-middle">
                          <path className="M31 26.4q0 .3-.2.5l-1.1 1.2q-.3.2-.6.2t-.5-.2l-8.7-8.8-8.8 8.8q-.2.2-.5.2t-.5-.2l-1.2-1.2q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.6-.2t.5.2l10.4 10.4q.2.2.2.5z"></path>
                        </svg>
                      </div>
                      { openDropdown === "location" && (
                        <div className="w-max min-w-full text-black rounded flex-nowrap z-[600] right-0 left-auto absolute bottom-[43px]  border border-[#ccc] p-0 flex flex-col bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.2)] max-h-[380px] overflow-auto">
                          <span className="px-[10px] py-[5px] cursor-pointer border-b border-b-white hover:bg-[#f58020] hover:text-white" onClick={() => setSelectTheater("Toàn Quốc")}>
                            Bà Rịa - Vũng Tàu
                          </span>
                        </div>
                      )}
                        
          
                    </div>
                  </div>
                </div>
                <div className="col-span-1" onClick={() => setOpenDropdown(prev => prev === "cinema" ? null : "cinema")}>
                  <div>
                    <div className="box-border relative flex w-full px-[5px] py-[2px] flex-row items-center cursor-pointer min-h-[36px] pointer-events-auto border border-gray-300 rounded-[4px] text-sm">
                      <div className="h-[1.3rem] overflow-hidden w-[90%] pl-[0.3rem] box-border flex-1">
                        <span className="box-content">{selectTheater || "Tất cả rạp"}</span>
                      </div>
                      <div className="text-center pointer-events-auto rotate-0 m-[0px_0px_-3px_5px] cursor-pointer">
                        <svg className="w-[16px] h-[16px] box-border block align-middle">
                          <path className="M31 26.4q0 .3-.2.5l-1.1 1.2q-.3.2-.6.2t-.5-.2l-8.7-8.8-8.8 8.8q-.2.2-.5.2t-.5-.2l-1.2-1.2q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.6-.2t.5.2l10.4 10.4q.2.2.2.5z"></path>
                        </svg>
                      </div>
                      { openDropdown === "cinema" && (
                        <div className="w-max min-w-full text-black rounded flex-nowrap z-[600] right-0 left-auto absolute bottom-[43px]  border border-[#ccc] p-0 flex flex-col bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.2)] max-h-[380px] overflow-auto">
                          <span className="px-[10px] py-[5px] cursor-pointer border-b border-b-white hover:bg-[#f58020] hover:text-white" onClick={() => setSelectTheater("Toàn Quốc")}>
                            Rạp Galaxy Cinema
                          </span>
                        </div>
                      )}
                        
          
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[2px] bg-[#034ea2] my-4"></div>
            <div>
              <div className="md:pt-8 md:pb-8 pl-[.75rem] pr-[.75rem] bg-[rgb(255,255,255)]">
                <h1 className="font-bold text-[1rem] mb-[1rem] m-0">
                Galaxy Mipec Long Biên
                  </h1> 

                  <div className="flex flex-row gap-[.5rem] items-start mb-[1.5rem]">
                    <label htmlFor="" className="text-sm font-semibold text-grey-10 mt-2 w-[150px]">
                      {"2D Phụ Đề:"}
                    </label>
                    <div className="flex flex-1 flex-row gap-x-3 gap-y-1 flex-wrap">
                      <button className="py-2 md:px-8 px-6 border rounded text-sm font-normal text-black-10 hover:bg-[#034ea2] active:bg-[#034ea2] transition-all duration-500 ease-in-out hover:text-white cursor-pointer">10:20</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
