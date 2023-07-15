import {
    createTRPCRouter,
    publicProcedure,
} from "@ywc19/server/api/trpc";
// import { UserFindManySchema, UserFindUniqueSchema } from "prisma/generated/schemas";

export const restaurantRouter = createTRPCRouter({
    // findMany: publicProcedure.input(UserFindManySchema).query(({ input, ctx }) => {
    //     return ctx.prisma.user.findMany(input)
    // }),
    // findUnique: publicProcedure.input(UserFindUniqueSchema).query(({ input, ctx }) => {
    //     return ctx.prisma.user.findUnique(input)
    // }),
});
