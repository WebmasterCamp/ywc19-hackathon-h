import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingMinAggregateInputType> = z
  .object({
    userId: z.literal(true).optional(),
    restaurantId: z.literal(true).optional(),
    id: z.literal(true).optional(),
  })
  .strict();

export const BookingMinAggregateInputObjectSchema = Schema;
