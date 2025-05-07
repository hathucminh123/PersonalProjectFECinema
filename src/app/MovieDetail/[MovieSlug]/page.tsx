import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
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
                  <svg className="overflow-visible box-content text-[rgb(245,128,32)] mr-[.25rem] inline-block h-[1em] align-[-.125em]" viewBox="0 0 448 512" >
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
                  <span  className="inline-block h-8 ml-4 py-[6px] capitalize not-italic">
                    Mỹ
                  </span>
                </div>
                <div className="flex flex-nowrap items-center text-sm">
                  <span className="inline-block h-8 py-[6px] text-grey-40">
                    {"Nhà sản xuất: "}
                  </span>
                  <span  className="inline-block h-8 ml-4 py-[6px] capitalize not-italic">
                    Marvel Studios
                  </span>
                </div>
                <div className="flex flex-nowrap items-center text-sm">
                  <span className="inline-block h-8 py-[6px] text-grey-40">
                    {"Thể loại: "}
                  </span>
                 <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                  <li className="inline-block">
                    <Link href={""} className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center">{"Hành động"}</Link>
                  </li>
                  <li className="inline-block">
                    <Link href={""} className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center">{"Viễn tưởng"}</Link>
                  </li>
                 </ul>
                </div>
                <div className="flex flex-nowrap items-center text-sm">
                  <span className="inline-block h-8 py-[6px] text-grey-40">
                    {"Đạo diễn: "}
                  </span>
                 <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                  <li className="inline-block">
                    <Link href={""} className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center">{"Hà Thúc Minh"}</Link>
                  </li>
                  <li className="inline-block">
                    <Link href={""} className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center">{"Hà Thúc Minh"}</Link>
                  </li>
                 </ul>
                </div>
                <div className="flex flex-nowrap items-center text-sm">
                  <span className="inline-block h-8 py-[6px] text-grey-40">
                    {"Diễn viên: "}
                  </span>
                 <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                  <li className="inline-block">
                    <Link href={""} className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center">{"Hà Thúc Minh"}</Link>
                  </li>
                  <li className="inline-block">
                    <Link href={""} className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center">{"Hà Thúc Minh"}</Link>
                  </li>
                  <li className="inline-block">
                    <Link href={""} className="text-black text-sm inline-flex h-8 border border-grey-20 hover:border-[rgb(245,128,32)] rounded-lg px-4 py-2 capitalize not-italic items-center">{"Hà Thúc Minh"}</Link>
                  </li>
                 </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
