import React from "react";
import { LazyImage } from "./LazyImage";

export const CardRestaurant = () => {
  return (
    <div
      className={`group relative flex h-80 w-full gap-x-4 overflow-hidden rounded-xl  bg-white shadow`}
    >
      <LazyImage
        className="h-full w-[308px] transition-all duration-300 group-hover:scale-105"
        src={
          "https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      />
      <div className="flex flex-col gap-y-4 py-4 pr-2">
        <div className="text-subtitle1 font-medium">SDGs point 9.0</div>
        <div className="text-h5">Hubuntu Restaurant</div>
        <p className="max-w-[296px] text-body1">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          Egestas elit dui Egestas elit dui scelerisque ut eu purus
        </p>
        <div className="text-subtitle1 font-medium">1.1 km</div>
        <div className="mt-auto flex gap-x-4">
          <div className="w-full rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <button className="button">Gluten-Free</button>
          </div>
          <div className="w-full rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <button className="button">Vegan</button>
          </div>
        </div>
      </div>
    </div>
  );
};
