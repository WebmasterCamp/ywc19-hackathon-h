import { CardRestaurant } from "@ywc19/components/CardRestaurant";
import { CardMenu } from "@ywc19/components/CardMenu";

export default function Home() {
  const mock = [1, 2, 3, 4];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center  pb-[84px]">
        <div className="container py-[80px] pt-8">
          <p className="mb-6 text-h3 font-bold text-primary-dark">
            Recommended Restaurants
          </p>
          <div className="grid grid-cols-2 gap-6">
            {mock.map((item) => (
              <CardRestaurant key={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
