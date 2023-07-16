import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, type FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface INavbarProps {
  data: { name: string; href: string }[];
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { data } = props;
  const router = useRouter();
  const [path, setPath] = useState<string>("/");
  const user = useSession();

  const isActive = useCallback(
    (href: string): boolean => {
      const res = path.includes(href);
      return res;
    },
    [path]
  );

  useEffect(() => {
    setPath(router.asPath);
  }, [router.asPath]);

  return (
    <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="/assets/icon.png" className="mr-3 h-8" alt="sustain dish" />
          <img src="/assets/word.png" height={20} alt="sustain dish" />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => {
              if (user.status == "unauthenticated") {
                void signIn("google");
                return;
              } else {
                void signOut();
              }
            }}
            className="mr-3 rounded-lg bg-green-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0"
          >
            {user.status === "unauthenticated" ? "Log in" : "Log out"}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0">
            {data.map(({ name, href }, i) => (
              <li key={i}>
                <a
                  href={href}
                  className={twMerge(
                    "block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700",
                    isActive(href) &&
                      "rounded bg-blue-700 text-white md:bg-transparent md:text-blue-700"
                  )}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
