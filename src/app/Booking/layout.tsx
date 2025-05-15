"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname?.split("/") || [];
  const lastSegment = pathSegments[pathSegments.length - 1];

  const steps = [
    { label: "Chọn phim / Rạp / Suất", path: "Booking" },
    { label: "Chọn ghế", path: "Seat" },
    { label: "Chọn thức ăn", path: "Food" },
    { label: "Thanh toán", path: "Payment" },
    { label: "Xác nhận", path: "Confirmation" },
  ];

  let currentStep = steps.findIndex((step) => step.path === lastSegment);
  if (currentStep === -1) {
    currentStep = 0;
  }

  // Redux states
  const movieId = useSelector((state: RootState) => state.booking.movieId);
  const showtime = useSelector((state: RootState) => state.booking.showtimeId);
  const cinema = useSelector((state: RootState) => state.booking.cinemaId);
  const selectedDate = useSelector((state: RootState) => state.booking.date);
  const selectedSeats = useSelector((state: RootState) => state.booking.selectedSeats);
  const selectedCombos = useSelector((state: RootState) => state.booking.selectedCombos);

  // Constants
  const seatPrice = 55000;
  const combos = [
    { id: "combo1", price: 350000 },
    { id: "combo2", price: 200000 },
  ];

  // Tính tổng tiền
  const totalSeats = selectedSeats.length * seatPrice;
  const totalCombos = selectedCombos.reduce((sum, combo) => {
    const found = combos.find((c) => c.id === combo.id);
    return sum + (found ? found.price * combo.quantity : 0);
  }, 0);
  const totalAll = totalSeats + totalCombos;

  const movies = [
    {
      id: "1",
      title: "Thám Tử Kiên: Kỳ Án Không Dấu",
      age: "T13",
      poster:
        "https://cdn.galaxycine.vn/media/2025/5/5/the-young-girls-of-rochefort--2_1746437845040.jpg",
    },
    {
      id: "2",
      title: "Lật Mặt 8: Vòng Tay Nắng",
      age: "T18",
      poster:
        "https://cdn.galaxycine.vn/media/2025/4/28/tham-tu-kien-2_1745832748529.jpg",
    },
    {
      id: "3",
      title: "Địa Đạo: Mặt Trời Trong Bóng Tối",
      age: "T16",
      poster:
        "https://cdn.galaxycine.vn/media/2025/4/28/tham-tu-kien-2_1745832748529.jpg",
    },
  ];

  const selectedMovie = movies.find((m) => m.id === movieId);

  // Chặn bước sau nếu chưa chọn phim
  useEffect(() => {
    const protectedSteps = ["Seat", "Food", "Payment", "Confirmation"];
    if (protectedSteps.includes(lastSegment) && !selectedMovie) {
      alert("Vui lòng chọn phim trước");
      router.push("/Booking");
    }
  }, [lastSegment, selectedMovie, router]);

  const handleNextStep = () => {
    if (!selectedMovie) {
      alert("Vui lòng chọn phim trước");
      return;
    }

    const BookingSlug = selectedMovie.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const nextPath = steps[currentStep + 1]?.path;
    if (nextPath) {
      router.push(`/Booking/${BookingSlug}/${nextPath}`);
    } else {
      alert("Không thể chuyển bước tiếp theo");
    }
  };

  const handlePreviousStep = () => {
    if (!selectedMovie) return;

    const BookingSlug = selectedMovie.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const prevPath = steps[currentStep - 1]?.path;

    if (prevPath === "Booking") {
      router.push("/Booking");
      return;
    }

    if (prevPath) {
      router.push(`/Booking/${BookingSlug}/${prevPath}`);
    }
  };

  return (
    <section>
      <div className="block border-b-[6px] border-[#f4f4f4] scale-y-[-1]"></div>
      <div className="pb-0 bg-[rgb(249,249,249)]">
        {/* Step Indicator */}
        <div className="md:mb-8 bg-white overflow-auto flex justify-center items-center">
          <ul className="flex text-sm font-semibold">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              return (
                <li
                  key={step.label}
                  className={`px-3 py-4 ${
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

        {/* Main Layout */}
        <div className="md:container md:mx-auto grid xl:grid-cols-3 grid-cols-1">
          {children}

          {/* Sidebar */}
          <div className="col-span-1 xl:pl-4 xl:order-none order-first py-4">
            <div className="mb-[1rem]">
              <div className="bg-[rgb(245,128,32)] rounded-t-lg h-[6px]" />
              <div className="bg-white p-4 grid grid-cols-3 gap-2 items-center">
                <div className="col-span-1">
                  <Image
                    src={selectedMovie?.poster || "/placeholder.jpg"}
                    alt="poster"
                    width={100}
                    height={150}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="col-span-2">
                  <h3 className="text-base font-bold">
                    {selectedMovie?.title || "Chưa chọn phim"}
                  </h3>
                  <p className="text-sm text-gray-600">2D phụ đề</p>
                  <div className="mt-2">
                    <span className="bg-[rgb(245,128,32)] text-white text-xs px-2 py-1 rounded font-bold">
                      {selectedMovie?.age || "T?"}
                    </span>
                  </div>
                </div>
                <div className="col-span-3 mt-4 text-sm">
                  <strong>{cinema || "Chưa chọn rạp"}</strong>
                  <span> - RAP-5</span>
                  <div className="mt-2">
                    <span>Suất: </span>
                    <strong>{showtime || "Chưa chọn suất"}</strong>
                    <span> - </span>
                    {selectedDate ? (
                      <>
                        Ngày <strong>{selectedDate}</strong>
                      </>
                    ) : (
                      "Chưa chọn ngày"
                    )}
                  </div>
                </div>

                {/* Tổng cộng */}
                <div className="col-span-3 mt-4 border-t border-dashed border-gray-300"></div>
                <div className="col-span-3 mt-2 flex justify-between">
                  <strong>Tổng cộng</strong>
                  <span className="text-primary font-bold">
                    {totalAll.toLocaleString("vi-VN")} đ
                  </span>
                </div>
              </div>

              <div className="mt-6 xl:flex hidden">
                <button
                  className="w-1/2 mr-2 py-2 text-orange-600 border border-orange-600 rounded"
                  onClick={handlePreviousStep}
                  disabled={currentStep <= 0}
                >
                  Quay lại
                </button>
                <button
                  onClick={handleNextStep}
                  className="w-1/2 ml-2 py-2 bg-orange-600 text-white rounded hover:bg-orange-500"
                >
                  Tiếp tục
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
