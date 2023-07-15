import z from 'zod'
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@ywc19/server/api/trpc";
import { BookingCreateInputObjectSchema, BookingCreateOneSchema, BookingFindManySchema, BookingFindUniqueSchema } from "prisma/generated/schemas";

const BookingCreateSchema = z.object({
    data: BookingCreateInputObjectSchema
})

export const bookingRoute = createTRPCRouter({
    findMany: publicProcedure.input(BookingFindManySchema).query(({ input, ctx }) => {
        return ctx.prisma.booking.findMany(input)
    }),
    findUnique: publicProcedure.input(BookingFindUniqueSchema).query(({ input, ctx }) => {
        return ctx.prisma.booking.findUnique(input)
    }),
    create: protectedProcedure.input(BookingCreateSchema).mutation(({ input, ctx }) => {
        return ctx.prisma.booking.create(input)
    })
});
