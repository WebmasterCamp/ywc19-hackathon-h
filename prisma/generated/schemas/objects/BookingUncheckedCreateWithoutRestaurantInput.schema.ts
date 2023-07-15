import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUncheckedCreateWithoutRestaurantInput> = z
  .object({
    userId: z.string(),
    id: z.string().optional(),
  })
  .strict();

export const BookingUncheckedCreateWithoutRestaurantInputObjectSchema = Schema;
