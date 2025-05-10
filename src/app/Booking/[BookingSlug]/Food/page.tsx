// import Image from "next/image";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="col-span-2 xl:order-first order-last xl:h-full h-full overflow-hidden xl:overflow-auto xl:pb-10 pb-32">
      <div className="bg-white p-4 md:h-full h-[80vh] overflow-auto">
        <h3 className="text-l mb-4 font-semibold">{"Chọn combo sản phẩm"}</h3>
        <ul className="m-0 p-0 list-none">
          <li className="flex mb-5 overflow-auto">
            <Image
              src="https://cdn.galaxycine.vn/media/2025/4/29/capybara-app-co-online-min_1745917429070.jpg"
              alt="food"
              width={150}
              height={100}
              className='inline-block rounded-md  w-[150px] h-full object-cover duration-500 ease-in-out group-hover:opacity-100"
      scale-100 blur-0 grayscale-0)'
            />
            <div className="ml-4 flex-1">
              <h4 className="text-base font-semibold mb-1">{"Bắp rang bơ"}</h4>
              <div className="text-[.75rem]">
                {
                  "Capybara lạc bước, dắt tay em về nào stars ơi, đừng quên 1 bắp ngọt và 1 nước size L tặng kèm nhé"
                }
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div className="">
                  <strong className="font-bold">{"Giá: "}</strong>
                  <span className="inline-block font-bold ">{"350.000đ"}</span>
                </div>
                <div className="shadow-sm bg-white rounded flex items-center justify-between px-3 py-1 w-[100px]">
                  <button className="text-xl font-semibold text-gray-600">
                    −
                  </button>
                  <span className="mx-2 text-sm font-medium">0</span>
                  <button className="text-xl font-semibold text-gray-600">
                    +
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="flex mb-5 overflow-auto">
            <Image
              src="https://cdn.galaxycine.vn/media/2025/4/29/capybara-app-co-online-min_1745917429070.jpg"
              alt="food"
              width={150}
              height={100}
              className='inline-block rounded-md  w-[150px] h-full object-cover duration-500 ease-in-out group-hover:opacity-100"
      scale-100 blur-0 grayscale-0)'
            />
            <div className="ml-4 flex-1">
              <h4 className="text-base font-semibold mb-1">{"Bắp rang bơ"}</h4>
              <div className="text-[.75rem]">
                {
                  "Capybara lạc bước, dắt tay em về nào stars ơi, đừng quên 1 bắp ngọt và 1 nước size L tặng kèm nhé"
                }
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div className="">
                  <strong className="font-bold">{"Giá: "}</strong>
                  <span className="inline-block font-bold ">{"350.000đ"}</span>
                </div>
                <div className="shadow-sm bg-white rounded flex items-center justify-between px-3 py-1 w-[100px]">
                  <button className="text-xl font-semibold text-gray-600">
                    −
                  </button>
                  <span className="mx-2 text-sm font-medium">0</span>
                  <button className="text-xl font-semibold text-gray-600">
                    +
                  </button>
                </div>
              </div>
            </div>
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </div>
  );
}
