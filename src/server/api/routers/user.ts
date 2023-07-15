import {
    createTRPCRouter,
    publicProcedure,
} from "@ywc19/server/api/trpc";

export const userRouter = createTRPCRouter({
    // findMany: publicProcedure.input(RestaurantFindManySchema).query(({ input, ctx }) => {
    //     return ctx.prisma.restaurant.findMany(input)
    // }),
    // findUnique: publicProcedure.input(RestaurantFindUniqueSchema).query(({ input, ctx }) => {
    //     return ctx.prisma.restaurant.findUnique(input)
    // }),
    // create: publicProcedure.input(RestaurantCreateOneSchema).mutation(({ input, ctx }) => {
    //     return ctx.prisma.restaurant.create(input)
    // }),
    // update: publicProcedure.input(RestaurantUpdateOneSchema).mutation(({ input, ctx }) => {
    //     return ctx.prisma.restaurant.update(input)
    // })
});
