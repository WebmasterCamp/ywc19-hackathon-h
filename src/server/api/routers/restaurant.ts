import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@ywc19/server/api/trpc";
import { RestaurantCreateOneSchema, RestaurantFindManySchema, RestaurantFindUniqueSchema } from "prisma/generated/schemas";

export const restaurantRouter = createTRPCRouter({
    findMany: publicProcedure.input(RestaurantFindManySchema).query(({ input, ctx }) => {
        return ctx.prisma.restaurant.findMany(input)
    }),
    findUnique: publicProcedure.input(RestaurantFindUniqueSchema).query(({ input, ctx }) => {
        return ctx.prisma.restaurant.findUnique(input)
    }),
    create: publicProcedure.input(RestaurantCreateOneSchema).mutation(({ input, ctx }) => {
        return ctx.prisma.restaurant.create(input)
    }),
});
