import React, { useEffect, useState } from "react";
import { LazyImage } from "./LazyImage";
import { useSearchParams, useRouter } from "next/navigation";

export default function ModalConfirm() {
  const [open, setOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const route = useRouter();
  const search = searchParams.get("status");
  useEffect(() => {
    if (search?.includes("success")) {
      setOpen(true);
    }
  }, [search]);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);
  return (
    open && (
      <div
        id="popup-modal"
        className="fixed left-0 right-0 top-0 z-[99]  flex h-screen max-h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-[#000]/80 p-4 md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-md ">
          <div className="relative  w-[380px] rounded-lg bg-white shadow">
            <button
              type="button"
              className="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={() => {
                setOpen(false);
                route.push("/");
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8709 15.9922L23.5968 10.2792C24.1189 9.75703 24.1189 8.9104 23.5968 8.38822C23.0746 7.86604 22.228 7.86604 21.7059 8.38822L15.9934 14.1145L10.2808 8.38822C9.75869 7.86604 8.91212 7.86604 8.38998 8.38822C7.86783 8.9104 7.86783 9.75703 8.38998 10.2792L14.1158 15.9922L8.38998 21.7051C8.13789 21.9551 7.99609 22.2955 7.99609 22.6506C7.99609 23.0057 8.13789 23.346 8.38998 23.5961C8.64 23.8482 8.98035 23.99 9.33541 23.99C9.69046 23.99 10.0308 23.8482 10.2808 23.5961L15.9934 17.8698L21.7059 23.5961C21.9559 23.8482 22.2963 23.99 22.6513 23.99C23.0064 23.99 23.3467 23.8482 23.5968 23.5961C23.8488 23.346 23.9906 23.0057 23.9906 22.6506C23.9906 22.2955 23.8488 21.9551 23.5968 21.7051L17.8709 15.9922Z"
                  fill="#637381"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="flex flex-col items-center justify-center p-6 text-center ">
              <LazyImage src="/assets/price.gif" width={174} height={174} />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Sustainability is served. Keep going champ.
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="flex items-center rounded-lg bg-primary-main px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary-light"
                onClick={() => {
                  setOpen(false);
                  route.push("/");
                }}
              >
                Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
