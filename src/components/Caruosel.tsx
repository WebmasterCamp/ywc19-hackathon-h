import React, { type FC, type ReactNode, useCallback, useRef } from "react";
// Import Swiper React components
import { Swiper, type SwiperRef } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Mousewheel, Keyboard } from "swiper/modules";

export const Caruosel: FC<{ children: ReactNode; sliderPerPage: number }> = ({
  children,
  sliderPerPage,
}) => {
  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        loop
        ref={sliderRef}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={24}
        slidesPerView={sliderPerPage}
        modules={[Mousewheel, Keyboard]}
      >
        {children}
      </Swiper>
      <div
        onClick={handlePrev}
        className="absolute -left-6 top-1/2 z-[100] flex h-6 w-6 cursor-pointer items-center justify-center rounded-full "
      >
        <svg
          width="24"
          height="25"
          className="h-5 w-5"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.71918 12.7719C7.57873 12.6312 7.49984 12.4406 7.49984 12.2419C7.49984 12.0431 7.57873 11.8525 7.71918 11.7119L15.2192 4.21185C15.3614 4.07937 15.5494 4.00725 15.7437 4.01068C15.938 4.0141 16.1234 4.09282 16.2608 4.23023C16.3982 4.36764 16.4769 4.55303 16.4804 4.74733C16.4838 4.94163 16.4117 5.12968 16.2792 5.27185L9.30918 12.2419L16.2792 19.2119C16.4117 19.354 16.4838 19.5421 16.4804 19.7364C16.4769 19.9307 16.3982 20.1161 16.2608 20.2535C16.1234 20.3909 15.938 20.4696 15.7437 20.473C15.5494 20.4765 15.3614 20.4043 15.2192 20.2719L7.71918 12.7719Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        onClick={handleNext}
        className="absolute -right-6 top-1/2 z-[100] flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-[#637381]/50 bg-[#637381]/50 "
      >
        <svg
          width="24"
          height="24"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2808 11.4701C16.4213 11.6107 16.5002 11.8013 16.5002 12.0001C16.5002 12.1988 16.4213 12.3895 16.2808 12.5301L8.78082 20.0301C8.63865 20.1626 8.4506 20.2347 8.2563 20.2313C8.062 20.2278 7.87661 20.1491 7.7392 20.0117C7.60179 19.8743 7.52308 19.6889 7.51965 19.4946C7.51622 19.3003 7.58834 19.1123 7.72082 18.9701L14.6908 12.0001L7.72082 5.03009C7.58834 4.88792 7.51622 4.69987 7.51965 4.50557C7.52308 4.31127 7.60179 4.12588 7.7392 3.98847C7.87661 3.85106 8.062 3.77234 8.2563 3.76892C8.4506 3.76549 8.63865 3.83761 8.78082 3.97009L16.2808 11.4701Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
