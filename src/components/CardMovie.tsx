import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CardMovie: React.FC = () => {
  return (
    <>
      <li className="text-[#000] text-[.875rem] py-2 w-[140px]">
        <div className="relative w-[140px] group/movie">
          <div className="border-[.25rem] overflow-hidden cursor-pointer relative">
            <div className="relative">
              {/* Hover overlay */}
              <div className="opacity-0 transition-opacity duration-300 bg-black/50 w-full h-full absolute inset-0 z-10 group-hover/movie:opacity-100 flex justify-center items-center">
                <Link
                  href={""}
                  type="button"
                  className="text-white text-sm text-center py-2 px-5 bg-[#f26b38] rounded flex items-center w-[120px] h-[40px]"
                >
                  <Image
                    src="https://www.galaxycine.vn/_next/static/media/Vector-1.319a0d2b.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="mr-2 block"
                  />
                  Mua vé
                </Link>
              </div>
              {/* Poster image */}
              <Link href={""}>
                <Image
                  src="https://cdn.galaxycine.vn/media/2025/4/28/tham-tu-kien-2_1745832748529.jpg"
                  alt=""
                  width={140}
                  height={200}
                  className="block"
                />
              </Link>
              {/* Rating */}
              <div className="absolute right-0 bottom-10 flex items-center space-x-1 bg-black bg-opacity-50 px-2 py-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#facc15"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <span className="text-white font-bold text-sm">9.4</span>
              </div>
              {/* Age badge */}
              <div className="absolute right-0 bottom-1">
                <span className="text-white font-bold text-sm py-0.5 px-1 bg-[#f58020] rounded">
                  T16
                </span>
              </div>
            </div>
          </div>
          {/* Movie title */}
          <div className="capitalize text-left leading-[160%] text-[#333] font-bold text-base cursor-pointer mt-2 w-[140px]">
            <Link
              href={""}
              className="not-italic font-semibold text-sm block break-words line-clamp-2"
            >
              Thám tử kiên 2: Đối đầu với quái vật
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};
