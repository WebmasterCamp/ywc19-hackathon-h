import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import CartItem from "./CartItem";

export const Sidebar = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const route = useRouter();
  return (
    <>
      {open && (
        <div className="fixed left-0 right-0 top-0 z-[50]  flex h-screen max-h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-[#000]/80 p-4 md:inset-0" />
      )}
      <div
        id="drawer-navigation"
        className={twMerge(
          "fixed right-0 top-0 z-[60] h-screen w-[465px] overflow-y-auto bg-white  transition-all   duration-300",
          !open && "-right-[1000px]"
        )}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex h-full flex-col overflow-y-auto py-4">
          <p className="px-6 text-h6 font-bold">Your Basket</p>
          <div className="my-6 h-[0.5px] w-full bg-[#919EAB]/30 " />
          <div className="px-6">
            <CartItem
              name="Chicken Salad"
              price="50"
              total={1}
              img="https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
          <div className="mt-auto border-t-[0.5px] border-[#DEDEDE]" />
          <div className="px-6">
            <div className="mb-3 flex items-center justify-between  pt-3">
              <p className="text-subtitle1 font-bold">Total</p>
              <p className="font-semibold">฿50</p>
            </div>
            <div className="flex items-center gap-x-2">
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={handleClose}
                className="flex w-full items-center justify-center rounded-lg border border-primary-main px-5 py-2.5 text-center text-sm font-medium text-primary-main"
              >
                Continue Shopping
              </button>

              <button
                data-modal-hide="popup-modal"
                type="button"
                className="flex w-full items-center justify-center rounded-lg bg-primary-main px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary-light"
                onClick={() =>
                  route.push("https://buy.stripe.com/test_fZe3f2gSYcSL9moaEE")
                }
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
