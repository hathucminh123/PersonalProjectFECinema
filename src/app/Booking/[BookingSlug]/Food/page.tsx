"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import { setCombos } from "@/Redux/slices/bookingSlice";
import { RootState } from "@/Redux/store";

export default function FoodPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { BookingSlug } = useParams();

  const initialCombos = [
    {
      id: "combo1",
      name: "Bắp rang bơ",
      description:
        "Capybara lạc bước, dắt tay em về nào stars ơi, đừng quên 1 bắp ngọt và 1 nước size L tặng kèm nhé",
      price: 350000,
      image:
        "https://cdn.galaxycine.vn/media/2025/4/29/capybara-app-co-online-min_1745917429070.jpg",
    },
    {
      id: "combo2",
      name: "Combo nước + snack",
      description: "Combo nhẹ nhàng, ngon miệng cho phim tình cảm",
      price: 200000,
      image:
        "https://cdn.galaxycine.vn/media/2025/4/29/capybara-app-co-online-min_1745917429070.jpg",
    },
  ];

  const reduxCombos = useSelector((state: RootState) => state.booking.selectedCombos);
  const [comboQuantities, setComboQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const restored = reduxCombos.reduce((acc, c) => {
      acc[c.id] = c.quantity;
      return acc;
    }, {} as { [key: string]: number });
    setComboQuantities(restored);
  }, [reduxCombos]);

  const updateReduxCombos = (updated: { [key: string]: number }) => {
    const selected = Object.entries(updated)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => ({ id, quantity: qty }));
    dispatch(setCombos(selected));
  };

  const handleIncrease = (id: string) => {
    setComboQuantities((prev) => {
      const updated = { ...prev, [id]: (prev[id] || 0) + 1 };
      updateReduxCombos(updated);
      return updated;
    });
  };

  const handleDecrease = (id: string) => {
    setComboQuantities((prev) => {
      const updated = { ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) };
      updateReduxCombos(updated);
      return updated;
    });
  };

  const totalPrice = Object.entries(comboQuantities).reduce((sum, [id, qty]) => {
    const combo = initialCombos.find((c) => c.id === id);
    return sum + (combo ? combo.price * qty : 0);
  }, 0);

  const handleNext = () => {
    router.push(`/Booking/${BookingSlug}/Payment`);
  };

  return (
    <div className="col-span-2 xl:order-first order-last xl:h-full h-full overflow-hidden xl:overflow-auto xl:pb-10 pb-32">
      <div className="bg-white p-4 md:h-full h-[80vh] overflow-auto">
        <h3 className="text-l mb-4 font-semibold">Chọn combo sản phẩm</h3>
        <ul className="m-0 p-0 list-none">
          {initialCombos.map((combo) => (
            <li key={combo.id} className="flex mb-5 overflow-auto">
              <Image
                src={combo.image}
                alt={combo.name}
                width={150}
                height={100}
                className="inline-block rounded-md w-[150px] h-full object-cover"
              />
              <div className="ml-4 flex-1">
                <h4 className="text-base font-semibold mb-1">{combo.name}</h4>
                <div className="text-[.75rem]">{combo.description}</div>
                <div className="flex justify-between mt-2 text-sm">
                  <div>
                    <strong className="font-bold">Giá: </strong>
                    <span className="inline-block font-bold">
                      {combo.price.toLocaleString("vi-VN")}đ
                    </span>
                  </div>
                  <div className="shadow-sm bg-white rounded flex items-center justify-between px-3 py-1 w-[100px]">
                    <button
                      className="text-xl font-semibold text-gray-600"
                      onClick={() => handleDecrease(combo.id)}
                    >
                      −
                    </button>
                    <span className="mx-2 text-sm font-medium">
                      {comboQuantities[combo.id] || 0}
                    </span>
                    <button
                      className="text-xl font-semibold text-gray-600"
                      onClick={() => handleIncrease(combo.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Tổng tiền combo */}
        <p className="text-right text-base font-semibold mt-4">
          Tổng combo: <span className="text-orange-600">{totalPrice.toLocaleString("vi-VN")} đ</span>
        </p>

        {/* Nút tiếp tục */}
        <div className="text-right mt-4">
          <button
            onClick={handleNext}
            className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-500"
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
}
