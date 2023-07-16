import {
    createTRPCRouter,
    publicProcedure,
} from "@ywc19/server/api/trpc";
import { z } from "zod";

const MenuFindManySchema = z.object({
    where: z.object({
        name: z.string().optional(),
        isRecommended: z.boolean().optional(),
        restaurantId: z.string().optional(),
    }).optional(),
    limit: z.number().min(1).max(100).nullish(),
    cursor: z.string().nullish(),
})

const MenuFindUniqueSchema = z.object({
    where: z.object({
        id: z.string()
    })
})

export const menuRouter = createTRPCRouter({
    findMany: publicProcedure.input(MenuFindManySchema).query(async ({ input, ctx }) => {
        const limit = input.limit ?? 50;
        const items = await ctx.prisma.menu.findMany({
            where: input.where?.name ? {
                name: input.where?.name ? {
                    contains: input.where.name
                } : undefined,
                isRecommended: input.where?.isRecommended ? input.where.isRecommended : undefined,
                restaurantId: input.where?.restaurantId ? input.where.restaurantId : undefined,
            } : undefined,
            cursor: input.cursor ? { id: input.cursor } : undefined,
            take: limit + 1,
            orderBy: { id: 'asc' },
        })

        let nextCursor: typeof input.cursor | undefined = undefined;
        if (items.length > limit) {
            const nextItem = items.pop();
            nextCursor = nextItem?.id;
        }
        return {
            items,
            nextCursor,
        };
    }),

    findUnique: publicProcedure.input(MenuFindUniqueSchema).query(({ input, ctx }) => {
        return ctx.prisma.restaurant.findUnique({
            where: {
                id: input.where.id
            },
        })
    }),
});
