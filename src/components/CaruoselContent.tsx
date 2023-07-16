import React, { type FC, type ReactNode, useCallback, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Keyboard, Pagination } from "swiper/modules";
import Link from "next/link";

export const CaruoselContent = () => {
  return (
    <div className="relative w-full">
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={24}
        slidesPerView={1}
        modules={[Mousewheel, Keyboard, Pagination]}
      >
        <SwiperSlide>
          <Link
            href="/content/1"
            className="flex h-[656px] w-full flex-col bg-[url('/assets/food.png')]  bg-cover bg-center bg-no-repeat px-[80px] pt-[368px]"
          >
            <p className="mt-auto text-h1 font-bold text-white">
              BO.LAN : Thai restaurant serves premium dishes from the farm to
              the table
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href="/content/2"
            className="flex h-[656px] w-full flex-col bg-[url('/assets/bg-2.png')]  bg-cover bg-center bg-no-repeat px-[80px] pt-[368px]"
          >
            <p className="mt-auto text-h1 font-bold text-white">
              Food waste, more than food that is wasted
            </p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
