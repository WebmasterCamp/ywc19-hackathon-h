import { LayoutGroup, motion } from "framer-motion";
import { type FC, useState } from "react";

import { twMerge } from "tailwind-merge";

export const Tab: FC<{
  tabs: string[];
  selectedTab: string;
  onChangeTab: (newTab: string) => void;
  className?: string;
  id: string;
}> = ({ id, tabs, onChangeTab, selectedTab, className }) => {
  return (
    <LayoutGroup id={id}>
      <ul className={twMerge("flex h-fit items-end gap-6 text-sm", className)}>
        {tabs.map((item) => (
          <li
            key={item}
            className={twMerge(
              "text-light-grey-600  dark:text-light-grey-600 h-fit cursor-pointer",
              item === selectedTab &&
                "text-shadow-bold  pb-0 font-semibold text-primary-main",
              item !== selectedTab && "pb-[10px]"
            )}
            onClick={() => onChangeTab(item)}
          >
            {item}
            {item === selectedTab ? (
              <motion.div
                className=" border-b-4 border-primary-main pt-[6px]"
                layoutId="underline"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </LayoutGroup>
  );
};

export default function useTabs(defaultValues?: string) {
  const [currentTab, setCurrentTab] = useState(defaultValues || "");
  return {
    currentTab,
    onChangeTab: (newValue: string) => {
      setCurrentTab(newValue);
    },
    setCurrentTab,
  };
}
