import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCreateManyRestaurantInput> = z
  .object({
    userId: z.string(),
    id: z.string().optional(),
  })
  .strict();

export const BookingCreateManyRestaurantInputObjectSchema = Schema;
