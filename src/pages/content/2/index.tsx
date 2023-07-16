import { LazyImage } from "@ywc19/components/LazyImage";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className="flex h-[656px] w-full flex-col bg-[url('/assets/bg-2.png')]  bg-cover bg-center bg-no-repeat px-[80px] pt-[368px]">
          <p className="mt-auto text-h1 font-bold text-white">
            Food waste, more than food that is wasted
          </p>
        </div>
        <div className="container mt-10 flex flex-col items-center justify-center gap-12 px-4 pb-16 ">
          <div className="flex flex-col gap-y-10 font-bold">
            <p>
              Nowadays, food waste is an issue globally that everyone has to
              encounter, no matter how developed the country is. On average,
              about 30–40% of food, or one billion tonnes, is wasted in the food
              supply chain, while more than 800 million people are still
              struggling for food and have to deal with hunger. On top of that,
              the Food and Agriculture Organisation of the United Nations (FAO)
              estimates that billions of people are also facing food insecurity.
            </p>

            <LazyImage
              src="/assets/img1.png"
              width={800}
              height={600}
              className="mx-auto"
            />
            <p>
              Restaurants are one of the main industries that create food waste.
              It is not only created from left-over food from customers but also
              from uncooked and expired food. 
            </p>
            <p>
              When food waste is created, it is not only the food that is wasted
              but also all the energy and resources from transportation. The
              fuel, space in transportation, and packaging are all included in
              the shipment fees, where they end up getting wasted. More than
              that, food that ends up in landfills also creates methane, which
              contributes to greenhouse gases and can lead to various health
              issues in humans and animals.
            </p>
            <LazyImage
              src="/assets/img2.png"
              width={800}
              height={600}
              className="mx-auto"
            />
            <p>
              There are various ways to be involved in reducing food waste, such
              as having a food plan before going grocery shopping, being aware
              of the amount you can eat before ordering food, and supporting
              zero-waste restaurants. Zero-waste restaurants are the ones that
              can prevent more than 90% of their waste from going directly to
              the trash. By having sustainable methods within the company and
              ways to recycle those wastes, less pollution will be created.
              Let’s be part of this community to save our one and only Earth
              together.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
