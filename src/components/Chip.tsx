import Link from "next/link";
import React, { type FC } from "react";

export const Chip: FC<{ text: string; to: string }> = ({ text, to }) => {
  return (
    <Link
      href={to}
      className="flex items-start justify-start rounded-3xl border border-gray-400 border-opacity-30 p-1 px-2"
    >
      <div className=" text-center text-xs font-normal capitalize leading-none text-gray-800">
        {text}
      </div>
    </Link>
  );
};
