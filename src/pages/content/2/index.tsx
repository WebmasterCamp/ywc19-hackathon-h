import { LazyImage } from "@ywc19/components/LazyImage";
import { type INavbarProps, Navbar } from "@ywc19/components/Navbar";
import { Footer } from "@ywc19/components/Footer";

export default function Home() {
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
        <div className="flex h-[656px] w-full flex-col bg-[url('/assets/food.png')]  bg-cover bg-center bg-no-repeat px-[80px] pt-[368px]">
          <p className="mt-auto text-h1 font-bold text-white">
            BO.LAN : Thai restaurant serves premium dishes from the farm to the
            table
          </p>
        </div>
        <div className="container mt-10 flex flex-col items-center justify-center gap-12 px-4 pb-16 ">
          <div className="flex flex-col gap-y-10 font-bold">
            <p>
              located in Bangkok, BO.LAN has been operating for more than 10
              years with the concept of running a business for society.
              <br />
              Duangporn Songvisava (Bo) and Dylan Jones are the founders of
              Bo.Lan. Both chefs have a passion for the charm of Thai cuisine
              and therefore established Bo.Lan restaurant that deliver food,
              happiness, sustainability to all diners
            </p>
            <p>
              located in Bangkok, BO.LAN has been operating for more than 10
              years with the concept of running a business for society.
              <br />
              Duangporn Songvisava (Bo) and Dylan Jones are the founders of
              Bo.Lan. Both chefs have a passion for the charm of Thai cuisine
              and therefore established Bo.Lan restaurant that deliver food,
              happiness, sustainability to all diners
            </p>
            <LazyImage
              src="/assets/content1.png"
              width={800}
              height={600}
              className="mx-auto"
            />
            <p>
              Bo.Lan selects ingredients and seasonings from within Thailand
              only. That&rsquo;s why Bolan focuses on the idea of ​​sustainable
              organic farming. In addition, the menu will change according to
              the season and produce in Thailand.
            </p>
            <p className="mx-auto mt-10 text-center text-h3 font-bold">
              from Forest & Field
            </p>
            <p>
              located in Bangkok, BO.LAN has been operating for more than 10
              years with the concept of running a business for society.
              <br />
              Duangporn Songvisava (Bo) and Dylan Jones are the founders of
              Bo.Lan. Both chefs have a passion for the charm of Thai cuisine
              and therefore established Bo.Lan restaurant that deliver food,
              happiness, sustainability to all diners
            </p>
            <p>
              located in Bangkok, BO.LAN has been operating for more than 10
              years with the concept of running a business for society.
              <br />
              Duangporn Songvisava (Bo) and Dylan Jones are the founders of
              Bo.Lan. Both chefs have a passion for the charm of Thai cuisine
              and therefore established Bo.Lan restaurant that deliver food,
              happiness, sustainability to all diners
            </p>
            <LazyImage
              src="/assets/food2.png"
              width={800}
              height={600}
              className="mx-auto"
            />
          </div>
          <p className="mx-auto mt-10 text-center text-h3 font-bold">
            from Heart & Soul
          </p>
          <p>
            Seasonings are comparable to food culture, fish sauce, tears, and
            shrimp paste. These items are all valuable and have a past. Bo.Lan
            chooses salt in the Chachoengsao Province&apos;s Bangpakong
            District. Bolan also chooses coconut sugar from Samut Songkhram
            province&apos;s Bang Khonthi District. Thai sweet and savory meals
            often contain coconut sugar, which is a significant condiment. and
            is uncommon today.
          </p>

          <LazyImage
            src="/assets/food3.png"
            width={800}
            height={600}
            className="mx-auto"
          />

          <p className="mx-auto mt-10 text-center text-h3 font-bold">
            To Environment
          </p>
          <p>
            Bo.Lan recognizes and appreciates the importance of the environment.
            Because the food business affects the environment. This has led
            Bo.Lan to focus on activities that emit carbon dioxide and carbon
            emissions to the planet, such as eliminating plastic bottles in
            favor of water purification systems and glass bottles. and also uses
            a circulating water system to achieve the most efficient use of
            water.
          </p>
          <p className="mx-auto mt-10 text-center text-h3 font-bold">
            The Menu
          </p>
          <p>
            Bo.Lan serves a course meal. which includes lunch, dinner and
            beverages. Each course includes a Thai-style drink. savory and sweet
            The menu may change depending on the season of ingredients.
          </p>
          <LazyImage
            src="/assets/food.png"
            width={800}
            height={600}
            className="mx-auto"
          />
        </div>
        <Footer data={menu} />
      </main>
    </>
  );
}
