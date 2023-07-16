import React, { type FC } from "react";
import { LazyImage } from "./LazyImage";
import { getBadgeUrl } from "@ywc19/utils/badge";

interface ICardRestaurantProps {
    name: string;
    badges?: string[];
}

export const CardRestaurant: FC<ICardRestaurantProps> = (props) => {
    const { name, badges = [] } = props
    return (
        <div
            className={`group relative my-1 flex h-80 w-full gap-x-4 overflow-hidden rounded-xl bg-white shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]`}
        >
            <LazyImage
                className="h-full w-[308px] transition-all duration-300 group-hover:scale-105"
                src={
                    "https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                }
            />
            <div className="flex flex-col gap-y-10 py-8 pr-2 justify-between">
                <div>
                    {
                        badges.map((v, i) => <LazyImage width={48} height={48} key={i} src={getBadgeUrl(v)} />)
                    }
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="text-h5 font-bold">{name}</div>
                    <p className="line-clamp-3 max-w-[296px] text-body1">
                        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                        Egestas elit dui Egestas elit dui scelerisque ut eu purus
                    </p>
                    <div className="text-sm font-medium">1.1 km</div>
                </div>
            </div>
        </div>
    );
};
