import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@ywc19/utils/api";
import "@ywc19/styles/globals.css";
import { Sidebar } from "@ywc19/components/Sidebar";
import MotionLazyContainer from "@ywc19/components/animate/MotionLazyContainer";
import { useState } from "react";
import { Footer } from "@ywc19/components/Footer";
import { INavbarProps, Navbar } from "@ywc19/components/Navbar";
import { usePathname } from "next/navigation";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const menu: INavbarProps["data"] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about-us",
    },
  ];

    return (
        <SessionProvider session={session}>
            <MotionLazyContainer>
                <Navbar data={menu} />
                {!["about-us", "content"].includes(pathname?.split("/")?.[1] ?? "") && (
                    <div
                        className="fixed right-[40px] top-[100px] z-[2] flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-[#F96E46]"
                        onClick={handleOpen}
                    >
                        <div className="absolute -right-1 -top-1 inline-flex h-6 w-6 items-center justify-center rounded-full  bg-[#C01A0E] text-xs font-bold text-white dark:border-gray-900">
                            20
                        </div>
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.3436 10.7143C11.4435 10.7143 10.7139 11.4651 10.7139 12.3913C10.7139 13.3175 11.4435 14.0684 12.3436 14.0684H15.2434C15.4806 14.0684 15.7119 14.1452 15.9044 14.288C16.0969 14.4307 16.2408 14.6322 16.3159 14.8638L21.6891 31.4543C21.9277 32.1909 21.958 32.984 21.775 33.7372L21.3326 35.5616C20.6834 38.2338 22.7047 40.9006 25.3814 40.9006H44.9381C45.8382 40.9006 46.5679 40.1497 46.5679 39.2236C46.5679 38.2974 45.8382 37.5465 44.9381 37.5465H25.3814C24.7468 37.5465 24.3394 37.0107 24.4933 36.3772L24.827 35.0059C24.8835 34.7736 25.0139 34.5673 25.1974 34.4199C25.3809 34.2726 25.607 34.1925 25.8398 34.1925H43.3084C44.0101 34.1929 44.6333 33.7311 44.8554 33.0461L49.2003 19.63C49.5522 18.5437 48.7661 17.4219 47.6533 17.4224H21.3962C21.1589 17.4224 20.9277 17.3456 20.7352 17.2028C20.5427 17.06 20.3987 16.8585 20.3237 16.6269L18.7797 11.8607C18.5577 11.1758 17.9345 10.7139 17.2328 10.7143H12.3436ZM23.7517 42.5776C21.9515 42.5776 20.4922 44.0792 20.4922 45.9316C20.4922 47.784 21.9515 49.2856 23.7517 49.2856C25.5518 49.2856 27.0111 47.784 27.0111 45.9316C27.0111 44.0792 25.5518 42.5776 23.7517 42.5776ZM43.3084 42.5776C41.5083 42.5776 40.049 44.0792 40.049 45.9316C40.049 47.784 41.5083 49.2856 43.3084 49.2856C45.1086 49.2856 46.5679 47.784 46.5679 45.9316C46.5679 44.0792 45.1086 42.5776 43.3084 42.5776Z"
                                fill="#FFFCF9"
                            />
                        </svg>
                    </div>
                )}
                <Component {...pageProps} />
                <Footer data={menu} />
                <Sidebar open={open} handleClose={handleClose} />
            </MotionLazyContainer>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
