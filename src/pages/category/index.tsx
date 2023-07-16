import { CardRestaurant } from "@ywc19/components/CardRestaurant";
import { CardMenu } from "@ywc19/components/CardMenu";

export default function Home() {
  const mock = [1, 2, 3, 4];
  const mockMenu = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center  pb-[84px]">
        <div className="container pt-[69px]">
          <div className="my-10 flex items-center gap-x-6 rounded-xl bg-white px-10 py-[30px] shadow-md">
            <form>
              <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Search
              </label>
              <div className="relative ">
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
                  value="Vegan"
                  className="block h-[40px] w-[682px] rounded-full  border border-[#C6C6C6]/30 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>
            </form>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="flex h-10 w-fit items-center justify-center gap-x-2 rounded-full border border-[#212B36] px-5 py-2.5 text-center text-sm font-medium text-[#212B36]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 5.83333C2.5 6.29167 2.875 6.66667 3.33333 6.66667H16.6667C17.125 6.66667 17.5 6.29167 17.5 5.83333C17.5 5.375 17.125 5 16.6667 5H3.33333C2.875 5 2.5 5.375 2.5 5.83333ZM9.16667 15H10.8333C11.2917 15 11.6667 14.625 11.6667 14.1667C11.6667 13.7083 11.2917 13.3333 10.8333 13.3333H9.16667C8.70833 13.3333 8.33333 13.7083 8.33333 14.1667C8.33333 14.625 8.70833 15 9.16667 15ZM14.1667 10.8333H5.83333C5.375 10.8333 5 10.4583 5 10C5 9.54167 5.375 9.16667 5.83333 9.16667H14.1667C14.625 9.16667 15 9.54167 15 10C15 10.4583 14.625 10.8333 14.1667 10.8333Z"
                  fill="#212B36"
                />
              </svg>
              Nearby
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="flex h-10 w-fit items-center justify-center gap-x-2 rounded-full border border-[#212B36] px-5 py-2.5 text-center text-sm font-medium text-[#212B36]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 5.83333C2.5 6.29167 2.875 6.66667 3.33333 6.66667H16.6667C17.125 6.66667 17.5 6.29167 17.5 5.83333C17.5 5.375 17.125 5 16.6667 5H3.33333C2.875 5 2.5 5.375 2.5 5.83333ZM9.16667 15H10.8333C11.2917 15 11.6667 14.625 11.6667 14.1667C11.6667 13.7083 11.2917 13.3333 10.8333 13.3333H9.16667C8.70833 13.3333 8.33333 13.7083 8.33333 14.1667C8.33333 14.625 8.70833 15 9.16667 15ZM14.1667 10.8333H5.83333C5.375 10.8333 5 10.4583 5 10C5 9.54167 5.375 9.16667 5.83333 9.16667H14.1667C14.625 9.16667 15 9.54167 15 10C15 10.4583 14.625 10.8333 14.1667 10.8333Z"
                  fill="#212B36"
                />
              </svg>
              Price
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="flex h-10 w-fit items-center justify-center gap-x-2 rounded-full border border-[#212B36] px-5 py-2.5 text-center text-sm font-medium text-[#212B36]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 5.83333C2.5 6.29167 2.875 6.66667 3.33333 6.66667H16.6667C17.125 6.66667 17.5 6.29167 17.5 5.83333C17.5 5.375 17.125 5 16.6667 5H3.33333C2.875 5 2.5 5.375 2.5 5.83333ZM9.16667 15H10.8333C11.2917 15 11.6667 14.625 11.6667 14.1667C11.6667 13.7083 11.2917 13.3333 10.8333 13.3333H9.16667C8.70833 13.3333 8.33333 13.7083 8.33333 14.1667C8.33333 14.625 8.70833 15 9.16667 15ZM14.1667 10.8333H5.83333C5.375 10.8333 5 10.4583 5 10C5 9.54167 5.375 9.16667 5.83333 9.16667H14.1667C14.625 9.16667 15 9.54167 15 10C15 10.4583 14.625 10.8333 14.1667 10.8333Z"
                  fill="#212B36"
                />
              </svg>
              Tag
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="flex h-10 w-fit items-center justify-center gap-x-2 rounded-full border border-[#212B36] px-5 py-2.5 text-center text-sm font-medium text-[#212B36]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 5.83333C2.5 6.29167 2.875 6.66667 3.33333 6.66667H16.6667C17.125 6.66667 17.5 6.29167 17.5 5.83333C17.5 5.375 17.125 5 16.6667 5H3.33333C2.875 5 2.5 5.375 2.5 5.83333ZM9.16667 15H10.8333C11.2917 15 11.6667 14.625 11.6667 14.1667C11.6667 13.7083 11.2917 13.3333 10.8333 13.3333H9.16667C8.70833 13.3333 8.33333 13.7083 8.33333 14.1667C8.33333 14.625 8.70833 15 9.16667 15ZM14.1667 10.8333H5.83333C5.375 10.8333 5 10.4583 5 10C5 9.54167 5.375 9.16667 5.83333 9.16667H14.1667C14.625 9.16667 15 9.54167 15 10C15 10.4583 14.625 10.8333 14.1667 10.8333Z"
                  fill="#212B36"
                />
              </svg>
              Category
            </button>
          </div>
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
