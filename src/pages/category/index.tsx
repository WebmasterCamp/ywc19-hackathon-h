import { CardRestaurant } from "@ywc19/components/CardRestaurant";
import { CardMenu } from "@ywc19/components/CardMenu";

export default function Home() {
  const mock = [1, 2, 3, 4];
  const mockMenu = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center  pb-[84px]">
        <div className="container">
          <p className="mb-10 text-h3 font-bold">8 Results for “Vegan”</p>
          <p className="mb-10 ml-2 text-h3 font-bold">
            4 results from Restaurants{" "}
          </p>
          <div className="grid grid-cols-2 gap-6">
            {mock.map((item) => (
              <CardRestaurant key={item} />
            ))}
          </div>
          <p className="my-10 ml-2 text-h3 font-bold">4 results from Menu </p>
          <div className="grid grid-cols-4 gap-6">
            {mockMenu.map((item) => (
              <CardMenu key={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
