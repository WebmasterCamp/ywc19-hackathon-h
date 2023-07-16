import { CardRestaurant } from "@ywc19/components/CardRestaurant";
import { CardMenu } from "@ywc19/components/CardMenu";
import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { api } from "@ywc19/utils/api";
import React from "react";

export default function Home() {
    const mock = [1, 2, 3, 4];
    const mockMenu = [1, 2, 3, 4, 5, 6, 7, 8];
    const [openTag, setOpentag] = useState(false);
    const [selectTag, setSelectTag] = useState<string>();
    const [openCategory, setOpenCategory] = useState(false);
    const [selectCategory, setSelectCategory] = useState<string>();
    const handleClickAway = () => setOpentag(false);
    const handleCategoryAway = () => setOpenCategory(false);

    const searchRef = React.useRef<HTMLInputElement>(null);

    const [search, setSearch] = useState("");
    const [debounce, setDebounce] = useState("");

    const { data: restaurants, refetch } = api.restaurant.findMany.useQuery({
        where: {
            name: search || undefined,
            tags: selectTag ? [selectTag] : undefined,
        },
    })

    const { data: menus, refetch: refetchMenu } = api.menu.findMany.useQuery({
        where: {
            name: search || undefined,
        }
    })

    useEffect(() => {
        const timer = setTimeout(() => setSearch(debounce ?? ""), 500);

        return () => {
            clearTimeout(timer);
        };
    }, [debounce]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center  pb-[84px]">
                <div className="container pt-[69px]">
                    <div className="my-10 flex items-center gap-x-6 rounded-xl bg-white px-10 py-[30px] shadow-md w-full">
                        <form onSubmit={onSubmit} className="w-full">
                            <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Search
                            </label>
                            <div className="relative w-full">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17.31 15.9L20.71 19.29C20.8993 19.4778 21.0058 19.7334 21.0058 20C21.0058 20.2666 20.8993 20.5222 20.71 20.71C20.5222 20.8993 20.2666 21.0058 20 21.0058C19.7334 21.0058 19.4778 20.8993 19.29 20.71L15.9 17.31C14.5025 18.407 12.7767 19.0022 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19.0022 12.7767 18.407 14.5025 17.31 15.9ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z"
                                            fill="#020342"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    onChange={(e) => setDebounce(e.target.value)}
                                    id="default-search"
                                    className="block h-[40px] w-full rounded-full  border border-[#C6C6C6]/30 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <p className="mb-10 text-h3 font-bold">8 Results for “Vegan”</p>
                    <p className="mb-10 ml-2 text-h3 font-bold">
                        4 results from Restaurants{" "}
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        {restaurants && restaurants.items.map((item, i) => (
                            <CardRestaurant key={i} name={item.name} badges={item.tags.map(v => v.name)} />
                        ))}
                    </div>
                    <p className="my-10 ml-2 text-h3 font-bold">4 results from Menu </p>
                    <div className="grid grid-cols-4 gap-6">
                        {menus && menus.items.map((item, i) => (
                            <CardMenu key={i} name={item.name} description={item.description} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
