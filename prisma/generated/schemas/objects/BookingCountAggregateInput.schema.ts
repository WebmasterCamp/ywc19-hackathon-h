import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCountAggregateInputType> = z
  .object({
    userId: z.literal(true).optional(),
    restaurantId: z.literal(true).optional(),
    id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const BookingCountAggregateInputObjectSchema = Schema;
