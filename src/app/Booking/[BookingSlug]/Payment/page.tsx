import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="col-span-2 xl:order-first order-last xl:h-full h-full overflow-hidden xl:overflow-auto xl:pb-10 pb-32">
      <div className="bg-white p-4 mt-8">
        <h3 className="text-l mb-4 font-semibold">
          {"Phương thức thanh toán"}
        </h3>
        <div className="my-4">
          <ul className="leading-5 text-l">
            <li className="mb-4 md:block flex items-center">
              <input
                type="radio"
                className="w-4 h-4 text-primary bg-gray-100 border-gray-300"
              />
              <Image
                src="https://cdn.galaxycine.vn/media/2020/10/20/momo-icon_1603203874499.png"
                alt=""
                width={50}
                height={50}
                className='inline-block mx-2 object-cover duration-500 ease-in-out group-hover:opacity-100"
      scale-100 blur-0 grayscale-0)'
              />
              <label htmlFor="" className="inline-block md:text-base text-sm">
                Ví điện tử MoMo
              </label>
            </li>
          </ul>
        </div>
        <div className="mt-8 text-sm">
          <strong className="text-[rgb(255,100,100)] font-semibold">
            {"( * ) "}
          </strong>
          <span>
            {
              "Bằng việc click/chạm vào THANH TOÁN bên phải, bạn đã xác nhận hiểu rõ các Quy Định Giao Dịch Trực Tuyến của Galaxy Cinema."
            }
          </span>
        </div>
      </div>
    </div>
  );
}
