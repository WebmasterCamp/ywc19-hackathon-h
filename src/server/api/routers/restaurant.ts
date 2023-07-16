import {
    createTRPCRouter,
    publicProcedure,
} from "@ywc19/server/api/trpc";
import { z } from "zod";

const UserFindManySchema = z.object({
    where: z.object({
        name: z.string().optional(),
        isRecommended: z.boolean().optional(),
    }).optional(),
    limit: z.number().min(1).max(100).nullish(),
    cursor: z.string().nullish(),
})

const UserFindUniqueSchema = z.object({
    where: z.object({
        id: z.string()
    })
})

export const restaurantRouter = createTRPCRouter({
    findMany: publicProcedure.input(UserFindManySchema).query(async ({ input, ctx }) => {
        const limit = input.limit ?? 50;
        const items = await ctx.prisma.restaurant.findMany({
            where: input.where?.name ? {
                name: input.where?.name ? {
                    contains: input.where.name
                } : undefined,
                isRecommended: input.where?.isRecommended ? input.where.isRecommended : undefined,
            } : undefined,
            cursor: input.cursor ? { id: input.cursor } : undefined,
            take: limit + 1,
            orderBy: { id: 'asc' },
            include: {
                tags: true
            }
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

    findUnique: publicProcedure.input(UserFindUniqueSchema).query(({ input, ctx }) => {
        return ctx.prisma.user.findUnique(input)
    }),
});
