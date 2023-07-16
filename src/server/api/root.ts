import { createTRPCRouter } from "@ywc19/server/api/trpc";
import { restaurantRouter } from "./routers/restaurant";
import { userRouter } from "./routers/user";
import { bookingRoute } from "./routers/booking";
import { menuRouter } from "./routers/menu";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    restaurant: restaurantRouter,
    user: userRouter,
    booking: bookingRoute,
    menu: menuRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
