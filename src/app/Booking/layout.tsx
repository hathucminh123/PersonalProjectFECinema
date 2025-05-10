// import { HeaderBooking } from "@/components/HeaderBooking";
"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const steps = [
    { label: "Chọn phim / Rạp / Suất", path: "" },
    { label: "Chọn ghế", path: "sit" },
    { label: "Chọn thức ăn", path: "" },
    { label: "Thanh toán", path: "Payment" },
    { label: "Xác nhận", path: "Confirmation" },
  ];

  const currentStep = steps.findIndex((step) => pathname?.includes(step.path));

  return (
    <section>
      <div className="block border-b-[6px] border-[#f4f4f4] scale-y-[-1]"></div>
      <div className="pb-0 bg-[rgb(249,249,249)]">
        <div className="md:mb-8 bg-white overflow-auto justify-center items-center flex-nowrap w-full flex relative">
          <ul className="flex  justify-center items-center text-grey-20 md:text-base text-[12px] font-semibold w-full flex-nowrap">
            {/* <li className="pt-4 mb-4 pl-0 text-[#034ea2]">
                 <button className="md:mx-3 mx-1 ml-0 ">
                   {"Chọn phim / Rạp / Suất"}
                 </button>
                 <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-grey-30 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full">
                   <div className="before:h-[2px] before:w-full before:bg-[rgb(233,236,239)] before:left-[0] before:absolute before:inline-block after:bg-[rgb(3,78,162)] after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full"></div>
                 </div>
               </li>
               <li className="pt-4 mb-4 pl-0 text-blue-10">
                 <button className="md:mx-3 mx-1 ml-0 text-[#034ea2] ">
                   {"Chọn ghế"}
                 </button>
                 <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-grey-30 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full">
                   <div className="before:h-[2px] before:w-full before:bg-[rgb(233,236,239)] before:left-[0] before:absolute before:inline-block after:bg-[rgb(3,78,162)] after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full"></div>
                 </div>
               </li>
               <li className="pt-4 mb-4 pl-0 text-[rgb(233,236,239)] ">
                 <button className="md:mx-3 mx-1 ml-0  ">{"Chọn thức ăn"}</button>
                 <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-grey-30 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full">
                   <div className="before:h-[2px] before:w-full before:bg-[rgb(233,236,239)] before:left-[0] before:absolute before:inline-block "></div>
                 </div>
               </li>
               <li className="pt-4 mb-4 pl-0 text-[rgb(233,236,239)] ">
                 <button className="md:mx-3 mx-1 ml-0  ">{"Thanh toán"}</button>
                 <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-grey-30 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full">
                   <div className="before:h-[2px] before:w-full before:bg-[rgb(233,236,239)] before:left-[0] before:absolute before:inline-block "></div>
                 </div>
               </li>
               <li className="pt-4 mb-4 pl-0 text-[rgb(233,236,239)] ">
                 <button className="md:mx-3 mx-1 ml-0  ">{"Xác nhận"}</button>
                 <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-grey-30 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full">
                   <div className="before:h-[2px] before:w-full before:bg-[rgb(233,236,239)] before:left-[0] before:absolute before:inline-block "></div>
                 </div>
               </li> */}
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              return (
                <li
                  key={step.label}
                  className={`px-2 py-4 ${
                    isActive ? "text-[#034ea2]" : "text-gray-400"
                  }`}
                >
                  <button>{step.label}</button>
                  <div
                    className={`h-[2px] mt-2 ${
                      isActive ? "bg-[#034ea2]" : "bg-gray-300"
                    }`}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:container md:mx-auto screen1390:max-w-screen-screen1390 xl:max-w-screen-screen1200 lg:max-w-4xl md:max-w-4xl md:px-0 sm:px-[45px]  grid xl:grid-cols-3 grid-cols-1">
          {children}
          <div className="col-span-1 xl:pl-4 xl:order-none order-first py-4">
            <div className="mb-[1rem]">
              <div className="bg-[rgb(245,128,32)] rounded-t-lg h-[6px] "></div>
              <div className="bg-white p-4 grid grid-cols-3 xl:gap-2 items-center">
                <div className="row-span-2 md:row-span-1 xl:row-span-2 block md:hidden xl:block">
                  <Image
                    src={
                      "https://cdn.galaxycine.vn/media/2025/5/5/the-young-girls-of-rochefort--2_1746437845040.jpg"
                    }
                    alt=""
                    width={100}
                    height={150}
                    className='xl:w-full xl:h-full md:w-[80px] md:h-[120px] w-[90px] h-[110px] rounded object-cover object-cover duration-500 ease-in-out group-hover:opacity-100"
         scale-100 blur-0 grayscale-0)'
                  />
                </div>
                <div className="flex-1 col-span-2 md:col-span-1 row-span-1 xl:col-span-2">
                  <h3 className="text-sm xl:text-base font-bold xl:mb-2 m-0">
                    {"Thiếu Nữ Thành Rochefort"}
                  </h3>
                  <p className="text-sm inline-block">{"2D phụ đề"}</p>
                  <span>{" - "}</span>
                  <div className="xl:mt-2 ml-2 xl:ml-0 inline-block">
                    <span className="bg-[rgb(245,128,32)] inline-flex items-center justify-center w-[38px] h-7 bg-primary rounded text-sm text-center text-white font-bold not-italic">
                      {"T13"}
                    </span>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 xl:col-span-3">
                  <div className="">
                    <div className="xl:mt-4 text-sm xl:text-base">
                      <strong>{"Galaxy Mipec Long Biên"}</strong>
                      <span>{" - "}</span>
                      <span className="text-sm xl:text-base">{"RAP-5"}</span>
                    </div>
                    <div className="xl:mt-2 text-sm xl:text-base">
                      <span>{"Suất: "}</span>
                      <strong>{"19:00"}</strong>
                      <span>{" - "}</span>
                      <span className="text-sm">
                        {"thứ 7, "}
                        <strong className="font-bold">{"22/31/2025"}</strong>
                      </span>
                    </div>
                  </div>
                  <div className="my-4 border-t border-[rgb(153,153,153)] border-dashed xl:block hidden"></div>
                </div>
                <div className="xl:flex hidden justify-between col-span-3">
                  <strong className="text-[1rem] font-bolder">
                    {"Tổng cộng"}
                  </strong>
                  <span className="inline-block font-bold text-primary ">
                    {"0 đ"}
                  </span>
                </div>
              </div>
              <div className="mt-8 xl:flex hidden">
                <button className="w-1/2 mr-2 py-2 text-[rgb(245,128,32)]">
                  <span>{"Quay lại"}</span>
                </button>
                <button className="w-1/2 ml-2 py-2  bg-[rgb(245,128,32)] text-white border rounded-md hover:bg-orange-20">
                  <span>{"Tiếp tục"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
