import { CardRestaurant } from "@ywc19/components/CardRestaurant";
import { Caruosel } from "@ywc19/components/Caruosel";
import { SwiperSlide } from "swiper/react";
import Head from "next/head";
import { LazyImage } from "@ywc19/components/LazyImage";
import { Footer } from "@ywc19/components/Footer";
import { api } from "@ywc19/utils/api";
import ModalConfirm from "@ywc19/components/ModalConfirm";
import Link from "next/link";
import { CaruoselContent } from "@ywc19/components/CaruoselContent";

export default function Home() {
  const mock = [1, 2, 3, 4, 5, 6, 7, 8];
  const {
    data: restaurant,
    fetchNextPage,
    isLoading,
  } = api.restaurant.findMany.useInfiniteQuery(
    {
      limit: 2,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  const category = [
    {
      id: 0,
      img: "/assets/appetizers.png",
      name: "Appetizers",
    },
    {
      id: 1,
      img: "/assets/dishes.png",
      name: "Dishes",
    },
    {
      id: 2,
      img: "/assets/desserts.png",
      name: "Desserts",
    },
    {
      id: 3,
      img: "/assets/drinks.png",
      name: "Drinks",
    },
  ];

  const menu: INavbarProps["data"] = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
    {
      name: "Service",
      href: "#",
    },
  ];
  return (
    <>
      <Head>
        <title>SustainDish</title>
        <meta name="title" content="SustainDish" />
        <meta
          name="description"
          content="A one-stop platform for sustainable restaurants lets you be part of helping people, the environment, and local economics."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={"/"} />
        <meta property="og:title" content="SustainDish" />
        <meta
          property="og:description"
          content="A one-stop platform for sustainable restaurants lets you be part of helping people, the environment, and local economics."
        />
        <meta property="og:image" content={"/assets/thumbnail.png"} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={"/"} />
        <meta property="twitter:title" content="SustainDish" />
        <meta
          property="twitter:description"
          content="A one-stop platform for sustainable restaurants lets you be part of helping people, the environment, and local economics."
        />
        <meta property="twitter:image" content={"/assets/thumbnail.png"} />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className="h-[656px] w-full bg-[url('/assets/bg.png')]  bg-cover bg-center bg-no-repeat px-[140px] pt-[288px]">
          <p className="text-h1 font-bold text-primary-main">
            <span className="text-h2"> Getting the Food,</span>
            <br />
            Saving the Earth
          </p>

          <form>
            <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Search
            </label>
            <div className="relative max-w-[372px]">
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
                id="default-search"
                className="mt-9 block w-full rounded-full  border border-[#C6C6C6]/30 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="What do you want to eat?"
                required
              />
            </div>
          </form>
        </div>
        <div className="container -mt-[50px] flex flex-col items-center justify-center gap-12 px-4 pb-16 ">
          <div className="flex gap-x-6 pb-[56px] ">
            {category.map((item) => (
              <button
                key={item.id}
                className="flex items-center gap-x-8 rounded-xl bg-white p-8 py-6 shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]"
              >
                <LazyImage src={item.img} className="h-12 w-12" />
                <p className="w-[158px] truncate text-start text-h4 font-semibold">
                  {item.name}
                </p>
              </button>
            ))}
          </div>
          <div className="w-full">
            <div className="mb-8 flex items-center gap-x-[46px]">
              <p className="flex-1 text-h3 font-semibold">
                Recommended Restaurants
              </p>
              <button className="rounded-full bg-primary-main px-[66px] py-3 text-xl font-semibold text-general-main hover:bg-primary-dark">
                See all
              </button>
            </div>
            {
              <Caruosel sliderPerPage={2}>
                {mock.map((item) => (
                  <SwiperSlide key={item}>
                    <CardRestaurant name={"mock"} />
                  </SwiperSlide>
                ))}
              </Caruosel>
            }
          </div>
          <div className="w-full">
            <div className="mb-8 flex items-center gap-x-[46px]">
              <p className="flex-1 text-h3 font-semibold">
                Restaurant Nearby me
              </p>
              <button className="rounded-full bg-primary-main  px-[66px] py-3 text-xl font-semibold text-general-main hover:bg-primary-dark">
                See all
              </button>
            </div>
            <Caruosel sliderPerPage={2}>
              {mock.map((item) => (
                <SwiperSlide key={item}>
                  <CardRestaurant name={"mock 2"} />
                </SwiperSlide>
              ))}
            </Caruosel>
          </div>
          <div className="w-full">
            <div className="mb-8 flex items-center gap-x-[46px]">
              <p className="flex-1 text-h3 font-semibold">Recommended Menu</p>
              <button className="rounded-full bg-primary-main  px-[66px] py-3 text-xl font-semibold text-general-main hover:bg-primary-dark">
                See all
              </button>
            </div>
            <Caruosel
              sliderPerPage={2}
              onNext={async () => void (await fetchNextPage())}
            >
              {restaurant &&
                restaurant.pages.map((page, i) => (
                  <div key={i}>
                    {page.items.map((item, j) => (
                      <SwiperSlide key={j}>
                        <CardRestaurant
                          name={item.name}
                          badges={item.tags.map((v) => v.name)}
                        />
                      </SwiperSlide>
                    ))}
                  </div>
                ))}
            </Caruosel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white"></p>
          </div>
        </div>
        <ModalConfirm />
        <CaruoselContent />
      </main>
    </>
  );
}
