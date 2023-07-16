import { CardRestaurant } from "@ywc19/components/CardRestaurant";
import { Caruosel } from "@ywc19/components/Caruosel";
import { SwiperSlide } from "swiper/react";
import Head from "next/head";
import { CardMenu } from "@ywc19/components/CardMenu";
import { LazyImage } from "@ywc19/components/LazyImage";
import { type INavbarProps, Navbar } from "@ywc19/components/Navbar";
import { Footer } from "@ywc19/components/Footer";
import useTabs, { Tab } from "@ywc19/components/Tab";

export default function Home() {
  const mock = [1, 2, 3, 4, 5, 6, 7, 8];

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
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <Navbar data={menu} />
        <div className="h-[656px] w-full bg-[url('/assets/vegano.jpg')]  bg-cover bg-center bg-no-repeat px-[140px] pt-[368px]" />
        <div className="container  flex flex-col items-center justify-center gap-12 px-4 pb-16 ">
          <div className="mt-10 w-full">
            <p className="text-h2 font-bold">VEGANO - Italian Vegan Eatery</p>
            <p className="mb-[38px] text-h4 font-semibold">
              Vegan food made yummy and healthy!
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-6  ">
            <div className="flex items-center gap-x-8 rounded-xl bg-white p-8 py-6 shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
              <div>
                <p className="font-bold">Address</p>
                <p className="text-caption font-medium">
                  111/2 Soi Charoensuk (Thong Lo, 10 Soi Ekkamai 5, Klongton
                  Nua, Watthana, Bangkok
                </p>
              </div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="min-h-[40px] min-w-[40px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#F5F5F5" />
                <path
                  d="M17.0938 21.4543L13.2371 20.1687C11.1436 19.4709 11.1436 16.5098 13.2371 15.812L25.3073 11.7886C27.1024 11.1902 28.8102 12.898 28.2119 14.6931L24.1884 26.7633C23.4906 28.8568 20.5295 28.8568 19.8317 26.7633L18.5461 22.9066C18.3175 22.2209 17.7795 21.6829 17.0938 21.4543Z"
                  fill="#09814A"
                />
              </svg>
            </div>
            <div className="flex items-center gap-x-8 rounded-xl bg-white p-8 py-6 shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
              <div>
                <p className="font-bold">Contact</p>
                <p className="text-caption font-medium">
                  Mobile : 062 449 2261
                  <br /> Facebook : Vegano
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-8 rounded-xl bg-white p-8 py-6 shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
              <div>
                <p className="font-bold text-primary-light">OPEN NOW</p>
                <p className="text-caption font-medium">
                  MON - FRI (08:30 - 16:00), <br />
                  SAT - SUN (09:00 - 19:00)
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-6  text-h3 font-bold">Hot plate for you</p>
            <div className="grid grid-cols-4 gap-6">
              {mock.map((item) => (
                <CardMenu key={item} />
              ))}
            </div>
          </div>
        </div>
        <Footer data={menu} />
      </main>
    </>
  );
}
