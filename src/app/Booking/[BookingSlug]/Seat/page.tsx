"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/Redux/store";
import { selectSeat, removeSeat } from "@/Redux/slices/bookingSlice";
import { useRouter } from "next/navigation";

export default function SeatPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const selectedSeats = useSelector((state: RootState) => state.booking.selectedSeats);

  const handleSeatClick = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      dispatch(removeSeat(seatId));
    } else {
      dispatch(selectSeat(seatId));
    }
  };

  const handleContinue = () => {
    router.push("/Booking/abc123/Food"); // 🔁 điều chỉnh slug nếu cần
  };

  const seatRow = ["A", "B", "C", "D"];
  const seatNumbers = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="col-span-2 xl:order-first order-last xl:h-full h-full overflow-hidden xl:overflow-auto xl:pb-10 pb-32">
      {/* Đổi suất */}
      <div className="bg-white px-6 py-4 rounded md:mb-8 mb-4 w-full">
        <div className="grid md:grid-cols-10 grid-cols-2">
          <div className="md:col-span-2">
            <label className="text-sm font-semibold inline-block mt-2">
              Đổi suất chiếu
            </label>
          </div>
          <div className="col-span-8 flex-row gap-4 flex-wrap items-center md:flex hidden">
            <button className="py-2 px-4 border rounded text-sm font-normal text-white bg-[rgb(3,78,162)]">
              19:00
            </button>
          </div>
        </div>
      </div>

      {/* Ghế */}
      <div className="bg-white py-4 px-2 rounded md:mb-8 w-full">
        <div className="md:block flex flex-wrap justify-center w-full h-full overflow-auto">
          <ul className="gap-[.75rem] max-w-[56rem] w-full grid list-none m-0 p-0">
            {seatRow.map((row) => (
              <li key={row} className="flex items-center justify-between">
                <div className="text-sm text-grey-40 font-semibold w-5 flex-shrink-0 text-center">
                  {row}
                </div>
                <div className="flex flex-1 justify-center gap-1 md:gap-2">
                  {seatNumbers.map((num) => {
                    const seatId = `${row}${num}`;
                    const isSelected = selectedSeats.includes(seatId);
                    return (
                      <button
                        key={seatId}
                        onClick={() => handleSeatClick(seatId)}
                        className={`text-xs md:text-sm w-5 border rounded transition duration-200 ease-in-out flex items-center justify-center ${
                          isSelected
                            ? "bg-[rgb(245,128,32)] text-white border-[rgb(245,128,32)]"
                            : "border-grey-20"
                        } hover:bg-primary hover:border-primary`}
                      >
                        <span className="inline-block text-center text-[12px] w-full leading-5">
                          {num}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="text-sm text-grey-40 font-semibold w-5 flex-shrink-0 text-center">
                  {row}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Màn hình + hướng dẫn */}
        <div className="mt-[2rem]">
          <p className="text-base text-center text-grey-50">Màn hình</p>
          <div className="border-2 border-[rgb(255,132,85)] mt-3"></div>

          <div className="text-sm flex md:flex-row flex-col-reverse justify-between items-center py-9 gap-2">
            <div className="flex gap-2">
              <Legend color="bg-[rgb(208,208,208)]" label="Ghế đã bán" />
              <Legend color="bg-[rgb(245,128,32)]" label="Ghế đang chọn" />
            </div>
            <div className="flex gap-2 flex-wrap md:justify-end justify-center">
              <Legend border="border-[rgb(242,201,76)]" label="Ghế vip" />
              <Legend border="border-[rgb(208,208,208)]" label="Ghế đơn" />
              <Legend border="border-[rgb(3,78,162)]" label="Ghế đôi" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer button */}
      <div className="mt-6 xl:flex hidden justify-end">
        <button
          onClick={handleContinue}
          className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-500"
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
}

function Legend({
  color,
  border,
  label,
}: {
  color?: string;
  border?: string;
  label: string;
}) {
  return (
    <div className="flex items-center">
      <span
        className={`w-5 h-5 inline-block rounded ${
          color || ""
        } ${border ? `border ${border}` : ""}`}
      ></span>
      <span className="ml-2">{label}</span>
    </div>
  );
}
