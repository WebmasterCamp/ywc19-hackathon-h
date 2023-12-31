import React, { useState } from "react";
import { LazyImage } from "./LazyImage";
import { twMerge } from "tailwind-merge";

export default function CartItem({
  name,
  price,
  img,
  total,
  onDelete,
}: {
  name: string;
  price: string;
  img: string;
  total: number;
  onDelete?: () => void;
}) {
  const [totalItem, setTotalItem] = useState<number>(total);
  return (
    <div
      className={twMerge(
        "flex gap-x-4 rounded-md p-3 shadow-md",
        (total === 0 || totalItem === 0) && "hidden"
      )}
    >
      <div className="h-fit overflow-hidden rounded-lg">
        <LazyImage src={img} ratio="1/1" width={120} height={120} />
      </div>

      <div>
        <p className="text-h5 font-bold">{name}</p>
        <p className="text-h6 font-bold">{price}</p>
        <div className="mt-6  flex w-fit items-center gap-x-3 rounded-lg bg-[#F5F5F5] p-1">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => {
              setTotalItem(0);
              onDelete?.();
            }}
          >
            <path
              d="M15.75 4.5H12V3.2475C11.9824 2.76736 11.7752 2.31379 11.4237 1.98622C11.0722 1.65864 10.6052 1.48379 10.125 1.5H7.875C7.39482 1.48379 6.9278 1.65864 6.57632 1.98622C6.22485 2.31379 6.01759 2.76736 6 3.2475V4.5H2.25C2.05109 4.5 1.86032 4.57901 1.71967 4.71967C1.57902 4.86032 1.5 5.05108 1.5 5.25C1.5 5.44891 1.57902 5.63967 1.71967 5.78033C1.86032 5.92098 2.05109 6 2.25 6H3V14.25C3 14.8467 3.23705 15.419 3.65901 15.841C4.08097 16.2629 4.65326 16.5 5.25 16.5H12.75C13.3467 16.5 13.919 16.2629 14.341 15.841C14.7629 15.419 15 14.8467 15 14.25V6H15.75C15.9489 6 16.1397 5.92098 16.2803 5.78033C16.421 5.63967 16.5 5.44891 16.5 5.25C16.5 5.05108 16.421 4.86032 16.2803 4.71967C16.1397 4.57901 15.9489 4.5 15.75 4.5ZM7.5 3.2475C7.5 3.1275 7.6575 3 7.875 3H10.125C10.3425 3 10.5 3.1275 10.5 3.2475V4.5H7.5V3.2475ZM13.5 14.25C13.5 14.4489 13.421 14.6397 13.2803 14.7803C13.1397 14.921 12.9489 15 12.75 15H5.25C5.05109 15 4.86032 14.921 4.71967 14.7803C4.57902 14.6397 4.5 14.4489 4.5 14.25V6H13.5V14.25Z"
              fill="#5F5F5F"
            />
            <path
              d="M6.75 12.75C6.94891 12.75 7.13968 12.671 7.28033 12.5303C7.42098 12.3897 7.5 12.1989 7.5 12V9C7.5 8.80108 7.42098 8.61032 7.28033 8.46967C7.13968 8.32901 6.94891 8.25 6.75 8.25C6.55109 8.25 6.36032 8.32901 6.21967 8.46967C6.07902 8.61032 6 8.80108 6 9V12C6 12.1989 6.07902 12.3897 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75Z"
              fill="#5F5F5F"
            />
            <path
              d="M11.25 12.75C11.4489 12.75 11.6397 12.671 11.7803 12.5303C11.921 12.3897 12 12.1989 12 12V9C12 8.80108 11.921 8.61032 11.7803 8.46967C11.6397 8.32901 11.4489 8.25 11.25 8.25C11.0511 8.25 10.8603 8.32901 10.7197 8.46967C10.579 8.61032 10.5 8.80108 10.5 9V12C10.5 12.1989 10.579 12.3897 10.7197 12.5303C10.8603 12.671 11.0511 12.75 11.25 12.75Z"
              fill="#5F5F5F"
            />
          </svg>
          <p>{totalItem}</p>
          <svg
            className="cursor-pointer"
            onClick={() => setTotalItem(totalItem + 1)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V18M18 12L6 12"
              stroke="#5F5F5F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
