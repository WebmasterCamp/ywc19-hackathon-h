import { CardRestaurant } from "@ywc19/components/CardRestaurant";
import { Caruosel } from "@ywc19/components/Caruosel";
import { SwiperSlide } from "swiper/react";
import Head from "next/head";
import { CardMenu } from "@ywc19/components/CardMenu";

export default function Home() {
  const mock = [1, 2, 3, 4];
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="w-full">
            <Caruosel sliderPerPage={2}>
              {mock.map((item) => (
                <SwiperSlide key={item}>
                  <CardRestaurant />
                </SwiperSlide>
              ))}
            </Caruosel>
          </div>
          <div className="w-full">
            <Caruosel sliderPerPage={4}>
              {mock.map((item) => (
                <SwiperSlide key={item}>
                  <CardMenu />
                </SwiperSlide>
              ))}
            </Caruosel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white"></p>
          </div>
        </div>
      </main>
    </>
  );
}
