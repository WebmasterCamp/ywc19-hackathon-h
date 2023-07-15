import React from "react";
import { Chip } from "./Chip";
import { LazyImage } from "./LazyImage";

export const CardMenu = () => {
  return (
    <div className="my-1 flex w-72 flex-col items-center justify-start  overflow-hidden  rounded-xl bg-white shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
      <LazyImage
        src={
          "https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      />
      <div className="flex flex-col items-start justify-start gap-4  px-4 pb-4 pt-6">
        <div className="flex gap-x-4">
          <Chip text="ONLINE CLASS" to="/category/online-class" />
          <Chip text="CERTIFICATE" to="/category/certificate" />
        </div>
        <div className="text-xl font-bold leading-snug text-zinc-800">
          Corporate Finance
        </div>
        <div className="line-clamp-2  text-base font-normal leading-snug text-zinc-800">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </div>
        <div className="inline-flex items-center justify-start gap-4  pt-4">
          <div className="relative h-6 w-6 rounded-full bg-gray-500" />
          <p className="text-subtitle1 font-medium"> Google</p>
        </div>
      </div>
    </div>
  );
};
