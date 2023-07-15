import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingMaxAggregateInputType> = z
  .object({
    userId: z.literal(true).optional(),
    restaurantId: z.literal(true).optional(),
    id: z.literal(true).optional(),
  })
  .strict();

export const BookingMaxAggregateInputObjectSchema = Schema;
